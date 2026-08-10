# IntekCT — Full Stack Web Dev & DevSecOps Startup Website

> **Core Theme**: "Sophisticated Strength" — Sleek modern software engineering fused with unbreakable security.

A modern, high-converting, high-performance website for **IntekCT**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and a live AI Assistant capability demo.

---

## ⚡ Tech Stack & Features

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom neon cyan design tokens (`#00F2FE`), glassmorphism cards, and animated grid background.
- **Animations**: Framer Motion scroll entrance animations, hover card scale effects, and tab transitions.
- **Icons**: Lucide React
- **AI Assistant**: Live serverless AI Chat Widget (`/api/chat`) using Anthropic Claude / OpenAI APIs with automatic fallback mode.
- **Lead Capture**: Serverless `/api/contact` route with budget qualification and Resend/Formspree integration readiness.
- **SEO & Performance**: Open Graph metadata, `sitemap.ts`, `robots.ts`, SVG neon cyan shield favicon.

---

## 🚀 Quick Start

### 1. Installation
Clone or navigate to the project directory and install dependencies:

```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Modify the environment variables inside `.env.local`:

```env
# AI Assistant Key (Optional — intelligent fallback engine runs automatically if left blank)
ANTHROPIC_API_KEY=your_anthropic_api_key_here
OPENAI_API_KEY=your_openai_api_key_here

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
IntekCT/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # Serverless AI Assistant API endpoint
│   │   └── contact/route.ts       # Contact lead form API endpoint
│   ├── globals.css                # Custom glassmorphism, glowing borders, background grid
│   ├── layout.tsx                 # Root layout with fonts, metadata, dark mode theme
│   ├── page.tsx                   # Single page assembling all 14 sections
│   ├── robots.ts                  # SEO robots.txt generator
│   └── sitemap.ts                 # Dynamic sitemap.xml generator
├── components/
│   ├── AIAssistantSection.tsx     # AI capability showcase section
│   ├── ChatWidget.tsx             # Floating glassmorphic AI chat widget
│   ├── CodeShieldShowcase.tsx     # Interactive UI vs Backend security visual
│   ├── ContactSection.tsx         # Contact form + Calendly booking placeholder
│   ├── FAQSection.tsx             # Accordion FAQ component
│   ├── Footer.tsx                 # Site footer with trust badge & social links
│   ├── GlowingGridBg.tsx          # Background grid & ambient cyan glow orbs
│   ├── Hero.tsx                   # 3D interactive dashboard hero section
│   ├── LiveTrustBadge.tsx         # Pulsing "System Defense: Active" pill badge
│   ├── Navbar.tsx                 # Sticky navigation bar with mobile drawer
│   ├── PortfolioSection.tsx       # Case study cards with [EDIT ME] tags
│   ├── PricingSection.tsx         # 3-tier pricing cards with recommended plan
│   ├── ProcessTimeline.tsx        # 5-step DevSecOps process timeline
│   ├── ServicesMatrix.tsx         # 6-grid glassmorphism services matrix
│   ├── TechStackGrid.tsx          # Interactive technology arsenal grid
│   └── WhyIntekCT.tsx             # Key differentiators cards
├── data/
│   ├── company.ts                 # Company metadata & stats config
│   ├── faq.ts                     # FAQ list config
│   ├── pricing.ts                 # Pricing plans config
│   ├── process.ts                 # DevSecOps timeline steps config
│   ├── projects.ts                # Portfolio case studies config
│   ├── services.ts                # 6 key services config
│   ├── stack.ts                   # Tech stack categories config
│   └── testimonials.ts            # Client endorsements config
├── lib/
│   └── ai-provider.ts             # Claude / OpenAI / Fallback AI logic
├── public/
│   └── favicon.svg                # Neon cyan shield favicon
└── tailwind.config.ts             # Brand color system & keyframes
```

---

## 🎨 Color & Design System

- **Background**: Deep Midnight Navy `#050A18`
- **Surface Cards**: Dark Navy Grey `#0F172A` with `backdrop-blur-md`
- **Primary Accent**: Neon Cyan / Electric Blue `#00F2FE`
- **Secondary Accent**: Steel Blue / Dark Slate `#263238`
- **Text Primary**: Pure White `#FFFFFF`
- **Text Secondary**: Soft Grey `#94A3B8`

---

## 📝 Customizing Copy & Content

All content (Services, Portfolio case studies, FAQs, Pricing, Testimonials) is isolated inside config files in the `data/` folder. You can update copy without modifying component UI code. Look out for `[EDIT ME]` tags in `data/projects.ts` and `data/testimonials.ts` to customize with real project metrics.
