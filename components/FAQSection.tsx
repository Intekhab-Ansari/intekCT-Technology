"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData, FAQItem } from "@/data/faq";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider uppercase font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061B36] tracking-tight">
            Frequently Asked <span className="text-[#FF5A1F]">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our web development, cybersecurity audits, and DevSecOps processes.
          </p>
        </div>

        {/* Accordion List (Light Theme) */}
        <div className="space-y-4">
          {faqData.map((item: FAQItem) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-2 border-[#FF5A1F] shadow-lg bg-white"
                    : "border border-slate-200 hover:border-slate-300 bg-slate-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-200 text-[#061B36] font-semibold border border-slate-300">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#061B36]">
                      {item.question}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#FF5A1F] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-slate-200 pt-4"
                    >
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
