"use client";

import React from "react";
import Link from "next/link";
import { Shield, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { companyData } from "@/data/company";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040D1A] border-t border-slate-800/80 pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B2240] border border-slate-700">
                <Shield className="w-5 h-5 text-[#00F2FE]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Intek<span className="text-[#00F2FE]">CT</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2240] text-xs font-mono text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{companyData.systemStatus}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Demo Sites</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">How We Work</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">Capabilities</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Full Stack App Dev</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Secure API Engineering</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Automated CI/CD Pipelines</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cloud Security Infra</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Start a Project →</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">Connect</h4>
            <p className="text-xs text-slate-400 font-mono">{companyData.contactEmail}</p>
            <p className="text-xs text-slate-400 font-mono">{companyData.location}</p>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B2240] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} IntekCT Inc. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5A1F]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
