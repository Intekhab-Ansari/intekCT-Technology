"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Phone, MessageSquare } from "lucide-react";

interface DemoTopBarProps {
  templateName: string;
  category: string;
  priceFrom: string;
  deliveryTime: string;
}

export const DemoTopBar: React.FC<DemoTopBarProps> = ({
  templateName,
  category,
  priceFrom,
  deliveryTime,
}) => {
  return (
    <aside aria-label="Demo site preview banner" className="sticky top-0 z-[400] w-full bg-[#061B36] text-white border-b border-white/10 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left Side: Back Link & Template info */}
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to All Demos</span>
            <span className="sm:hidden">All Demos</span>
          </Link>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white tracking-wide">{templateName}</span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-cyan-300">
              {category} Demo
            </span>
          </div>
        </div>

        {/* Center / Right: Pricing & CTA */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden lg:flex items-center gap-3 text-slate-300 font-mono text-[11px]">
            <span>Starting at <strong className="text-white">{priceFrom}</strong></span>
            <span>•</span>
            <span>Delivery: <strong className="text-emerald-400">{deliveryTime}</strong></span>
          </div>

          <Link
            href={`/contact?template=${encodeURIComponent(templateName)}`}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#FF5A1F] hover:bg-[#E54A10] text-white font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get This Website</span>
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
        </div>
      </div>
    </aside>
  );
};
