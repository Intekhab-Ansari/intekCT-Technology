"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

interface ClientLayoutShellProps {
  children: React.ReactNode;
}

export const ClientLayoutShell: React.FC<ClientLayoutShellProps> = ({ children }) => {
  const pathname = usePathname();

  // Hide main IntekCT navbar, footer, and floating action buttons on individual live demo website pages
  // so clients get a 100% full-screen immersive demo experience with zero navigation clashes or button overlaps.
  const isDemoPage =
    pathname.startsWith("/demo/") &&
    pathname !== "/demo";

  return (
    <>
      {!isDemoPage && <Navbar />}
      <main className="relative z-10">{children}</main>
      {!isDemoPage && <Footer />}
      {!isDemoPage && <FloatingActions />}
    </>
  );
};
