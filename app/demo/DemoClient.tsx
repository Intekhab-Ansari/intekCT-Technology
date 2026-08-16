"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Stethoscope,
  Scale,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  GraduationCap,
  Dumbbell,
  Camera,
  Home,
  Briefcase,
  Sparkles,
  Eye,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  Globe,
  Search,
} from "lucide-react";

interface DemoSite {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  demoUrl: string;
  techStack: string[];
  deliveryTime: string;
  priceFrom: string;
  popular?: boolean;
}

const demoSites: DemoSite[] = [
  {
    id: "doctor",
    name: "Doctor / Clinic",
    category: "Healthcare",
    icon: <Stethoscope className="w-5 h-5" />,
    iconBg: "from-blue-500 to-cyan-500",
    accentColor: "#3B82F6",
    tagline: "Professional medical practice website with appointment booking",
    description:
      "A premium clinic website with doctor profiles, service listings, online appointment scheduling, patient testimonials, and a health blog. HIPAA-ready architecture.",
    features: [
      "Online Appointment Booking",
      "Doctor & Staff Profiles",
      "Services & Specialties Pages",
      "Patient Testimonials",
      "Health Blog / Articles",
      "Google Maps Integration",
      "WhatsApp Chat Integration",
      "Mobile Responsive",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/doctor",
    techStack: ["Next.js", "Tailwind CSS", "Calendly API", "Vercel"],
    deliveryTime: "5–7 Days",
    priceFrom: "₹15,000",
    popular: true,
  },
  {
    id: "advocate",
    name: "Advocate / Law Firm",
    category: "Legal",
    icon: <Scale className="w-5 h-5" />,
    iconBg: "from-amber-500 to-yellow-500",
    accentColor: "#F59E0B",
    tagline: "Premium law firm website that commands trust and authority",
    description:
      "A dark, prestigious law firm website with practice area pages, attorney bios, case results, client testimonials, and a free consultation booking form.",
    features: [
      "Practice Area Pages",
      "Attorney Profiles",
      "Case Results / Wins",
      "Free Consultation Form",
      "FAQ Section",
      "Blog / Legal Articles",
      "Client Portal Link",
      "SEO Optimized",
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/advocate",
    techStack: ["WordPress", "PHP", "Custom Theme", "ACF"],
    deliveryTime: "7–10 Days",
    priceFrom: "₹18,000",
    popular: true,
  },
  {
    id: "restaurant",
    name: "Restaurant / Café",
    category: "Food & Beverage",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    iconBg: "from-orange-500 to-red-500",
    accentColor: "#F97316",
    tagline: "Mouth-watering restaurant website with online ordering",
    description:
      "A vibrant restaurant website with digital menu, table reservation system, online ordering, special offers, chef profiles, and a photo gallery.",
    features: [
      "Digital Menu with Photos",
      "Table Reservation System",
      "Online Ordering / Delivery",
      "Special Offers & Deals",
      "Chef / Team Profiles",
      "Photo & Video Gallery",
      "Instagram Feed Integration",
      "Google Reviews Widget",
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/restaurant",
    techStack: ["Next.js", "Stripe", "Tailwind CSS", "Sanity CMS"],
    deliveryTime: "5–8 Days",
    priceFrom: "₹12,000",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Store",
    category: "Retail",
    icon: <ShoppingBag className="w-5 h-5" />,
    iconBg: "from-purple-500 to-pink-500",
    accentColor: "#A855F7",
    tagline: "High-converting online store ready to sell from Day 1",
    description:
      "A full-featured e-commerce store with product listings, cart, checkout, payment gateway integration, order tracking, and an admin dashboard.",
    features: [
      "Product Catalog & Categories",
      "Shopping Cart & Checkout",
      "Razorpay / Stripe Payments",
      "Order Tracking",
      "Customer Accounts",
      "Admin Dashboard",
      "Inventory Management",
      "Discount / Coupon System",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/ecommerce",
    techStack: ["Next.js", "Razorpay", "PostgreSQL", "Prisma"],
    deliveryTime: "10–14 Days",
    priceFrom: "₹25,000",
    popular: true,
  },
  {
    id: "real-estate",
    name: "Real Estate Agency",
    category: "Property",
    icon: <Home className="w-5 h-5" />,
    iconBg: "from-emerald-500 to-teal-500",
    accentColor: "#10B981",
    tagline: "Property listing website with search & enquiry system",
    description:
      "A modern real estate website with property listings, advanced search filters, virtual tour embed, agent profiles, and lead capture forms.",
    features: [
      "Property Listings & Search",
      "Advanced Filters",
      "Virtual Tour Embed",
      "Agent Profiles",
      "Lead Capture Forms",
      "Google Maps Integration",
      "EMI Calculator",
      "Mobile App Ready",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/real-estate",
    techStack: ["Next.js", "Mapbox", "Supabase", "Tailwind CSS"],
    deliveryTime: "8–12 Days",
    priceFrom: "₹20,000",
  },
  {
    id: "education",
    name: "Institute / Coaching",
    category: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
    iconBg: "from-violet-500 to-indigo-500",
    accentColor: "#7C3AED",
    tagline: "Educational institute website with course & admission system",
    description:
      "A professional education institute website with course listings, online admission forms, faculty profiles, student testimonials, and a results section.",
    features: [
      "Course Listings & Details",
      "Online Admission Form",
      "Faculty Profiles",
      "Student Results Portal",
      "Gallery & Events",
      "Fee Structure Page",
      "Alumni Section",
      "Live Class Link Integration",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/doctor",
    techStack: ["WordPress", "LMS Plugin", "PHP", "Elementor"],
    deliveryTime: "7–10 Days",
    priceFrom: "₹14,000",
  },
  {
    id: "gym",
    name: "Gym / Fitness Studio",
    category: "Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    iconBg: "from-red-500 to-rose-500",
    accentColor: "#EF4444",
    tagline: "High-energy gym website with membership & class scheduling",
    description:
      "A bold, energetic gym website with membership plans, class schedules, trainer profiles, transformation gallery, and an online sign-up system.",
    features: [
      "Membership Plan Comparison",
      "Class Schedule & Booking",
      "Trainer Profiles",
      "Transformation Gallery",
      "Online Sign-Up / Payments",
      "BMI Calculator",
      "Blog / Fitness Tips",
      "WhatsApp Integration",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/gym",
    techStack: ["Next.js", "Razorpay", "Tailwind CSS", "Framer Motion"],
    deliveryTime: "5–7 Days",
    priceFrom: "₹13,000",
  },
  {
    id: "photographer",
    name: "Photographer / Studio",
    category: "Creative",
    icon: <Camera className="w-5 h-5" />,
    iconBg: "from-pink-500 to-fuchsia-500",
    accentColor: "#EC4899",
    tagline: "Stunning portfolio website to showcase your photography work",
    description:
      "A cinematic photography portfolio with masonry gallery, category filters, package listings, about page, client reviews, and a booking form.",
    features: [
      "Masonry Photo Gallery",
      "Category Filters",
      "Package & Pricing Pages",
      "Booking / Inquiry Form",
      "Before & After Slider",
      "Video Showreel Embed",
      "Client Testimonials",
      "Instagram Feed",
    ],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "#",
    techStack: ["Next.js", "Framer Motion", "Cloudinary", "Tailwind CSS"],
    deliveryTime: "5–7 Days",
    priceFrom: "₹10,000",
  },
  {
    id: "corporate",
    name: "Corporate / Business",
    category: "Business",
    icon: <Building2 className="w-5 h-5" />,
    iconBg: "from-slate-500 to-blue-600",
    accentColor: "#2563EB",
    tagline: "Professional corporate website to grow your business online",
    description:
      "A sleek corporate website with services pages, about us, team section, client logos, case studies, blog, and a contact/quote request form.",
    features: [
      "Services & Solutions Pages",
      "About Us & Team",
      "Client Logo Wall",
      "Case Studies",
      "Blog / News Section",
      "Contact & Quote Form",
      "Awards & Certifications",
      "Multi-language Ready",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75",
    demoUrl: "#",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    deliveryTime: "7–10 Days",
    priceFrom: "₹16,000",
  },
  {
    id: "portfolio",
    name: "Meet Your Developer / Portfolio",
    category: "Creative",
    icon: <Briefcase className="w-5 h-5" />,
    iconBg: "from-cyan-500 to-blue-500",
    accentColor: "#00F2FE",
    tagline: "Intekhab Ansari – Full Stack Web Developer & Software Engineer",
    description:
      "Official live portfolio of Intekhab Ansari. Features interactive cyber design, project showcases, skill matrix, and high-performance React architecture.",
    features: [
      "Live Portfolio Showcase",
      "React, Java & Next.js Stack",
      "Interactive Cyber Aesthetics",
      "Direct Freelance Booking",
      "Full Stack Capabilities",
      "SEO & Security Hardened",
      "Fast Performance",
      "Responsive on All Screens",
    ],
    image: "/intekhab-developer.jpg",
    demoUrl: "https://intekhab-ansari.vercel.app/",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    deliveryTime: "3–5 Days",
    priceFrom: "₹12,000",
    popular: true,
  },
];

const categoryFilters = [
  "All",
  "Healthcare",
  "Legal",
  "Food & Beverage",
  "Retail",
  "Property",
  "Education",
  "Fitness",
  "Creative",
  "Business",
];

export const DemoClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = demoSites
    .filter((d) => (activeCategory === "All" ? true : d.category === activeCategory))
    .filter((d) =>
      searchQuery
        ? d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.tagline.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );

  return (
    <div className="min-h-screen bg-[#061B36]">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#2563EB]/10 via-[#FF5A1F]/8 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#FF5A1F] text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready-Made Demo Templates</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
              Interactive{" "}
              <span className="text-[#FF5A1F]">Demo Websites</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Experience live, fully functional websites for doctors, advocates, restaurants, e-commerce, and real estate. Click preview on any demo to test drive.
            </p>

            {/* Live Search Bar */}
            <div className="max-w-xl mx-auto p-2 rounded-2xl bg-[#0B2240] border border-white/15 shadow-xl flex items-center gap-2">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search templates (e.g. Doctor, Law firm, Restaurant, Store, Gym)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none py-1.5 px-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-white px-2 font-mono"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:border-[#FF5A1F]/50 transition-all"
              >
                <Globe className="w-4 h-4 text-[#FF5A1F]" />
                View Live Client Projects
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-sm font-bold text-white transition-all shadow-coral-sm"
              >
                Request Custom Website
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categoryFilters.map((cat) => (
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

      {/* ── Demo Cards Grid ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((site, index) => (
              <motion.div
                key={site.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onMouseEnter={() => setHoveredId(site.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl bg-[#0B2240]/60 border border-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                style={{
                  boxShadow:
                    hoveredId === site.id
                      ? `0 0 40px -10px ${site.accentColor}40`
                      : "none",
                  borderColor:
                    hoveredId === site.id ? `${site.accentColor}40` : undefined,
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${site.accentColor}60, transparent 60%)`,
                    }}
                  />

                  {/* Icon + Category */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${site.iconBg} text-white shadow-lg`}
                    >
                      {site.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-black/40 backdrop-blur-md border border-white/10">
                      {site.category}
                    </span>
                  </div>

                  {/* Popular Badge */}
                  {site.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FF5A1F] text-white flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Title */}
                  <div>
                    <h2
                      className="text-lg font-bold text-white group-hover:transition-colors"
                      style={{ color: hoveredId === site.id ? site.accentColor : undefined }}
                    >
                      {site.name}
                    </h2>
                    <p className="text-xs font-mono text-slate-400 mt-0.5 leading-snug">
                      {site.tagline}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="grid grid-cols-2 gap-1">
                    {site.features.slice(0, 6).map((feat, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400"
                      >
                        <CheckCircle
                          className="w-3 h-3 shrink-0"
                          style={{ color: site.accentColor }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {site.techStack.map((tech, ti) => (
                      <span
                        key={ti}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-white/8">
                    {/* Price & Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          Starting From
                        </p>
                        <p className="text-xl font-extrabold text-white">
                          {site.priceFrom}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          Delivery
                        </p>
                        <p
                          className="text-sm font-bold font-mono"
                          style={{ color: site.accentColor }}
                        >
                          {site.deliveryTime}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={site.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white hover:border-white/30 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Preview
                      </a>
                      <Link
                        href={`/contact?template=${site.id}`}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${site.accentColor}, ${site.accentColor}cc)`,
                        }}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Get This
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#FF5A1F]/20 bg-gradient-to-br from-[#0B2240] via-[#061B36] to-[#040D1A] p-10 text-center">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#FF5A1F]/10 blur-[80px]" />
            </div>

            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono tracking-widest uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Don't see your industry?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                We Build{" "}
                <span className="text-[#FF5A1F]">Any Type</span> of Website
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
                From niche local businesses to complex enterprise platforms — if
                you can imagine it, we can build it. Tell us what you need and
                we'll send you a free quote in 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold transition-all shadow-coral text-sm"
                >
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919594292262?text=Hello%20IntekCT,%20I%20want%20to%20request%20a%20website%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-bold hover:border-[#FF5A1F]/50 hover:text-[#FF5A1F] transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
