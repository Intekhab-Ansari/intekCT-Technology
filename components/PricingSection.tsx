"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Sparkles } from "lucide-react";
import { pricingData, PricingTier } from "@/data/pricing";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative py-16 bg-[#061B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2240] border border-slate-700 text-slate-300 text-xs font-mono tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Package. <span className="text-coral-gradient">We Handle the Rest.</span>
          </h2>
        </div>

        {/* 3-Tier Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((tier: PricingTier, index: number) => {
            const isPopular = tier.isPopular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#0B2240] border-2 border-[#FF5A1F] shadow-coral scale-[1.03] z-20"
                    : "bg-[#0B2240]/70 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-coral text-white font-bold text-xs uppercase tracking-wider shadow-coral flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Custom Scope Badge */}
                  <div className="mb-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-300 min-h-[36px] leading-relaxed">{tier.description}</p>

                    <div className="pt-2 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-lg bg-[#061B36] text-[#00F2FE] border border-[#00F2FE]/30 font-mono text-xs font-bold uppercase tracking-wider">
                        {tier.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">({tier.billingPeriod})</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 py-6 border-t border-slate-800">
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-semibold">
                      What&apos;s Included:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          {feat.included ? (
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${feat.isSecurityFeature ? "text-[#00F2FE]" : "text-[#FF5A1F]"}`} />
                          ) : (
                            <span className="w-4 h-4 shrink-0 mt-0.5 text-slate-600 font-bold">✕</span>
                          )}
                          <span className={feat.included ? "text-slate-200" : "text-slate-500 line-through"}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 border-t border-slate-800">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isPopular
                        ? "bg-coral text-white hover:bg-coral-hover shadow-coral"
                        : "bg-[#061B36] text-white hover:bg-[#092447] border border-slate-700 hover:border-slate-500"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
