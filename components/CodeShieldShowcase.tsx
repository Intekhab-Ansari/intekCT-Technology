"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  CheckCircle, 
  Zap, 
  ArrowRightLeft,
  UserCheck,
  CreditCard
} from "lucide-react";

export const CodeShieldShowcase: React.FC = () => {
  const [activeElement, setActiveElement] = useState<"auth" | "payment" | "data">("auth");

  return (
    <section className="relative py-16 bg-[#041327] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2240] border border-slate-700 text-slate-300 text-xs font-mono tracking-wider uppercase">
            <ArrowRightLeft className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>How We Protect Your App</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beautiful Design. <span className="text-coral-gradient">Locked Down Security.</span>
          </h2>

          {/* Selector Tabs */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveElement("auth")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeElement === "auth"
                  ? "bg-coral text-white shadow-coral-sm"
                  : "bg-[#0B2240] text-slate-400 hover:text-white"
              }`}
            >
              1. Login & Accounts
            </button>
            <button
              onClick={() => setActiveElement("payment")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeElement === "payment"
                  ? "bg-coral text-white shadow-coral-sm"
                  : "bg-[#0B2240] text-slate-400 hover:text-white"
              }`}
            >
              2. Payments
            </button>
            <button
              onClick={() => setActiveElement("data")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeElement === "data"
                  ? "bg-coral text-white shadow-coral-sm"
                  : "bg-[#0B2240] text-slate-400 hover:text-white"
              }`}
            >
              3. Data & Analytics
            </button>
          </div>
        </div>

        {/* Side-by-Side Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Panel: Frontend UI Component Mockup */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0B2240] border border-slate-800 p-6 shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
                Client Presentation Layer (Next.js 14)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                Lighthouse: 99
              </span>
            </div>

            {/* Content per Tab */}
            {activeElement === "auth" && (
              <div className="space-y-4 bg-[#061B36] p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <UserCheck className="w-5 h-5 text-[#FF5A1F]" />
                  <span className="text-sm font-bold text-white">Single Sign-On Dashboard</span>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-400">User Email Address</label>
                  <div className="w-full bg-[#040D1A] px-3 py-2 rounded text-xs text-slate-200 font-mono border border-slate-800">
                    alex.morgan@apexvault.com
                  </div>
                </div>
                <button className="w-full py-2.5 bg-coral text-white font-bold text-xs rounded-lg shadow-coral-sm flex items-center justify-center gap-2">
                  <span>Sign In with Passkey</span>
                  <Lock className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {activeElement === "payment" && (
              <div className="space-y-4 bg-[#061B36] p-5 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <CreditCard className="w-5 h-5 text-[#FF5A1F]" />
                    <span>Tokenized Checkout</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">256-Bit Encrypted</span>
                </div>
                <div className="bg-[#040D1A] p-3 rounded border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-mono">•••• •••• •••• 9012</span>
                  <span className="text-[#00F2FE] font-mono">CVV Valid</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-slate-400">Total Charged:</span>
                  <span className="text-white font-bold font-mono">$4,900.00 USD</span>
                </div>
              </div>
            )}

            {activeElement === "data" && (
              <div className="space-y-4 bg-[#061B36] p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-sm font-bold text-white">
                  <Database className="w-5 h-5 text-[#00F2FE]" />
                  <span>Real-time Telemetry Analytics</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#040D1A] p-3 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px]">Requests Processed</span>
                    <p className="text-base font-bold text-white font-mono mt-1">1.4M / sec</p>
                  </div>
                  <div className="bg-[#040D1A] p-3 rounded border border-slate-800">
                    <span className="text-slate-400 text-[10px]">Edge Latency</span>
                    <p className="text-base font-bold text-emerald-400 font-mono mt-1">8.2 ms</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs text-[#00F2FE] font-mono">
              <Zap className="w-4 h-4" />
              <span>UI rendered via React Server Components & Framer Motion</span>
            </div>
          </div>

          {/* Right Panel: Corresponding Backend & Security Shield Code */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0B2240] border border-[#00F2FE]/40 p-6 shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-[#00F2FE] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00F2FE]" />
                Backend Security & Threat Mitigation Layer
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                Active Shield
              </span>
            </div>

            {/* Backend Verification Snippet per Tab */}
            <div className="bg-[#040D1A] p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
              {activeElement === "auth" && (
                <>
                  <p className="text-slate-500">{"// Zero-Trust OAuth2 & JWKS Token Verification"}</p>
                  <p className="text-cyan-400">const <span className="text-amber-300">claims</span> = await <span className="text-emerald-300">JWKS.verify</span>(jwtToken, &#123;</p>
                  <p className="pl-4 text-slate-300">issuer: <span className="text-emerald-400">&quot;https://auth.intekct.com&quot;</span>,</p>
                  <p className="pl-4 text-slate-300">algorithms: [<span className="text-emerald-400">&quot;RS256&quot;</span>],</p>
                  <p className="text-cyan-400">&#125;);</p>
                  <p className="text-emerald-400">{"// Audit: 0 Unauthorized Privilege Escalation"}</p>
                </>
              )}

              {activeElement === "payment" && (
                <>
                  <p className="text-slate-500">{"// KMS Payload Envelope Encryption (AES-256-GCM)"}</p>
                  <p className="text-cyan-400">const <span className="text-amber-300">cipher</span> = <span className="text-emerald-300">crypto.createCipheriv</span>(</p>
                  <p className="pl-4 text-slate-300"><span className="text-emerald-400">&quot;aes-256-gcm&quot;</span>, kmsKey, nonce</p>
                  <p className="text-cyan-400">);</p>
                  <p className="text-emerald-400">{"// PCI-DSS Level 1 Compliant Vault Storage"}</p>
                </>
              )}

              {activeElement === "data" && (
                <>
                  <p className="text-slate-500">{"// Prepared Statement Parameterized Query (No SQL Injection)"}</p>
                  <p className="text-cyan-400">const result = await <span className="text-emerald-300">prisma.analytics.findMany</span>(&#123;</p>
                  <p className="pl-4 text-slate-300">where: &#123; tenantId: <span className="text-amber-300">sanitized(req.tenant)</span> &#125;,</p>
                  <p className="text-cyan-400">&#125;);</p>
                  <p className="text-emerald-400">{"// WAF Rate-Limiting: Allowed 200/200 reqs"}</p>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300 bg-[#061B36] p-3 rounded-xl border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Automated SAST & OWASP Top 10 Sanitization Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
