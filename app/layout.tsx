import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GlowingGridBg } from "@/components/GlowingGridBg";
import { ClientLayoutShell } from "@/components/ClientLayoutShell";

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
  title: {
    default: "IntekCT Technologies | Robust Web Software & DevSecOps Engineering",
    template: "%s | IntekCT Technologies",
  },
  description:
    "Leading full-stack web software agency & digital product studio. We architect high-converting websites, custom React & Next.js web applications, e-commerce stores, and enterprise DevSecOps pipelines.",
  keywords: [
    "Full Stack Web Development",
    "Website Development Company India",
    "Custom Next.js React Developer",
    "Doctor Clinic Website Design",
    "Advocate Law Firm Website Development",
    "Restaurant Digital Menu & Ordering Website",
    "E-Commerce Store Development India",
    "Real Estate Property Portal Website",
    "Gym Fitness Studio Website Design",
    "Cybersecurity & DevSecOps Engineering",
    "Affordable Web Design Agency Mumbai",
    "IntekCT Technologies",
    "Intekhab Ansari Lead Web Engineer",
    "WordPress WooCommerce Development",
    "Fast Responsive SEO Optimized Websites",
  ],
  authors: [{ name: "IntekCT Technologies", url: "https://intekhab-ansari.vercel.app/" }],
  creator: "Intekhab Ansari",
  publisher: "IntekCT Technologies",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://intek-ct-technology.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IntekCT Technologies | Robust Web Software & Custom Web Apps",
    description:
      "Full-stack web software, custom websites, e-commerce platforms, and interactive demo templates for doctors, lawyers, restaurants, and businesses.",
    url: "https://intek-ct-technology.vercel.app",
    siteName: "IntekCT Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "IntekCT Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntekCT Technologies | Robust Web Software & DevSecOps",
    description:
      "We build robust web software and high-converting websites. Shielded from Day One.",
    creator: "@intekct",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "V8f0J8ZCCksA3QqysLVFYCU6PckCFFdtCt34JiR86vs",
  },
  icons: {
    icon: [{ url: "/logo.jpg", type: "image/jpeg" }],
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://intek-ct-technology.vercel.app/#organization",
      name: "IntekCT Technologies",
      alternateName: ["IntekCT", "Intek CT", "IntekCT Web Development", "intekct.com"],
      url: "https://intek-ct-technology.vercel.app",
      logo: "https://intek-ct-technology.vercel.app/logo.jpg",
      brand: {
        "@type": "Brand",
        name: "IntekCT",
        alternateName: ["IntekCT Technologies", "Intek CT"],
      },
      sameAs: [
        "https://intekhab-ansari.vercel.app/",
        "https://github.com/Intekhab-Ansari",
      ],
      founder: {
        "@type": "Person",
        name: "Intekhab Ansari",
        jobTitle: "Lead Full-Stack Web Developer & Security Engineer",
        url: "https://intekhab-ansari.vercel.app/",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9594292262",
        contactType: "Customer Support & Sales",
        areaServed: ["IN", "US", "GB", "AE", "CA", "Worldwide"],
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://intek-ct-technology.vercel.app/#service",
      name: "IntekCT Web Development & DevSecOps",
      alternateName: "IntekCT",
      url: "https://intek-ct-technology.vercel.app",
      telephone: "+91-9594292262",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      description:
        "Full-stack custom web development, Next.js React applications, e-commerce stores, and secure website templates for doctors, lawyers, restaurants, and businesses.",
    },
    {
      "@type": "WebSite",
      "@id": "https://intek-ct-technology.vercel.app/#website",
      url: "https://intek-ct-technology.vercel.app",
      name: "IntekCT Technologies",
      alternateName: "IntekCT",
      description: "We Build Robust Web Software. Shielded From Day One.",
      publisher: {
        "@id": "https://intek-ct-technology.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#061B36] text-white antialiased selection:bg-[#FF5A1F] selection:text-white min-h-screen">
        <GlowingGridBg />
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
