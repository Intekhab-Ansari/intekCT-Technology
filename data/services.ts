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
    title: "Website & App Development",
    description: "We build fast, beautiful websites and web apps that work perfectly on every device — phone, tablet, or desktop.",
    features: ["Fast-loading pages & smooth navigation", "Works on all devices & screen sizes", "Live updates & real-time features"],
    badge: "Most Popular",
  },
  {
    id: "secure-api",
    iconName: "ShieldCheck",
    title: "Secure Backend & API Setup",
    description: "We connect your app to databases, payment gateways, and third-party tools — all protected so your data stays safe.",
    features: ["Secure login & user accounts", "Protection against hacking attempts", "Clean & validated data handling"],
    badge: "Always Secure",
  },
  {
    id: "pen-testing",
    iconName: "Lock",
    title: "Security Testing & Review",
    description: "We test your website or app for weak spots before hackers can find them, and fix every issue we discover.",
    features: ["Full website security checkup", "Find & fix vulnerabilities fast", "Easy-to-read security report"],
    badge: "Stay Protected",
  },
  {
    id: "devsecops",
    iconName: "Cpu",
    title: "Automated Deployment & Updates",
    description: "We set up automated systems that safely push your updates live without breaking anything — every single time.",
    features: ["Automatic code checks before going live", "Zero downtime during updates", "Safe & reliable release process"],
    badge: "Zero Downtime",
  },
  {
    id: "cloud-security",
    iconName: "CloudLightning",
    title: "Cloud Hosting & Infrastructure",
    description: "We host your website on fast, reliable cloud servers and make sure it stays online, secure, and lightning fast.",
    features: ["Reliable 99.9% uptime hosting", "Encrypted data storage & transfer", "Built-in firewall & threat protection"],
    badge: "Always Online",
  },
  {
    id: "secure-uiux",
    iconName: "Layout",
    title: "UI/UX Design & Branding",
    description: "We design clean, modern interfaces that look great and are easy for your customers to use — on any device.",
    features: ["Smooth animations & interactions", "Easy-to-use forms & navigation", "Mobile-first responsive design"],
    badge: "Great Design",
  },
];
