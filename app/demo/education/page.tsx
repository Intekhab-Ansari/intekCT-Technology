"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  Video,
  FileText,
  BadgeCheck,
  Phone,
  MessageSquare,
  X,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Check,
  Send,
  Zap,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: "jee-neet" | "tech-ai" | "management" | "foundation";
  categoryLabel: string;
  duration: string;
  mode: "Live Hybrid" | "Online Cohort" | "Classroom";
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  batchDate: string;
  seatsLeft: number;
  image: string;
  badge?: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  syllabus: { module: string; topics: string[] }[];
}

const coursesData: Course[] = [
  {
    id: "jee-advance",
    title: "JEE (Main + Advanced) 2-Year Pinnacle Program",
    category: "jee-neet",
    categoryLabel: "Engineering Entrance",
    duration: "24 Months",
    mode: "Live Hybrid",
    rating: 4.9,
    reviews: 1420,
    price: 68000,
    originalPrice: 85000,
    batchDate: "Starts 1st Next Month",
    seatsLeft: 8,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=75",
    badge: "Top Rated",
    instructor: {
      name: "Prof. Arvind Singhania",
      role: "Ex-IIT Bombay, 18+ Yrs Exp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=75",
    },
    syllabus: [
      { module: "Module 1: Advanced Mechanics & Thermodynamics", topics: ["Rotational Dynamics", "Fluids & Waves", "Kinetic Theory"] },
      { module: "Module 2: Organic & Physical Chemistry Masterclass", topics: ["Reaction Mechanisms", "Electrochemistry", "Coordination Chem"] },
      { module: "Module 3: Calculus, Coordinate Geometry & Vectors", topics: ["Differential Equations", "3D Conics", "Complex Numbers"] },
      { module: "Module 4: Rank Booster Problem Solving & Mock Series", topics: ["500+ JEE Adv Problems", "All India Rank Predictor", "1-on-1 Mentoring"] },
    ],
  },
  {
    id: "ai-data-science",
    title: "Executive Full-Stack AI & Machine Learning Specialization",
    category: "tech-ai",
    categoryLabel: "Tech & AI",
    duration: "6 Months",
    mode: "Online Cohort",
    rating: 4.95,
    reviews: 980,
    price: 45000,
    originalPrice: 60000,
    batchDate: "Starts This Weekend",
    seatsLeft: 5,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=75",
    badge: "Industry Favorite",
    instructor: {
      name: "Dr. Rohini Verma",
      role: "Lead AI Researcher, ex-Meta",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=75",
    },
    syllabus: [
      { module: "Module 1: Python, NumPy & Modern Data Pipeline", topics: ["Pandas & PyTorch", "Feature Engineering", "BigQuery"] },
      { module: "Module 2: Deep Learning, CNNs & Transformers", topics: ["Neural Networks", "NLP & Attention Models", "HuggingFace"] },
      { module: "Module 3: Generative AI, RAG & LLM Agents", topics: ["LangChain", "Vector DBs (Pinecone)", "Fine-Tuning Llama-3"] },
      { module: "Module 4: Capstone Deployment & MLOps", topics: ["Docker & Kubernetes", "FastAPI Endpoints", "CI/CD Deployment"] },
    ],
  },
  {
    id: "neet-medical",
    title: "NEET-UG Medical Masterclass (Physics, Chem, Biology)",
    category: "jee-neet",
    categoryLabel: "Medical Entrance",
    duration: "12 Months",
    mode: "Live Hybrid",
    rating: 4.88,
    reviews: 1150,
    price: 55000,
    originalPrice: 70000,
    batchDate: "Starts 15th This Month",
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=75",
    badge: "98% Pass Rate",
    instructor: {
      name: "Dr. Sameer Quadri",
      role: "MD Medicine, Gold Medalist",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=75",
    },
    syllabus: [
      { module: "Module 1: Human Physiology & Cell Biology Deep-Dive", topics: ["Genetics & Evolution", "Human Organ Systems", "Biotechnology"] },
      { module: "Module 2: Organic Chemistry for Medical Rankers", topics: ["Biomolecules & Polymers", "Stereochemistry", "Equilibrium"] },
      { module: "Module 3: Conceptual Medical Physics", topics: ["Optics & Modern Physics", "Electromagnetism", "Thermodynamics"] },
      { module: "Module 4: 100+ NCERT Based Mock Exams", topics: ["OMR Speed Drills", "Previous 15 Yrs NEET Papers", "Doubt Clearing Rooms"] },
    ],
  },
  {
    id: "cat-mba",
    title: "CAT & Executive Management 100 Percentile Blueprint",
    category: "management",
    categoryLabel: "Management Entrance",
    duration: "9 Months",
    mode: "Live Hybrid",
    rating: 4.92,
    reviews: 740,
    price: 38000,
    originalPrice: 50000,
    batchDate: "Starts 20th This Month",
    seatsLeft: 7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=75",
    badge: "IIM Mentors",
    instructor: {
      name: "Gaurav Malhotra",
      role: "IIM Ahmedabad 100%iler",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=75",
    },
    syllabus: [
      { module: "Module 1: Quantitative Aptitude Speed Mastery", topics: ["Arithmetic Shortcuts", "Modern Algebra", "Geometry & Numbers"] },
      { module: "Module 2: Data Interpretation & Logical Reasoning (DILR)", topics: ["Matrix Arrangements", "Games & Tournaments", "Caselets"] },
      { module: "Module 3: Verbal Ability & Reading Comprehension (VARC)", topics: ["Philosophy & Econ Passages", "Critical Reasoning", "Para Jumbles"] },
      { module: "Module 4: GD, WAT & Personal Interview Prep", topics: ["IIM Mock Interviews", "Current Affairs Briefs", "Profile Building"] },
    ],
  },
  {
    id: "k12-foundation",
    title: "Olympiad & STEM Foundation (Grades 8th to 10th)",
    category: "foundation",
    categoryLabel: "Junior Olympiads",
    duration: "10 Months",
    mode: "Classroom",
    rating: 4.85,
    reviews: 620,
    price: 28000,
    originalPrice: 35000,
    batchDate: "Rolling Admissions",
    seatsLeft: 15,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=75",
    badge: "Foundation",
    instructor: {
      name: "Meenakshi Sundaram",
      role: "National Science Olympiad Coach",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=75",
    },
    syllabus: [
      { module: "Module 1: Advanced Math & Logical Thinking", topics: ["Number Theory", "Combinatorics", "Geometry Proofs"] },
      { module: "Module 2: Experimental Physics & Chemistry Lab", topics: ["Motion & Laws", "Chemical Bonding", "Circuitry Basics"] },
      { module: "Module 3: Coding & Robotics Primer", topics: ["Python Basics", "Microcontroller Logic", "STEM Competitions"] },
    ],
  },
  {
    id: "web-dev-pro",
    title: "Full-Stack Web Engineering (Next.js, Node, Cloud)",
    category: "tech-ai",
    categoryLabel: "Software Engineering",
    duration: "5 Months",
    mode: "Online Cohort",
    rating: 4.96,
    reviews: 1280,
    price: 34999,
    originalPrice: 48000,
    batchDate: "Starts Next Monday",
    seatsLeft: 4,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=75",
    badge: "100% Placement Support",
    instructor: {
      name: "Intekhab Ansari",
      role: "Lead Architect & Cloud Specialist",
      avatar: "/intekhab-developer.jpg",
    },
    syllabus: [
      { module: "Module 1: Modern React 19, TypeScript & Next.js", topics: ["Server Components", "State Management", "Tailwind CSS Design"] },
      { module: "Module 2: Backend Architecture & Databases", topics: ["Node.js Microservices", "PostgreSQL & Prisma", "Redis Caching"] },
      { module: "Module 3: Auth, Payments & Cloud DevOps", topics: ["NextAuth", "Stripe/Razorpay API", "AWS & Vercel CI/CD"] },
      { module: "Module 4: 5 Live Production Capstone Projects", topics: ["SaaS Platform", "E-Commerce App", "Portfolio & Job Assistance"] },
    ],
  },
];

const faculties = [
  {
    name: "Prof. Arvind Singhania",
    credentials: "B.Tech & M.Tech, IIT Bombay",
    subject: "Physics & Advanced Mechanics",
    experience: "18+ Years",
    producedRanks: "AIR 3, 14, 27",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=75",
  },
  {
    name: "Dr. Rohini Verma",
    credentials: "Ph.D. Computer Science, Stanford",
    subject: "AI, Machine Learning & Algorithms",
    experience: "12+ Years",
    producedRanks: "Top Tech Recruits at FAANG",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=75",
  },
  {
    name: "Dr. Sameer Quadri",
    credentials: "MD Medicine, AIIMS New Delhi",
    subject: "Zoology & Human Physiology",
    experience: "15+ Years",
    producedRanks: "AIR 1, 9, 32 in NEET",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=75",
  },
  {
    name: "Gaurav Malhotra",
    credentials: "PGDM (Gold Medalist), IIM Ahmedabad",
    subject: "Quant & Business Case Analytics",
    experience: "10+ Years",
    producedRanks: "150+ IIM Converts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
  },
];

const resultsShowcase = [
  { name: "Aryan Deshmukh", exam: "JEE Advanced 2025", rank: "AIR 14", college: "IIT Bombay - Computer Science", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=75" },
  { name: "Sanya Roy", exam: "NEET UG 2025", rank: "AIR 08 (715/720)", college: "AIIMS New Delhi", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=75" },
  { name: "Vikram Sengupta", exam: "CAT 2025", rank: "99.94 Percentile", college: "IIM Ahmedabad (Batch of '27)", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=75" },
  { name: "Rhea Kulkarni", exam: "Full Stack AI Cohort", rank: "Software Engineer III", college: "Placed at Google Cloud (₹38 LPA)", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=75" },
];

const faqs = [
  {
    q: "Can I attend demo / trial classes before enrolling in a course?",
    a: "Yes! We offer a 100% Free Live Trial Class and counseling session for every program. You can book an appointment slot instantly using our online scheduler.",
  },
  {
    q: "What is the mode of classes (Online vs Offline)?",
    a: "We support both! Our smart hybrid classrooms allow you to attend offline lectures with interactive digital boards, or join live interactive 4K streams from anywhere with real-time doubt clearing.",
  },
  {
    q: "How does the Scholarship Aptitude Test (SAT) work?",
    a: "The SAT is conducted every Sunday online and at our regional learning centers. Depending on your performance, you can qualify for 25% to 100% tuition waivers on all foundation, medical, and engineering batches.",
  },
  {
    q: "Do you provide recorded backup videos if I miss a lecture?",
    a: "Yes. All live lectures are recorded in HD and uploaded to your student LMS portal within 2 hours, along with annotated PDF lecture notes and daily practice problems (DPPs).",
  },
];

export default function EducationDemoPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>("JEE (Main + Advanced) 2-Year Pinnacle Program");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [studentForm, setStudentForm] = useState({
    name: "",
    phone: "",
    email: "",
    gradeOrTarget: "Class 11 / 12th Aspirant",
    city: "",
  });

  const filteredCourses = coursesData.filter((c) => {
    const matchesCategory = activeCategory === "all" || c.category === activeCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Demo Showcase Control Bar */}
      <DemoTopBar
        templateName="ApexEd Academy / Institute"
        category="Education & Coaching"
        deliveryTime="5–7 Days"
        priceFrom="₹14,000"
      />

      {/* Navigation Header for Demo Institute */}
      <nav className="sticky top-[38px] z-40 bg-[#0A1424]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-none">
                APEX<span className="text-indigo-400">ED</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                Global Academy & LMS
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#courses" className="hover:text-indigo-400 transition-colors">Courses & Batches</a>
            <a href="#faculty" className="hover:text-indigo-400 transition-colors">Top Faculty</a>
            <a href="#results" className="hover:text-indigo-400 transition-colors">Hall of Fame</a>
            <a href="#scholarship" className="hover:text-indigo-400 transition-colors">Scholarship Test</a>
            <a href="#faqs" className="hover:text-indigo-400 transition-colors">FAQs</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919594292262?text=Hello%20ApexEd,%20I%20want%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Counselor Chat</span>
            </a>

            <button
              onClick={() => {
                setBookingOpen(true);
                setBookingSuccess(false);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo Class</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Admissions Open for Academic Year 2026–2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Unlock Your Potential with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                India&apos;s Top Mentors & LMS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Personalized live hybrid coaching, AI-driven mock testing, and 1-on-1 mentorship designed to crack JEE, NEET, Tech AI, and CAT with top percentiles.
            </p>

            {/* Quick Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="flex items-center bg-[#0F1D33] border border-white/15 rounded-2xl p-1.5 shadow-2xl focus-within:border-indigo-500 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search courses (e.g. JEE, AI, NEET, CAT, Python)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="p-1 text-slate-400 hover:text-white mr-1">
                    <X className="w-4 h-4" />
                  </button>
                )}
                <a
                  href="#courses"
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shrink-0"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Live Stats Row */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400">45,000+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Students Enrolled</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">98.4%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Selection Success</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">180+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">AIR Top 100 Ranks</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">₹4.5 Cr</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Scholarships Awarded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050A14] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 block mb-2">
                Curated Academic Programs
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Explore Popular Courses & Batches
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Programs" },
                { key: "jee-neet", label: "JEE & NEET" },
                { key: "tech-ai", label: "AI & Full-Stack" },
                { key: "management", label: "CAT & MBA" },
                { key: "foundation", label: "Junior Foundation" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === tab.key
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-2xl bg-[#0B1526] border border-white/10 hover:border-indigo-500/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-indigo-500/10"
              >
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-transparent to-black/40" />

                  {course.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-bold tracking-wide shadow-md">
                      {course.badge}
                    </span>
                  )}

                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-slate-200 text-[11px] font-medium border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {course.duration}
                  </span>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-amber-400 text-xs font-bold bg-black/70 backdrop-blur-md px-2 py-1 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.reviews})</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold">
                      <span>{course.categoryLabel}</span>
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono text-[10px]">
                        {course.mode}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-2.5 pt-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-slate-200">{course.instructor.name}</p>
                        <p className="text-[11px] text-slate-400">{course.instructor.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-white">₹{course.price.toLocaleString("en-IN")}</span>
                          <span className="text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString("en-IN")}</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          🔥 Only {course.seatsLeft} seats left
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedCourseForSyllabus(course)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 underline underline-offset-4"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Syllabus</span>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourseForBooking(course.title);
                        setBookingOpen(true);
                        setBookingSuccess(false);
                      }}
                      className="w-full py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/40 hover:border-indigo-500 text-indigo-300 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Book Free Demo Class</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Banner Section */}
      <section id="scholarship" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center lg:text-left max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Apex SAT 2026</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Win up to 100% Scholarship on All Year-Long Programs
                </h3>
                <p className="text-sm text-slate-300">
                  Take our 60-minute online aptitude evaluation this Sunday. Over 1,200+ students receive merit fee waivers every month.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    setSelectedCourseForBooking("Scholarship Aptitude Test (SAT)");
                    setBookingOpen(true);
                    setBookingSuccess(false);
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Register for SAT Sunday Test
                </button>
                <a
                  href="https://wa.me/919594292262?text=Hello%20ApexEd,%20please%20send%20SAT%20sample%20papers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-all"
                >
                  Download Sample Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Faculty Showcase */}
      <section id="faculty" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050A14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Master Mentors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Learn from India&apos;s Most Celebrated Educators
            </h2>
            <p className="text-sm text-slate-400">
              Alumni of IITs, AIIMS, Stanford, and IIMs with decades of proven rank-producing methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0C172A] border border-white/10 hover:border-indigo-500/40 text-center flex flex-col items-center space-y-4 group transition-all"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-xl group-hover:scale-105 transition-transform">
                  <Image src={f.image} alt={f.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{f.name}</h4>
                  <p className="text-xs text-indigo-400 font-medium mt-0.5">{f.credentials}</p>
                  <p className="text-xs text-slate-400 mt-2">{f.subject}</p>
                </div>
                <div className="pt-3 border-t border-white/10 w-full flex justify-between text-[11px] text-slate-300">
                  <span>Exp: <strong className="text-white">{f.experience}</strong></span>
                  <span className="text-amber-400 font-semibold">{f.producedRanks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Hall of Fame */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                Hall of Fame 2025
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Our Star Achievers Speak for Themselves
              </h2>
            </div>
            <div className="text-xs text-slate-400">
              Verified selections from our classroom & hybrid batches.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultsShowcase.map((r, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-emerald-500/50">
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{r.name}</h4>
                    <p className="text-xs text-emerald-400 font-semibold">{r.exam}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Result / Rank:</div>
                  <div className="text-base font-black text-amber-400">{r.rank}</div>
                  <div className="text-[11px] text-slate-300 font-medium truncate">{r.college}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050A14] border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 pt-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B1526] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-indigo-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-indigo-950/40 to-transparent border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Accelerate Your Academic Career?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book your 100% free counseling and trial class now with our senior faculty.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setBookingOpen(true);
                setBookingSuccess(false);
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Book Free Trial Class Today
            </button>
            <a
              href="tel:+919594292262"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 95942 92262</span>
            </a>
          </div>
        </div>
      </section>

      {/* Syllabus Modal */}
      {selectedCourseForSyllabus && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B1526] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
                  Complete Curriculum Preview
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {selectedCourseForSyllabus.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseForSyllabus(null)}
                className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedCourseForSyllabus.syllabus.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-indigo-300">{item.module}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {item.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400">
                Total Duration: <strong className="text-white">{selectedCourseForSyllabus.duration}</strong>
              </div>
              <button
                onClick={() => {
                  setSelectedCourseForBooking(selectedCourseForSyllabus.title);
                  setSelectedCourseForSyllabus(null);
                  setBookingOpen(true);
                  setBookingSuccess(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg"
              >
                Enroll in This Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Free Demo Class / Admission Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B1526] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Free Demo Class Confirmed!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-indigo-400">{studentForm.name || "Student"}</strong>. Our senior academic counselor will call you at <strong className="text-white">{studentForm.phone || "+91 95942 92262"}</strong> within 15 minutes with your live lecture pass and login credentials.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setBookingOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
                    Instant Admission & Demo Pass
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Book Free Trial Lecture</h3>
                  <p className="text-xs text-slate-400">
                    Selected Course: <strong className="text-indigo-300">{selectedCourseForBooking}</strong>
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditya Sharma"
                      value={studentForm.name}
                      onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Target Exam / Grade</label>
                      <select
                        value={studentForm.gradeOrTarget}
                        onChange={(e) => setStudentForm({ ...studentForm, gradeOrTarget: e.target.value })}
                        className="w-full bg-[#0E1B30] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="JEE Main/Advanced">JEE Main / Advanced 2026/27</option>
                        <option value="NEET-UG">NEET Medical 2026/27</option>
                        <option value="CAT / Management">CAT & MBA 2026</option>
                        <option value="AI / Tech Coding">AI & Full-Stack Coding</option>
                        <option value="Class 8-10 Junior">Class 8th–10th Foundation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">City / State</label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Delhi, Bengaluru"
                      value={studentForm.city}
                      onChange={(e) => setStudentForm({ ...studentForm, city: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Free Demo Class Slot</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    🔒 Zero spam guarantee. Instant lecture link shared via WhatsApp.
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
