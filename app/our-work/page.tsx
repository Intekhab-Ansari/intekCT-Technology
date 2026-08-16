import type { Metadata } from "next";
import { OurWorkClient } from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work & Live Client Portfolio | IntekCT Technologies",
  description:
    "Explore deployed client websites, live production web apps, and architecture case studies built by IntekCT Technologies — featuring Tiffin Wales, Food Delivery App, Quantorra, and Intekhab Ansari Portfolio.",
  keywords: [
    "IntekCT Portfolio",
    "Live Client Websites",
    "Web Development Projects India",
    "Full Stack Case Studies",
    "Next.js Live Apps",
    "Food Delivery App Vercel",
    "Intekhab Ansari Portfolio",
    "WordPress WooCommerce Projects",
  ],
  alternates: {
    canonical: "/our-work",
  },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
