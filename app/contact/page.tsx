import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | IntekCT Technologies",
  description:
    "Ready to start a project? Get in touch with IntekCT — we respond fast and love talking about ambitious ideas.",
  openGraph: {
    title: "Contact | IntekCT Technologies",
    description:
      "Start your project with IntekCT. Send us a message and we'll get back to you within 24 hours.",
    url: "https://intekct.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[#061B36] overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[#FF5A1F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00F2FE]/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#0B2240] border border-slate-700/80 text-slate-300 text-xs font-mono tracking-wider">
            <span className="text-[#FF5A1F] font-bold">✉</span>
            <span>LET&apos;S TALK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Start a <span className="text-coral-gradient">Project</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your idea. We&apos;ll follow up within 2 hours with a
            clear plan, mobile consultation, and honest estimate.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
