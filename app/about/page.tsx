import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About Us | IntekCT Technologies",
  description:
    "Learn why clients choose IntekCT — our values, what sets us apart, our AI-powered tools, and what our clients say about working with us.",
  openGraph: {
    title: "About Us | IntekCT Technologies",
    description:
      "What makes IntekCT different — security-first culture, AI-enhanced workflows, and happy clients.",
    url: "https://intekct.com/about",
  },
};

// ─── Loading Skeleton ──────────────────────────────────────────────────────────
const SectionSkeleton = ({ height = "400px" }: { height?: string }) => (
  <div className="w-full flex items-center justify-center" style={{ minHeight: height }}>
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-[#00F2FE]/30 border-t-[#00F2FE] animate-spin" />
      <span className="text-xs font-mono text-slate-400 animate-pulse">Loading…</span>
    </div>
  </div>
);

const WhyIntekCT = dynamic(
  () => import("@/components/WhyIntekCT").then((m) => ({ default: m.WhyIntekCT })),
  { loading: () => <SectionSkeleton height="360px" />, ssr: false }
);

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })),
  { loading: () => <SectionSkeleton height="360px" />, ssr: false }
);

const AIAssistantSection = dynamic(
  () => import("@/components/AIAssistantSection").then((m) => ({ default: m.AIAssistantSection })),
  { loading: () => <SectionSkeleton height="360px" />, ssr: false }
);

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

      <WhyIntekCT />
      <Testimonials />
      <AIAssistantSection />
    </div>
  );
}
