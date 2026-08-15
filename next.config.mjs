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
    formats: ["image/avif", "image/webp"],
    // Reduce blur placeholder overhead
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
