export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  isPopular?: boolean;
  ctaText: string;
  features: {
    text: string;
    included: boolean;
    isSecurityFeature?: boolean;
  }[];
}

export const pricingData: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "Custom Quote",
    billingPeriod: "one-time project",
    description: "Perfect for small businesses and startups who need a professional, fast website up and running quickly.",
    isPopular: false,
    ctaText: "Get a Free Quote",
    features: [
      { text: "Complete website with up to 5 pages", included: true },
      { text: "Works on all phones, tablets & desktops", included: true },
      { text: "Modern, professional design", included: true },
      { text: "Basic security setup & protection", included: true, isSecurityFeature: true },
      { text: "Automatic updates & deployment", included: true, isSecurityFeature: true },
      { text: "Fast loading & SEO-ready", included: true },
      { text: "Full security audit & report", included: false },
      { text: "AI chat assistant", included: false },
      { text: "24/7 priority support", included: false },
    ],
  },
  {
    id: "growth",
    name: "Full Web Application",
    price: "Custom Quote",
    billingPeriod: "one-time project",
    description: "For growing businesses that need a complete web app with user accounts, payments, and advanced features.",
    isPopular: true,
    ctaText: "Get a Free Quote",
    features: [
      { text: "Everything in Starter + unlimited pages", included: true },
      { text: "User accounts, login & dashboard", included: true },
      { text: "AI chat assistant integration", included: true },
      { text: "Full security testing & audit", included: true, isSecurityFeature: true },
      { text: "Secure login & user permission system", included: true, isSecurityFeature: true },
      { text: "Automatic security scans on every update", included: true, isSecurityFeature: true },
      { text: "Data privacy compliance (GDPR)", included: true, isSecurityFeature: true },
      { text: "30-day post-launch support", included: true },
      { text: "24/7 priority emergency support", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    price: "Custom Quote",
    billingPeriod: "retainer or project",
    description: "A dedicated team for large businesses needing complex custom systems, high security, and ongoing support.",
    isPopular: false,
    ctaText: "Book a Call",
    features: [
      { text: "Dedicated team of developers", included: true },
      { text: "Custom cloud infrastructure setup", included: true, isSecurityFeature: true },
      { text: "Advanced AI features & automation", included: true },
      { text: "Full security testing & attack simulation", included: true, isSecurityFeature: true },
      { text: "Industry compliance (HIPAA, PCI, GDPR)", included: true, isSecurityFeature: true },
      { text: "Firewall & hacker protection", included: true, isSecurityFeature: true },
      { text: "24/7/365 dedicated support team", included: true, isSecurityFeature: true },
      { text: "Ongoing security monitoring & updates", included: true, isSecurityFeature: true },
    ],
  },
];
