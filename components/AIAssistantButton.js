"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, Sparkles, Loader2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const GREETING = {
  role: "assistant",
  content: "Hi! I'm Adeel's AI assistant. Ask me about his projects, skills, or how to contact him.",
};

export default function AIAssistantButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const chatRef = useRef(null);
  const { theme } = useTheme();

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  // Close on click outside the chat panel
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    // Small delay so the open-button click doesn't immediately close it
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
          content: "Sorry, I ran into a problem answering that. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={chatRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            /* Panel sits above button: its bottom aligns with button top (56px btn + 16px gap = 72px) */
            className={`absolute bottom-[72px] right-0 flex h-[500px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl shadow-glow-violet ${
              isDark
                ? "bg-[#0e0e18]/90 border border-white/10 backdrop-blur-2xl"
                : "bg-white/95 border border-black/8 backdrop-blur-2xl shadow-xl"
            }`}
            role="dialog"
            aria-label="M Adeel's Personal AI Assistant"
          >
            {/* Header */}
            <div className={`flex items-center gap-2 border-b px-5 py-4 ${isDark ? "border-white/10" : "border-black/8"}`}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet flex-shrink-0">
                <Sparkles size={14} className="text-white" />
              </span>
              <div>
                <p className={`font-display text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  M Adeel&apos;s Personal AI Assistant
                </p>
                <p className={`text-[11px] ${isDark ? "text-white/40" : "text-slate-400"}`}>
                  Ask me about Adeel&apos;s work
                </p>
              </div>
            </div>

            {/* Messages */}
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
                        : isDark
                        ? "bg-white/[0.06] text-white/80"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm ${isDark ? "bg-white/[0.06] text-white/50" : "bg-slate-100 text-slate-400"}`}>
                    <Loader2 size={14} className="animate-spin" />
                    Thinking…
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className={`flex items-center gap-2 border-t p-3 ${isDark ? "border-white/10" : "border-black/8"}`}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Adeel's projects, skills..."
                className={`flex-1 rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none transition-colors ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus:border-accent-blue/50"
                    : "border-black/10 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-accent-blue/60"
                }`}
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

      {/* Toggle button — same position always */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-glow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
