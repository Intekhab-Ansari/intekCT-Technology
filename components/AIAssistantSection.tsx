"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, MessageSquare, Zap, Cpu, ArrowRight } from "lucide-react";

export const AIAssistantSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl border border-[#00F2FE]/20 p-8 sm:p-12 bg-[#0B2240]/60 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F2FE]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Column: AI Capability Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050A18] border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-wider uppercase">
              <Bot className="w-3.5 h-3.5" />
              <span>Live AI Chat Demo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI-Powered Chat. <br />
              <span className="text-cyan-gradient">Live Right on This Site.</span>
            </h2>

            <p className="text-[#94A3B8] text-base leading-relaxed">
              We can add a smart AI chat assistant to your website that answers customer questions, takes bookings, and provides support — 24/7, automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#050A18]/80 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-[#00F2FE] flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" /> Fully Secure
                </span>
                <p className="text-xs text-slate-300">Your API keys and customer data are kept completely private — never exposed to the public.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#050A18]/80 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-[#00F2FE] flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3.5 h-3.5" /> Works 24/7
                </span>
                <p className="text-xs text-slate-300">Answers customer questions, takes bookings, and supports your visitors automatically — even while you sleep.</p>
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
                &quot;Hello! Ask me anything about our web development services, tech stack, or how to get started on your project.&quot;
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
