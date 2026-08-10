import React from "react";
import { Hero } from "@/components/Hero";
import { ServicesMatrix } from "@/components/ServicesMatrix";
import { CodeShieldShowcase } from "@/components/CodeShieldShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TechStackGrid } from "@/components/TechStackGrid";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyIntekCT } from "@/components/WhyIntekCT";
import { PricingSection } from "@/components/PricingSection";
import { AIAssistantSection } from "@/components/AIAssistantSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Key Services Matrix */}
      <ServicesMatrix />

      {/* 3. Code & Shield Split Showcase */}
      <CodeShieldShowcase />

      {/* 4. Process — "How We Build & Secure" Timeline */}
      <ProcessTimeline />

      {/* 5. Tech Arsenal */}
      <TechStackGrid />

      {/* 6. Portfolio / Case Studies */}
      <PortfolioSection />

      {/* 7. Why IntekCT (Differentiators) */}
      <WhyIntekCT />

      {/* 8. Pricing Plans */}
      <PricingSection />

      {/* 9. AI Assistant Capability Showcase */}
      <AIAssistantSection />

      {/* 10. FAQ Accordion */}
      <FAQSection />

      {/* 11. Contact & Final CTA */}
      <ContactSection />
    </div>
  );
}
