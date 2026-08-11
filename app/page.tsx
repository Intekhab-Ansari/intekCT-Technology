import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

// ─── Loading Skeleton ────────────────────────────────────────────────────────
// A minimal shimmer bar shown while each section's JS chunk is downloaded.
const SectionSkeleton = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-[#00F2FE]/30 border-t-[#00F2FE] animate-spin" />
  </div>
);

// ─── Lazy-loaded sections (all below the fold) ────────────────────────────────
// Each section is split into its own JS chunk and only fetched when needed.
const ServicesMatrix = dynamic(
  () => import("@/components/ServicesMatrix").then((m) => ({ default: m.ServicesMatrix })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const CodeShieldShowcase = dynamic(
  () => import("@/components/CodeShieldShowcase").then((m) => ({ default: m.CodeShieldShowcase })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const ProcessTimeline = dynamic(
  () => import("@/components/ProcessTimeline").then((m) => ({ default: m.ProcessTimeline })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const TechStackGrid = dynamic(
  () => import("@/components/TechStackGrid").then((m) => ({ default: m.TechStackGrid })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const PortfolioSection = dynamic(
  () => import("@/components/PortfolioSection").then((m) => ({ default: m.PortfolioSection })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const WhyIntekCT = dynamic(
  () => import("@/components/WhyIntekCT").then((m) => ({ default: m.WhyIntekCT })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const PricingSection = dynamic(
  () => import("@/components/PricingSection").then((m) => ({ default: m.PricingSection })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const AIAssistantSection = dynamic(
  () => import("@/components/AIAssistantSection").then((m) => ({ default: m.AIAssistantSection })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((m) => ({ default: m.FAQSection })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((m) => ({ default: m.ContactSection })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero — eager, above the fold */}
      <Hero />

      {/* 2–11. All below-fold sections — lazy loaded as separate JS chunks */}
      <ServicesMatrix />
      <CodeShieldShowcase />
      <ProcessTimeline />
      <TechStackGrid />
      <PortfolioSection />
      <WhyIntekCT />
      <PricingSection />
      <AIAssistantSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
