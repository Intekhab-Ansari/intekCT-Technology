"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  CloudLightning, 
  Layout, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-7 h-7 text-[#FF5A1F]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#0099FF]" />,
  Lock: <Lock className="w-7 h-7 text-[#0099FF]" />,
  Cpu: <Cpu className="w-7 h-7 text-[#FF5A1F]" />,
  CloudLightning: <CloudLightning className="w-7 h-7 text-[#0099FF]" />,
  Layout: <Layout className="w-7 h-7 text-[#FF5A1F]" />,
};

export const ServicesMatrix: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-700 text-xs font-mono tracking-wider uppercase font-semibold">
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#061B36] tracking-tight">
            Everything Your Business Needs. <span className="text-[#FF5A1F]">Done Right.</span>
          </h2>
        </div>

        {/* 6-Grid Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white border border-slate-200/80 p-7 transition-all duration-300 hover:border-[#FF5A1F]/50 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-inner group-hover:border-[#FF5A1F] transition-colors">
                    {iconMap[service.iconName] || <Code2 className="w-7 h-7 text-[#FF5A1F]" />}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700 font-semibold border border-slate-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#061B36] mb-3 group-hover:text-[#FF5A1F] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#FF5A1F] transition-colors pt-4 border-t border-slate-100"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
