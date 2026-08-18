"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Sparkles,
  Calendar,
  Users,
  Star,
  MapPin,
  Utensils,
  Wifi,
  Waves,
  Coffee,
  CheckCircle2,
  Phone,
  MessageSquare,
  X,
  Check,
  ChevronRight,
  ShieldCheck,
  Tv,
  Wine,
  Sun,
  Bed,
  ArrowRight,
  Maximize2,
} from "lucide-react";

interface Suite {
  id: string;
  name: string;
  category: "villas" | "penthouse" | "suites";
  categoryLabel: string;
  size: string;
  capacity: string;
  bedType: string;
  view: string;
  pricePerNight: number;
  originalPrice: number;
  image: string;
  amenities: string[];
  description: string;
  featured?: boolean;
}

const suitesData: Suite[] = [
  {
    id: "presidential-villa",
    name: "Presidential Oceanfront Pool Villa",
    category: "villas",
    categoryLabel: "Signature Villa",
    size: "3,200 sq.ft",
    capacity: "Up to 4 Guests",
    bedType: "1 Ultra-King + 1 Queen Suite",
    view: "180° Direct Ocean Horizon",
    pricePerNight: 48000,
    originalPrice: 62000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    amenities: ["Private Heated Infinity Pool", "24/7 Dedicated Butler", "Complimentary Moët Champagne", "Private Beach Access"],
    description: "Our crowning jewel with direct private beach access, expansive teakwood sundeck, heated infinity pool, and personalized in-villa chef service.",
    featured: true,
  },
  {
    id: "royal-penthouse",
    name: "Royal Sky Penthouse & Jacuzzi Terrace",
    category: "penthouse",
    categoryLabel: "Penthouse Suite",
    size: "2,400 sq.ft",
    capacity: "Up to 3 Guests",
    bedType: "1 Master Emperor Bed",
    view: "Panoramic Sunset Coastline",
    pricePerNight: 36000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    amenities: ["Open-Air Marble Jacuzzi", "B&O Surround Sound", "Sunset Cocktail Lounge", "Airport Limousine Transfer"],
    description: "Perched on the highest floor with an expansive marble terrace, open-air heated jacuzzi, and uninterrupted sunset views over the turquoise sea.",
  },
  {
    id: "lagoon-suite",
    name: "Azure Overwater Lagoon Villa",
    category: "villas",
    categoryLabel: "Overwater Villa",
    size: "1,850 sq.ft",
    capacity: "2 Adults (Romantic)",
    bedType: "1 Plush King Bed",
    view: "Glass Floor Over Coral Lagoon",
    pricePerNight: 28000,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    amenities: ["Direct Lagoon Snorkel Deck", "Glass Floor Water Viewing", "Floating Breakfast Service", "Outdoor Rain Shower"],
    description: "Suspended directly over calm lagoon waters with glass floor viewing panels, catamaran sun nets, and romantic floating gourmet breakfasts.",
    featured: true,
  },
  {
    id: "garden-jacuzzi",
    name: "Heritage Tropical Garden Haven",
    category: "suites",
    categoryLabel: "Garden Suite",
    size: "1,400 sq.ft",
    capacity: "Up to 3 Guests",
    bedType: "1 King Bed + Daybed",
    view: "Lush Botanical Sanctuary",
    pricePerNight: 19500,
    originalPrice: 24000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    amenities: ["Private Courtyard Jacuzzi", "Ayurvedic Herbal Bar", "Espresso Machine", "Complimentary High Tea"],
    description: "Nestled among ancient palms and water lily ponds, featuring a secluded open-air stone soaking tub and private sun lounger garden.",
  },
];

const resortExperiences = [
  {
    title: "Michelin 3-Star Ocean Grill & Wine Cellar",
    desc: "Fresh line-caught seafood, Wagyu steaks, and vintage cellar pairings curated by Master Sommelier.",
    icon: Wine,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75",
  },
  {
    title: "Ananda Ayurvedic & Thalasso Spa",
    desc: "Ancient Vedic healing rituals, mineral hot water baths, and therapeutic sound bowl healing journeys.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=75",
  },
  {
    title: "Private Sunset Yacht Charter",
    desc: "Cruise along the coastal cliffs with private champagne service and dolphin watching at golden hour.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75",
  },
];

export default function HotelDemoPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSuiteForBooking, setSelectedSuiteForBooking] = useState<Suite>(suitesData[0]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Search Bar State
  const [checkInDate, setCheckInDate] = useState("2026-10-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-10-18");
  const [guestsCount, setGuestsCount] = useState("2 Adults");

  // Booking Form State
  const [guestForm, setGuestForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkInDate);
      const d2 = new Date(checkOutDate);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 3;
    }
  };

  const nights = calculateNights();
  const totalPrice = selectedSuiteForBooking.pricePerNight * nights;
  const taxesAndFees = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + taxesAndFees;

  const filteredSuites = suitesData.filter((suite) => {
    if (activeCategory === "all") return true;
    return suite.category === activeCategory;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#030A14] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Top Demo Showcase Control Bar */}
      <DemoTopBar
        templateName="The Grand Azure Resort"
        category="Luxury Hospitality & Hotel"
        deliveryTime="5–8 Days"
        priceFrom="₹15,000"
      />

      {/* Hotel Navigation */}
      <header className="sticky top-[38px] z-40 bg-[#051122]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Waves className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-widest uppercase text-white block leading-none font-serif">
                THE GRAND AZURE<span className="text-amber-400">.</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-amber-300/80">
                Resort, Private Villas & Spa
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-slate-300">
            <a href="#villas" className="hover:text-amber-400 transition-colors">Villas & Suites</a>
            <a href="#dining" className="hover:text-amber-400 transition-colors">Michelin Dining</a>
            <a href="#wellness" className="hover:text-amber-400 transition-colors">Ayurvedic Spa</a>
            <a href="#experiences" className="hover:text-amber-400 transition-colors">Resort Experiences</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919594292262?text=Hello%20Grand%20Azure,%20I%20want%20to%20inquire%20about%20villa%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Concierge WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setBookingModalOpen(true);
                setBookingSuccess(false);
              }}
              className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              Reserve Stay
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Stay Search Box */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs tracking-widest uppercase font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Forbes 5-Star & Condé Nast Traveler Best Resort 2025</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white leading-tight">
              Where Secluded Luxury Meets <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-cyan-300 bg-clip-text text-transparent italic">
                The Turquoise Horizon
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Private oceanfront pool villas, Michelin-starred culinary journeys, and world-renowned wellness rituals along our private white sand coast.
            </p>
          </div>

          {/* Interactive Date & Room Search Bar */}
          <div className="max-w-5xl mx-auto bg-[#071933] border border-amber-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-amber-400 mb-1">
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-amber-400 mb-1">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-amber-400 mb-1">
                  Guests & Rooms
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none"
                >
                  <option value="2 Adults" className="bg-[#071933]">2 Adults (1 Room)</option>
                  <option value="2 Adults + 1 Child" className="bg-[#071933]">2 Adults + 1 Child</option>
                  <option value="4 Adults (Family Villa)" className="bg-[#071933]">4 Adults (Villa Suite)</option>
                </select>
              </div>

              <div className="flex items-center">
                <a
                  href="#villas"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all shadow-xl shadow-amber-500/20 hover:scale-105"
                >
                  Explore Available Suites
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Villas & Suites Section */}
      <section id="villas" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020710] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono block mb-1">
                Accommodations
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Handcrafted Sanctuary Suites & Villas
              </h2>
            </div>

            <div className="flex gap-2">
              {[
                { key: "all", label: "All Residences" },
                { key: "villas", label: "Private Pool Villas" },
                { key: "penthouse", label: "Sky Penthouse" },
                { key: "suites", label: "Garden Havens" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeCategory === tab.key
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Suites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSuites.map((suite) => (
              <div
                key={suite.id}
                className="group rounded-3xl bg-[#061426] border border-white/10 hover:border-amber-500/40 overflow-hidden flex flex-col justify-between shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-black/30" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold font-mono border border-white/10">
                    {suite.categoryLabel}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-slate-200 text-xs font-medium border border-white/10">
                    {suite.size}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <Bed className="w-3.5 h-3.5 text-amber-400" />
                      {suite.bedType}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-cyan-300">
                      {suite.view}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-200 transition-colors">
                      {suite.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {suite.description}
                    </p>

                    {/* Amenities list */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {suite.amenities.map((a, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white font-serif">
                          ₹{suite.pricePerNight.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{suite.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">per night + luxury taxes</span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedSuiteForBooking(suite);
                        setBookingModalOpen(true);
                        setBookingSuccess(false);
                      }}
                      className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
                    >
                      Reserve Residence
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Experiences Section */}
      <section id="experiences" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono">
              Bespoke Indulgences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
              Curated Coastal Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resortExperiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden bg-[#061426] border border-white/10 group flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/70 backdrop-blur-md text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold font-serif text-white">{exp.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#071933] border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center mx-auto text-amber-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">Residence Reserved!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-amber-400">{guestForm.name || "Esteemed Guest"}</strong>. Your booking confirmation for <strong className="text-white">{selectedSuiteForBooking.name}</strong> from <strong className="text-white">{checkInDate}</strong> to <strong className="text-white">{checkOutDate}</strong> ({nights} Nights) has been logged. Our Chief Concierge will WhatsApp you at <strong className="text-amber-300">{guestForm.phone || "+91 95942 92262"}</strong> for in-villa dining preferences.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setBookingModalOpen(false)}
                    className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all uppercase tracking-wider"
                  >
                    Done & Return to Resort
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                    Instant Luxury Reservation
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">Book Residence</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedSuiteForBooking.name} • <span className="text-amber-300">{nights} Nights Stay</span>
                  </p>
                </div>

                {/* Stay Breakdown Card */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-300">
                    <span>Dates:</span>
                    <span className="text-white font-medium">{checkInDate} → {checkOutDate}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Nightly Rate ({nights} Nights):</span>
                    <span className="text-white font-mono">₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Luxury GST & Resort Service (18%):</span>
                    <span className="text-white font-mono">₹{taxesAndFees.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-amber-400 pt-1.5 border-t border-white/10">
                    <span>Total Stay Investment:</span>
                    <span className="font-mono font-black">₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Lead Guest Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram & Maya Singhania"
                      value={guestForm.name}
                      onChange={(e) => setGuestForm({ ...guestForm, name: e.target.value })}
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
                        value={guestForm.phone}
                        onChange={(e) => setGuestForm({ ...guestForm, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="guest@luxury.com"
                        value={guestForm.email}
                        onChange={(e) => setGuestForm({ ...guestForm, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Special Preferences / Requests</label>
                    <input
                      type="text"
                      placeholder="e.g. Airport limo pickup, anniversary flowers, vegan breakfast"
                      value={guestForm.specialRequests}
                      onChange={(e) => setGuestForm({ ...guestForm, specialRequests: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Luxury Stay Reservation</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                    🛡️ Zero cancellation penalty up to 48 hours prior to arrival.
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
