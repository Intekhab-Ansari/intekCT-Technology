"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Scale,
  Shield,
  BookOpen,
  Award,
  Phone,
  Clock,
  CheckCircle2,
  X,
  ArrowRight,
  Gavel,
  Briefcase,
  FileCheck,
  Building2,
  Sparkles,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  desc: string;
  casesWon: string;
  icon: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "corporate",
    title: "Corporate M&A & Commercial Law",
    desc: "Cross-border mergers, commercial contract disputes, NCLT insolvency proceedings, and shareholder agreements.",
    casesWon: "₹350+ Cr Protected",
    icon: <Building2 className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "criminal",
    title: "White-Collar & Criminal Defense",
    desc: "CBI / ED investigations, anticipatory bail applications, financial fraud defense, and high-stakes trials.",
    casesWon: "99.1% Bail Success",
    icon: <Shield className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "litigation",
    title: "Supreme Court & High Court Appeals",
    desc: "Special Leave Petitions (SLPs), Constitutional writ petitions, appellate advocacy, and judicial review.",
    casesWon: "1,200+ Rulings",
    icon: <Gavel className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "property",
    title: "Real Estate & Title Litigation",
    desc: "Land acquisition disputes, RERA tribunal representation, ancestral partition suits, and conveyance.",
    casesWon: "₹180+ Cr Settled",
    icon: <FileCheck className="w-6 h-6 text-amber-400" />,
  },
];

const attorneys = [
  {
    name: "Adv. Rajeshwar Singhania",
    role: "Senior Managing Partner",
    qualifications: "LL.M. (Harvard Law), Bar Council of India",
    experience: "26+ Years Experience",
    specialization: "Supreme Court Litigation & White-Collar Crime",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=75",
  },
  {
    name: "Adv. Meera Chawla",
    role: "Lead Corporate Partner",
    qualifications: "B.A. LL.B. (Hons) NLSIU Bangalore",
    experience: "16+ Years Experience",
    specialization: "NCLT Insolvency, Banking & M&A",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=75",
  },
  {
    name: "Adv. Vikramaditya Rathore",
    role: "Partner – Criminal Defense",
    qualifications: "LL.M. (Criminal Jurisprudence)",
    experience: "19+ Years Experience",
    specialization: "Anticipatory Bail & Trial Advocacy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
  },
];

export default function AdvocateDemoPage() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState("Corporate M&A & Commercial Law");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    matterType: "White-Collar & Criminal Defense",
    urgency: "Immediate (Within 24 Hours)",
    notes: "",
  });

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setConsultModalOpen(false);
      setFormData({ name: "", phone: "", matterType: "White-Collar & Criminal Defense", urgency: "Immediate (Within 24 Hours)", notes: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 font-sans antialiased">
      {/* Top Demo Sticky Bar */}
      <DemoTopBar
        templateName="LexShield Legal Advocates & Solicitors"
        category="Advocate / Law Firm"
        priceFrom="₹18,000"
        deliveryTime="7–10 Days"
      />

      {/* Supreme Court Registry & Emergency Bail Hotline */}
      <div className="bg-[#0D131F] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Phone className="w-3.5 h-3.5" />
              Confidential Legal Hotline: <strong>+91 95942 92262</strong>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <BadgeCheck className="w-3.5 h-3.5 text-amber-400" />
              Supreme Court & High Court Bar Council Accredited
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Chambers Open
            </span>
            <a
              href="https://wa.me/919594292262?text=Confidential%20Legal%20Consultation%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Urgent WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Law Firm Header */}
      <header className="bg-[#070A10]/95 backdrop-blur-md border-b border-amber-500/20 sticky top-[41px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Lex<span className="text-amber-400">Shield</span>
              </span>
              <p className="text-[10px] font-mono text-amber-300/80 uppercase tracking-widest font-semibold">
                Advocates & Legal Solicitors
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#practices" className="hover:text-amber-400 transition-colors">Practice Areas</a>
            <a href="#attorneys" className="hover:text-amber-400 transition-colors">Senior Partners</a>
            <a href="#results" className="hover:text-amber-400 transition-colors">Track Record</a>
            <a href="#credentials" className="hover:text-amber-400 transition-colors">Chambers</a>
          </nav>

          <button
            onClick={() => setConsultModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Gavel className="w-4 h-4" />
            <span>Case Evaluation</span>
          </button>
        </div>
      </header>

      {/* Editorial Prestige Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0D131F] via-[#070A10] to-[#070A10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Premier Appellate & High Court Counsel</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Unwavering Defense.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  Commanding Authority.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Providing strategic litigation counsel, corporate governance, and white-collar defense
                before the Supreme Court of India, High Courts, and National Tribunals.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setConsultModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Gavel className="w-4 h-4" />
                  <span>Request Case Consultation</span>
                </button>
                <a
                  href="tel:+919594292262"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-amber-400/50 text-slate-200 font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Confidential Hotline</span>
                </a>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-amber-400">₹350Cr+</p>
                  <p>Assets Defended</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">98.6%</p>
                  <p>Favorable Verdicts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-400">26+ Yrs</p>
                  <p>Courtroom Prowess</p>
                </div>
              </div>
            </div>

            {/* Right Chambers Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#0D131F] p-4 shadow-2xl border border-amber-500/30 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                    alt="Law firm courtroom litigation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D131F]/90 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Adv. Rajeshwar Singhania</p>
                      <p className="text-[11px] text-amber-400 font-semibold">Senior Supreme Court Advocate</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300">
                      Chambers Lead
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="font-semibold flex items-center gap-1.5 text-amber-400">
                      <Shield className="w-4 h-4" />
                      100% Attorney-Client Privilege
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Strict Confidentiality</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    All case evaluations, document reviews, and strategy sessions are legally protected under the Advocates Act.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="py-20 bg-[#0A0F1A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-amber-400">
              STRATEGIC PRACTICE DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Areas of Specialized Counsel
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Handling high-stakes litigation, constitutional challenges, and commercial disputes with uncompromising rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="p-8 rounded-3xl bg-[#0D1424] border border-white/10 hover:border-amber-500/40 transition-all duration-300 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    {area.icon}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {area.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {area.casesWon}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedPractice(area.title);
                      setConsultModalOpen(true);
                    }}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Schedule Case Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Attorneys */}
      <section id="attorneys" className="py-20 bg-[#070A10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-amber-400">
                DISTINGUISHED ADVOCATES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Senior Partners & Counsel
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Bar Council of India • Supreme Court Bar Association
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attorneys.map((att, i) => (
              <div
                key={i}
                className="rounded-3xl bg-[#0D1424] border border-white/10 overflow-hidden shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 bg-slate-900 overflow-hidden">
                    <Image
                      src={att.image}
                      alt={att.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#070A10]/90 backdrop-blur-md border border-white/10 text-amber-400">
                      {att.experience}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-white">{att.name}</h3>
                    <p className="text-xs font-semibold text-amber-400">{att.role}</p>
                    <p className="text-xs text-slate-400">{att.qualifications}</p>
                    <p className="text-xs text-slate-300 font-mono pt-2 border-t border-white/5">
                      Focus: {att.specialization}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setSelectedPractice(att.specialization);
                      setConsultModalOpen(true);
                    }}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs border border-white/10 transition-all"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Evaluation Modal */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0D1424] rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-500/30 text-white">
            <button
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Case Evaluation Request Received</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Our Senior Partner Desk will review your matter and reach out within 2 hours under strict attorney-client privilege.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase font-mono">
                    CONFIDENTIAL LEGAL INTAKE
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Book Confidential Case Evaluation
                  </h3>
                  <p className="text-xs text-slate-400">Strict Attorney-Client Privilege Guaranteed</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070A10] text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Direct Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070A10] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Matter Type</label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070A10] text-xs text-white focus:outline-none"
                    >
                      <option value="Corporate M&A & Commercial Law">Corporate & Commercial</option>
                      <option value="White-Collar & Criminal Defense">Criminal / Bail Defense</option>
                      <option value="Supreme Court & High Court Appeals">High Court / Supreme Court</option>
                      <option value="Real Estate & Title Litigation">Property Dispute</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Urgency Level</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070A10] text-xs text-white focus:outline-none"
                    >
                      <option value="Immediate (Within 2 Hours)">Immediate (&lt; 2 Hours)</option>
                      <option value="Within 24 Hours">Within 24 Hours</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Brief Overview of Legal Issue</label>
                  <textarea
                    rows={3}
                    placeholder="Provide a summary of the case, current court status, or investigation notices..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070A10] text-xs text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20"
                >
                  Submit for Senior Partner Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#05070B] text-slate-400 py-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Scale className="w-5 h-5 text-amber-400" />
                <span>LexShield Legal Chambers</span>
              </div>
              <p className="leading-relaxed">
                Advocate & Law Firm demo website created by IntekCT Technologies. Ready to customize with your firm&apos;s practice areas, attorney roster, and lead intake CRM.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Litigation Chambers</h4>
              <p className="leading-relaxed">
                Chamber 402, High Court Lawyers Complex<br />
                Supreme Court Bar Enclave<br />
                Direct Desk: +91 95942 92262
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Legal Disclaimer</h4>
              <p className="leading-relaxed">
                As per the rules of the Bar Council of India, this website is intended solely for informational purposes and does not solicit work or advertise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Practice Jurisdiction</h4>
              <p className="leading-relaxed">
                Supreme Court of India, Delhi High Court, Bombay High Court, NCLT, NCLAT & DRT.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 LexShield Advocates Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-amber-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
