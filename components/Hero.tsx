"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Layers,
  Sparkles,
  Lock,
  CheckCircle2
} from "lucide-react";
import { companyData } from "@/data/company";

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("cloud");

  // Only animate after client has hydrated — prevents blank flash
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: mounted ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: mounted ? 0 : 1, y: mounted ? 16 : 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#061B36] overflow-hidden">
      {/* Subtle Ambient Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#00F2FE]/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5A1F]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Human Punchy Copy with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-200 text-xs font-mono tracking-wider shadow-sm">
              <span className="text-[#00F2FE] font-bold">&lt; &gt;</span>
              <span>DESIGN. BUILD. LAUNCH. PROTECT.</span>
            </motion.div>

            {/* Main H1 Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We Build Websites &amp; <span className="text-white">Apps.</span>{" "}
              <span className="block mt-1 text-cyan-gradient">
                Secure &amp; Ready to Grow.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              From simple business websites to complex web apps — we design, build, and protect digital products that help your business grow.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-xl bg-coral hover:bg-coral-hover shadow-coral transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>



            </motion.div>

            {/* Key Metrics Strip */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {companyData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl font-bold font-mono text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Animated System Architecture Visual */}
          <motion.div
            initial={{ opacity: mounted ? 0 : 1, scale: mounted ? 0.95 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Micro-Badge 1 */}
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B2240] border border-[#00F2FE]/40 text-xs font-mono text-white shadow-xl backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-[#00F2FE]" />
              <span>⚡ Super Fast Loading</span>
            </motion.div>

            {/* Floating Micro-Badge 2 */}
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B2240] border border-emerald-500/40 text-xs font-mono text-white shadow-xl backdrop-blur-md"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>🛡️ 100% Security Tested</span>
            </motion.div>

            <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-[#0B2240]/90 border border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Status Indicator Pill */}
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Layers className="w-4 h-4 text-[#00F2FE]" />
                  How Your App Works
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061B36] border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live &amp; Online</span>
                </div>
              </div>

              {/* Central Interactive Node Diagram */}
              <div className="relative flex-1 flex items-center justify-center my-6">
                
                {/* SVG Animated Connection Paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  <line x1="150" y1="150" x2="80" y2="80" stroke="#00F2FE" strokeWidth="1.5" className="animate-pulse-line" />
                  <line x1="150" y1="150" x2="220" y2="80" stroke="#00F2FE" strokeWidth="1.5" className="animate-pulse-line" />
                  <line x1="150" y1="150" x2="80" y2="220" stroke="#FF5A1F" strokeWidth="1.5" className="animate-pulse-line" />
                  <line x1="150" y1="150" x2="220" y2="220" stroke="#00F2FE" strokeWidth="1.5" className="animate-pulse-line" />
                  <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                </svg>

                {/* Central Cloud Core Node */}
                <button
                  onClick={() => setActiveNode("cloud")}
                  className={`relative z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                    activeNode === "cloud"
                      ? "bg-[#00F2FE] text-slate-950 shadow-[0_0_35px_rgba(0,242,254,0.6)] scale-110"
                      : "bg-[#061B36] text-[#00F2FE] border border-[#00F2FE]/40 hover:border-[#00F2FE]"
                  }`}
                >
                  <Cloud className="w-8 h-8" />
                  <span className="text-[9px] font-mono font-bold mt-1 uppercase">Your App</span>
                </button>

                {/* Node 1: Top Left - CLIENT APPS */}
                <button
                  onClick={() => setActiveNode("client")}
                  className={`absolute top-4 left-6 z-10 p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                    activeNode === "client"
                      ? "bg-coral text-white shadow-coral"
                      : "bg-[#061B36] text-slate-300 border border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <Code2 className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-medium">WEBSITE</span>
                </button>

                {/* Node 2: Top Right - GLOBAL DB */}
                <button
                  onClick={() => setActiveNode("db")}
                  className={`absolute top-4 right-6 z-10 p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                    activeNode === "db"
                      ? "bg-coral text-white shadow-coral"
                      : "bg-[#061B36] text-slate-300 border border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <Database className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-medium">DATABASE</span>
                </button>

                {/* Node 3: Bottom Left - EDGE NODES */}
                <button
                  onClick={() => setActiveNode("edge")}
                  className={`absolute bottom-4 left-6 z-10 p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                    activeNode === "edge"
                      ? "bg-coral text-white shadow-coral"
                      : "bg-[#061B36] text-slate-300 border border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <Zap className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-medium">FAST CDN</span>
                </button>

                {/* Node 4: Bottom Right - DEVSECOPS SHIELD */}
                <button
                  onClick={() => setActiveNode("shield")}
                  className={`absolute bottom-4 right-6 z-10 p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                    activeNode === "shield"
                      ? "bg-[#00F2FE] text-slate-950 shadow-neon-cyan"
                      : "bg-[#061B36] text-emerald-400 border border-emerald-500/40 hover:border-emerald-400"
                  }`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-medium">SECURITY</span>
                </button>

              </div>

              {/* Bottom Interactive Info Bar */}
              <div className="bg-[#061B36] p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="text-slate-400">You selected:</span>
                <span className="text-[#00F2FE] font-bold uppercase">
                  {activeNode === "cloud" && "Fast Cloud Hosting"}
                  {activeNode === "client" && "Your Website & App"}
                  {activeNode === "db" && "Secure Data Storage"}
                  {activeNode === "edge" && "Speed Optimization Layer"}
                  {activeNode === "shield" && "Security Protection"}
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
