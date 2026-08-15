"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="relative py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono tracking-wider uppercase font-semibold">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B36] tracking-tight">
            Trusted By Founders &amp; <span className="text-[#FF5A1F]">CTOs</span>
          </h2>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl relative space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-[#061B36] font-semibold border border-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {activeTestimonial.highlightBadge}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl text-slate-800 font-sans font-medium leading-relaxed italic relative">
              <Quote className="w-10 h-10 text-[#FF5A1F]/15 absolute -top-4 -left-4 -z-10" />
              &quot;{activeTestimonial.quote}&quot;
            </blockquote>

            {/* Author Profile Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF5A1F]">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#061B36]">{activeTestimonial.author}</h4>
                  <p className="text-xs font-mono text-[#FF5A1F] font-semibold">{activeTestimonial.role} — {activeTestimonial.company}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#FF5A1F] hover:border-[#FF5A1F] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#FF5A1F] hover:border-[#FF5A1F] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
