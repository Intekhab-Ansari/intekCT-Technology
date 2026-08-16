"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { 
  Send, 
  Calendar, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock,
  Phone,
  MessageSquare,
  Instagram,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { companyData } from "@/data/company";

const ContactFormInner: React.FC = () => {
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template");
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    service: "Full Stack Web App Development",
    message: "",
  });

  useEffect(() => {
    if (templateParam) {
      setFormData((prev) => ({
        ...prev,
        service: `Demo Website Customization (${templateParam})`,
        message: prev.message || `Hello IntekCT team, I am interested in customizing the "${templateParam}" demo website template for my business. Please share details and pricing.`,
      }));
    } else if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam,
      }));
    }
  }, [templateParam, serviceParam]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessMessage(data.message || "Thank you! Our engineering team will contact you within 2 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          service: "Full Stack Web App Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network connection issue. Please try again or use WhatsApp.");
    }
  };

  return (
    <section id="contact" className="relative py-16 bg-[#041327]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Calendar Booking Teaser */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2240] border border-slate-700 text-slate-300 text-xs font-mono tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>Start Your Project</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready To Build A <br />
                <span className="text-coral-gradient">Robust Software Solution?</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Tell us about your requirements, timeline, or security goals. We respond within 2 hours.
              </p>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <div className="rounded-2xl bg-[#0B2240] border border-emerald-500/30 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Instant WhatsApp Connect</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/20">
                  Fastest Response
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer chatting directly? Message our engineering desk for immediate estimates and project consultation.
              </p>

              <a
                href="https://wa.me/919594292262?text=Hello%20IntekCT,%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: +91 9594292262</span>
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call / WhatsApp: +91 95942 92262</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF5A1F]" />
                <span>{companyData.contactEmail}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00F2FE]" />
                <span>Response Time: &lt; 2 Hours (Mon - Sun)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Instagram @intekct"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B2240] border border-slate-800 p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Mobile Phone & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mobile / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 95942 92262"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold">Your Budget <span className="text-slate-500 font-normal">(optional)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. $3,000 or ₹50,000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 font-semibold">Primary Service / Template Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Full Stack Web App Development">Full Stack Web App Development</option>
                  <option value="Demo Website Customization (Doctor / Clinic)">Demo Website Customization: Doctor / Clinic</option>
                  <option value="Demo Website Customization (Advocate / Law Firm)">Demo Website Customization: Advocate / Law Firm</option>
                  <option value="Demo Website Customization (Restaurant / Café)">Demo Website Customization: Restaurant / Café</option>
                  <option value="Demo Website Customization (E-Commerce Store)">Demo Website Customization: E-Commerce Store</option>
                  <option value="Demo Website Customization (Real Estate Agency)">Demo Website Customization: Real Estate Agency</option>
                  <option value="Demo Website Customization (Gym & Fitness)">Demo Website Customization: Gym & Fitness</option>
                  <option value="Penetration Testing & Security Audit">Penetration Testing & Vulnerability Audit</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Other Custom Project">Other Custom Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 font-semibold">Project Overview & Goals *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your product vision, key features, target deadline, or current security concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#061B36] border border-slate-800 focus:border-[#FF5A1F] rounded-xl p-4 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA Button (Vibrant Coral) */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-coral hover:bg-coral-hover text-white font-bold text-base shadow-coral transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Dispatching Inquiry...</span>
                ) : (
                  <>
                    <span>Start Your Project Inquiry</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-400 font-mono text-xs">
          Loading contact form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
};
