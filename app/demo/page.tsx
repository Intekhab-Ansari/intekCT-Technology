import type { Metadata } from "next";
import { DemoClient } from "./DemoClient";

export const metadata: Metadata = {
  title: "Demo Websites | IntekCT – See What We Can Build For You",
  description:
    "Browse ready-made demo websites for Doctors, Advocates, Restaurants, E-commerce, and more. Built by IntekCT Technologies. Request a custom version today.",
  keywords: [
    "Demo Websites",
    "Doctor Website Template",
    "Advocate Website",
    "Restaurant Website",
    "IntekCT Demo",
    "Web Design Templates",
  ],
};

export default function DemoPage() {
  return <DemoClient />;
}
