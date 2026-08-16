"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Scale,
  UtensilsCrossed,
  ShoppingBag,
  Home as HomeIcon,
  Dumbbell,
  Eye,
  ArrowRight,
  Sparkles,
  CheckCircle,
  MessageSquare,
  ChevronRight,
  MonitorPlay,
} from "lucide-react";

interface HomeDemoItem {
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
  deliveryTime: string;
  priceFrom: string;
  popular?: boolean;
}

const homeDemos: HomeDemoItem[] = [
  {
    id: "doctor",
    name: "Doctor & Clinic Portal",
    category: "Healthcare",
    icon: <Stethoscope className="w-5 h-5" />,
    iconBg: "from-blue-500 to-cyan-500",
    accentColor: "#3B82F6",
    tagline: "Medical clinic website with live patient appointment scheduling",
    description: "Features specialist doctor profiles, slot booking, medical departments, and WhatsApp consultation.",
    features: ["Online Slot Booking", "Doctor Profiles", "24/7 Lab Reports", "WhatsApp Chat"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/doctor",
    deliveryTime: "5–7 Days",
    priceFrom: "₹15,000",
    popular: true,
  },
  {
    id: "advocate",
    name: "Advocate & Law Firm",
    category: "Legal Practice",
    icon: <Scale className="w-5 h-5" />,
    iconBg: "from-amber-500 to-yellow-500",
    accentColor: "#F59E0B",
    tagline: "Authoritative law firm website with confidential case intake",
    description: "Includes practice area deep dives, senior partner profiles, case victories, and consultation scheduler.",
    features: ["Free Case Evaluation", "Practice Area Pages", "Attorney Profiles", "Bail Helpline"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/advocate",
    deliveryTime: "7–10 Days",
    priceFrom: "₹18,000",
    popular: true,
  },
  {
    id: "restaurant",
    name: "Restaurant & Café",
    category: "Food & Beverage",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    iconBg: "from-orange-500 to-red-500",
    accentColor: "#F97316",
    tagline: "Vibrant restaurant website with digital menu and table reservations",
    description: "Equipped with interactive food menu, party size booking, chef specials, and photo gallery.",
    features: ["Table Reservation", "Interactive Digital Menu", "Veg / Non-Veg Tags", "Order via WhatsApp"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/restaurant",
    deliveryTime: "5–8 Days",
    priceFrom: "₹12,000",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Store",
    category: "Retail & Shopping",
    icon: <ShoppingBag className="w-5 h-5" />,
    iconBg: "from-purple-500 to-pink-500",
    accentColor: "#A855F7",
    tagline: "Full-featured online store with live cart and instant checkout",
    description: "Product catalog with categories, shopping cart drawer, Razorpay/Stripe payments, and discount codes.",
    features: ["Shopping Cart Drawer", "Razorpay / UPI Payments", "Coupon System", "Order Tracking"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/ecommerce",
    deliveryTime: "10–14 Days",
    priceFrom: "₹25,000",
    popular: true,
  },
  {
    id: "real-estate",
    name: "Real Estate Agency",
    category: "Property & Realty",
    icon: <HomeIcon className="w-5 h-5" />,
    iconBg: "from-emerald-500 to-teal-500",
    accentColor: "#10B981",
    tagline: "Luxury property portal with search, filters, and site visit booking",
    description: "Property listings with beds/baths/sqft specs, VIP site visit scheduler, and virtual tour preview.",
    features: ["Filterable Listings", "Schedule Site Visits", "Virtual 360° Tours", "EMI Calculator"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/real-estate",
    deliveryTime: "8–12 Days",
    priceFrom: "₹20,000",
  },
  {
    id: "gym",
    name: "Gym & Fitness Studio",
    category: "Health & Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    iconBg: "from-red-500 to-rose-500",
    accentColor: "#EF4444",
    tagline: "High-energy gym website with membership plans and day pass claim",
    description: "Membership plan comparisons, workout class timetables, trainer bios, and free trial pass generator.",
    features: ["Membership Comparison", "Claim Free Day Pass", "Trainer Profiles", "Class Schedule"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75",
    demoUrl: "/demo/gym",
    deliveryTime: "5–7 Days",
    priceFrom: "₹13,000",
  },
];

export const HomeDemoWebsites: React.FC = () => {
  return (
    <section id="demo-websites-preview" className="relative py-24 bg-[#040D1A] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF5A1F]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2240] border border-[#FF5A1F]/30 text-[#FF5A1F] text-xs font-mono tracking-widest uppercase font-bold">
              <MonitorPlay className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>READY-MADE DEMO WEBSITES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Pick Your Industry.{" "}
              <span className="text-coral-gradient">Test Drive Live Demos.</span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Experience fully functioning interactive demo websites for doctors, lawyers, restaurants,
              e-commerce stores, and more. Launch your branded version in days.
            </p>
          </div>

          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold text-sm shadow-coral-sm transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore All Demos (10+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {homeDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative rounded-3xl bg-[#0B2240]/70 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Top Image */}
                <div className="relative h-52 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={demo.image}
                    alt={demo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${demo.accentColor}50, transparent 60%)`,
                    }}
                  />

                  {/* Icon & Category */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${demo.iconBg} text-white shadow-lg`}
                    >
                      {demo.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-black/50 backdrop-blur-md border border-white/10">
                      {demo.category}
                    </span>
                  </div>

                  {demo.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FF5A1F] text-white flex items-center gap-1 shadow">
                        <Sparkles className="w-2.5 h-2.5" />
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                      {demo.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {demo.tagline}
                    </p>
                  </div>

                  {/* Bullet Features */}
                  <ul className="grid grid-cols-2 gap-1.5 pt-2">
                    {demo.features.map((feat, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300"
                      >
                        <CheckCircle
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: demo.accentColor }}
                        />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Delivery Strip */}
                  <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Customization</p>
                      <p className="text-xs font-bold text-emerald-400 font-mono">100% Tailored Build</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Turnaround</p>
                      <p
                        className="text-xs font-bold font-mono"
                        style={{ color: demo.accentColor }}
                      >
                        {demo.deliveryTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-2">
                <Link
                  href={demo.demoUrl}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white hover:bg-white/20 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Live Preview</span>
                </Link>

                <Link
                  href={`/contact?template=${encodeURIComponent(demo.name)}`}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${demo.accentColor}, ${demo.accentColor}cc)`,
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get This</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#0B2240] via-[#061B36] to-[#0B2240] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Need a customized version for your brand?</h4>
            <p className="text-sm text-slate-400">
              We modify colors, logos, domain, booking systems, and copy to match your exact business vision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold text-sm shadow-coral-sm transition-all"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919594292262?text=Hello%20IntekCT,%20I%20am%20interested%20in%20a%20demo%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm hover:border-[#00F2FE]/50 hover:text-[#00F2FE] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp +91 9594292262</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
