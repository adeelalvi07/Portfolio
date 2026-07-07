"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, Sparkles, Loader2 } from "lucide-react";

const GREETING = {
  role: "assistant",
  content:
    "Hi, I'm M Adeel's Personal AI Assistant \ud83d\udc4b Ask me anything about Adeel — his projects, skills, experience, or how to get in touch.",
};

export default function AIAssistantButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I ran into a problem answering that. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mb-4 flex h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl shadow-glow-violet"
            role="dialog"
            aria-label="M Adeel's Personal AI Assistant"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet">
                <Sparkles size={14} className="text-white" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  M Adeel&apos;s Personal AI Assistant
                </p>
                <p className="text-[11px] text-white/40">
                  Ask me about Adeel&apos;s work
                </p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-5 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-accent-blue to-accent-violet text-white"
                        : "bg-white/[0.06] text-white/80"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-4 py-2.5 text-sm text-white/50">
                    <Loader2 size={14} className="animate-spin" />
                    Thinking…
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Adeel's projects, skills..."
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent-blue/50"
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-white disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-glow"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </motion.button>
    </div>
  );
}
