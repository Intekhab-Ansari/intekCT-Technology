"use client";

import React, { useState } from "react";
import { Phone, PhoneCall, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";

interface Props {
  onCallOpen?: (open: boolean) => void;
}

export const FloatingCallButton: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Popover Card — opens above the button, anchored right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-2 w-[290px] bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl z-[100] text-slate-800"
          >
            <h3 className="text-lg font-bold text-[#041327] mb-1">Let&apos;s Talk!</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Book a free 30-min call with our team. No commitment, just clarity.
            </p>

            <a
              href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#041327] hover:bg-[#061B36] text-white font-bold text-sm mb-3 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call {companyData.phone}</span>
            </a>

            <a
              href={`mailto:${companyData.contactEmail}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl bg-white hover:bg-slate-50 text-[#041327] font-semibold text-sm border border-slate-200 transition-all"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Email Us Instead</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#041327] hover:bg-[#061B36] text-white font-bold text-xs shadow-xl border border-slate-700 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        aria-label="Toggle Call Options"
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
        <span>{isOpen ? "Close" : "Free Call"}</span>
        {isOpen && <X className="w-3 h-3 ml-0.5 text-slate-400" />}
      </button>
    </div>
  );
};
