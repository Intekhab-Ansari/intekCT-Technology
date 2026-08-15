"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Workflow, MessageSquareCode, Zap } from "lucide-react";

export const WhyIntekCT: React.FC = () => {
  const differentiators = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00F2FE]" />,
      title: "Security Built In From Day One",
      description: "We don't add security as an afterthought. Your app is protected from the very start — safe login, encrypted data, and protection against hackers.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00F2FE]" />,
      title: "You Can See Every Step",
      description: "We give you full visibility into our work. You get regular updates, previews, and progress reports so you're never left in the dark.",
    },
    {
      icon: <MessageSquareCode className="w-8 h-8 text-[#00F2FE]" />,
      title: "Talk Directly to Our Team",
      description: "No middlemen, no confusion. You speak directly with the developers building your app — so your feedback gets applied fast and accurately.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00F2FE]" />,
      title: "Fast Delivery, No Shortcuts",
      description: "We work efficiently using proven tools and reusable components to deliver your finished product in weeks — without cutting corners on quality.",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-mono tracking-wider uppercase">
            <span>Why Clients Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Teams <span className="text-cyan-gradient">Choose IntekCT</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl glass-card border border-slate-800/60 p-6 transition-all duration-300 hover:border-[#00F2FE]/40 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050A18]/80 border border-slate-800 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
