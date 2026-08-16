import type { Metadata } from "next";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Interactive Demo Websites | IntekCT Technologies – Live Templates Showcase",
  description:
    "Explore fully-functional interactive demo websites for Doctors, Advocates, Restaurants, Luxury E-Commerce, Real Estate, and Gym Studios. Built with Next.js, React & Tailwind CSS.",
  keywords: [
    "Interactive Demo Websites",
    "Doctor Clinic Website Template",
    "Advocate Law Firm Website Demo",
    "Restaurant Digital Menu Demo",
    "E-Commerce Store Website Demo",
    "Real Estate Portal Demo",
    "Gym Fitness Studio Website Demo",
    "Custom Website Templates India",
    "IntekCT Technologies Demo",
  ],
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
