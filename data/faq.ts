export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Security" | "Development" | "Process & Delivery";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you make sure my website is secure?",
    answer: "Security is built into every step of how we work — not added at the end. Before writing any code, we plan out how to protect your data. During development, we run automatic security checks. Before launch, we test your app the same way a hacker would to find and fix any weak spots. Your users' data is always safe with us.",
    category: "Security",
  },
  {
    id: "faq-2",
    question: "What kind of websites and apps do you build?",
    answer: "We build all types: business websites, online stores, booking systems, customer portals, dashboards, mobile-friendly web apps, and more. We use modern tools that make your site fast, reliable, and easy to update. Whatever your idea is, we can bring it to life.",
    category: "Development",
  },
  {
    id: "faq-3",
    question: "How long does it take to build my website or app?",
    answer: "A simple website or basic app is usually ready in 2 to 4 weeks. A more complete app with custom features, user accounts, and payment processing typically takes 4 to 8 weeks. We'll give you a clear timeline before we start and keep you updated throughout.",
    category: "Process & Delivery",
  },
  {
    id: "faq-4",
    question: "Can you check if my existing website has security problems?",
    answer: "Yes! We offer a full security review of your existing website or app. We look for any vulnerabilities, explain what we found in plain language, and fix every issue. It's a great way to make sure your business and customers are protected.",
    category: "Security",
  },
  {
    id: "faq-5",
    question: "Can you add an AI chat assistant to my website?",
    answer: "Absolutely. We can add a smart AI chat assistant to your website that answers customer questions, helps visitors find what they need, and even books meetings — all automatically. It works 24/7 and is set up securely so your data stays private.",
    category: "Development",
  },
  {
    id: "faq-6",
    question: "What happens after my website goes live?",
    answer: "We don't just build and disappear. Every project includes a support period after launch (30 to 90 days depending on your package). We also offer ongoing maintenance plans to keep your site updated, secure, and running smoothly — so you can focus on your business.",
    category: "Process & Delivery",
  },
];
