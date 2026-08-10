"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Compass, 
  Code2, 
  ShieldAlert, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";
import { processData, ProcessStep } from "@/data/process";

const processIconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5 text-[#FF5A1F]" />,
  Compass: <Compass className="w-5 h-5 text-[#0099FF]" />,
  Code2: <Code2 className="w-5 h-5 text-[#FF5A1F]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#0099FF]" />,
  Rocket: <Rocket className="w-5 h-5 text-[#FF5A1F]" />,
};

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = processData[activeStepIndex];

  return (
    <section id="process" className="relative py-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono tracking-wider uppercase font-semibold">
            <span>Engineering & Security Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061B36] tracking-tight">
            How We Build & <span className="text-[#FF5A1F]">Secure</span>
          </h2>
          <p className="text-lg text-slate-600">
            A 5-phase DevSecOps framework that ensures rapid feature delivery without opening your product to security exploits.
          </p>
        </div>

        {/* Timeline Stepper Navigation */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-[#FF5A1F] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / (processData.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {processData.map((step: ProcessStep, idx: number) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "border-2 border-[#FF5A1F] shadow-lg bg-white"
                      : "border border-slate-200 bg-white/80 hover:bg-white text-slate-600"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm mb-3 transition-colors ${
                      isActive
                        ? "bg-coral text-white shadow-coral-sm"
                        : isPast
                        ? "bg-slate-100 text-[#FF5A1F] border border-slate-300"
                        : "bg-slate-100 text-slate-500 border border-slate-200"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <span className={`text-xs font-bold ${isActive ? "text-[#FF5A1F]" : "text-[#061B36]"}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Breakdown Card for Active Step */}
        <motion.div
          key={activeStep.stepNumber}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Description & Security Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                {processIconMap[activeStep.iconName]}
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF5A1F] font-bold uppercase">PHASE {activeStep.stepNumber} OF 05</span>
                <h3 className="text-2xl font-bold text-[#061B36]">{activeStep.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              {activeStep.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase tracking-wide font-semibold">Security Defense Milestone</span>
                <span className="text-sm font-semibold text-[#061B36] font-mono">{activeStep.securityFocus}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Deliverables List */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h4 className="text-sm font-bold text-[#061B36] uppercase tracking-wider font-mono flex items-center justify-between">
              <span>Phase Deliverables</span>
              <span className="text-[#FF5A1F] text-xs font-mono font-bold">Verified</span>
            </h4>

            <ul className="space-y-3">
              {activeStep.deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
