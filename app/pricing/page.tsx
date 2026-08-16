import type { Metadata } from "next";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | IntekCT Technologies",
  description:
    "Simple, transparent pricing for web development and security services. Choose the package that fits your business and budget.",
  openGraph: {
    title: "Pricing | IntekCT Technologies",
    description:
      "No hidden fees. Pick the plan that fits. IntekCT pricing for websites, web apps, and security packages.",
    url: "https://intekct.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[#061B36] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5A1F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
            <span className="text-[#FF5A1F] font-bold">$</span>
            <span>SIMPLE PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Transparent <span className="text-coral-gradient">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No surprises, no hidden fees. Choose the package that fits your vision —
            we handle the rest.
          </p>
        </div>
      </section>

      <PricingSection />
    </div>
  );
}
