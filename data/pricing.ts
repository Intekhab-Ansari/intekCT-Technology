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
    name: "MVP & Hardened Launch",
    price: "Custom Scope",
    billingPeriod: "tailored project",
    description: "Ideal for startups needing a fast, sleek, production-ready web app with essential security baked in.",
    isPopular: false,
    ctaText: "Get Starter Quote",
    features: [
      { text: "Full Stack Next.js 14 Web Application", included: true },
      { text: "Up to 5 Custom High-Converting Pages", included: true },
      { text: "Responsive Mobile-First UI/UX", included: true },
      { text: "OWASP Basic Vulnerability Audit", included: true, isSecurityFeature: true },
      { text: "Automated GitHub Actions CI/CD Pipeline", included: true, isSecurityFeature: true },
      { text: "Lighthouse 95+ Performance & SEO", included: true },
      { text: "Dedicated Penetration Test Report", included: false },
      { text: "Custom AI Assistant Integration", included: false },
      { text: "24/7 Threat Telemetry & SLA Support", included: false },
    ],
  },
  {
    id: "growth",
    name: "Full Stack DevSecOps Suite",
    price: "Tailored Scope",
    billingPeriod: "tailored project",
    description: "For scaling companies demanding sophisticated web architecture, AI integration, and rigorous security verification.",
    isPopular: true,
    ctaText: "Request Suite Quote",
    features: [
      { text: "Everything in MVP + Unlimited Dynamic Pages", included: true },
      { text: "Custom API & Microservices Architecture", included: true },
      { text: "Full AI Assistant / Claude API Integration", included: true },
      { text: "Comprehensive Black-Box Pentest Audit", included: true, isSecurityFeature: true },
      { text: "Zero-Trust OAuth2 & Role IAM Controls", included: true, isSecurityFeature: true },
      { text: "SAST/DAST Continuous Pipeline Scanner", included: true, isSecurityFeature: true },
      { text: "GDPR / SOC2 Readiness Compliance Check", included: true, isSecurityFeature: true },
      { text: "30-Day Post-Launch Security Maintenance", included: true },
      { text: "24/7 SLA Threat Incident Response", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Fortress",
    price: "Enterprise Scope",
    billingPeriod: "dedicated retainer or project",
    description: "Dedicated engineering team, custom cloud infrastructure, zero-day threat defense, and 24/7 DevSecOps management.",
    isPopular: false,
    ctaText: "Schedule Enterprise Call",
    features: [
      { text: "Dedicated Lead Engineers & Security Architects", included: true },
      { text: "Custom AWS / GCP Isolated VPC Infrastructure", included: true, isSecurityFeature: true },
      { text: "Real-time AI Capabilities & Multi-LLM Orchestration", included: true },
      { text: "Full Penetration Testing & Defense Simulation", included: true, isSecurityFeature: true },
      { text: "HIPAA / PCI-DSS / SOC2 Full Certification Audit", included: true, isSecurityFeature: true },
      { text: "Custom WAF Edge Rules & DDoS Mitigation", included: true, isSecurityFeature: true },
      { text: "24/7/365 Dedicated SLA & Rapid Incident Response", included: true, isSecurityFeature: true },
      { text: "Continuous Pentesting & Patch Management", included: true, isSecurityFeature: true },
    ],
  },
];
