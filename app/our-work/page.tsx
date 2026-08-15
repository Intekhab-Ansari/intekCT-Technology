import type { Metadata } from "next";
import { OurWorkClient } from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work | IntekCT – Live Client Projects & Case Studies",
  description:
    "Explore deployed client websites, live projects, and case studies built by IntekCT Technologies — full-stack, secure, and high-performance.",
  keywords: [
    "IntekCT Portfolio",
    "Live Client Websites",
    "Web Development Projects",
    "Full Stack Case Studies",
  ],
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
