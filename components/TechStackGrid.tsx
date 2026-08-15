"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Boxes, 
  Code, 
  FileCode, 
  Palette, 
  Sparkles, 
  Server, 
  Terminal, 
  Database, 
  Zap, 
  Network, 
  Workflow, 
  Container, 
  ShieldAlert, 
  Layers, 
  Cloud, 
  Shield, 
  KeyRound, 
  CheckCircle2 
} from "lucide-react";
import { stackData, TechStackCategory } from "@/data/stack";

const stackIconMap: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-5 h-5 text-[#00F2FE]" />,
  Code: <Code className="w-5 h-5 text-[#00F2FE]" />,
  FileCode: <FileCode className="w-5 h-5 text-[#00F2FE]" />,
  Palette: <Palette className="w-5 h-5 text-[#00F2FE]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#00F2FE]" />,
  Server: <Server className="w-5 h-5 text-[#00F2FE]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#00F2FE]" />,
  Database: <Database className="w-5 h-5 text-[#00F2FE]" />,
  Zap: <Zap className="w-5 h-5 text-[#00F2FE]" />,
  Network: <Network className="w-5 h-5 text-[#00F2FE]" />,
  Workflow: <Workflow className="w-5 h-5 text-[#00F2FE]" />,
  Container: <Container className="w-5 h-5 text-[#00F2FE]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#00F2FE]" />,
  Layers: <Layers className="w-5 h-5 text-[#00F2FE]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#00F2FE]" />,
  Shield: <Shield className="w-5 h-5 text-[#00F2FE]" />,
  KeyRound: <KeyRound className="w-5 h-5 text-[#00F2FE]" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#00F2FE]" />,
};

export const TechStackGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="stack" className="relative py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-wider uppercase">
            <span>Tools We Use</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built With the <span className="text-cyan-gradient">Best Tools</span>
          </h2>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stackData.map((cat: TechStackCategory, idx: number) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(idx)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === idx
                  ? "bg-cyan-gradient text-slate-950 shadow-neon-cyan"
                  : "glass-card text-slate-300 hover:text-white hover:border-[#00F2FE]/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description & Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <p className="text-center text-slate-400 max-w-xl mx-auto text-sm font-mono">
            {stackData[selectedCategory].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stackData[selectedCategory].technologies.map((tech) => (
              <div
                key={tech.name}
                className={`group rounded-xl glass-card p-5 border transition-all duration-300 hover:-translate-y-1 ${
                  tech.highlight
                    ? "border-[#00F2FE]/50 shadow-[0_0_20px_-5px_rgba(0,242,254,0.3)] bg-[#0F172A]"
                    : "border-slate-800 hover:border-[#00F2FE]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#050A18] border border-slate-800 flex items-center justify-center group-hover:border-[#00F2FE]">
                    {stackIconMap[tech.icon] || <Code className="w-5 h-5 text-[#00F2FE]" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050A18] text-[#00F2FE] border border-[#00F2FE]/20">
                    {tech.level}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
