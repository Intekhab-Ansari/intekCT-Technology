"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  PenTool,
  Server,
  Zap,
  Bug,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface BuildService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  href: string;
  tag?: string;
}

const buildServices: BuildService[] = [
  {
    id: "website-dev",
    title: "Website Development",
    description:
      "Custom, responsive, and high-performance websites tailored to your business needs.",
    icon: <Monitor className="w-6 h-6 text-[#2563EB]" />,
    accentColor: "#2563EB",
    href: "/services",
    tag: "High Performance",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="w-6 h-6 text-[#00F2FE]" />,
    accentColor: "#00F2FE",
    href: "/services",
    tag: "iOS & Android",
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description:
      "Intuitive, engaging, and user-centric interfaces designed for optimal experiences.",
    icon: <PenTool className="w-6 h-6 text-[#FF5A1F]" />,
    accentColor: "#FF5A1F",
    href: "/services",
    tag: "Figma & Prototypes",
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    description:
      "Robust, scalable, and secure server-side architectures and APIs.",
    icon: <Server className="w-6 h-6 text-[#10B981]" />,
    accentColor: "#10B981",
    href: "/services",
    tag: "Scalable Cloud APIs",
  },
  {
    id: "automation",
    title: "Automation Creation",
    description:
      "Streamlining workflows through intelligent and efficient automated processes.",
    icon: <Zap className="w-6 h-6 text-[#F59E0B]" />,
    accentColor: "#F59E0B",
    href: "/services",
    tag: "AI & Workflows",
  },
  {
    id: "testing-qa",
    title: "Testing & Bug Fixing",
    description:
      "Comprehensive quality assurance to deliver flawless and reliable software.",
    icon: <Bug className="w-6 h-6 text-[#8B5CF6]" />,
    accentColor: "#8B5CF6",
    href: "/services",
    tag: "Zero Defects",
  },
];

export const WhatWeBuild: React.FC = () => {
  return (
    <section id="what-we-build" className="relative py-24 bg-[#F8FAFC]">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-blue-50/80 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-orange-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF5A1F]">
              OUR EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061B36] tracking-tight mb-4">
            What We Build
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            End-to-end software development services tailored to your scalable business
            needs.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {buildServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Strip on Card Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-80 group-hover:h-1.5"
                style={{ backgroundColor: service.accentColor }}
              />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#061B36] mb-3 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#FF5A1F] transition-colors group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {service.tag && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                    {service.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0B2240] border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#FF5A1F]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Have a specific project in mind?</h4>
              <p className="text-sm text-slate-400">
                From concept to deployment, we build custom solutions tailored for your business.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold text-sm shadow-coral transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
