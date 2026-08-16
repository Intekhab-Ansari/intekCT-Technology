"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Dumbbell,
  Flame,
  Clock,
  Calendar,
  CheckCircle2,
  Trophy,
  Users,
  Zap,
  Phone,
  ArrowRight,
  X,
  Sparkles,
  Award,
  QrCode,
  Check,
} from "lucide-react";

interface ClassScheduleItem {
  id: string;
  name: string;
  day: string;
  time: string;
  coach: string;
  category: string;
  intensity: string;
  calories: string;
}

const classSchedule: ClassScheduleItem[] = [
  { id: "c1", name: "High-Octane CrossFit Arena", day: "Monday", time: "06:30 AM", coach: "Coach Marcus Vance", category: "CrossFit", intensity: "Extreme", calories: "750 kcal" },
  { id: "c2", name: "Power Vinyasa & Core Sculpt", day: "Monday", time: "08:00 AM", coach: "Coach Priya Sharma", category: "Yoga", intensity: "Medium", calories: "420 kcal" },
  { id: "c3", name: "Heavy Bag Boxing & Sparring", day: "Tuesday", time: "07:00 AM", coach: "Coach Tyson Diaz", category: "Boxing", intensity: "High", calories: "800 kcal" },
  { id: "c4", name: "Metabolic HIIT & Kettlebells", day: "Wednesday", time: "06:00 PM", coach: "Coach Elena Rostova", category: "HIIT", intensity: "Extreme", calories: "680 kcal" },
  { id: "c5", name: "Olympic Barbell & Deadlift Club", day: "Thursday", time: "07:00 PM", coach: "Coach Marcus Vance", category: "CrossFit", intensity: "High", calories: "600 kcal" },
  { id: "c6", name: "Weekend Warrior Full Body Burn", day: "Saturday", time: "09:00 AM", coach: "All Master Trainers", category: "HIIT", intensity: "Extreme", calories: "900 kcal" },
];

export default function GymDemoPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [trialSuccess, setTrialSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro Athlete (Annual)");
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");
  const [activeDayFilter, setActiveDayFilter] = useState("All Days");

  const plans = [
    {
      name: "Starter Fitness",
      monthlyPrice: 2499,
      annualPrice: 1999,
      desc: "Perfect for beginners looking to build a consistent workout routine.",
      features: [
        "Full Gym & Cardio Floor Access",
        "Locker & Steam Bath Facilities",
        "Free Diet & Fitness Assessment",
        "TitanFit Mobile App Access",
      ],
      popular: false,
    },
    {
      name: "Pro Athlete (Most Popular)",
      monthlyPrice: 3999,
      annualPrice: 2999,
      desc: "Our most popular membership for serious transformation results.",
      features: [
        "24/7 Unlimited Gym Access",
        "Unlimited HIIT, Yoga & CrossFit Classes",
        "Personalized Nutrition & Diet Chart",
        "4 Free 1-on-1 Personal Training Sessions",
        "Sauna, Cold Plunge & Recovery Spa",
      ],
      popular: true,
    },
    {
      name: "VIP Elite Performance",
      monthlyPrice: 6999,
      annualPrice: 4999,
      desc: "Comprehensive VIP experience with private training and body scans.",
      features: [
        "All Pro Membership Perks",
        "12 Dedicated Personal Training Sessions",
        "Bi-Weekly InBody Body Composition Scans",
        "Reserved VIP Locker & Towel Service",
        "Custom Supplementation & Recovery Protocol",
      ],
      popular: false,
    },
  ];

  const filteredClasses =
    activeDayFilter === "All Days"
      ? classSchedule
      : classSchedule.filter((c) => c.day === activeDayFilter);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSuccess(true);
    setTimeout(() => {
      setTrialOpen(false);
      setTrialSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans antialiased">
      {/* Demo Sticky Bar */}
      <DemoTopBar
        templateName="TitanFit Elite Performance Club"
        category="Gym / Fitness Studio"
        priceFrom="₹13,000"
        deliveryTime="5–7 Days"
      />

      {/* 24/7 Facility Strip */}
      <div className="bg-[#0D1019] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-red-400 font-medium">
              <Flame className="w-3.5 h-3.5" />
              24/7 Unlimited Access Open • Front Desk: <strong>+91 95942 92262</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Imported Hammer Strength & Eleiko Olympic Equipment
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Open Now
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#0B0E17]/95 backdrop-blur-md border-b border-red-500/20 sticky top-[41px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Titan<span className="text-red-500">Fit</span>
              </span>
              <p className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold">
                Elite Athletic Performance Club
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#plans" className="hover:text-red-400 transition-colors">Memberships</a>
            <a href="#timetable" className="hover:text-red-400 transition-colors">Class Timetable</a>
            <a href="#trainers" className="hover:text-red-400 transition-colors">Master Coaches</a>
            <a href="#amenities" className="hover:text-red-400 transition-colors">Recovery Spa</a>
          </nav>

          <button
            onClick={() => setTrialOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Flame className="w-4 h-4" />
            <span>Claim Free 1-Day Pass</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#180A0B] via-[#0B0E17] to-[#05070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>15,000 Sq. Ft. World-Class Strength Floor</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Forge Your Ultimate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                  Strength & Power.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Certified master coaches, Olympic lifting arenas, high-intensity boxing turf,
                cold plunge baths, and an obsessive community built for breakthroughs.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setTrialOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Flame className="w-4 h-4" />
                  <span>Start Free 1-Day Trial</span>
                </button>
                <a
                  href="#plans"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-red-400 text-white font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <Trophy className="w-4 h-4 text-red-400" />
                  <span>View Membership Tiers</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-red-500">10,000+</p>
                  <p>Members Transformed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">45+</p>
                  <p>Weekly Live Classes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-500">24/7</p>
                  <p>Open All Year Round</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-950 p-4 shadow-2xl border border-red-500/30 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=75"
                    alt="Gym fitness workout"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-xs">CrossFit & Functional Arena</p>
                      <p className="text-red-400 text-[11px] font-mono">Coach Marcus Vance • 06:30 AM</p>
                    </div>
                    <button
                      onClick={() => setTrialOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
                    >
                      Book Pass
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="plans" className="py-20 bg-[#0A0D15] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-red-500">
              MEMBERSHIP TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Choose Your Transformation Plan
            </h2>

            {/* Monthly / Annual Billing Toggle */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-black/50 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-xl font-bold transition-all ${
                  billingCycle === "monthly" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === "annual" ? "bg-red-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Annual Membership</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-bold">SAVE 25%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => {
              const currentPrice = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={i}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-[#180C0D] border-2 border-red-500 shadow-2xl shadow-red-500/20 scale-105"
                      : "bg-[#0B0F19] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white font-mono font-bold text-[11px] uppercase tracking-wider shadow">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mb-6">{plan.desc}</p>

                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                      <span className="text-4xl font-extrabold text-white font-mono">₹{currentPrice.toLocaleString("en-IN")}</span>
                      <span className="text-xs text-slate-400 font-mono">/ month</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      setTrialOpen(true);
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-md transition-all ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-500 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Class Timetable */}
      <section id="timetable" className="py-20 bg-[#05070B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-red-500">
                DAILY SCHEDULE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Weekly Class Timetable
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All Days", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDayFilter(d)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeDayFilter === d
                      ? "bg-red-600 text-white"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-[#0D111D] border border-white/10 hover:border-red-500/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 font-mono text-[10px] font-bold uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-bold">{item.calories}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.coach}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    {item.time} ({item.day})
                  </span>
                  <span className="text-emerald-400 font-bold">{item.intensity} Intensity</span>
                </div>

                <button
                  onClick={() => setTrialOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-white font-bold text-xs border border-white/10 transition-all"
                >
                  Reserve Workout Spot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Pass Modal */}
      {trialOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#110B0C] rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-500/40 text-white">
            <button onClick={() => setTrialOpen(false)} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            {trialSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center border border-red-500/40">
                  <QrCode className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">VIP 1-Day Pass Generated!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Your VIP Pass QR has been sent to your WhatsApp. Present this at our front desk for free admission and locker access!
                </p>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-red-500 uppercase font-mono">
                    VIP 1-DAY ALL-ACCESS PASS
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    Claim Free Gym Workout Pass
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Plan Selected: {selectedPlan}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahil Khan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Fitness Objective</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none">
                    <option>Weight Loss & High-Def Fat Burn</option>
                    <option>Muscle Hypertrophy & Raw Strength</option>
                    <option>Endurance & CrossFit Performance</option>
                    <option>General Health, Mobility & Recovery</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30"
                >
                  Generate Free VIP Pass QR
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="amenities" className="bg-[#04060A] text-slate-400 py-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Dumbbell className="w-5 h-5 text-red-500" />
                <span>TitanFit Performance</span>
              </div>
              <p className="leading-relaxed">
                Gym & Fitness Studio Demo website created by IntekCT Technologies. Ready to customize with online membership subscriptions, class booking, and trainer scheduling.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Facility Hours</h4>
              <p className="leading-relaxed">
                Open 24 Hours / 7 Days<br />
                Trainer Assistance: 6:00 AM – 10:00 PM<br />
                Direct Desk: +91 95942 92262
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Gym Location</h4>
              <p className="leading-relaxed">
                Level 2 & 3, Titan Arena Complex<br />
                Metro Station Cross Road<br />
                Free Parking for Members
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Amenities</h4>
              <p className="leading-relaxed">
                Steam Bath, Cold Plunge, Protein Shake Bar, Wi-Fi Lounge, Lockers & Showers.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 TitanFit Performance Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-red-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
