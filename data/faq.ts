export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Security" | "Development" | "Pricing & Process";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does IntekCT embed security into web application development?",
    answer: "Unlike traditional agencies that tack on security at the end (or not at all), IntekCT integrates security into every phase. We use threat modeling before coding, zero-trust token authentication, SAST automated code scanners in CI/CD, strict input sanitization against OWASP Top 10 exploits, and conduct offensive penetration testing before any product goes live.",
    category: "Security",
  },
  {
    id: "faq-2",
    question: "What technology stack do you specialize in?",
    answer: "Our core stack is Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Node.js, Express, Python (FastAPI), PostgreSQL, Prisma, Redis, Docker, AWS/Vercel Cloud, and Cloudflare Edge WAF. For AI capabilities, we build serverless integrations with Anthropic Claude and OpenAI APIs.",
    category: "Development",
  },
  {
    id: "faq-3",
    question: "How long does a typical full-stack web project take?",
    answer: "MVP and starter web applications typically ship in 2 to 4 weeks. Full-featured enterprise web platforms with complex backend microservices, custom AI assistant workflows, and comprehensive security penetration audits take 4 to 8 weeks depending on scope.",
    category: "Pricing & Process",
  },
  {
    id: "faq-4",
    question: "Can you audit or fix security vulnerabilities in an existing application?",
    answer: "Yes! We offer standalone Penetration Testing & Vulnerability Assessment services. We conduct white-box and black-box security audits, generate clear prioritized risk remediation reports, and execute code patches to harden your web app against cyber attacks.",
    category: "Security",
  },
  {
    id: "faq-5",
    question: "How does the live AI Assistant integration work?",
    answer: "We build custom serverless API routes (`/api/chat`) that securely communicate with Anthropic Claude or OpenAI models without exposing API keys to the frontend. The assistant can qualify leads, query product knowledge bases, schedule meetings, or handle customer support dynamically.",
    category: "Development",
  },
  {
    id: "faq-6",
    question: "What post-launch support and maintenance do you offer?",
    answer: "Every project includes a post-launch warranty period (30 days to 90 days depending on tier). We also offer continuous DevSecOps retainers covering automated security patches, dependency updates, uptime monitoring, and SLA emergency incident response.",
    category: "Pricing & Process",
  },
];
