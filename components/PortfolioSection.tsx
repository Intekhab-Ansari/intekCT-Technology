"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>Selected Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B36] tracking-tight">
            Featured <span className="text-[#FF5A1F]">Case Studies</span>
          </h2>
        </div>

        {/* Portfolio Cards Grid (Light Theme Elevate) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#FF5A1F]/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/90 text-[#061B36] shadow-sm border border-slate-200 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.isPlaceholder && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 backdrop-blur-md">
                        <AlertCircle className="w-3 h-3" />
                        [EDIT ME]
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#061B36] group-hover:text-[#FF5A1F] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#FF5A1F] font-mono font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Security Layer Tag */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-emerald-700 font-mono font-medium">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{project.securityLayer}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white text-[11px] font-mono text-slate-700 border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="px-6 py-4 border-t border-slate-200 bg-white flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Impact Metric:</span>
                <span className="text-xs font-bold font-mono text-[#061B36] text-right">{project.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
