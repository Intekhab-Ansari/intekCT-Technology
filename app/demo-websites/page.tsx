import type { Metadata } from "next";
import { DemoClient } from "../demo/DemoClient";

export const metadata: Metadata = {
  title: "Demo Websites | IntekCT – See What We Can Build For You",
  description:
    "Browse ready-made live interactive demo websites for Doctors, Advocates, Restaurants, E-commerce, Real Estate, Gyms, and more. Built by IntekCT Technologies.",
};

export default function DemoWebsitesPage() {
  return <DemoClient />;
}
