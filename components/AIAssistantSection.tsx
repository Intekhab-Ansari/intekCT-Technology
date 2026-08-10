"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, MessageSquare, Zap, Cpu, ArrowRight } from "lucide-react";

export const AIAssistantSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-card border border-[#00F2FE]/40 p-8 sm:p-12 shadow-2xl bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/70 to-[#050A18] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F2FE]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Column: AI Capability Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A18] border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-wider uppercase">
              <Bot className="w-3.5 h-3.5" />
              <span>Live Capability Demonstration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI-Powered Web Tools. <br />
              <span className="text-cyan-gradient">Tested & Proven On This Site.</span>
            </h2>

            <p className="text-[#94A3B8] text-base leading-relaxed">
              IntekCT builds custom AI agents, RAG search portals, and LLM-powered microservices for modern web applications. We don&apos;t just talk about AI — we deployed our own live AI assistant right on this page!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#050A18]/80 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-[#00F2FE] flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" /> Next.js API Routes
                </span>
                <p className="text-xs text-slate-300">Serverless streaming backend keeps API keys 100% hidden from client-side vulnerability.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#050A18]/80 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-[#00F2FE] flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3.5 h-3.5" /> Multi-LLM Support
                </span>
                <p className="text-xs text-slate-300">Configurable between Anthropic Claude, OpenAI GPT-4o, or custom local models.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Teaser Prompt Box */}
          <div className="lg:col-span-5 bg-[#050A18] p-6 rounded-2xl border border-slate-800 space-y-4 shadow-inner relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] animate-ping" />
                <span className="text-xs font-mono text-white font-bold">IntekCT AI Assistant</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                Online & Ready
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-slate-900 p-3 rounded-lg text-slate-300 border border-slate-800">
                <span className="text-[#00F2FE] font-bold block mb-1">IntekCT Bot:</span>
                &quot;Ask me about our DevSecOps stack, pricing plans, or schedule a project discovery call directly!&quot;
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                <span>Click the floating widget in the bottom-right corner</span>
                <MessageSquare className="w-3.5 h-3.5 text-[#00F2FE]" />
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
