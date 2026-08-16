"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Maximize2,
  Minimize2,
  ChevronDown,
  ExternalLink,
  Eye,
  Check,
} from "lucide-react";

interface DemoTopBarProps {
  templateName: string;
  category: string;
  priceFrom: string;
  deliveryTime: string;
}

const allDemos = [
  { name: "Doctor & Medical Clinic", href: "/demo/doctor", category: "Healthcare" },
  { name: "Advocate & Legal Firm", href: "/demo/advocate", category: "Legal" },
  { name: "Fine Dining Restaurant", href: "/demo/restaurant", category: "Food & Beverage" },
  { name: "Luxe E-Commerce Store", href: "/demo/ecommerce", category: "Retail" },
  { name: "Luxury Real Estate & Villa", href: "/demo/real-estate", category: "Real Estate" },
  { name: "TitanFit Performance Gym", href: "/demo/gym", category: "Fitness" },
];

export const DemoTopBar: React.FC<DemoTopBarProps> = ({
  templateName,
  category,
  priceFrom,
  deliveryTime,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed top-3 right-3 z-[9999] flex items-center gap-2">
        <button
          onClick={() => setIsMinimized(false)}
          className="px-3.5 py-1.5 rounded-full bg-[#061B36]/90 hover:bg-[#061B36] text-white border border-[#00F2FE]/40 text-xs font-semibold shadow-2xl backdrop-blur-md flex items-center gap-1.5 transition-all hover:scale-105"
        >
          <Eye className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>Show Demo Bar</span>
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Demo site preview banner"
      className="sticky top-0 z-[999] w-full bg-[#040D1A]/95 text-white border-b border-white/10 shadow-2xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-2 text-xs">
        {/* Left Side: Back Link & Demo Selector */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden md:inline">All Demos</span>
          </Link>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          {/* Current Demo with Quick Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all text-left"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-[220px]">{templateName}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-64 rounded-2xl bg-[#0B2240] border border-white/15 shadow-2xl p-2 z-[1000] text-xs space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 font-bold border-b border-white/10">
                  Switch Demo Template
                </div>
                {allDemos.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                  >
                    <span>{d.name}</span>
                    {templateName.toLowerCase().includes(d.name.toLowerCase().split(" ")[0]) && (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center / Right: Pricing, CTA & Fullscreen */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          <div className="hidden lg:flex items-center gap-2.5 text-slate-300 font-mono text-[11px]">
            <span>From <strong className="text-white">{priceFrom}</strong></span>
            <span>•</span>
            <span>Delivery: <strong className="text-emerald-400">{deliveryTime}</strong></span>
          </div>

          <Link
            href={`/contact?template=${encodeURIComponent(templateName)}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get This Website</span>
            <span className="sm:hidden">Order</span>
          </Link>

          <a
            href={`https://wa.me/919594292262?text=Hello%20IntekCT,%20I%20am%20interested%20in%20the%20${encodeURIComponent(templateName)}%20website%20template.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullScreen}
            title="Toggle Browser Fullscreen"
            className="hidden md:inline-flex p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Minimize TopBar Button */}
          <button
            onClick={() => setIsMinimized(true)}
            title="Hide Demo Bar for Full Screen View"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors text-[10px] font-mono flex items-center gap-1"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hide Bar</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
