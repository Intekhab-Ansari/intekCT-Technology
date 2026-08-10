export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
  securityFocus: string;
}

export const processData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discover & Threat Model",
    subtitle: "Understanding goals and identifying potential attack vectors early",
    description: "We analyze product specifications, data flows, user personas, and regulatory requirements (GDPR, HIPAA, SOC2) to map out structural security boundaries before writing a single line of code.",
    deliverables: ["Product Architecture Blueprint", "STRIDE Threat Model Assessment", "Tech Stack & API Specifications"],
    iconName: "Search",
    securityFocus: "Attack Surface Mapping & Privacy-by-Design Blueprint",
  },
  {
    stepNumber: "02",
    title: "Architect & Shield",
    subtitle: "Designing zero-trust database schemas and API protocols",
    description: "We construct modular backend architectures, isolate database permissions, enforce strict authentication, and define encrypted data schemas.",
    deliverables: ["DB Schema & ERD", "Zero-Trust Auth Specification", "Framer Motion Interactive Wireframes"],
    iconName: "Compass",
    securityFocus: "Least Privilege Access Control & Field Encryption",
  },
  {
    stepNumber: "03",
    title: "Full Stack Build",
    subtitle: "Agile, high-velocity frontend & backend development",
    description: "Our engineering team builds responsive, pixel-perfect Next.js interfaces backed by optimized API routes and continuous SAST dependency vulnerability scanning.",
    deliverables: ["Staging Preview Deployments", "Clean TypeScript Codebase", "Real-time API Integrations"],
    iconName: "Code2",
    securityFocus: "Automated Code Analysis & Input Sanitization",
  },
  {
    stepNumber: "04",
    title: "Harden & Pentest",
    subtitle: "Offensive penetration testing and load stress tests",
    description: "Before going live, our certified security engineers run simulated exploit attacks, SQL injection attempts, XSS payloads, and peak traffic load testing.",
    deliverables: ["Penetration Test Report", "OWASP Compliance Verification", "Performance Load Test Certificates"],
    iconName: "ShieldAlert",
    securityFocus: "Black-Box Pentesting & Vulnerability Patching",
  },
  {
    stepNumber: "05",
    title: "Launch & Continuous Defense",
    subtitle: "Zero-downtime deployment with live threat telemetry",
    description: "We deploy your application to edge cloud infrastructure equipped with WAF firewalls, automated SSL management, and 24/7 security anomaly alerts.",
    deliverables: ["Production Edge Deployment", "DevSecOps CI/CD Pipelines", "24/7 Threat Telemetry Dashboard"],
    iconName: "Rocket",
    securityFocus: "WAF Protection & Active Telemetry Defense",
  },
];
