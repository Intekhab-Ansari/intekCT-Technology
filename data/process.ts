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
    title: "Understand Your Goals",
    subtitle: "We listen first and plan everything before writing any code",
    description: "We start by learning about your business, your customers, and what you want to build. We ask the right questions so we can plan the best solution for your needs.",
    deliverables: ["Clear project plan & timeline", "Design & feature specification", "Technology recommendation"],
    iconName: "Search",
    securityFocus: "Security planning built in from the start",
  },
  {
    stepNumber: "02",
    title: "Design & Plan",
    subtitle: "Beautiful designs and a solid technical blueprint",
    description: "We create wireframes and design mockups so you can see exactly how your app will look and work before we build anything. You approve the design, then we start.",
    deliverables: ["Visual design mockups", "Database & app structure plan", "Interactive prototype for review"],
    iconName: "Compass",
    securityFocus: "Safe login system & data protection design",
  },
  {
    stepNumber: "03",
    title: "Build Your App",
    subtitle: "Fast, clean development with regular progress updates",
    description: "Our team builds your website or app step by step. You get regular previews and can give feedback at every stage — so there are no surprises at the end.",
    deliverables: ["Working preview of your app", "Clean, well-organized code", "All features & integrations connected"],
    iconName: "Code2",
    securityFocus: "Automatic security checks during development",
  },
  {
    stepNumber: "04",
    title: "Test Everything",
    subtitle: "We find and fix every bug before you go live",
    description: "Before launching, we thoroughly test your app on all devices and browsers. We also run security checks to make sure your users' data is fully protected.",
    deliverables: ["Full bug & quality testing", "Security vulnerability report", "Performance & speed test results"],
    iconName: "ShieldAlert",
    securityFocus: "Security testing & vulnerability fixes",
  },
  {
    stepNumber: "05",
    title: "Launch & Support",
    subtitle: "Go live with confidence and ongoing maintenance",
    description: "We launch your app on fast, reliable hosting and keep an eye on it 24/7. If anything ever goes wrong, we're on it immediately so your business keeps running.",
    deliverables: ["Live deployment on cloud hosting", "Automatic backups & monitoring", "Ongoing support & maintenance"],
    iconName: "Rocket",
    securityFocus: "24/7 monitoring & instant issue response",
  },
];
