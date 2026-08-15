"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  User, 
  Loader2, 
  Minimize2, 
  RefreshCw,
  ExternalLink
} from "lucide-react";
import { ChatMessage } from "@/lib/ai-provider";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I am the IntekCT AI Assistant capability demo.\n\nAsk me anything about our full-stack web engineering, penetration testing, DevSecOps pipelines, or pricing options!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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
          {
            role: "assistant",
            content: data.fallbackMessage || "I encountered a minor issue. You can also reach our team directly at intekcttechnology@gmail.com!",
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I am having trouble connecting right now. Please try again in a moment or submit your inquiry through our contact form!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "What services do you offer?",
    "What is your pricing?",
    "How do you handle security?",
    "Book a discovery call",
  ];

  return (
    <div className="relative">
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            title="AI Defense Assistant"
            aria-label="Open AI Defense Assistant"
            className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-gradient text-slate-950 font-bold shadow-neon-cyan transition-all duration-300 hover:scale-105"
          >
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-slate-950" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 mb-2 w-[90vw] sm:w-[400px] h-[520px] rounded-3xl glass-panel border border-[#00F2FE]/40 shadow-2xl flex flex-col justify-between overflow-hidden bg-[#0F172A]/95 z-[100]"
          >
            {/* Chat Header */}
            <div className="p-4 bg-[#050A18]/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-xl bg-[#0F172A] border border-[#00F2FE]/50 flex items-center justify-center text-[#00F2FE]">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#050A18]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    IntekCT AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Claude 3.5 Sonnet / Multi-LLM</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs">
              {messages.map((msg, index) => {
                const isAssistant = msg.role === "assistant";

                return (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 ${isAssistant ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                        isAssistant
                          ? "bg-[#050A18] text-[#00F2FE] border border-[#00F2FE]/30"
                          : "bg-slate-700 text-white"
                      }`}
                    >
                      {isAssistant ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed whitespace-pre-wrap ${
                        isAssistant
                          ? "bg-[#050A18] text-slate-200 border border-slate-800 shadow-sm"
                          : "bg-cyan-gradient text-slate-950 font-medium font-sans"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] pl-9">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#00F2FE]" />
                  <span>AI Assistant analyzing query...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-4 py-2 bg-[#050A18]/50 border-t border-slate-800/60 overflow-x-auto flex gap-1.5 no-scrollbar">
              {quickPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-[#1E293B] text-[10px] font-mono text-[#00F2FE] border border-slate-800 shrink-0 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <div className="p-3 bg-[#050A18] border-t border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about web dev, pentesting, pricing..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-slate-900 border border-slate-800 focus:border-[#00F2FE] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 rounded-xl bg-cyan-gradient text-slate-950 font-bold hover:bg-cyan-gradient-hover transition-colors disabled:opacity-40"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
