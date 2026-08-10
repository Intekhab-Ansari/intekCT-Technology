"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

interface LiveTrustBadgeProps {
  size?: "sm" | "md";
  className?: string;
}

export const LiveTrustBadge: React.FC<LiveTrustBadgeProps> = ({
  size = "md",
  className = "",
}) => {
  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full glass-card border border-[#00F2FE]/30 bg-[#0F172A]/80 shadow-[0_0_20px_-5px_rgba(0,242,254,0.3)] transition-all duration-300 hover:border-[#00F2FE]/60 ${
        isSmall ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]"></span>
      </span>

      <ShieldCheck className={`${isSmall ? "w-3.5 h-3.5" : "w-4 h-4"} text-[#00F2FE]`} />
      
      <span className="font-mono tracking-wide text-white font-medium">
        {companyData.systemStatus}
      </span>
      
      <span className="hidden sm:inline-block h-3 w-px bg-slate-700" />
      
      <span className="hidden sm:inline-block text-[#94A3B8] font-mono text-[11px]">
        TLS 1.3 | Zero-Trust
      </span>
    </div>
  );
};
