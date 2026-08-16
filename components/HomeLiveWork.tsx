"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export const HomeLiveWork: React.FC = () => {
  // Display top featured projects
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="our-work-preview" className="relative py-24 bg-[#061B36] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#00F2FE]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[400px] bg-[#FF5A1F]/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2240] border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-widest uppercase font-bold">
              <Briefcase className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>OUR LIVE WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Production Projects{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#38BDF8]">
                We&apos;ve Shipped.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore live software applications, custom platforms, and high-performance digital products
              engineered and secured by IntekCT.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm hover:border-[#00F2FE]/50 hover:text-[#00F2FE] transition-all shrink-0 hover:scale-[1.02] shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-[#0B2240]/80 border border-white/10 hover:border-[#00F2FE]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Image Section */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2240] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#061B36]/90 backdrop-blur-md border border-white/10 text-[#00F2FE]">
                      {project.category}
                    </span>
                    {!project.isPlaceholder && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live Online
                      </span>
                    )}
                  </div>

                  {/* Metrics Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#081B33]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-[#00F2FE]" />
                      <span className="truncate">{project.securityLayer}</span>
                    </div>
                    <span className="text-emerald-400 font-bold hidden sm:inline-block">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 border-t border-white/5 flex items-center justify-between gap-4 mt-auto">
                {project.demoUrl && project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#00F2FE] text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition-all"
                  >
                    <span>Read Architecture Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                <Link
                  href="/contact"
                  className="text-xs font-bold text-slate-400 hover:text-[#FF5A1F] transition-colors flex items-center gap-1"
                >
                  <span>Build Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Explorer Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B2240] border border-white/15 text-white font-bold text-sm hover:border-[#00F2FE]/60 hover:text-[#00F2FE] transition-all shadow-lg"
          >
            <span>Explore All 10+ Client Case Studies & Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
