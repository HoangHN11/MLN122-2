const LEADERBOARD_KEY = "mario_princess_leaderboard_v2";
const MAX_ROWS = 50;

function sendJson(res, status, data) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(status).json(data);
}

async function redis(command) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error("Missing Redis REST environment variables.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  const payload = await response.json();

  if (!response.ok || payload.error) {
    throw new Error(payload.error || "Redis request failed.");
  }

  return payload.result;
}

function normalizeRows(rows) {
  if (!Array.isArray(rows)) return [];

  return rows
    .filter(row => row && typeof row.name === "string" && Number.isFinite(row.time))
    .map(row => ({
      name: row.name.trim().slice(0, 24) || "Người chơi",
      time: Math.max(0, Math.round(row.time)),
      finishedAt: typeof row.finishedAt === "string" ? row.finishedAt : new Date().toISOString()
    }))
    .sort((a, b) => a.time - b.time)
    .slice(0, MAX_ROWS);
}

async function readRows() {
  const saved = await redis(["ZRANGE", LEADERBOARD_KEY, "0", String(MAX_ROWS - 1), "WITHSCORES"]);
  const rows = [];

  for (let index = 0; Array.isArray(saved) && index < saved.length; index += 2) {
    try {
      const row = JSON.parse(saved[index]);
      rows.push({
        name: row.name,
        time: Number(saved[index + 1]),
        finishedAt: row.finishedAt
      });
    } catch {
      // Ignore malformed leaderboard entries.
    }
  }

  return normalizeRows(rows);
}

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      sendJson(res, 200, { rows: await readRows() });
      return;
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const row = {
        name: String(body.name || "Người chơi").trim().slice(0, 24) || "Người chơi",
        time: Number(body.time),
        finishedAt: new Date().toISOString()
      };

      if (!Number.isFinite(row.time) || row.time < 0) {
        sendJson(res, 400, { error: "Invalid finish time." });
        return;
      }

      const member = JSON.stringify({
        name: row.name,
        finishedAt: row.finishedAt,
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
      });
      await redis(["ZADD", LEADERBOARD_KEY, String(row.time), member]);
      await redis(["ZREMRANGEBYRANK", LEADERBOARD_KEY, String(MAX_ROWS), "-1"]);
      sendJson(res, 200, { rows: await readRows() });
      return;
    }

    if (req.method === "DELETE") {
      const adminCode = req.headers["x-admin-code"];
      const expectedCode = process.env.ADMIN_RESET_CODE || "admin";

      if (adminCode !== expectedCode) {
        sendJson(res, 403, { error: "Wrong admin code." });
        return;
      }

      await redis(["DEL", LEADERBOARD_KEY]);
      sendJson(res, 200, { rows: [] });
      return;
    }

    res.setHeader("Allow", "GET, POST, DELETE");
    sendJson(res, 405, { error: "Method not allowed." });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Leaderboard API failed." });
  }
};
