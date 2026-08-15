import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Services | IntekCT Technologies",
  description:
    "Full-stack web development, DevSecOps engineering, penetration testing, and cloud security infrastructure — everything your business needs, done right.",
  openGraph: {
    title: "Services | IntekCT Technologies",
    description:
      "Full-stack web development, DevSecOps, cloud security, and more. Explore what IntekCT builds for you.",
    url: "https://intekct.com/services",
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

const ServicesMatrix = dynamic(
  () => import("@/components/ServicesMatrix").then((m) => ({ default: m.ServicesMatrix })),
  { loading: () => <SectionSkeleton height="480px" />, ssr: false }
);

const CodeShieldShowcase = dynamic(
  () => import("@/components/CodeShieldShowcase").then((m) => ({ default: m.CodeShieldShowcase })),
  { loading: () => <SectionSkeleton height="500px" />, ssr: false }
);

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
