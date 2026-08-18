"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Camera,
  Film,
  Sparkles,
  Heart,
  Star,
  Award,
  Calendar,
  Clock,
  Check,
  CheckCircle2,
  X,
  Play,
  Sliders,
  ChevronRight,
  Eye,
  Phone,
  MessageSquare,
  Maximize2,
  Plus,
  Zap,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "wedding" | "fashion" | "commercial" | "films";
  categoryLabel: string;
  image: string;
  location: string;
  client: string;
  gear: string;
  aspect: "tall" | "wide" | "square";
}

const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "Royal Udaipur Palace Wedding & Sangeet",
    category: "wedding",
    categoryLabel: "Royal Weddings",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    location: "City Palace, Udaipur",
    client: "Rohan & Devika",
    gear: "Sony FX3 • 50mm f/1.2 GM",
    aspect: "tall",
  },
  {
    id: "g-2",
    title: "Vogue India Couture Editorial – Golden Hour",
    category: "fashion",
    categoryLabel: "Fashion Editorial",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    location: "Studio Lumière, Mumbai",
    client: "Anita Dongre Haute Couture",
    gear: "RED Komodo 6K • Zeiss Master Prime",
    aspect: "wide",
  },
  {
    id: "g-3",
    title: "Minimalist Swiss Chronograph Brand Campaign",
    category: "commercial",
    categoryLabel: "Commercial & Brand",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    location: "Zurich / Mumbai",
    client: "Veloce Timepieces",
    gear: "Hasselblad H6D • 120mm Macro",
    aspect: "square",
  },
  {
    id: "g-4",
    title: "Sunset Serenade Pre-Wedding in Cappadocia",
    category: "wedding",
    categoryLabel: "Royal Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    location: "Cappadocia, Turkey",
    client: "Kabir & Tara",
    gear: "Sony A7S III • 24-70mm f/2.8",
    aspect: "wide",
  },
  {
    id: "g-5",
    title: "Hypercar Odyssey – Cinematic 4K Commercial",
    category: "films",
    categoryLabel: "Cinematic Films",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    location: "Dubai Autodrome",
    client: "Apex Motor Group",
    gear: "ARRI Alexa Mini • FPV Drone 4K",
    aspect: "tall",
  },
  {
    id: "g-6",
    title: "Modern Bohemian Bridal Portraits",
    category: "wedding",
    categoryLabel: "Royal Weddings",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    location: "Jaipur Heritage Haveli",
    client: "Ananya & Siddharth",
    gear: "Canon EOS R5 • 85mm f/1.2",
    aspect: "square",
  },
  {
    id: "g-7",
    title: "Monochrome Haute Horlogerie & Jewelry",
    category: "commercial",
    categoryLabel: "Commercial & Brand",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    location: "Paris Fashion Week",
    client: "Maison De Luxe",
    gear: "Leica SL2 • Summilux-M 50mm",
    aspect: "tall",
  },
  {
    id: "g-8",
    title: "Coastal Romance – Goa Beach Wedding Teaser",
    category: "films",
    categoryLabel: "Cinematic Films",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    location: "South Goa Private Beach",
    client: "Aditya & Sanjana",
    gear: "Sony FX6 • DJI Ronin 4D",
    aspect: "wide",
  },
];

const gearList = [
  { category: "Cinema Cameras", items: "RED Komodo 6K, ARRI Alexa Mini, Sony FX3 Cinema Line, Sony A7S III" },
  { category: "Prime Lenses", items: "Zeiss Master Primes, Sony G-Master 24mm/50mm/85mm f/1.2, Leica Summilux" },
  { category: "Aerial & Stabilization", items: "DJI Inspire 3 (8K Raw Drone), DJI Ronin 4D, Custom Cinematic FPV Rig" },
  { category: "Lighting & Grip", items: "Aputure 600d Pro, Nanlite Pavotubes, ARRI Skypanels, Profoto B10X Strobes" },
];

export default function PhotographyDemoPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Custom Package Calculator State
  const [packageType, setPackageType] = useState<"wedding" | "fashion" | "commercial">("wedding");
  const [selectedDuration, setSelectedDuration] = useState<"1-day" | "2-days" | "3-days">("2-days");
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    drone4k: true,
    sameDayTeaser: true,
    luxuryAlbum: true,
    preWeddingShoot: false,
  });

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "2026-11-20",
    eventType: "Destination Wedding & Sangeet",
    location: "Udaipur / Goa",
    notes: "",
  });

  // Retouching Slider Simulation
  const [sliderPosition, setSliderPosition] = useState(50);

  // Calculate pricing
  const calculateTotal = () => {
    let base = 75000;
    if (packageType === "fashion") base = 45000;
    if (packageType === "commercial") base = 95000;

    let multiplier = 1;
    if (selectedDuration === "2-days") multiplier = 1.7;
    if (selectedDuration === "3-days") multiplier = 2.4;

    let sum = base * multiplier;
    if (addOns.drone4k) sum += 20000;
    if (addOns.sameDayTeaser) sum += 15000;
    if (addOns.luxuryAlbum) sum += 25000;
    if (addOns.preWeddingShoot) sum += 35000;

    return Math.round(sum);
  };

  const filteredGallery = galleryData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Top Demo Showcase Control Bar */}
      <DemoTopBar
        templateName="Lumière Cinematic Studio"
        category="Creative & Photography"
        deliveryTime="5–7 Days"
        priceFrom="₹10,000"
      />

      {/* Photography Studio Navbar */}
      <header className="sticky top-[38px] z-40 bg-[#07070C]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-widest uppercase text-white block leading-none font-serif">
                LUMIÈRE<span className="text-amber-400">.</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-slate-400">
                Cinematics & Visual Arts
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-semibold text-slate-300">
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">Pricing Builder</a>
            <a href="#retouching" className="hover:text-amber-400 transition-colors">Color Grading</a>
            <a href="#gear" className="hover:text-amber-400 transition-colors">Cinema Gear</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919594292262?text=Hello%20Lumiere%20Studio,%20I%20want%20to%20inquire%20about%20photoshoot%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Studio</span>
            </a>

            <button
              onClick={() => {
                setBookingOpen(true);
                setBookingSuccess(false);
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Dates</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs tracking-widest uppercase font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Award-Winning Wedding & Commercial Visual Studio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight font-serif text-white leading-tight">
            We Frame Timeless <br />
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent italic font-normal">
              Cinematic Masterpieces
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Capturing royal destination weddings, high-fashion editorials, and premium brand films with 8K cinema cameras and bespoke color grading.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all shadow-xl hover:scale-105"
            >
              Explore Portfolio
            </a>
            <a
              href="#calculator"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs tracking-wider uppercase transition-all"
            >
              Customize Package
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">450+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Royal Weddings</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-white font-serif">120+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Fashion & Brands</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-rose-400 font-serif">18+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Global Destinations</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">5-Star Client Love</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Showcase */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#030306] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block mb-2 font-mono">
                Visual Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Featured Works & Stories
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Works" },
                { key: "wedding", label: "Royal Weddings" },
                { key: "fashion", label: "Fashion Editorial" },
                { key: "commercial", label: "Brand Campaigns" },
                { key: "films", label: "Cinematic Films" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeCategory === tab.key
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-Style Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:border-amber-500/50"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Hover Quick View Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-wider text-amber-300">
                    {item.categoryLabel}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span>{item.location}</span>
                      <span>•</span>
                      <span className="text-amber-400">{item.client}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Customizer & Pricing Builder */}
      <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono">
              Transparent Investment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
              Interactive Package Builder
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Customize your event coverage, cinematography deliverables, and album options for instant transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#090912] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Options Column 1 & 2 */}
            <div className="lg:col-span-2 space-y-6">
              {/* Event Type Selector */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-3">
                  1. Select Event / Production Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: "wedding", label: "Royal Wedding", icon: Heart },
                    { key: "fashion", label: "Fashion Lookbook", icon: Camera },
                    { key: "commercial", label: "Brand TVC / Ad", icon: Film },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.key}
                        onClick={() => setPackageType(t.key as any)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                          packageType === t.key
                            ? "bg-amber-500/15 border-amber-500 text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${packageType === t.key ? "text-amber-400" : "text-slate-400"}`} />
                        <span className="text-xs font-bold">{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coverage Duration */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-3">
                  2. Select Coverage Duration
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: "1-day", label: "Single Day", sub: "Up to 8 Hours" },
                    { key: "2-days", label: "2 Days (Standard)", sub: "Sangeet + Wedding" },
                    { key: "3-days", label: "3 Days (Grand)", sub: "Complete Festivities" },
                  ].map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDuration(d.key as any)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        selectedDuration === d.key
                          ? "bg-amber-500/15 border-amber-500 text-white"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-xs font-bold">{d.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{d.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons Checklist */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-300 mb-3">
                  3. Select Premium Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: "drone4k", title: "Dual 4K Cinema Drone Rig", price: "+₹20,000" },
                    { key: "sameDayTeaser", title: "Same-Night 90s Reel Teaser", price: "+₹15,000" },
                    { key: "luxuryAlbum", title: "Handcrafted Italian Leather Album", price: "+₹25,000" },
                    { key: "preWeddingShoot", title: "Cinematic Pre-Wedding Shoot", price: "+₹35,000" },
                  ].map((add) => (
                    <div
                      key={add.key}
                      onClick={() => setAddOns({ ...addOns, [add.key]: !addOns[add.key] })}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        addOns[add.key]
                          ? "bg-amber-500/10 border-amber-500/50 text-white"
                          : "bg-white/[0.02] border-white/10 text-slate-400 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center text-slate-950 text-[10px] font-bold ${
                            addOns[add.key] ? "bg-amber-400" : "border border-slate-500"
                          }`}
                        >
                          {addOns[add.key] && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium">{add.title}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-300">{add.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Summary Column */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-500/10 via-black to-black border border-amber-500/30 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-mono block">
                  Estimated Investment
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-serif mt-2">
                  ₹{calculateTotal().toLocaleString("en-IN")}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Includes master color grading, 8K raw backups, 4 master cinematographers, and online gallery deliverable.
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Base Production:</span>
                    <span className="font-semibold text-white capitalize">{packageType} ({selectedDuration})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Turnaround Time:</span>
                    <span className="font-semibold text-emerald-400">14–21 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deliverables:</span>
                    <span className="font-semibold text-white">4K Film + Photos + Reels</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setBookingOpen(true);
                    setBookingSuccess(false);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Book Shoot with This Package
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  ⚡ Dates are reserved on a first-come, first-served basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Retouching / Color Grade Slider */}
      <section id="retouching" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#030306] border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono">
              Art of Color Science
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white mt-1">
              Master Color Grading & Skin Retouching
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
              Every frame is graded shot-by-shot to achieve our signature warm cinematic look and rich organic skin tones.
            </p>
          </div>

          {/* Interactive Comparison Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 h-[380px] sm:h-[450px] shadow-2xl max-w-3xl mx-auto select-none">
            {/* Color Graded Side (Background) */}
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
              alt="Graded Master"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-slate-950 text-xs font-bold tracking-wider uppercase">
              ✨ Master Color Grade
            </div>

            {/* RAW Neutral Side (Clipped by slider) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-[800px] sm:w-[900px] h-full">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                  alt="Raw Profile"
                  fill
                  className="object-cover grayscale contrast-75 brightness-90"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-slate-300 text-xs font-bold tracking-wider uppercase border border-white/20">
                📷 RAW Log Profile
              </div>
            </div>

            {/* Interactive Slider Input */}
            <input
              type="range"
              min="10"
              max="90"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Color Grade Comparison Slider"
            />

            {/* Center Drag Handle Visual */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl pointer-events-none z-10 font-bold text-xs"
              style={{ left: `${sliderPosition}%` }}
            >
              ↔
            </div>
          </div>
          <p className="text-xs text-slate-400">
            👈 Drag slider horizontally to compare RAW neutral profile vs Lumière Master Color Grade 👉
          </p>
        </div>
      </section>

      {/* Cinema Gear Showcase */}
      <section id="gear" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono">
              Hardware & Optics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Studio Equipment & Cinema Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearList.map((g, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#090912] border border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">{g.category}</div>
                <div className="text-sm font-medium text-slate-200 leading-relaxed">{g.items}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#0A0A10] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black">
              <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-contain" />
            </div>

            <div className="p-6 bg-[#0E0E18] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-amber-400 uppercase font-mono font-bold tracking-widest">
                  {selectedImage.categoryLabel} • {selectedImage.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Shot on: {selectedImage.gear}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedImage(null);
                  setBookingOpen(true);
                }}
                className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shrink-0"
              >
                Inquire For Similar Shoot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shoot Date Booking / Inquiry Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D0D16] border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center mx-auto text-amber-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">Date Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-amber-400">{bookingForm.name || "Client"}</strong>. Our lead producer will review shoot calendar availability for <strong className="text-white">{bookingForm.eventDate}</strong> in <strong className="text-white">{bookingForm.location}</strong> and call you at <strong className="text-amber-300">{bookingForm.phone || "+91 95942 92262"}</strong> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setBookingOpen(false)}
                    className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all uppercase tracking-wider"
                  >
                    Close & Return to Studio
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                    Priority Date Reservation
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">Check Shoot Availability</h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Your Full Name / Couple Names *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan & Devika"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Phone (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Shoot Date *</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.eventDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, eventDate: e.target.value })}
                        className="w-full bg-[#141420] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Shoot Category</label>
                      <select
                        value={bookingForm.eventType}
                        onChange={(e) => setBookingForm({ ...bookingForm, eventType: e.target.value })}
                        className="w-full bg-[#141420] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Royal Wedding">Destination Wedding</option>
                        <option value="Pre-Wedding">Cinematic Pre-Wedding</option>
                        <option value="Fashion Editorial">Fashion / Lookbook</option>
                        <option value="Commercial Ad">Commercial / Brand TVC</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">City / Venue</label>
                      <input
                        type="text"
                        placeholder="e.g. Udaipur, Mumbai, Goa"
                        value={bookingForm.location}
                        onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Check Date & Request Quote</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                    Direct studio response within 2 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
