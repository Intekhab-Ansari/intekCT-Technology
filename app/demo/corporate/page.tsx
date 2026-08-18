"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Building2,
  ShieldCheck,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
  X,
  Check,
  FileSpreadsheet,
  TrendingUp,
  Server,
  Layers,
  Award,
  Send,
  Zap,
} from "lucide-react";

interface SolutionItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  features: string[];
  metrics: string;
  icon: any;
}

const solutions: SolutionItem[] = [
  {
    id: "ai-enterprise",
    title: "Enterprise Generative AI & Autonomous LLM Pipelines",
    category: "Artificial Intelligence",
    desc: "Custom on-premise & private-cloud LLM fine-tuning, RAG enterprise search engines, and multi-agent workflow orchestration with military-grade data sandboxing.",
    features: [
      "Zero-Data-Leakage Private LLM Hosting",
      "Vector Search & Hybrid Retrieval Pipelines",
      "Automated Compliance & Hallucination Guardrails",
      "Enterprise Slack / Teams Bot Orchestration",
    ],
    metrics: "4.8x Efficiency Boost in Operations",
    icon: Cpu,
  },
  {
    id: "cloud-modernization",
    title: "Multi-Cloud Migration & Kubernetes Cloud-Native Ops",
    category: "Cloud Engineering",
    desc: "Architecting resilient, hyper-scale cloud ecosystems across AWS, GCP, and Azure with automated zero-downtime CI/CD and FinOps cost governance.",
    features: [
      "Terraform Infrastructure-as-Code (IaC)",
      "Multi-Region Active-Active Failover",
      "Kubernetes (EKS/GKE) Auto-Scaling Clusters",
      "FinOps Cloud Cost Optimization (Save up to 40%)",
    ],
    metrics: "99.999% SLA Uptime Guarantee",
    icon: Cloud,
  },
  {
    id: "cybersecurity",
    title: "Zero-Trust Architecture & Threat Intelligence",
    category: "Security & Risk",
    desc: "Comprehensive perimeter defense, end-to-end encryption, automated penetration testing, and continuous compliance for SOC2 Type II, ISO 27001, and HIPAA.",
    features: [
      "Zero-Trust Identity & Access Management (IAM)",
      "Continuous DevSecOps Vulnerability Scanners",
      "SOC 2 Type II & GDPR Audit Readiness",
      "24/7 Red Team Simulated Cyber Attacks",
    ],
    metrics: "0 Security Breaches Across 500+ Deployments",
    icon: Lock,
  },
  {
    id: "fintech-core",
    title: "High-Throughput Fintech & Core Banking Modernization",
    category: "Fintech Systems",
    desc: "Sub-millisecond ledger systems, ISO 20022 compliant payment gateways, fraud detection engines, and high-frequency trading infrastructure.",
    features: [
      "Distributed Event-Driven Kafka Microservices",
      "Real-time AI Transaction Fraud Detection",
      "Multi-Currency Payment Gateway Integrations",
      "PCI-DSS Level 1 Certified Architecture",
    ],
    metrics: "120,000+ Transactions Per Second",
    icon: BarChart3,
  },
];

const caseStudies = [
  {
    client: "Global Fintech Neo-Bank",
    industry: "Financial Services",
    challenge: "Legacy monolithic payment gateway struggling under 50M daily transactions during peak festival sales.",
    solution: "Migrated to distributed event-driven microservices on AWS EKS with Redis enterprise caching.",
    impact: "+340% throughput increase, $3.2M annual server cost savings, and 0 dropped transactions.",
    badge: "Case Study 01",
  },
  {
    client: "Fortune 100 Supply Chain Logistics",
    industry: "Logistics & IoT",
    challenge: "Disjointed tracking across 12,000 global shipping containers causing $18M in delayed customs clearance.",
    solution: "Deployed edge IoT sensor telemetry linked with real-time predictive ML routes on Google Cloud.",
    impact: "Reduced delivery delays by 42% and automated 95% of international customs documentation.",
    badge: "Case Study 02",
  },
  {
    client: "National Telehealth Health Network",
    industry: "Healthcare Systems",
    challenge: "Fragmented patient records across 40 hospitals leading to compliance audit failures and delayed triage.",
    solution: "Engineered a unified HIPAA-compliant FHIR data lake with real-time patient history AI assistant.",
    impact: "65% faster ER patient intake times and 100% compliance audit pass rate.",
    badge: "Case Study 03",
  },
];

const leadership = [
  {
    name: "Alexander Vance",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Former VP of Engineering at Cisco. 20+ years leading enterprise digital transformations across North America & Europe.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Distributed Systems from MIT. Pioneer in high-concurrency microservices and quantum-safe cryptographic protocols.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Intekhab Ansari",
    role: "Principal Solutions Architect",
    bio: "Full-stack cloud visionary, specialized in React, Next.js, and high-performance resilient cloud infrastructure.",
    image: "/intekhab-developer.jpg",
  },
];

export default function CorporateDemoPage() {
  const [activeSolutionId, setActiveSolutionId] = useState<string>("ai-enterprise");
  const [rfpModalOpen, setRfpModalOpen] = useState(false);
  const [rfpSuccess, setRfpSuccess] = useState(false);

  // Interactive ROI Estimator State
  const [teamSize, setTeamSize] = useState<number>(25);
  const [cloudBudget, setCloudBudget] = useState<number>(50000); // USD / month
  const [modernizationPillar, setModernizationPillar] = useState<"ai" | "cloud" | "security">("cloud");

  // Form state
  const [rfpForm, setRfpForm] = useState({
    name: "",
    workEmail: "",
    company: "",
    phone: "",
    projectScope: "Cloud Migration & Infrastructure Modernization",
    budgetRange: "$25,000 – $50,000",
    timeline: "3–6 Months",
    notes: "",
  });

  const activeSolution = solutions.find((s) => s.id === activeSolutionId) || solutions[0];

  // Calculate estimated ROI
  const calculateEstimatedSavings = () => {
    const annualSpend = cloudBudget * 12;
    const estimatedSavingsPercentage = modernizationPillar === "cloud" ? 0.35 : modernizationPillar === "ai" ? 0.45 : 0.25;
    const annualSavings = Math.round(annualSpend * estimatedSavingsPercentage);
    const engineeringHoursSaved = teamSize * 380; // hours per year
    return {
      annualSavings,
      engineeringHoursSaved,
    };
  };

  const { annualSavings, engineeringHoursSaved } = calculateEstimatedSavings();

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfpSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#040812] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Demo Showcase Control Bar */}
      <DemoTopBar
        templateName="Apexia Global Enterprise"
        category="Corporate & B2B IT"
        deliveryTime="7–10 Days"
        priceFrom="₹16,000"
      />

      {/* Corporate Header */}
      <header className="sticky top-[38px] z-40 bg-[#060D1F]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-none">
                APEXIA<span className="text-cyan-400">GLOBAL</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-slate-400">
                Enterprise Cloud & AI Solutions
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions Matrix</a>
            <a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">ROI Estimator</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#leadership" className="hover:text-cyan-400 transition-colors">Leadership</a>
            <a href="#offices" className="hover:text-cyan-400 transition-colors">Global Hubs</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919594292262?text=Hello%20Apexia%20Global,%20we%20would%20like%20to%20schedule%20an%20enterprise%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Hotline</span>
            </a>

            <button
              onClick={() => {
                setRfpModalOpen(true);
                setRfpSuccess(false);
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Request RFP / Proposal</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Trusted by Fortune 500 & High-Growth Unicorns</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecting Resilient Cloud, AI & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Enterprise Digital Infrastructure
            </span>
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            We partner with CTOs, CIOs, and engineering leaders to design mission-critical cloud pipelines, private LLM agents, and zero-trust security ecosystems with guaranteed 99.999% SLA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setRfpModalOpen(true);
                setRfpSuccess(false);
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
            >
              Schedule Enterprise Discovery Call
            </button>
            <a
              href="#roi-calculator"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Calculate Cloud & AI ROI
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">$4.2B+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Enterprise Value Created</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-blue-400">99.999%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Uptime Reliability SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-teal-400">500+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Microservices in Prod</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">SOC2 / ISO</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Certified Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Matrix Section */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#02060F] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
              Enterprise Engineering Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              End-to-End Strategic Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Battle-tested engineering frameworks tailored for high-concurrency enterprise workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Tabs List */}
            <div className="lg:col-span-5 space-y-3">
              {solutions.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === activeSolutionId;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveSolutionId(item.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500 shadow-lg shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-blue-600 text-white" : "bg-white/5 text-slate-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] uppercase font-bold text-cyan-400 font-mono block">
                          {item.category}
                        </span>
                        <h3 className={`text-sm font-bold mt-0.5 ${isSelected ? "text-white" : "text-slate-300"}`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Detailed Solution Breakdown */}
            <div className="lg:col-span-7 bg-[#071126] border border-blue-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <span className="px-3 py-1 rounded-md bg-blue-500/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  {activeSolution.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                  {activeSolution.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeSolution.desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                  Key Architecture Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-mono block">Benchmark Outcome:</span>
                  <span className="text-sm sm:text-base font-black text-cyan-300">{activeSolution.metrics}</span>
                </div>
                <button
                  onClick={() => {
                    setRfpForm({ ...rfpForm, projectScope: activeSolution.title });
                    setRfpModalOpen(true);
                    setRfpSuccess(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shrink-0"
                >
                  Consult on this Architecture
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Enterprise ROI & Cost Estimator */}
      <section id="roi-calculator" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
              Quantitative Business Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Enterprise ROI & Efficiency Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Estimate your annual infrastructure cost reduction and engineering hours reclaimed through our modern cloud & AI stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#071126] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-2">
                  1. Select Modernization Priority
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { key: "cloud", label: "Multi-Cloud & FinOps", icon: Cloud },
                    { key: "ai", label: "Enterprise AI & RAG", icon: Cpu },
                    { key: "security", label: "Zero-Trust & Cyber", icon: Lock },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.key}
                        onClick={() => setModernizationPillar(p.key as any)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          modernizationPillar === p.key
                            ? "bg-blue-600/20 border-cyan-400 text-white"
                            : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                        }`}
                      >
                        <Icon className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                        <span className="text-[11px] font-bold block">{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>Current Monthly Cloud / Server Spend:</span>
                  <span className="text-cyan-400 font-mono text-sm">${cloudBudget.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={cloudBudget}
                  onChange={(e) => setCloudBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>$5,000/mo</span>
                  <span>$100,000/mo</span>
                  <span>$200,000+/mo</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>In-House Engineering Team Scale:</span>
                  <span className="text-cyan-400 font-mono text-sm">{teamSize} Engineers</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>5 Engineers</span>
                  <span>75 Engineers</span>
                  <span>150+ Engineers</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-blue-600/20 via-slate-900 to-black border border-cyan-400/40 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 font-mono block">
                  Projected Enterprise Savings
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-2">
                  ${annualSavings.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ year</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Estimated direct cloud infrastructure cost reduction through Kubernetes autoscaling, serverless microservices, and FinOps policies.
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dev Hours Saved:</span>
                    <strong className="text-white font-mono">{engineeringHoursSaved.toLocaleString()} hrs / yr</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Deployment Velocity:</span>
                    <strong className="text-emerald-400 font-semibold">+3.8x Faster Releases</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average Payback Period:</span>
                    <strong className="text-white">Under 90 Days</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setRfpModalOpen(true);
                  setRfpSuccess(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
              >
                Claim Detailed Architecture Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#02060F] border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-mono block mb-1">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Enterprise Case Studies & Transformations
              </h2>
            </div>
            <div className="text-xs text-slate-400">
              Verified client deployments across fintech, supply chain, and health systems.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#071126] border border-white/10 hover:border-blue-500/50 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 text-[10px] font-mono font-bold">
                      {c.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{c.industry}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{c.client}</h3>

                  <div className="text-xs space-y-2 text-slate-300">
                    <p><strong className="text-slate-100">Challenge:</strong> {c.challenge}</p>
                    <p><strong className="text-cyan-400">Solution:</strong> {c.solution}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs font-semibold text-emerald-400">
                  ⚡ {c.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Principal Architects */}
      <section id="leadership" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
              Executive Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Led by Industry Veterans & Systems Architects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#071126] border border-white/10 text-center space-y-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-cyan-400/50 shadow-xl">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{leader.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">{leader.role}</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Hubs */}
      <section id="offices" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#02060F] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { city: "New York", address: "One World Trade Center, Floor 64", timezone: "EST (UTC-5)" },
              { city: "London", address: "30 St Mary Axe (The Gherkin)", timezone: "GMT (UTC+0)" },
              { city: "Bengaluru", address: "Indiranagar Tech Boulevard", timezone: "IST (UTC+5:30)" },
              { city: "Singapore", address: "Marina Bay Financial Centre", timezone: "SGT (UTC+8)" },
            ].map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <h4 className="font-bold text-white text-sm">{hub.city}</h4>
                <p className="text-[11px] text-slate-400">{hub.address}</p>
                <p className="text-[10px] font-mono text-cyan-400">{hub.timezone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request RFP / Proposal Modal */}
      {rfpModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#071126] border border-cyan-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setRfpModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {rfpSuccess ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center mx-auto text-cyan-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">RFP Proposal Request Dispatched!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-cyan-400">{rfpForm.name || "Executive"}</strong> at <strong className="text-white">{rfpForm.company || "Enterprise"}</strong>. A dedicated Solutions Director and NDA documentation have been dispatched to <strong className="text-cyan-300">{rfpForm.workEmail || "your email"}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setRfpModalOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                  >
                    Close & Return to Dashboard
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRfpSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest font-mono">
                    Confidential Enterprise Intake
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Request RFP / Architecture Proposal</h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Full Name & Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams, VP of Engineering"
                      value={rfpForm.name}
                      onChange={(e) => setRfpForm({ ...rfpForm, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="radams@company.com"
                        value={rfpForm.workEmail}
                        onChange={(e) => setRfpForm({ ...rfpForm, workEmail: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Fintech Corp"
                        value={rfpForm.company}
                        onChange={(e) => setRfpForm({ ...rfpForm, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Project Scope</label>
                      <select
                        value={rfpForm.projectScope}
                        onChange={(e) => setRfpForm({ ...rfpForm, projectScope: e.target.value })}
                        className="w-full bg-[#0E1A33] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Enterprise AI & LLM">Enterprise AI & LLM Systems</option>
                        <option value="Cloud Migration">Multi-Cloud Migration & Kubernetes</option>
                        <option value="Zero-Trust Cyber">Zero-Trust Cybersecurity & SOC2</option>
                        <option value="Fintech Architecture">High-Throughput Fintech Core</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Timeline</label>
                      <select
                        value={rfpForm.timeline}
                        onChange={(e) => setRfpForm({ ...rfpForm, timeline: e.target.value })}
                        className="w-full bg-[#0E1A33] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Immediate (1-3 Mo)">Immediate (1–3 Months)</option>
                        <option value="3-6 Months">3–6 Months</option>
                        <option value="Q3/Q4 Roadmap">Future Fiscal Roadmap</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit RFP & Execute Mutual NDA</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                    Protected under enterprise grade 256-bit encryption.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
