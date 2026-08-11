/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Compression ─────────────────────────────────────────────────────────────
  // Enable gzip/brotli compression on all responses
  compress: true,

  // ── Security & perf headers ─────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Compiler optimizations ───────────────────────────────────────────────────
  // Use the faster SWC-based minifier (replaces slower Terser)
  swcMinify: true,

  // ── Images ──────────────────────────────────────────────────────────────────
  images: {
    // Enable modern image formats (WebP/AVIF) for smaller sizes
    formats: ["image/avif", "image/webp"],
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
