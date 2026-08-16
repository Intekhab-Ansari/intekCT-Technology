"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  Maximize2,
  X,
  ArrowUpRight,
  Send,
  MessageSquare,
  Globe,
  Star,
} from "lucide-react";

export const MeetDeveloper: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "experience">("overview");

  const portfolioUrl = "https://intekhab-ansari.vercel.app/";

  const skills = [
    { name: "React / Next.js", level: "Expert", color: "#00F2FE" },
    { name: "TypeScript / JS", level: "Advanced", color: "#3B82F6" },
    { name: "Java & Spring", level: "Advanced", color: "#EF4444" },
    { name: "MySQL & PostgreSQL", level: "Advanced", color: "#10B981" },
    { name: "Tailwind CSS & UI/UX", level: "Expert", color: "#F59E0B" },
    { name: "App Security & APIs", level: "Specialist", color: "#8B5CF6" },
  ];

  const highlights = [
    "Full-Stack Architect behind IntekCT Technologies",
    "Builds lightning-fast React & Next.js applications",
    "End-to-end custom eCommerce & enterprise web platforms",
    "Security-hardened and SEO-optimized by default",
  ];

  return (
    <section className="relative py-20 bg-[#040D1A] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#00F2FE]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2240] border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-widest uppercase font-bold shadow-cyan-sm">
            <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>MEET YOUR DEVELOPER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafted by Engineers,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#FF5A1F]">
              Led by Intekhab Ansari
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            The visionary lead full-stack software engineer powering IntekCT. See the live portfolio,
            explore core capabilities, and collaborate directly with the developer.
          </p>
        </div>

        {/* Developer Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2240]/90 to-[#061B36]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Cyber Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#081B33]/90 border-b border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              </div>
              <span className="text-slate-300 font-semibold flex items-center gap-1">
                <span className="text-[#00F2FE] font-bold">&lt;/&gt;</span>
                intekhab-ansari.vercel.app
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance & Contract
              </span>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[#00F2FE] hover:text-white transition-colors text-xs font-semibold"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  <Star className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Founder & Lead Full-Stack Software Engineer</span>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Intekhab Ansari
                  </h3>
                  <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#38BDF8] mt-1 font-mono">
                    Full Stack Web Developer & Software Engineer
                  </p>
                </div>

                {/* Bio / Description */}
                <p className="text-slate-300 text-base leading-relaxed">
                  I build fast, responsive React & Next.js web applications, custom WordPress e-commerce websites,
                  and robust full-stack enterprise solutions designed to scale and grow your business with fortified security.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["REACT", "NEXT.JS", "JAVA", "JAVASCRIPT", "MYSQL", "TAILWIND CSS", "NODE.JS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#061B36] border border-[#00F2FE]/20 text-[#00F2FE] text-xs font-mono font-bold tracking-wider hover:border-[#00F2FE]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#00F2FE] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    <span>View Portfolio Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setShowLiveModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white hover:border-[#00F2FE]/50 font-semibold text-sm transition-all"
                  >
                    <Maximize2 className="w-4 h-4 text-[#00F2FE]" />
                    <span>Interactive Preview</span>
                  </button>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold text-sm transition-all shadow-coral-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Hire Me / Free Quote</span>
                  </Link>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/intekct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/intekhab-ansari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:intekcttechnology@gmail.com"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-[#FF5A1F] hover:border-[#FF5A1F]/30 transition-colors"
                    aria-label="Email Developer"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual / Cyber Avatar & Live Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden border-2 border-[#00F2FE]/30 bg-[#061B36] group shadow-[0_0_50px_-10px_rgba(0,242,254,0.3)]">
                {/* Developer Avatar Image */}
                <Image
                  src="/intekhab-developer.jpg"
                  alt="Intekhab Ansari - Full Stack Web Developer & Software Engineer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Holographic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-transparent opacity-80" />

                {/* Floating Micro-Badges */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#040D1A]/80 border border-[#00F2FE]/40 backdrop-blur-md text-[11px] font-mono font-bold text-[#00F2FE] flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Lead Developer</span>
                </div>

                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#040D1A]/80 border border-[#FF5A1F]/40 backdrop-blur-md text-[11px] font-mono font-bold text-[#FF5A1F] flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>45+ Projects</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#081B33]/90 border border-white/10 backdrop-blur-md text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Intekhab Ansari</p>
                      <p className="text-[10px] font-mono text-slate-400">intekhab-ansari.vercel.app</p>
                    </div>
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] hover:bg-[#00F2FE] hover:text-black transition-colors"
                      title="Open Live Portfolio"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sub-strip feature counters */}
              <div className="grid grid-cols-3 gap-2 w-full max-w-[360px] mt-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-base font-extrabold text-[#00F2FE]">100%</span>
                  <span className="text-[10px] font-mono text-slate-400">Custom Code</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-base font-extrabold text-[#FF5A1F]">Sub-10ms</span>
                  <span className="text-[10px] font-mono text-slate-400">Fast Speed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-base font-extrabold text-emerald-400">Zero</span>
                  <span className="text-[10px] font-mono text-slate-400">Vulnerabilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Website Interactive Preview Modal */}
      <AnimatePresence>
        {showLiveModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#061B36] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B2240] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setShowLiveModal(false)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80"
                      title="Close"
                    />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-black/30 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
                    <span>{portfolioUrl}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-xs font-mono font-bold text-[#00F2FE] hover:bg-[#00F2FE] hover:text-black transition-colors"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setShowLiveModal(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe View */}
              <div className="flex-1 w-full h-full bg-slate-950 relative">
                <iframe
                  src={portfolioUrl}
                  title="Intekhab Ansari Developer Portfolio"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
