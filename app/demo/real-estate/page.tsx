"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Building,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Phone,
  Calendar,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Calculator,
  Search,
  SlidersHorizontal,
  Download,
  Eye,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  priceNum: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tag: string;
  reraNumber: string;
  amenities: string[];
}

const properties: Property[] = [
  {
    id: "prop-1",
    title: "The Grand Horizon Sea-Facing Penthouse",
    location: "Bandra West, Marine Vista Boulevard",
    type: "penthouse",
    price: "₹14.50 Cr",
    priceNum: 145000000,
    beds: 4,
    baths: 5,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=75",
    tag: "Unobstructed Sea View",
    reraNumber: "P51800034821",
    amenities: ["Private Infinity Pool", "3 Dedicated Car Parks", "Helipad Access", "Private Elevator"],
  },
  {
    id: "prop-2",
    title: "The Emerald Sovereign Estate Villa",
    location: "Golf Course Road, Palm Meadows Enclave",
    type: "villa",
    price: "₹8.90 Cr",
    priceNum: 89000000,
    beds: 5,
    baths: 6,
    sqft: 5800,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=75",
    tag: "Private Heated Pool",
    reraNumber: "P51800029104",
    amenities: ["Landscaped Lawn", "Home Automation", "Clubhouse Membership", "Solar Powered"],
  },
  {
    id: "prop-3",
    title: "Aero Heights Signature 3BHK Residence",
    location: "Financial District, Sky Tower 1",
    type: "apartment",
    price: "₹3.40 Cr",
    priceNum: 34000000,
    beds: 3,
    baths: 3,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=75",
    tag: "Ready to Move",
    reraNumber: "P51800018472",
    amenities: ["Concierge Service", "Sky Gym & Spa", "Italian Marble Flooring", "Biometric Entry"],
  },
  {
    id: "prop-4",
    title: "Cascadia Modern Waterfront Townhome",
    location: "Bay Marina Enclave, Coastal Road",
    type: "villa",
    price: "₹6.20 Cr",
    priceNum: 62000000,
    beds: 4,
    baths: 4,
    sqft: 3400,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=75",
    tag: "New Launch",
    reraNumber: "P51800049281",
    amenities: ["Private Yacht Berth", "Rooftop Jacuzzi", "Double Height Living Room", "EV Charging"],
  },
];

export default function RealEstateDemoPage() {
  const [filterType, setFilterType] = useState("all");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedProp, setSelectedProp] = useState<Property>(properties[0]);
  const [submitted, setSubmitted] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(20000000); // 2 Cr
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureYears * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * (tenureYears * 12);
  const totalInterest = totalPayment - loanAmount;

  const filtered = properties
    .filter((p) => (filterType === "all" ? true : p.type === filterType))
    .filter((p) =>
      searchLocation
        ? p.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
          p.title.toLowerCase().includes(searchLocation.toLowerCase())
        : true
    );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setInquiryOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      {/* Demo Sticky Bar */}
      <DemoTopBar
        templateName="PrimeEstate Ultra-Luxury Realty"
        category="Real Estate & Property"
        priceFrom="₹20,000"
        deliveryTime="8–12 Days"
      />

      {/* RERA Certified Top Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <BadgeCheck className="w-3.5 h-3.5" />
              MahaRERA Registered Portfolio: <strong>Reg No. P51800029381</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Clear Title Verification Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+919594292262" className="text-emerald-400 hover:underline font-semibold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              Direct Advisory Desk: +91 95942 92262
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-950/95 backdrop-blur-md border-b border-emerald-500/20 sticky top-[41px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Prime<span className="text-emerald-400">Estate</span>
              </span>
              <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Ultra-Luxury Properties & Estates
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#properties" className="hover:text-emerald-400 transition-colors">Properties</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">EMI Calculator</a>
            <a href="#amenities" className="hover:text-emerald-400 transition-colors">Signature Amenities</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => {
              setSelectedProp(properties[0]);
              setInquiryOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Site Visit</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RERA Approved Signature Developments</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Find Your Signature{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Living Sanctuary.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Curated portfolio of sea-facing penthouses, gated estate villas, and high-yield commercial investments
                with immersive 360° virtual tours and dedicated relationship managers.
              </p>

              {/* Quick Search Bar */}
              <div className="p-2 rounded-2xl bg-slate-950/80 border border-emerald-500/30 shadow-2xl max-w-xl flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search by location (e.g. Bandra, Worli, Palm Meadows)..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none py-2 px-2"
                />
                <a
                  href="#properties"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition-colors shadow"
                >
                  Explore
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#properties"
                  className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Search className="w-4 h-4" />
                  <span>Browse Available Inventory</span>
                </a>
                <a
                  href="tel:+919594292262"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-emerald-400 text-white font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Speak to Property Director</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-emerald-400">₹850Cr+</p>
                  <p>Inventory Value</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p>RERA Clear Title</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">450+</p>
                  <p>Families Settled</p>
                </div>
              </div>
            </div>

            {/* Right Featured Villa Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-950 p-4 shadow-2xl border border-emerald-500/30 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury villa exterior"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-xs">The Grand Horizon Penthouse</p>
                      <p className="text-emerald-400 text-[11px] font-mono">₹14.50 Cr • Bandra West</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProp(properties[0]);
                        setInquiryOpen(true);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section id="properties" className="py-20 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-emerald-400">
                VERIFIED INVENTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Residences
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Properties" },
                { id: "penthouse", label: "Penthouses" },
                { id: "villa", label: "Luxury Villas" },
                { id: "apartment", label: "Apartments" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterType(f.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    filterType === f.id
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((prop) => (
              <div
                key={prop.id}
                className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-72 bg-slate-950 overflow-hidden">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow">
                      {prop.tag}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 backdrop-blur-md text-emerald-300 border border-white/10">
                      {prop.price}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{prop.location}</span>
                    </p>

                    <div className="grid grid-cols-3 gap-3 my-3 p-3.5 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-300 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-emerald-400" />
                        <span>{prop.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-emerald-400" />
                        <span>{prop.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-emerald-400" />
                        <span>{prop.sqft} sqft</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {prop.amenities.map((am, ai) => (
                        <span key={ai} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedProp(prop);
                      setInquiryOpen(true);
                    }}
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Private Viewing</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Interactive EMI Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-8 sm:p-10 border border-emerald-500/30 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                  FINANCIAL PLANNING TOOL
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-emerald-400" />
                  <span>Home Loan EMI Calculator</span>
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Partnered with HDFC, ICICI, SBI & Axis Bank
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Loan Amount</span>
                    <strong className="text-emerald-400 text-sm">₹{(loanAmount / 10000000).toFixed(2)} Cr (₹{loanAmount.toLocaleString("en-IN")})</strong>
                  </div>
                  <input
                    type="range"
                    min={5000000}
                    max={150000000}
                    step={1000000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Interest Rate (% per annum)</span>
                    <strong className="text-emerald-400 text-sm">{interestRate}%</strong>
                  </div>
                  <input
                    type="range"
                    min={7.5}
                    max={12.0}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Loan Tenure</span>
                    <strong className="text-emerald-400 text-sm">{tenureYears} Years ({tenureYears * 12} Months)</strong>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Display */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-4 text-center">
                <p className="text-xs font-mono text-slate-400 uppercase">Estimated Monthly EMI</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                  ₹{monthlyEMI.toLocaleString("en-IN")}
                </p>

                <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-2 text-slate-300 text-left">
                  <div className="flex justify-between">
                    <span>Principal Loan</span>
                    <span>₹{loanAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest</span>
                    <span className="text-amber-400">₹{Math.round(totalInterest).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-2 border-t border-white/5">
                    <span>Total Payable</span>
                    <span>₹{Math.round(totalPayment).toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  onClick={() => setInquiryOpen(true)}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all"
                >
                  Get Pre-Approved Loan Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-500/30 text-white">
            <button
              onClick={() => setInquiryOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Site Visit Scheduled!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Our Senior Portfolio Director will reach out to confirm your private chauffeur and VIP viewing pass.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase font-mono">
                    VIP PROPERTY INQUIRY
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProp.title}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedProp.location} • {selectedProp.price}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Mahindra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date of Viewing</label>
                  <input
                    type="date"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-xs text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30"
                >
                  Confirm Site Visit Schedule
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Building className="w-5 h-5 text-emerald-400" />
                <span>PrimeEstate Luxury Realty</span>
              </div>
              <p className="leading-relaxed">
                Real Estate Demo website created by IntekCT Technologies. Ready to customize with your property portfolio, lead capture CRM, and interactive floor plans.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Realty Lounge</h4>
              <p className="leading-relaxed">
                Level 18, Apex Financial Tower<br />
                Marine Drive Boulevard<br />
                Direct Desk: +91 95942 92262
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">RERA Registration</h4>
              <p className="leading-relaxed">
                MahaRERA Reg No: P51800029381<br />
                All projects are verified and Title Clearance certified.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Advisory Services</h4>
              <p className="leading-relaxed">
                NRI Investment Desk, Home Loan Pre-Approvals, Legal Conveyance & Interior Consultation.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 PrimeEstate Realty Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-emerald-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
