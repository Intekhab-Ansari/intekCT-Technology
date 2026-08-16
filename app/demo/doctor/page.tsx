"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Shield,
  Stethoscope,
  HeartPulse,
  Activity,
  Award,
  Users,
  CheckCircle2,
  X,
  Search,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Star,
  FileText,
  BadgeCheck,
} from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications: string;
  experience: string;
  rating: number;
  reviews: number;
  availableDays: string;
  image: string;
  slots: string[];
}

const doctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Arvind K. Sharma",
    role: "Senior Consultant Cardiologist",
    department: "Cardiology",
    qualifications: "MD, DM (Cardiology) AIIMS New Delhi",
    experience: "18+ Years Exp",
    rating: 4.9,
    reviews: 342,
    availableDays: "Mon – Sat",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=75",
    slots: ["09:30 AM", "11:00 AM", "02:30 PM", "04:30 PM", "06:00 PM"],
  },
  {
    id: "doc-2",
    name: "Dr. Ananya Sen",
    role: "Head of Neurology & Spine",
    department: "Neurology",
    qualifications: "MBBS, M.Ch (Neuro) NIMHANS",
    experience: "14+ Years Exp",
    rating: 5.0,
    reviews: 289,
    availableDays: "Mon, Wed, Fri",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=75",
    slots: ["10:00 AM", "12:30 PM", "03:00 PM", "05:15 PM"],
  },
  {
    id: "doc-3",
    name: "Dr. Rajesh K. Varma",
    role: "Joint Replacement & Ortho Specialist",
    department: "Orthopedics",
    qualifications: "MS (Ortho), FRCS (Glasgow, UK)",
    experience: "21+ Years Exp",
    rating: 4.9,
    reviews: 412,
    availableDays: "Tue, Thu, Sat",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=75",
    slots: ["09:00 AM", "11:30 AM", "01:00 PM", "04:00 PM"],
  },
  {
    id: "doc-4",
    name: "Dr. Priya Deshmukh",
    role: "Lead Pediatrician & Child Health",
    department: "Pediatrics",
    qualifications: "MD (Pediatrics), DNB, Fellowship Neonatology",
    experience: "12+ Years Exp",
    rating: 4.9,
    reviews: 310,
    availableDays: "Mon – Sat",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=75",
    slots: ["10:30 AM", "01:30 PM", "04:30 PM", "06:30 PM"],
  },
];

const specialties = [
  { name: "Cardiology", desc: "Advanced cardiac care, ECG, angioplasty & echo scans", icon: HeartPulse, count: "4 Specialists" },
  { name: "Neurology", desc: "Comprehensive brain, spine, migraine & stroke management", icon: Activity, count: "3 Specialists" },
  { name: "Orthopedics", desc: "Arthroscopy, knee replacements, sports injury recovery", icon: Stethoscope, count: "5 Specialists" },
  { name: "Pediatrics", desc: "Child wellness, infant vaccinations, pediatric ICU", icon: Users, count: "3 Specialists" },
  { name: "Diagnostics & Imaging", desc: "Digital X-Ray, 3T MRI, 128-Slice CT, pathology lab", icon: Award, count: "24/7 Open" },
  { name: "Emergency Trauma", desc: "Rapid response ICU, 24/7 trauma & ambulance desk", icon: Shield, count: "Immediate" },
];

export default function DoctorDemoPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>(doctors[0].slots[0]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [patientForm, setPatientForm] = useState({
    name: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    reason: "",
  });

  const filteredDoctors = searchQuery
    ? doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : doctors;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingOpen(false);
      setPatientForm({ name: "", phone: "", date: new Date().toISOString().split("T")[0], reason: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Demo Bar */}
      <DemoTopBar
        templateName="ApexCare Multispecialty Clinic"
        category="Healthcare & Clinic"
        priceFrom="₹15,000"
        deliveryTime="5–7 Days"
      />

      {/* Trust & Emergency Hotline Bar */}
      <div className="bg-[#0A2540] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <Phone className="w-3.5 h-3.5" />
              Emergency Helpline: <strong>+91 95942 92262</strong>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              OPD Timings: 8:00 AM – 9:00 PM (Mon – Sun)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <BadgeCheck className="w-3.5 h-3.5" />
              NABH & ISO 9001:2015 Certified
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a
              href="https://wa.me/919594292262?text=Hello%20ApexCare,%20I%20want%20to%20book%20a%20doctor%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Helpdesk
            </a>
          </div>
        </div>
      </div>

      {/* Main Clinic Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[41px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#0A2540] flex items-center gap-1">
                Apex<span className="text-cyan-600">Care</span>
              </span>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Multispecialty Clinic & Hospital
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#specialties" className="hover:text-cyan-600 transition-colors">Specialties</a>
            <a href="#doctors" className="hover:text-cyan-600 transition-colors">Our Doctors</a>
            <a href="#features" className="hover:text-cyan-600 transition-colors">Clinical Tech</a>
            <a href="#testimonials" className="hover:text-cyan-600 transition-colors">Patient Reviews</a>
          </nav>

          <button
            onClick={() => {
              setSelectedDoctor(doctors[0]);
              setSelectedSlot(doctors[0].slots[0]);
              setBookingOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-cyan-50/40 to-slate-100/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Modern Healthcare & Diagnostic Excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
                World-Class Medical Care,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                  Right When You Need It.
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Consult with verified specialist physicians, book instant diagnostic lab tests,
                and receive digital prescriptions with zero waiting room hassle.
              </p>

              {/* Mayo Clinic Style Symptom Search Box */}
              <div className="p-2 rounded-2xl bg-white border border-slate-200 shadow-xl max-w-xl">
                <div className="flex items-center gap-2 px-3 py-1">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search doctor, condition (e.g. Chest pain, Back ache, Pediatric)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-2"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="text-xs text-slate-400 hover:text-slate-600 px-2">
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedDoctor(doctors[0]);
                    setSelectedSlot(doctors[0].slots[0]);
                    setBookingOpen(true);
                  }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Clinic Visit</span>
                </button>
                <a
                  href="tel:+919594292262"
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-cyan-600 text-slate-700 font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>Speak to Medical Desk</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 font-mono text-xs text-slate-600">
                <div>
                  <p className="text-2xl font-bold text-[#0A2540]">25,000+</p>
                  <p>Happy Patients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-600">45+</p>
                  <p>Specialist Doctors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600">99.4%</p>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right Card / Doctor Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-4 shadow-2xl border border-slate-200/90 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                    alt="Doctor consultation clinic"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#0A2540]">Dr. Arvind Sharma</p>
                      <p className="text-[11px] text-cyan-700 font-semibold">Chief of Cardiology • 18 Yrs Exp</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available Today
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-cyan-600" />
                      24/7 Digital Health Records
                    </span>
                    <span className="text-emerald-700 font-bold">HIPAA Secure</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Access lab reports, prescription history, and doctor consultation summaries on our patient portal.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-cyan-600">
              CLINICAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
              Our Specialized Departments
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Equipped with state-of-the-art diagnostic technology and led by senior super-specialist physicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-cyan-500/50 hover:bg-cyan-50/30 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-cyan-700 transition-colors">
                      {spec.name}
                    </h3>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {spec.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Profiles & Slot Booking */}
      <section id="doctors" className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-cyan-600">
                EXPERT PHYSICIANS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mt-1">
                Consult With Specialist Doctors
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-500">
              Instant Confirmed Slots • No Waiting Queue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0A2540] text-white">
                      {doc.department}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-900 flex items-center gap-1 shadow">
                      <Star className="w-3 h-3 fill-slate-900" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#0A2540]">{doc.name}</h3>
                    <p className="text-xs font-semibold text-cyan-700">{doc.role}</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{doc.qualifications}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-100">
                      <span>{doc.experience}</span>
                      <span className="text-emerald-700 font-bold">{doc.availableDays}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setSelectedDoctor(doc);
                      setSelectedSlot(doc.slots[0]);
                      setBookingOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540]">Appointment Confirmed!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Your appointment with <strong>{selectedDoctor.name}</strong> has been scheduled for{" "}
                  <strong>{patientForm.date} at {selectedSlot}</strong>. SMS & WhatsApp confirmation sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-cyan-600 uppercase font-mono">
                    ONLINE CONSULTATION DESK
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2540] mt-1">
                    Book with {selectedDoctor.name}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedDoctor.role} • {selectedDoctor.department}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={patientForm.name}
                      onChange={(e) => setPatientForm({ ...patientForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={patientForm.phone}
                      onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={patientForm.date}
                      onChange={(e) => setPatientForm({ ...patientForm, date: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Time Slot</label>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-cyan-500 focus:outline-none"
                    >
                      {selectedDoctor.slots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Reason for Visit / Symptoms</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of symptoms or consultation reason..."
                    value={patientForm.reason}
                    onChange={(e) => setPatientForm({ ...patientForm, reason: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all"
                >
                  Confirm & Reserve Slot
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0A2540] text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <HeartPulse className="w-5 h-5 text-cyan-400" />
                <span>ApexCare Multispecialty</span>
              </div>
              <p className="leading-relaxed">
                Doctor & Clinic demo website created by IntekCT Technologies. Ready to customize with your clinic branding, doctor roster, and online booking CRM.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Clinical Departments</h4>
              <ul className="space-y-1.5">
                <li>Cardiology & Heart Care</li>
                <li>Neurology & Spine Surgery</li>
                <li>Orthopedics & Joint Care</li>
                <li>Pediatric & Child Wellness</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Patient Helpdesk</h4>
              <p className="leading-relaxed">
                OPD Desk: +91 95942 92262<br />
                Emergency: 24/7 Ambulance Available<br />
                WhatsApp: Direct Slot Booking
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Hospital Location</h4>
              <p className="leading-relaxed">
                ApexCare Tower, Medical Enclave, Main Boulevard<br />
                Near Metro Station Exit 2<br />
                Ample Valet Parking
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 ApexCare Clinic Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-cyan-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
