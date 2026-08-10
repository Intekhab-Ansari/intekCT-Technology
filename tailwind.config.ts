import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#040D1A",
        navy: {
          DEFAULT: "#061B36",
          dark: "#041327",
          light: "#0A2540",
          surface: "#0B2240",
        },
        coral: {
          DEFAULT: "#FF5A1F",
          hover: "#E54A10",
          light: "#FF7847",
          subtle: "rgba(255, 90, 31, 0.15)",
        },
        cyan: {
          neon: "#00F2FE",
          glow: "#00C6FF",
          subtle: "rgba(0, 242, 254, 0.15)",
        },
        steel: {
          DEFAULT: "#263238",
          light: "#37474F",
          dark: "#1C272B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "coral": "0 0 25px -5px rgba(255, 90, 31, 0.4)",
        "coral-sm": "0 0 15px -3px rgba(255, 90, 31, 0.3)",
        "neon-cyan": "0 0 25px -5px rgba(0, 242, 254, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "coral-gradient": "linear-gradient(135deg, #FF5A1F 0%, #FF7847 100%)",
        "coral-gradient-hover": "linear-gradient(135deg, #FF7847 0%, #E54A10 100%)",
        "cyan-gradient": "linear-gradient(135deg, #00F2FE 0%, #0099FF 100%)",
        "navy-gradient": "linear-gradient(180deg, #061B36 0%, #040D1A 100%)",
        "card-glass": "linear-gradient(180deg, rgba(11, 34, 64, 0.7) 0%, rgba(6, 27, 54, 0.5) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
