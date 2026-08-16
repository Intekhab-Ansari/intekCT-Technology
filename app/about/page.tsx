import type { Metadata } from "next";
import { WhyIntekCT } from "@/components/WhyIntekCT";
import { MeetDeveloper } from "@/components/MeetDeveloper";
import { Testimonials } from "@/components/Testimonials";
import { AIAssistantSection } from "@/components/AIAssistantSection";

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[#061B36] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#FF5A1F]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00F2FE]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
            <span className="text-[#FF5A1F] font-bold">★</span>
            <span>WHO WE ARE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            About <span className="text-coral-gradient">IntekCT</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re a security-first development studio that builds digital products
            your business can rely on — from day one.
          </p>
        </div>
      </section>

      {/* Meet Your Developer Showcase */}
      <MeetDeveloper />

      <WhyIntekCT />
      <Testimonials />
      <AIAssistantSection />
    </div>
  );
}
