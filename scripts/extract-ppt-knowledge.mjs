import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const inputDir =
  "C:/Users/Admin/Downloads/drive-download-20260531T011831Z-3-001";
const outputFile = "D:/MLN121/MLN122-2/src/components/chatKnowledge.js";

const files = (await readdir(inputDir))
  .filter((file) => /^Tiet \d+\.ppt$/i.test(file))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

function extractUtf16(buffer, offset) {
  const strings = [];
  let current = [];

  for (let index = offset; index < buffer.length - 1; index += 2) {
    const code = buffer[index] | (buffer[index + 1] << 8);
    const isText =
      code === 9 ||
      code === 10 ||
      code === 13 ||
      (code >= 32 && code <= 126) ||
      (code >= 160 && code <= 0x1ef9) ||
      (code >= 0x2010 && code <= 0x203f);

    if (isText) {
      current.push(String.fromCharCode(code));
      continue;
    }

    if (current.length >= 6) strings.push(current.join(""));
    current = [];
  }

  if (current.length >= 6) strings.push(current.join(""));
  return strings;
}

function extractAscii(buffer) {
  return buffer.toString("latin1").match(/[\x20-\x7e]{8,}/g) || [];
}

function cleanText(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/[\u0001-\u001f]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[\u200b-\u200f]/g, "")
    .trim();
}

function contentScore(text) {
  const letters = (text.match(/[A-Za-zÀ-ỹ]/g) || []).length;
  const allowed = (
    text.match(/[A-Za-zÀ-ỹ0-9\s.,;:!?()\-–—+%/“”"'[\]]/g) || []
  ).length;

  return {
    letters,
    ratio: allowed / Math.max(1, text.length),
  };
}

function isUsefulText(text) {
  if (text.length < 18 || text.length > 1200) return false;
  if (
    /^(Times New Roman|Arial|Calibri|Wingdings|Office Theme|Picture|Rectangle|Rounded Rectangle|Text Box|Slide Number|Header Placeholder|Footer Placeholder|Content Placeholder|Date Placeholder|Notes Placeholder|Slide Image Placeholder)/i.test(
      text,
    )
  ) {
    return false;
  }
  if (
    /(style\.visibility|#ppt_|Placeholder|\.wmf|\.png|\.jpg|http:\/\/|https:\/\/)/i.test(
      text,
    )
  ) {
    return false;
  }
  if (/^[\d\W_]+$/.test(text)) return false;

  const { letters, ratio } = contentScore(text);
  return letters >= 8 && ratio >= 0.72;
}

function splitLongText(text, maxLength = 900) {
  const sentences = text.split(/(?<=[.!?。])\s+|(?<=\))\s+(?=[A-ZÀ-Ỹ])/g);
  const chunks = [];
  let current = "";

  for (const sentence of sentences) {
    if (`${current} ${sentence}`.trim().length > maxLength && current) {
      chunks.push(current.trim());
      current = "";
    }
    current = `${current} ${sentence}`.trim();
  }

  if (current) chunks.push(current.trim());
  return chunks;
}

const chunks = [];

for (const file of files) {
  const buffer = await readFile(path.join(inputDir, file));
  const strings = [
    ...extractUtf16(buffer, 0),
    ...extractUtf16(buffer, 1),
    ...extractAscii(buffer),
  ]
    .map(cleanText)
    .filter(isUsefulText);

  const seen = new Set();
  const uniqueStrings = [];
  for (const text of strings) {
    const key = text.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueStrings.push(text);
  }

  let chunk = "";
  let part = 1;
  for (const text of uniqueStrings) {
    for (const piece of splitLongText(text)) {
      if (`${chunk}\n${piece}`.trim().length > 1100 && chunk) {
        chunks.push({ source: file, part: part++, text: chunk.trim() });
        chunk = "";
      }
      chunk = `${chunk}\n${piece}`.trim();
    }
  }

  if (chunk) chunks.push({ source: file, part: part++, text: chunk.trim() });
}

const helper = String.raw`// Generated from the PowerPoint files provided by the user.
// Keep this file client-side only; ChatBot selects relevant chunks before calling the chat API.

const KNOWLEDGE_JSON_BASE64 = "__CHUNKS_BASE64__";

export const CHAT_KNOWLEDGE_CHUNKS = JSON.parse(
  new TextDecoder().decode(
    Uint8Array.from(atob(KNOWLEDGE_JSON_BASE64), (char) => char.charCodeAt(0)),
  ),
);

const STOP_WORDS = new Set([
  "cua", "cho", "cac", "mot", "nhung", "trong", "voi", "khi", "thi", "la", "va", "de", "ve", "the", "nay", "hay", "hoi", "noi", "dung", "sinh", "vien"
]);

function normalizeVietnamese(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function tokenize(text) {
  return normalizeVietnamese(text)
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function scoreChunk(questionTokens, chunk) {
  const normalized = normalizeVietnamese(chunk.text);
  const source = normalizeVietnamese(chunk.source);
  const question = questionTokens.join(" ");
  let score = 0;
  for (const token of questionTokens) {
    if (normalized.includes(token)) score += token.length > 5 ? 3 : 1;
  }
  if (/giai cap|dan toc|dau tranh|mac|lenin|chu nghia duy vat lich su/.test(normalized)) score += 2;
  if (/3\.2|giai cap va dan toc|giai cap va dau tranh giai cap/.test(normalized)) score += 8;
  if (/giai|cap|dau|tranh/.test(question) && source === "tiet 36.ppt") score += 14;
  if (/dan|toc/.test(question) && source === "tiet 38.ppt") score += 14;
  if (/chu|nghia|duy|vat|lich|su|hinh|thai|kinh|te|xa|hoi/.test(question) && /^tiet 3[1-8]\.ppt$/.test(source)) score += 4;
  return score;
}

export function buildKnowledgePrompt(question) {
  const questionText = String(question || "").trim();
  const questionTokens = tokenize(questionText);
  const ranked = CHAT_KNOWLEDGE_CHUNKS
    .map((chunk) => ({ ...chunk, score: scoreChunk(questionTokens, chunk) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const selected = ranked.length ? ranked : CHAT_KNOWLEDGE_CHUNKS.slice(0, 5);
  const context = selected
    .map((chunk, index) => "[Nguồn " + (index + 1) + ": " + chunk.source + ", phần " + chunk.part + "]\n" + chunk.text)
    .join("\n\n---\n\n");

  return "Bạn là AI Chatbot hỗ trợ giải đáp kiến thức về \"Triết học Mác-Lênin, dùng cho sinh viên đại học hệ không chuyên lý luận chính trị\". Không tự giới thiệu chatbot thuộc chủ đề Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam. Chỉ trả lời dựa trên nội dung slide PowerPoint được cung cấp trong phần NGỮ CẢNH. Trả lời thẳng vào câu hỏi, không mở đầu bằng các câu như \"Dựa trên nội dung slide\", \"Theo tài liệu được cung cấp\", \"Trong các slide PowerPoint\" hoặc các câu dẫn tương tự. Nếu sinh viên chào hỏi hoặc hỏi chatbot là ai, hãy trả lời: Chào bạn, tôi là AI Chatbot hỗ trợ giải đáp kiến thức về \"Triết học Mác-Lênin, dùng cho sinh viên đại học hệ không chuyên lý luận chính trị\". Rất vui được hỗ trợ bạn. Bạn có câu hỏi cụ thể nào về nội dung bài học không? Nếu câu hỏi nằm ngoài nội dung slide hoặc không đủ dữ kiện, hãy nói ngắn gọn rằng nội dung này chưa có trong tài liệu được cung cấp và gợi ý sinh viên hỏi lại trong phạm vi bài học. Trả lời bằng tiếng Việt, dễ hiểu, có thể gạch đầu dòng khi cần.\n\nNGỮ CẢNH TỪ SLIDE:\n" + context + "\n\nCÂU HỎI CỦA SINH VIÊN:\n" + questionText;
}

export function stripKnowledgePrompt(text) {
  const value = String(text || "");
  const marker = "CÂU HỎI CỦA SINH VIÊN:";
  const index = value.lastIndexOf(marker);
  return index >= 0 ? value.slice(index + marker.length).trim() : value;
}
`;

await writeFile(
  outputFile,
  helper.replace(
    "__CHUNKS_BASE64__",
    Buffer.from(JSON.stringify(chunks), "utf8").toString("base64"),
  ),
  "utf8",
);

const { size } = await stat(outputFile);
console.log(JSON.stringify({ files: files.length, chunks: chunks.length, bytes: size }, null, 2));
