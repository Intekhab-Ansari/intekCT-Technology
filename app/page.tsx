import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import {
  Code2,
  GitBranch,
  Users,
  DollarSign,
  HelpCircle,
  Mail,
  Briefcase,
  Monitor,
  ArrowRight,
} from "lucide-react";

// ─── Quick-nav page cards ─────────────────────────────────────────────────────
const pages = [
  {
    href: "/services",
    icon: Code2,
    label: "Services",
    desc: "What we build & protect",
    color: "#FF5A1F",
  },
  {
    href: "/process",
    icon: GitBranch,
    label: "How We Work",
    desc: "Our step-by-step process",
    color: "#00F2FE",
  },
  {
    href: "/about",
    icon: Users,
    label: "About Us",
    desc: "Why clients choose IntekCT",
    color: "#FF5A1F",
  },
  {
    href: "/pricing",
    icon: DollarSign,
    label: "Pricing",
    desc: "Simple, transparent packages",
    color: "#00F2FE",
  },
  {
    href: "/our-work",
    icon: Briefcase,
    label: "Our Work",
    desc: "Projects we've shipped",
    color: "#FF5A1F",
  },
  {
    href: "/demo",
    icon: Monitor,
    label: "Demo Sites",
    desc: "Live previews of our work",
    color: "#00F2FE",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    label: "FAQ",
    desc: "Common questions answered",
    color: "#FF5A1F",
  },
  {
    href: "/contact",
    icon: Mail,
    label: "Contact",
    desc: "Start your project today",
    color: "#00F2FE",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>
      {/* Hero — eager, above the fold */}
      <Hero />

      {/* Quick-Nav Strip */}
      <section className="relative py-20 bg-[#040D1A]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#061B36] to-[#040D1A] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
              <span className="text-[#00F2FE] font-bold">&lt; / &gt;</span>
              <span>EXPLORE INTEKCT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything in One Place.{" "}
              <span className="text-cyan-gradient">Pick Where to Start.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Navigate to any section of the site to learn more about our work,
              process, and how we can help your business.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pages.map(({ href, icon: Icon, label, desc, color }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col gap-4 rounded-2xl bg-[#0B2240]/70 border border-slate-800 p-6 transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border transition-colors duration-300"
                  style={{
                    backgroundColor: `${color}10`,
                    borderColor: `${color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-white text-base mb-1 group-hover:transition-colors"
                    style={{ "--hover-color": color } as React.CSSProperties}
                  >
                    {label}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${color}08, transparent 60%)`,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

