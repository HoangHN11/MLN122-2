import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const LEADERBOARD_FILE = resolve('.leaderboard.local.json')
const MAX_ROWS = 50

function readLeaderboardRows() {
  try {
    return normalizeRows(JSON.parse(readFileSync(LEADERBOARD_FILE, 'utf8')))
  } catch {
    return []
  }
}

function writeLeaderboardRows(rows) {
  writeFileSync(LEADERBOARD_FILE, JSON.stringify(normalizeRows(rows), null, 2))
}

function normalizeRows(rows) {
  if (!Array.isArray(rows)) return []

  return rows
    .filter((row) => row && typeof row.name === 'string' && Number.isFinite(row.time))
    .map((row) => ({
      name: row.name.trim().slice(0, 24) || 'Người chơi',
      time: Math.max(0, Math.round(row.time)),
      finishedAt: typeof row.finishedAt === 'string' ? row.finishedAt : new Date().toISOString(),
    }))
    .sort((a, b) => a.time - b.time)
    .slice(0, MAX_ROWS)
}

function readRequestJson(req) {
  return new Promise((resolveJson, rejectJson) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      try {
        resolveJson(body ? JSON.parse(body) : {})
      } catch (error) {
        rejectJson(error)
      }
    })
    req.on('error', rejectJson)
  })
}

function sendJson(res, status, data) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(data))
}

function localLeaderboardApi() {
  return {
    name: 'local-leaderboard-api',
    configureServer(server) {
      server.middlewares.use('/api/leaderboard', async (req, res) => {
        try {
          if (req.method === 'GET') {
            sendJson(res, 200, { rows: readLeaderboardRows() })
            return
          }

          if (req.method === 'POST') {
            const body = await readRequestJson(req)
            const row = {
              name: String(body.name || 'Người chơi').trim().slice(0, 24) || 'Người chơi',
              time: Number(body.time),
              finishedAt: new Date().toISOString(),
            }

            if (!Number.isFinite(row.time) || row.time < 0) {
              sendJson(res, 400, { error: 'Invalid finish time.' })
              return
            }

            const rows = normalizeRows([...readLeaderboardRows(), row])
            writeLeaderboardRows(rows)
            sendJson(res, 200, { rows })
            return
          }

          if (req.method === 'DELETE') {
            const adminCode = req.headers['x-admin-code']
            const expectedCode = process.env.ADMIN_RESET_CODE || 'admin'

            if (adminCode !== expectedCode) {
              sendJson(res, 403, { error: 'Wrong admin code.' })
              return
            }

            writeLeaderboardRows([])
            sendJson(res, 200, { rows: [] })
            return
          }

          res.setHeader('Allow', 'GET, POST, DELETE')
          sendJson(res, 405, { error: 'Method not allowed.' })
        } catch (error) {
          sendJson(res, 500, { error: error.message || 'Leaderboard API failed.' })
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [localLeaderboardApi(), react()],
  server: {
    port: 5173,
    host: true,
  },
})
