import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "FAQ | IntekCT Technologies",
  description:
    "Answers to the most common questions about IntekCT's web development, security services, timelines, and how to get started.",
  openGraph: {
    title: "FAQ | IntekCT Technologies",
    description:
      "Got questions? We've got answers. Common questions about working with IntekCT.",
    url: "https://intekct.com/faq",
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

const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((m) => ({ default: m.FAQSection })),
  { loading: () => <SectionSkeleton height="400px" />, ssr: false }
);

export default function FAQPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[#061B36] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#00F2FE]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
            <span className="text-[#00F2FE] font-bold">?</span>
            <span>QUESTIONS & ANSWERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Frequently Asked <span className="text-cyan-gradient">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before getting started. Can&apos;t find your answer?
            Reach out directly.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
