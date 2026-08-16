"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight,
  Flame,
  Award,
  Wine,
  Leaf,
  MessageSquare,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  desc: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  image: string;
  calories?: string;
  pairing?: string;
}

const menuItems: MenuItem[] = [
  {
    id: "item-1",
    name: "Truffle Burrata & Wood-Fired Figs",
    category: "starters",
    price: "₹650",
    desc: "Imported Puglia burrata, balsamic reduction, wild arugula, caramelized organic figs, and grilled sourdough.",
    isVeg: true,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23d8c?auto=format&fit=crop&w=600&q=75",
    calories: "380 kcal",
    pairing: "Pairs with Pinot Grigio",
  },
  {
    id: "item-2",
    name: "Pan-Seared Chilean Sea Bass",
    category: "mains",
    price: "₹1,450",
    desc: "Sustainably caught sea bass, saffron lemon-butter velouté, asparagus spears, and micro-herb emulsion.",
    isVeg: false,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=75",
    calories: "520 kcal",
    pairing: "Pairs with Chardonnay",
  },
  {
    id: "item-3",
    name: "San Marzano Napoletana Pizza",
    category: "wood-fired",
    price: "₹850",
    desc: "48-hour fermented dough, San Marzano D.O.P. tomatoes, fresh fior di latte mozzarella, and Genovese basil.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75",
    calories: "680 kcal",
    pairing: "Pairs with Chianti Classico",
  },
  {
    id: "item-4",
    name: "Smoked Angus Ribeye Steak",
    category: "mains",
    price: "₹1,850",
    desc: "Dry-aged prime beef, charred rosemary garlic butter, roasted marrow, and truffle parmesan potato puree.",
    isVeg: false,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=75",
    calories: "740 kcal",
    pairing: "Pairs with Cabernet Sauvignon",
  },
  {
    id: "item-5",
    name: "Dark Chocolate Fondant & Gold Leaf",
    category: "desserts",
    price: "₹550",
    desc: "70% single-origin Belgian chocolate molten lava cake, Madagascar vanilla bean gelato, and berry coulis.",
    isVeg: true,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=75",
    calories: "450 kcal",
    pairing: "Pairs with Vintage Port Wine",
  },
  {
    id: "item-6",
    name: "Smoked Rosemary Old Fashioned",
    category: "cocktails",
    price: "₹750",
    desc: "Small-batch Kentucky bourbon, Angostura bitters, organic orange peel, torched rosemary, and hickory smoke.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=75",
    calories: "190 kcal",
    pairing: "Signature Aperitif",
  },
];

export default function RestaurantDemoPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [reservationOpen, setReservationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resData, setResData] = useState({
    guests: "2 Guests",
    date: new Date().toISOString().split("T")[0],
    time: "08:00 PM",
    seating: "Rooftop Starlight Terrace",
    name: "",
    phone: "",
    requests: "",
  });

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReservationOpen(false);
      setResData({
        guests: "2 Guests",
        date: new Date().toISOString().split("T")[0],
        time: "08:00 PM",
        seating: "Rooftop Starlight Terrace",
        name: "",
        phone: "",
        requests: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] text-amber-50 font-sans antialiased">
      {/* Top Demo Bar */}
      <DemoTopBar
        templateName="L'Aura Bistro & Artisanal Bar"
        category="Restaurant & Hospitality"
        priceFrom="₹12,000"
        deliveryTime="5–8 Days"
      />

      {/* Top Lounge Bar */}
      <div className="bg-[#1C1917] text-orange-200/80 text-xs py-2 px-4 sm:px-8 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-orange-400 font-medium">
              <Phone className="w-3.5 h-3.5" />
              Direct Table Bookings: <strong>+91 95942 92262</strong>
            </span>
            <span className="hidden md:inline text-orange-300/80 font-mono">
              Open Daily: 12:00 PM – 11:30 PM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Michelin Guide Recommended 2025
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <a
              href="https://wa.me/919594292262?text=Hello%20L'Aura%20Bistro,%20I%20would%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Table Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#0C0A09]/95 backdrop-blur-md border-b border-orange-500/20 sticky top-[41px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                L&apos;Aura <span className="text-orange-500 font-serif italic">Bistro</span>
              </span>
              <p className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-semibold">
                Artisanal Wood-Fired Dining
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-300">
            <a href="#menu" className="hover:text-orange-400 transition-colors">Culinary Menu</a>
            <a href="#story" className="hover:text-orange-400 transition-colors">Our Story</a>
            <a href="#experience" className="hover:text-orange-400 transition-colors">Seating Zones</a>
            <a href="#location" className="hover:text-orange-400 transition-colors">Location</a>
          </nav>

          <button
            onClick={() => setReservationOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>
      </header>

      {/* Atmospheric Culinary Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#1C1917] via-[#0C0A09] to-[#0C0A09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>Wood-Fired Gastronomy & Wine Cellar</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Where Flavors Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 font-serif italic">
                  Artistry.
                </span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Experience wood-fired sourdough pizzas, dry-aged steaks, handcrafted pastas,
                and an curated collection of 150+ international wines.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setReservationOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Table Online</span>
                </button>
                <a
                  href="#menu"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-orange-400 text-stone-200 font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <UtensilsCrossed className="w-4 h-4 text-orange-400" />
                  <span>Explore Menu</span>
                </a>
              </div>

              {/* Accolades */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800 font-mono text-xs text-stone-300">
                <div>
                  <p className="text-2xl font-bold text-orange-400">4.9 ★</p>
                  <p>Over 1,800 Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">150+</p>
                  <p>Cellar Wine Labels</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-400">100%</p>
                  <p>Organic Farm Sourced</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#1C1917] p-4 shadow-2xl border border-orange-500/30 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-stone-900">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="L'Aura Bistro fine dining ambient"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1C1917]/90 backdrop-blur-md border border-orange-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white font-serif">Chef Jean-Luc Moreau</p>
                      <p className="text-[11px] text-orange-400 font-semibold">Executive Culinary Director</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      Rooftop Open
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-stone-200">
                    <span className="font-semibold flex items-center gap-1.5 text-orange-400">
                      <Wine className="w-4 h-4" />
                      Sommelier Curated Wine Flight
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">Daily 6:00 PM</span>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    Enjoy our signature 5-course tasting menu paired with rare Tuscan and Bordeaux vintages.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filterable Menu Section */}
      <section id="menu" className="py-20 bg-[#14110F] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-orange-400">
                ARTISANAL DISHES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-serif">
                The Bistro Menu
              </h2>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Items" },
                { id: "starters", label: "Small Plates" },
                { id: "wood-fired", label: "Wood-Fired Pizza" },
                { id: "mains", label: "Entrées" },
                { id: "desserts", label: "Desserts" },
                { id: "cocktails", label: "Craft Cocktails" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-white/5 text-stone-400 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-[#1C1917] border border-white/10 overflow-hidden shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-stone-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.isVeg
                            ? "bg-emerald-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {item.isVeg ? "VEG" : "NON-VEG"}
                      </span>
                      {item.isChefSpecial && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-600 text-white flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          Chef&apos;s Signature
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-white/10">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-serif">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                    {item.pairing && (
                      <p className="text-[11px] text-orange-400/90 font-mono pt-2 border-t border-white/5 flex items-center gap-1.5">
                        <Wine className="w-3.5 h-3.5" />
                        <span>{item.pairing}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setReservationOpen(true)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-orange-600 text-white font-bold text-xs border border-white/10 transition-all"
                  >
                    Reserve Table for This Dish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation Modal */}
      {reservationOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#1C1917] rounded-3xl p-6 sm:p-8 shadow-2xl border border-orange-500/30 text-white">
            <button
              onClick={() => setReservationOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 mx-auto flex items-center justify-center border border-orange-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Table Confirmed!</h3>
                <p className="text-sm text-stone-300 max-w-sm mx-auto">
                  We have reserved a table for <strong>{resData.guests}</strong> in the{" "}
                  <strong>{resData.seating}</strong> on <strong>{resData.date} at {resData.time}</strong>. WhatsApp confirmation sent!
                </p>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase font-mono">
                    VIP TABLE RESERVATION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 font-serif">
                    Reserve Your Dining Experience
                  </h3>
                  <p className="text-xs text-stone-400">Complimentary Welcome Champagne for Online Bookings</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kabir Bedi"
                      value={resData.name}
                      onChange={(e) => setResData({ ...resData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={resData.phone}
                      onChange={(e) => setResData({ ...resData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Party Size</label>
                    <select
                      value={resData.guests}
                      onChange={(e) => setResData({ ...resData, guests: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Date</label>
                    <input
                      type="date"
                      required
                      value={resData.date}
                      onChange={(e) => setResData({ ...resData, date: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Time</label>
                    <select
                      value={resData.time}
                      onChange={(e) => setResData({ ...resData, time: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                    >
                      <option>07:00 PM</option>
                      <option>07:30 PM</option>
                      <option>08:00 PM</option>
                      <option>08:30 PM</option>
                      <option>09:00 PM</option>
                      <option>09:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Preferred Seating Zone</label>
                  <select
                    value={resData.seating}
                    onChange={(e) => setResData({ ...resData, seating: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0C0A09] text-xs text-white focus:outline-none"
                  >
                    <option>Rooftop Starlight Terrace (Sea View)</option>
                    <option>Chef&apos;s Table (Live Fire View)</option>
                    <option>Main Dining Lounge (Romantic Velvet)</option>
                    <option>Private Wine Cellar (VIP Dining)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30"
                >
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="location" className="bg-[#050403] text-stone-400 py-12 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <UtensilsCrossed className="w-5 h-5 text-orange-500" />
                <span>L&apos;Aura Bistro</span>
              </div>
              <p className="leading-relaxed">
                Restaurant & Hospitality demo website created by IntekCT Technologies. Ready to customize with your digital menu, QR ordering, and table booking CRM.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Reservations Desk</h4>
              <p className="leading-relaxed">
                Direct Desk: +91 95942 92262<br />
                Table Inquiries: 11:00 AM – 11:00 PM<br />
                WhatsApp: Instant Table Confirmation
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Location & Valet</h4>
              <p className="leading-relaxed">
                42 Heritage Boulevard, Gourmet Quarter<br />
                Valet Parking Available<br />
                Private Dining Entrance on 4th Floor
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Private Parties</h4>
              <p className="leading-relaxed">
                Corporate dinners, anniversary celebrations, and rooftop cocktail soirees for up to 120 guests.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-900 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 L&apos;Aura Bistro Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-orange-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
