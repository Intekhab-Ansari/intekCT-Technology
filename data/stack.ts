export interface TechStackCategory {
  name: string;
  description: string;
  technologies: {
    name: string;
    level: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export const stackData: TechStackCategory[] = [
  {
    name: "Modern Frontend",
    description: "Lightning-fast, highly responsive user interfaces engineered with modern frameworks.",
    technologies: [
      { name: "Next.js 14 (App Router)", level: "Expert", icon: "Boxes", highlight: true },
      { name: "React 18", level: "Expert", icon: "Code" },
      { name: "TypeScript", level: "Expert", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
      { name: "Framer Motion", level: "Advanced", icon: "Sparkles", highlight: true },
    ],
  },
  {
    name: "Backend & APIs",
    description: "Scalable backend services, resilient microservices, and secure API gateways.",
    technologies: [
      { name: "Node.js / Express", level: "Expert", icon: "Server" },
      { name: "Python / FastAPI", level: "Advanced", icon: "Terminal" },
      { name: "PostgreSQL & Prisma", level: "Expert", icon: "Database", highlight: true },
      { name: "Redis Caching", level: "Advanced", icon: "Zap" },
      { name: "GraphQL & REST", level: "Expert", icon: "Network" },
    ],
  },
  {
    name: "DevSecOps & CI/CD",
    description: "Automated pipelines with security checks embedded at every commit and build.",
    technologies: [
      { name: "GitHub Actions CI/CD", level: "Expert", icon: "Workflow", highlight: true },
      { name: "Docker & Kubernetes", level: "Advanced", icon: "Container" },
      { name: "SAST / DAST Automation", level: "Expert", icon: "ShieldAlert" },
      { name: "Terraform (IaC)", level: "Advanced", icon: "Layers" },
    ],
  },
  {
    name: "Cloud & Cybersecurity",
    description: "Unbreakable cloud infrastructure with continuous threat protection and audit logs.",
    technologies: [
      { name: "AWS & Vercel Enterprise", level: "Expert", icon: "Cloud", highlight: true },
      { name: "Cloudflare Edge WAF", level: "Expert", icon: "Shield" },
      { name: "Zero-Trust IAM & Vault", level: "Expert", icon: "KeyRound" },
      { name: "OWASP Top 10 Audits", level: "Expert", icon: "CheckCircle2" },
    ],
  },
];
