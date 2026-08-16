"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Stethoscope,
  Scale,
  UtensilsCrossed,
  ShoppingBag,
  Home as HomeIcon,
  Dumbbell,
  MonitorPlay,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDropdownOpen, setDemoDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDemoDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const demoItems = [
    {
      title: "Doctor & Clinic",
      href: "/demo/doctor",
      icon: Stethoscope,
      color: "#3B82F6",
      desc: "Appointment booking & patient portal",
    },
    {
      title: "Advocate & Law Firm",
      href: "/demo/advocate",
      icon: Scale,
      color: "#F59E0B",
      desc: "Case evaluation & legal defense",
    },
    {
      title: "Restaurant & Café",
      href: "/demo/restaurant",
      icon: UtensilsCrossed,
      color: "#F97316",
      desc: "Digital menu & table reservation",
    },
    {
      title: "E-Commerce Store",
      href: "/demo/ecommerce",
      icon: ShoppingBag,
      color: "#A855F7",
      desc: "Cart drawer, catalog & checkout",
    },
    {
      title: "Real Estate Agency",
      href: "/demo/real-estate",
      icon: HomeIcon,
      color: "#10B981",
      desc: "Property listings & site visit booking",
    },
    {
      title: "Gym & Fitness Studio",
      href: "/demo/gym",
      icon: Dumbbell,
      color: "#EF4444",
      desc: "Membership tiers & 1-day pass claim",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[300] transition-all duration-300">
      {/* Pure White Main Navigation Header */}
      <div
        className={`bg-white transition-all duration-300 border-b border-slate-200/90 ${
          scrolled ? "shadow-md py-3 bg-white/95 backdrop-blur-md" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="IntekCT Technologies Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#061B36] font-sans flex items-center gap-1">
                  Intek<span className="text-[#2563EB]">CT</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase -mt-1 font-semibold">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-slate-100/80"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-slate-100/80"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-slate-100/80"
              >
                Services
              </Link>
              <Link
                href="/our-work"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-slate-100/80"
              >
                Our Work
              </Link>

              {/* Demo Websites Interactive Dropdown Menu */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDemoDropdownOpen(true)}
                onMouseLeave={() => setDemoDropdownOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href="/demo"
                    className={`pl-3.5 pr-1.5 py-2 text-sm font-bold transition-all rounded-l-lg flex items-center gap-1.5 ${
                      demoDropdownOpen
                        ? "text-[#FF5A1F] bg-orange-50"
                        : "text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100/80"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <MonitorPlay className="w-4 h-4 text-[#FF5A1F]" />
                      Demo Websites
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF5A1F] text-white">
                      Live
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setDemoDropdownOpen(!demoDropdownOpen);
                    }}
                    aria-label="Toggle Demo Websites Menu"
                    className={`pr-2.5 pl-1 py-2.5 text-sm font-bold transition-all rounded-r-lg ${
                      demoDropdownOpen
                        ? "text-[#FF5A1F] bg-orange-50"
                        : "text-slate-500 hover:text-[#FF5A1F] hover:bg-slate-100/80"
                    }`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        demoDropdownOpen ? "rotate-180 text-[#FF5A1F]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu Panel */}
                <AnimatePresence>
                  {demoDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 z-50 text-slate-800"
                    >
                      <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-100 text-xs font-bold text-slate-500 font-mono uppercase">
                        <span>Interactive Demo Websites</span>
                        <Link
                          href="/demo"
                          onClick={() => setDemoDropdownOpen(false)}
                          className="text-[#FF5A1F] hover:underline normal-case font-sans flex items-center gap-1"
                        >
                          <span>All Demos</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {demoItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setDemoDropdownOpen(false)}
                              className="group p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-2.5"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                                style={{
                                  backgroundColor: `${item.color}15`,
                                  color: item.color,
                                }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-slate-800 group-hover:text-[#FF5A1F] transition-colors truncate">
                                  {item.title}
                                </p>
                                <p className="text-[10px] text-slate-500 line-clamp-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs px-2 bg-slate-50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                        <span className="text-[11px] text-slate-500">
                          Need a custom template for your niche?
                        </span>
                        <Link
                          href="/contact"
                          onClick={() => setDemoDropdownOpen(false)}
                          className="text-[11px] font-bold text-[#FF5A1F] hover:underline"
                        >
                          Request Custom Build →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-xl bg-coral hover:bg-coral-hover shadow-coral-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#FF5A1F]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-semibold text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-semibold text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100 rounded-lg transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-semibold text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link
                href="/our-work"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-semibold text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100 rounded-lg transition-colors"
              >
                Our Work
              </Link>

              {/* Mobile Demo Websites Accordion */}
              <div className="py-2 px-4 rounded-xl bg-orange-50/70 border border-orange-100 space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href="/demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-[#061B36] flex items-center gap-1.5"
                  >
                    <MonitorPlay className="w-4 h-4 text-[#FF5A1F]" />
                    <span>Demo Websites</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#FF5A1F] text-white">
                      Live
                    </span>
                  </Link>
                  <Link
                    href="/demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-[#FF5A1F]"
                  >
                    All Demos →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {demoItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2.5 py-1.5 rounded-lg bg-white text-xs font-medium text-slate-700 hover:text-[#FF5A1F] border border-slate-200/60 shadow-2xs truncate"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-white rounded-xl bg-coral shadow-coral"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
