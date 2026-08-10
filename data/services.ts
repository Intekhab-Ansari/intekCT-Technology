export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-dev",
    iconName: "Code2",
    title: "Full Stack App Development",
    description: "High-performance React, Next.js, and Node.js applications with scalable cloud architecture built for speed, SEO, and longevity.",
    features: ["Next.js App Router & SSR", "Microservices & Serverless", "State Management & Real-time WebSockets"],
    badge: "Core Engineering",
  },
  {
    id: "secure-api",
    iconName: "ShieldCheck",
    title: "Secure API Engineering & Integration",
    description: "Robust REST & GraphQL APIs engineered with zero-trust token validation, rate-limiting, and encrypted payload transmission.",
    features: ["OAuth2 / OIDC & JWT Auth", "Rate Limiting & DDoS Prevention", "Strict Request Sanitization"],
    badge: "Hardened Middleware",
  },
  {
    id: "pen-testing",
    iconName: "Lock",
    title: "Penetration Testing & Vulnerability Audit",
    description: "Proactive white-box & black-box security testing to discover OWASP Top 10 exploits before attackers ever do.",
    features: ["OWASP Top 10 Remediation", "Automated & Manual Pentesting", "Comprehensive Risk Scoring Reports"],
    badge: "Offensive Security",
  },
  {
    id: "devsecops",
    iconName: "Cpu",
    title: "DevSecOps & Automated CI/CD Pipelines",
    description: "Embed SAST/DAST security scanning directly into your GitHub/GitLab deployment workflows without slowing down velocity.",
    features: ["Automated Dependency Scanning", "Infrastructure as Code (Terraform)", "Zero-Downtime Deployments"],
    badge: "Automated Defense",
  },
  {
    id: "cloud-security",
    iconName: "CloudLightning",
    title: "Cloud Security Infrastructure",
    description: "AWS, GCP, and Vercel cloud environments configured with tight IAM controls, VPC isolation, and continuous threat monitoring.",
    features: ["Zero-Trust IAM & Secrets Vault", "Encrypted Data at Rest & Transit", "Edge Web Application Firewall"],
    badge: "Unbreakable Infra",
  },
  {
    id: "secure-uiux",
    iconName: "Layout",
    title: "UI/UX Design with Built-in Data Protection",
    description: "Sleek, modern user interfaces that delight customers while enforcing strict data privacy (GDPR, HIPAA, CCPA compliance).",
    features: ["Framer Motion Micro-Interactions", "Privacy-Preserving Form Design", "Accessible & Mobile-First Layouts"],
    badge: "User Experience",
  },
];
