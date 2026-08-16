/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Compression ─────────────────────────────────────────────────────────────
  compress: true,

  // ── Security & perf headers ─────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Compiler optimizations ───────────────────────────────────────────────────
  swcMinify: true,

  // ── Experimental performance ─────────────────────────────────────────────────
  experimental: {
    // Tree-shake lucide-react & framer-motion to only include used exports
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // ── Images ──────────────────────────────────────────────────────────────────
  images: {
    unoptimized: true, // Loads directly from high-speed Unsplash Edge CDN without Node.js dev server lag
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
