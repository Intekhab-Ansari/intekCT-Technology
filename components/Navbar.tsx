"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#why-us" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Our Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
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
            <Link href="#" className="group flex items-center gap-2.5">
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

            {/* Center Navigation Links (Crisp Dark Text on White Header) */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5A1F] transition-colors rounded-lg hover:bg-slate-100/80 flex items-center gap-1"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                </a>
              ))}
            </nav>

            {/* Right Action Button (Vibrant Coral/Orange) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-xl bg-coral hover:bg-coral-hover shadow-coral-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
            className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-semibold text-slate-800 hover:text-[#FF5A1F] hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-white rounded-xl bg-coral shadow-coral"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
