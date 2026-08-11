import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GlowingGridBg } from "@/components/GlowingGridBg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IntekCT | We Build Robust Web Software. Shielded From Day One.",
  description: "Full-stack web application development and DevSecOps engineering to bring your visionary ideas to life securely.",
  keywords: [
    "Full Stack Web Development",
    "Cybersecurity Startup",
    "DevSecOps Engineering",
    "Next.js 14 Applications",
    "IntekCT Technologies",
  ],
  authors: [{ name: "IntekCT" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://intekct.com"),
  openGraph: {
    title: "IntekCT | We Build Robust Web Software.",
    description: "Full-stack web development and DevSecOps engineering.",
    url: "https://intekct.com",
    siteName: "IntekCT Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntekCT | Robust Web Software & DevSecOps",
    description: "We build robust web software. Shielded from Day One.",
    creator: "@intekct",
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#061B36] text-white antialiased selection:bg-[#FF5A1F] selection:text-white">
        <GlowingGridBg />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        {/* Single unified floating action bar — manages its own shared state */}
        <FloatingActions />
      </body>
    </html>
  );
}
