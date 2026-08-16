export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  securityLayer: string;
  metrics: string;
  image: string;
  demoUrl?: string;
  isPlaceholder?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "food-delivery-app",
    title: "Food Delivery — Online Ordering & Express App",
    subtitle: "Interactive food ordering platform with real-time cart, category filter & fast checkout",
    category: "Food & E-Commerce Web App",
    description: "Architected and deployed an ultra-fast responsive food delivery web application featuring interactive digital menu, real-time cart drawer, categorized food search, and smooth ordering experience.",
    techStack: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vercel Edge"],
    securityLayer: "Vercel Edge SSL & Client-Side Validation",
    metrics: "100% Real-Time Fast Ordering",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=75",
    demoUrl: "https://food-delivery-intekhab.vercel.app/",
    isPlaceholder: false,
  },
  {
    id: "intekhab-portfolio",
    title: "Intekhab Ansari — Developer Portfolio & Brand",
    subtitle: "High-performance personal engineering portfolio & interactive showcase",
    category: "Developer Portfolio & Web App",
    description: "Built the official portfolio for Lead Software Engineer Intekhab Ansari, featuring cyber aesthetic UI, interactive project deep-dives, skill matrix, and sub-second load times.",
    techStack: ["React", "Next.js", "JavaScript", "Java", "MySQL", "Tailwind CSS"],
    securityLayer: "Vercel Edge & Zero Vulnerabilities",
    metrics: "100/100 Lighthouse Performance & SEO",
    image: "/intekhab-developer.jpg",
    demoUrl: "https://intekhab-ansari.vercel.app/",
    isPlaceholder: false,
  },
  {
    id: "fintech-vault",
    title: "Apex Vault — Decentralized Financial Portal",
    subtitle: "High-frequency crypto trading engine with real-time risk shielding",
    category: "FinTech & Web3",
    description: "Built a sub-10ms trading interface with zero-latency WebSocket data streams, coupled with hardware-backed KMS key isolation for institutional vaults.",
    techStack: ["Next.js 14", "TypeScript", "Node.js", "Redis", "Tailwind CSS"],
    securityLayer: "KMS Envelope Encryption & Multi-Sig Auth",
    metrics: "$120M+ Daily Transaction Volume Protected",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75",
    demoUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "health-shield",
    title: "MediSecure AI — Telehealth & EHR Engine [EDIT ME]",
    subtitle: "HIPAA-compliant patient data portal with instant triage capabilities",
    category: "HealthTech & AI",
    description: "Developed an end-to-end encrypted video & medical record system supporting 50,000+ monthly active consultations without compliance friction.",
    techStack: ["React 18", "Python FastAPI", "WebRTC", "PostgreSQL", "Tailwind"],
    securityLayer: "HIPAA Zero-Trust BAA & Field-Level Encryption",
    metrics: "100% HIPAA Audit Pass on First Try",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=75",
    demoUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "saas-sentinel",
    title: "CyberSentinel — Cloud Security Dashboard [EDIT ME]",
    subtitle: "Real-time threat monitoring platform for enterprise DevSecOps teams",
    category: "Cybersecurity SaaS",
    description: "Architected a multi-tenant dashboard visualizing live telemetry streams, automated vulnerability patches, and IAM permission drift alerts.",
    techStack: ["Next.js 14", "Go", "ClickHouse", "Framer Motion", "Docker"],
    securityLayer: "Automated DAST Scanner & SOC2 Type II Certified",
    metrics: "99.99% Threat Mitigation Automation",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=75",
    demoUrl: "#",
    isPlaceholder: true,
  },
  {
    id: "ecommerce-fortress",
    title: "Veloce Commerce — Global Omni-Channel Suite [EDIT ME]",
    subtitle: "Next-gen headless e-commerce processing 10,000 requests/sec",
    category: "E-Commerce",
    description: "Designed a lightning-fast storefront with dynamic edge caching and PCI-DSS compliant checkout integration.",
    techStack: ["Next.js 14", "Stripe API", "GraphQL", "Tailwind CSS", "Vercel Edge"],
    securityLayer: "PCI-DSS Level 1 & Cloudflare Enterprise WAF",
    metrics: "3.2x Conversion Rate Increase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    isPlaceholder: true,
  },
];
