"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Workflow, MessageSquareCode, Zap } from "lucide-react";

export const WhyIntekCT: React.FC = () => {
  const differentiators = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00F2FE]" />,
      title: "Security-First Development",
      description: "We don't patch security after launch. Threat modeling, zero-trust token authentication, and data encryption are built directly into the initial architecture.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00F2FE]" />,
      title: "Transparent DevSecOps Pipeline",
      description: "Get real-time visibility into your code builds with automated SAST/DAST scanner reports running on every GitHub commit.",
    },
    {
      icon: <MessageSquareCode className="w-8 h-8 text-[#00F2FE]" />,
      title: "Direct Engineer Communication",
      description: "No non-technical account managers playing game of telephone. You communicate directly with lead full-stack engineers and security architects.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00F2FE]" />,
      title: "Speed Without Cutting Corners",
      description: "We leverage Next.js 14 App Router, reusable modular components, and edge serverless caching to ship production web apps in weeks, not quarters.",
    },
  ];

  return (
    <section className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-wider uppercase">
            <span>Competitive Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Forward-Thinking Teams <br />
            <span className="text-cyan-gradient">Choose IntekCT</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Combining top 1% full-stack web engineering velocity with proactive enterprise threat defense.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl glass-card border border-slate-800 p-6 transition-all duration-300 hover:border-[#00F2FE]/50 hover:shadow-[0_0_25px_-5px_rgba(0,242,254,0.3)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#050A18] border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
