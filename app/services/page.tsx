import type { Metadata } from "next";
import { ServicesMatrix } from "@/components/ServicesMatrix";
import { CodeShieldShowcase } from "@/components/CodeShieldShowcase";

export const metadata: Metadata = {
  title: "Web Engineering & Cybersecurity Services | IntekCT Technologies",
  description:
    "End-to-end full-stack web engineering, custom Next.js/React applications, e-commerce storefronts, DevSecOps pipelines, penetration testing, and AWS/Cloudflare architecture.",
  keywords: [
    "Web Engineering Services",
    "Custom Web Development India",
    "Next.js Development Agency",
    "DevSecOps Engineering",
    "Penetration Testing Services",
    "E-Commerce Web Development",
    "API Development & Integration",
    "Cloud Architecture & Security",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Engineering & Cybersecurity Services | IntekCT Technologies",
    description:
      "Full-stack web development, DevSecOps, cloud security, and more. Explore what IntekCT builds for you.",
    url: "https://intekct.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[#061B36] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#00F2FE]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF5A1F]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
            <span className="text-[#00F2FE] font-bold">&lt; / &gt;</span>
            <span>WHAT WE DO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Our <span className="text-cyan-gradient">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From simple business websites to complex web apps — we design, build, and protect
            digital products that help your business grow.
          </p>
        </div>
      </section>

      <ServicesMatrix />
      <CodeShieldShowcase />
    </div>
  );
}
