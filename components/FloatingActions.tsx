"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, X, Send, Sparkles, User, Loader2, Phone, PhoneCall, Mail
} from "lucide-react";
import { ChatMessage } from "@/lib/ai-provider";
import { companyData } from "@/data/company";

type ActivePanel = "none" | "call" | "chat";

export const FloatingActions: React.FC = () => {
  const [activePanel, setActivePanel] = useState<ActivePanel>("none");

  // ── Chat state ───────────────────────────────────────────────────
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! I am the IntekCT AI Assistant capability demo.\n\nAsk me anything about our full-stack web engineering, penetration testing, DevSecOps pipelines, or custom website builds!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activePanel === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activePanel]);

  const handleSend = async (customMessage?: string) => {
    const textToSend = customMessage || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!customMessage) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      if (res.ok && data.message) {
        setMessages((prev) => [...prev, data.message]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.fallbackMessage || "I encountered a minor issue. Please contact us directly at intekcttechnology@gmail.com!" },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having trouble connecting. Please try again in a moment!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "What services do you offer?",
    "How do we get started?",
    "How do you handle security?",
    "Book a discovery call",
  ];

  const toggle = (panel: ActivePanel) => {
    setActivePanel((prev) => (prev === panel ? "none" : panel));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">

      {/* ── FREE CALL BUTTON (always visible) ── */}
      <div className="relative">
        {/* Call Popover */}
        <AnimatePresence>
          {activePanel === "call" && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute bottom-16 right-0 mb-2 w-[280px] bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl z-[200]"
            >
              <h3 className="text-lg font-bold text-[#041327] mb-1">Let&apos;s Talk!</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Book a free 30-min call with our team. No commitment, just clarity.
              </p>
              <a
                href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#041327] hover:bg-[#061B36] text-white font-bold text-sm mb-3 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call {companyData.phone}</span>
              </a>
              <a
                href={`mailto:${companyData.contactEmail}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl bg-white hover:bg-slate-50 text-[#041327] font-semibold text-sm border border-slate-200 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Email Us Instead</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Free Call Toggle Button */}
        <button
          onClick={() => toggle("call")}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#041327] hover:bg-[#061B36] text-white font-bold text-xs shadow-xl border border-slate-700 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
          aria-label={activePanel === "call" ? "Close call options" : "Open call options"}
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            {activePanel === "call" ? (
              <X className="w-4 h-4 text-slate-300" />
            ) : (
              <>
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </>
            )}
          </div>
          <span>{activePanel === "call" ? "Close" : "Free Call"}</span>
        </button>
      </div>

      {/* ── AI CHAT BUTTON (always visible) ── */}
      <div className="relative">
        {/* Chat Window */}
        <AnimatePresence>
          {activePanel === "chat" && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute bottom-20 right-0 mb-2 w-[90vw] sm:w-[400px] h-[520px] rounded-3xl border border-[#00F2FE]/40 shadow-2xl flex flex-col overflow-hidden bg-[#0F172A] z-[200]"
            >
              {/* Header */}
              <div className="p-4 bg-[#050A18] border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-xl bg-[#0F172A] border border-[#00F2FE]/50 flex items-center justify-center text-[#00F2FE]">
                    <Bot className="w-5 h-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050A18]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      IntekCT AI Assistant <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Claude 3.5 Sonnet / Multi-LLM</span>
                  </div>
                </div>
                <button
                  onClick={() => setActivePanel("none")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                {messages.map((msg, idx) => {
                  const isAI = msg.role === "assistant";
                  return (
                    <div key={idx} className={`flex items-start gap-2.5 ${isAI ? "" : "flex-row-reverse"}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isAI ? "bg-[#050A18] text-[#00F2FE] border border-[#00F2FE]/30" : "bg-slate-700 text-white"}`}>
                        {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed whitespace-pre-wrap ${isAI ? "bg-[#050A18] text-slate-200 border border-slate-800" : "bg-[#00F2FE] text-slate-950 font-medium"}`}>
                        {msg.content}
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] pl-9">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#00F2FE]" />
                    <span>Analyzing query...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="px-4 py-2 bg-[#050A18]/50 border-t border-slate-800/60 overflow-x-auto flex gap-1.5 shrink-0">
                {quickPrompts.map((p, i) => (
                  <button key={i} onClick={() => handleSend(p)} disabled={isLoading}
                    className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-[10px] font-mono text-[#00F2FE] border border-slate-800 shrink-0 transition-colors">
                    {p}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 bg-[#050A18] border-t border-slate-800 shrink-0">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask about web dev, pentesting, pricing..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-slate-900 border border-slate-800 focus:border-[#00F2FE] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-sans"
                  />
                  <button type="submit" disabled={isLoading || !input.trim()}
                    className="p-2.5 rounded-xl bg-[#00F2FE] text-slate-950 font-bold hover:opacity-90 transition-opacity disabled:opacity-40">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Icon Toggle Button */}
        <button
          onClick={() => toggle("chat")}
          title="AI Defense Assistant"
          aria-label={activePanel === "chat" ? "Close AI Assistant" : "Open AI Assistant"}
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00F2FE] text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {activePanel === "chat" ? (
            <X className="w-6 h-6 text-slate-950" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-slate-950" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
            </>
          )}
        </button>
      </div>

    </div>
  );
};

