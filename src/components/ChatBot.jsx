import { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* ─── Session helper ─── */
function getChatSessionId() {
  let id = sessionStorage.getItem("chatSessionId");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("chatSessionId", id);
  }
  return id;
}

const API_BASE = "https://mlm-backend-k1x3.onrender.com/api/chat";


/* ─── Typing dots component ─── */
function TypingIndicator() {
  return (
    <div className="cb-typing">
      <span className="cb-typing-dot" style={{ animationDelay: "0s" }} />
      <span className="cb-typing-dot" style={{ animationDelay: "0.15s" }} />
      <span className="cb-typing-dot" style={{ animationDelay: "0.3s" }} />
    </div>
  );
}

/* ─── Chat message bubble ─── */
function MessageBubble({ msg, isLast }) {
  const isUser = msg.messageType === "USER";
  return (
    <div className={`cb-msg-row ${isUser ? "cb-msg-user" : "cb-msg-bot"}`}>
      {!isUser && (
        <div className="cb-avatar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
            <path d="M9 14h6" />
            <rect x="5" y="12" width="14" height="8" rx="3" />
            <path d="M7 20v2" />
            <path d="M17 20v2" />
          </svg>
        </div>
      )}
      <div className={`cb-bubble ${isUser ? "cb-bubble-user" : "cb-bubble-bot"}`}>
        {isUser ? (
          <span>{msg.text}</span>
        ) : (
          <div className="cb-md-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {msg.text}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ███  ChatBot Component  ███
   ═══════════════════════════════════════════ */
export default function ChatBot() {
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* Auto-scroll to bottom */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  /* Focus input when opening */
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  /* Load chat history on first open */
  useEffect(() => {
    if (open && !historyLoaded) {
      setHistoryLoaded(true);
      const sessionId = getChatSessionId();
      fetch(`${API_BASE}/history/${sessionId}`, {
        headers: { accept: "*/*" },
      })
        .then((res) => {
          if (!res.ok) return [];
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setMessages(data);
          }
        })
        .catch(() => {
          /* Silently ignore – new conversation */
        });
    }
  }, [open, historyLoaded]);

  /* ─── Send message ─── */
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const sessionId = getChatSessionId();
    const userMsg = { messageType: "USER", text };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: text,
          conversationId: sessionId,
        }),
      });

      const data = await res.json();
      const botMsg = {
        messageType: "ASSISTANT",
        text: data.answer || "Xin lỗi, tôi không thể trả lời ngay bây giờ.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          messageType: "ASSISTANT",
          text: "⚠️ Có lỗi kết nối. Vui lòng thử lại sau.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* ─── Dismissed → render nothing ─── */
  if (dismissed) return null;

  return (
    <>
      {/* ─── Chat window ─── */}
      <div className={`cb-window ${open ? "cb-window-open" : "cb-window-closed"}`}>
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-left">
            <div className="cb-header-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                <path d="M9 14h6" />
                <rect x="5" y="12" width="14" height="8" rx="3" />
                <path d="M7 20v2" />
                <path d="M17 20v2" />
              </svg>
            </div>
            <div>
              <div className="cb-header-title">MLN Chatbot</div>
              <div className="cb-header-status">
                <span className="cb-status-dot" />
                Trực tuyến
              </div>
            </div>
          </div>
          <div className="cb-header-actions">
            {/* Minimize */}
            <button
              className="cb-header-btn"
              onClick={() => setOpen(false)}
              title="Thu nhỏ"
              aria-label="Thu nhỏ chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {/* Dismiss */}
            <button
              className="cb-header-btn cb-header-btn-close"
              onClick={() => setDismissed(true)}
              title="Đóng chat"
              aria-label="Đóng chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="cb-messages">
          {messages.length === 0 && !loading && (
            <div className="cb-welcome">
              <div className="cb-welcome-icon">🤖</div>
              <h4>Xin chào!</h4>
              <p>
                Tôi là trợ lý AI hỗ trợ môn học MLN122. Bạn có thể hỏi tôi bất kỳ
                câu hỏi nào về nội dung bài học.
              </p>
            </div>
          )}
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} isLast={i === messages.length - 1} />
          ))}
          {loading && (
            <div className="cb-msg-row cb-msg-bot">
              <div className="cb-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                  <path d="M9 14h6" />
                  <rect x="5" y="12" width="14" height="8" rx="3" />
                  <path d="M7 20v2" />
                  <path d="M17 20v2" />
                </svg>
              </div>
              <div className="cb-bubble cb-bubble-bot">
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="cb-input-area">
          <div className="cb-input-wrapper">
            <input
              ref={inputRef}
              className="cb-input"
              type="text"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className={`cb-send-btn ${input.trim() && !loading ? "cb-send-active" : ""}`}
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              aria-label="Gửi tin nhắn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Floating action button (FAB) ─── */}
      <button
        className={`cb-fab ${open ? "cb-fab-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Mở chatbot"
        id="chatbot-fab"
      >
        <span className="cb-fab-pulse" />
        <svg className="cb-fab-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </>
  );
}
