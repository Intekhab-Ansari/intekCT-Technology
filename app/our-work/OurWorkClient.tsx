"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Code2,
  Layers,
  Star,
  ArrowRight,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface LiveProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: "WordPress Site" | "Full Stack" | "React" | "Next.js" | "Shopify" | "Custom CMS";
  tagColor: string;
  description: string;
  techStack: string[];
  metrics: string;
  badge?: string;
  image: string;
  liveUrl: string;
  featured?: boolean;
}

const liveProjects: LiveProject[] = [
  {
    id: "food-delivery-app",
    title: "Food Delivery Platform",
    subtitle: "Full-Featured Online Food Ordering & Delivery Web App",
    category: "Food & Restaurant",
    tag: "React",
    tagColor: "#06B6D4",
    description:
      "A fast, modern online food ordering application featuring interactive digital menu cards, real-time cart drawer, category filters, and seamless user checkout. Deployed live on Vercel.",
    techStack: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
    metrics: "100% Real-Time Fast Ordering",
    badge: "⚡ Live Production App",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=75",
    liveUrl: "https://food-delivery-intekhab.vercel.app/",
    featured: true,
  },
  {
    id: "intekhab-portfolio",
    title: "Intekhab Ansari — Portfolio",
    subtitle: "Lead Full-Stack Web Developer & Engineer Portfolio",
    category: "Digital Agency",
    tag: "Next.js",
    tagColor: "#10B981",
    description:
      "Official portfolio website for Lead Software Engineer Intekhab Ansari. High-speed cyber theme, skill matrix, interactive previews, and sub-second load times.",
    techStack: ["React", "Next.js", "JavaScript", "Java", "Tailwind CSS"],
    metrics: "100/100 Lighthouse Performance",
    badge: "⭐ Featured Engineer",
    image: "/intekhab-developer.jpg",
    liveUrl: "https://intekhab-ansari.vercel.app/",
    featured: true,
  },
  {
    id: "tiffin-wales",
    title: "Tiffin Wales",
    subtitle: "Indian Tiffin Service – Cambridge & Boston, Massachusetts",
    category: "Food & Restaurant",
    tag: "WordPress Site",
    tagColor: "#3B82F6",
    description:
      "Full online presence for an authentic Indian tiffin delivery business serving the Boston-Cambridge area. Custom WordPress theme, online ordering integration, SEO-optimized to rank #1 on Google in the USA.",
    techStack: ["WordPress", "WooCommerce", "PHP", "SEO", "Custom Theme"],
    metrics: "#1 Google Ranked in USA",
    badge: "🏆 #1 Google Ranked in USA",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=75",
    liveUrl: "https://tiffinwales.com",
    featured: true,
  },
  {
    id: "quantorra",
    title: "Quantorra",
    subtitle: "Premium Digital Design & SEO Agency",
    category: "Digital Agency",
    tag: "Full Stack",
    tagColor: "#8B5CF6",
    description:
      "Business platform built with React and Vite frontend along with a custom PHP backend for performance analytics. High-conversion landing page, enterprise SEO, and custom CRM integrations.",
    techStack: ["React", "Vite", "PHP", "Tailwind CSS", "MySQL"],
    metrics: "+340% SEO Growth Delivered",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=75",
    liveUrl: "https://quantorra.com",
    featured: true,
  },
  {
    id: "medsync-clinic",
    title: "MedSync Clinic",
    subtitle: "Modern Healthcare Portal – Appointment & Patient Management",
    category: "Healthcare",
    tag: "Next.js",
    tagColor: "#10B981",
    description:
      "A fully-featured clinic management website with real-time appointment booking, doctor profile pages, service listings, and a patient dashboard built on Next.js with Supabase.",
    techStack: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "3x Patient Bookings Increase",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=75",
    liveUrl: "#",
    featured: false,
  },
  {
    id: "lex-chambers",
    title: "Lex Chambers",
    subtitle: "Law Firm Website – Advocate & Legal Services",
    category: "Legal & Advocate",
    tag: "Custom CMS",
    tagColor: "#F59E0B",
    description:
      "A sophisticated law firm web presence with practice area pages, attorney profiles, case study blog, consultation booking, and a dark premium aesthetic that instills client trust.",
    techStack: ["WordPress", "Elementor Pro", "PHP", "Advanced Custom Fields", "SEO"],
    metrics: "60% More Consultation Requests",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=75",
    liveUrl: "#",
    featured: false,
  },
  {
    id: "luxe-ecommerce",
    title: "Luxe Threads",
    subtitle: "Premium Fashion E-Commerce Store",
    category: "E-Commerce",
    tag: "Shopify",
    tagColor: "#EF4444",
    description:
      "A headless Shopify storefront for a premium clothing brand with custom animations, wishlist, size guides, and a blazing-fast checkout experience that tripled their online revenue.",
    techStack: ["Shopify", "Hydrogen", "React", "GraphQL", "Tailwind CSS"],
    metrics: "3.8x Revenue Increase",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=75",
    liveUrl: "#",
    featured: false,
  },
  {
    id: "saas-platform",
    title: "NovaDash Analytics",
    subtitle: "B2B SaaS Dashboard & Analytics Platform",
    category: "SaaS",
    tag: "React",
    tagColor: "#06B6D4",
    description:
      "A multi-tenant SaaS analytics platform with real-time data visualization, role-based access control, webhook integrations, and a white-labeling system for agencies.",
    techStack: ["React 18", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    metrics: "50K+ Active Users",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    featured: false,
  },
];

const categories = ["All", "Food & Restaurant", "Digital Agency", "Healthcare", "Legal & Advocate", "E-Commerce", "SaaS"];

const tagColors: Record<string, string> = {
  "WordPress Site": "#3B82F6",
  "Full Stack": "#8B5CF6",
  "React": "#06B6D4",
  "Next.js": "#10B981",
  "Shopify": "#F59E0B",
  "Custom CMS": "#EF4444",
};

export const OurWorkClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? liveProjects
    : liveProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#061B36]">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Radial Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF5A1F]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono tracking-widest uppercase font-bold mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>Deployed Client Sites</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
              Live{" "}
              <span className="text-[#FF5A1F]">Work</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
              A selection of active client websites built, optimized, and maintained by us.
              Every project is engineered for performance, security, and real-world results.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {[
                { icon: <Globe className="w-4 h-4" />, label: "Live Sites", value: "30+" },
                { icon: <Trophy className="w-4 h-4" />, label: "Awards Won", value: "12" },
                { icon: <Star className="w-4 h-4" />, label: "Happy Clients", value: "50+" },
                { icon: <Code2 className="w-4 h-4" />, label: "Lines of Code", value: "1M+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-[#FF5A1F]">{stat.icon}</span>
                  <div>
                    <div className="text-lg font-extrabold text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 font-mono ${
                activeCategory === cat
                  ? "bg-[#FF5A1F] text-white shadow-coral-sm"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:border-[#FF5A1F]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#0B2240]/60 border border-white/8 hover:border-[#FF5A1F]/50 transition-all duration-300 overflow-hidden shadow-glass hover:shadow-coral backdrop-blur-sm flex flex-col"
            >
              {/* Browser Chrome Mockup */}
              <div className="relative">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#040D1A]/80 border-b border-white/8">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] font-mono text-slate-500 truncate">
                    {project.liveUrl === "#" ? `https://${project.id}.com` : project.liveUrl}
                  </div>
                  {/* Tag Pill */}
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-white border"
                    style={{ backgroundColor: `${tagColors[project.tag]}20`, borderColor: `${tagColors[project.tag]}50`, color: tagColors[project.tag] }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A]/80 via-[#061B36]/20 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF5A1F] text-white shadow-coral-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Live Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h2 className="text-xl font-bold text-white group-hover:text-[#FF5A1F] transition-colors leading-snug">
                      {project.title}
                    </h2>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-[#FF5A1F]/60 hover:bg-[#FF5A1F]/10 text-slate-400 hover:text-[#FF5A1F] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#FF5A1F] font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[11px] font-mono text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/8 flex items-center justify-between">
                  {project.badge ? (
                    <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      {project.badge}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      Result:{" "}
                      <span className="text-white font-bold">{project.metrics}</span>
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF5A1F] font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-bold hover:border-[#FF5A1F]/50 hover:text-[#FF5A1F] transition-all text-sm"
            >
              <Globe className="w-4 h-4" />
              Browse Demo Templates
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold transition-all shadow-coral-sm text-sm"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
