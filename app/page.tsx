import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { HomeLiveWork } from "@/components/HomeLiveWork";
import { HomeDemoWebsites } from "@/components/HomeDemoWebsites";
import { WhyIntekCT } from "@/components/WhyIntekCT";
import { PricingSection } from "@/components/PricingSection";
import { MeetDeveloper } from "@/components/MeetDeveloper";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import {
  Code2,
  GitBranch,
  Users,
  HelpCircle,
  Mail,
  Briefcase,
  Monitor,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IntekCT Technologies | Full Stack Web Development & Next.js Agency",
  description:
    "Award-winning web development agency in India. We design & build ultra-fast, high-converting websites, Next.js React web apps, luxury e-commerce stores, and 10+ ready-made demo templates. 3–7 day delivery guaranteed.",
  keywords: [
    "Web Development Company India",
    "Next.js React Full Stack Development",
    "Affordable Website Design Mumbai",
    "Doctor Clinic Website Design",
    "Advocate Law Firm Website",
    "Restaurant Digital Menu Online Ordering",
    "E-Commerce Store Development",
    "Real Estate Property Website",
    "Gym Fitness Studio Website",
    "Education Coaching LMS Website",
    "Photography Studio Portfolio Website",
    "Corporate Enterprise IT Website",
    "Luxury Hotel Resort Website",
    "IntekCT Technologies",
    "Intekhab Ansari Lead Software Engineer",
    "Hire React Developer India",
  ],
  alternates: {
    canonical: "/",
  },
};

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
    href: "/our-work",
    icon: Briefcase,
    label: "Our Work",
    desc: "Projects we've shipped",
    color: "#FF5A1F",
  },
  {
    href: "/demo",
    icon: Monitor,
    label: "10+ Demo Sites",
    desc: "Interactive live templates",
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
    <div className="space-y-0 selection:bg-[#FF5A1F] selection:text-white">
      {/* 1. Hero Section — eager, above the fold */}
      <Hero />

      {/* 2. What We Build — Core Services & Expertise */}
      <WhatWeBuild />

      {/* 3. Our Live Work — Production Projects & Case Studies */}
      <HomeLiveWork />

      {/* 4. Ready-Made Demo Websites — 10 Industry Templates with Live Previews */}
      <HomeDemoWebsites />

      {/* 5. Why Choose IntekCT — 6 Core Value Guarantees */}
      <WhyIntekCT />

      {/* 6. Transparent Pricing & Packages */}
      <PricingSection />

      {/* 7. Meet The Lead Developer — Intekhab Ansari */}
      <MeetDeveloper compact={true} />

      {/* 8. Client Testimonials & Social Proof */}
      <Testimonials />

      {/* 9. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 10. Interactive Contact & Instant Quote Form */}
      <ContactSection />

      {/* 11. Quick-Nav Strip */}
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
