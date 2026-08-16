"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import {
  ShoppingBag,
  Heart,
  Search,
  SlidersHorizontal,
  Star,
  Check,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  X,
  CreditCard,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  sizes: string[];
  tag?: string;
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "AeroShield Pro Noise-Cancelling Headphones",
    category: "audio",
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 428,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=75",
    colors: ["#000000", "#E2E8F0", "#1E293B"],
    sizes: ["One Size"],
    tag: "Best Seller",
    description: "Lossless spatial audio, 40-hour battery life, active hybrid noise cancellation with memory foam comfort.",
  },
  {
    id: "prod-2",
    name: "Veloce Minimalist Titanium Chrono Watch",
    category: "accessories",
    price: 8499,
    originalPrice: 11999,
    rating: 4.8,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=75",
    colors: ["#71717A", "#D97706", "#09090B"],
    sizes: ["40mm", "44mm"],
    tag: "Trending",
    description: "Aerospace-grade titanium chassis, sapphire crystal glass, Japanese quartz movement with 5ATM water resistance.",
  },
  {
    id: "prod-3",
    name: "Luxe Obsidian Merino Knit Overshirt",
    category: "apparel",
    price: 4299,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=75",
    colors: ["#0F172A", "#334155", "#047857"],
    sizes: ["S", "M", "L", "XL"],
    tag: "New Arrival",
    description: "100% extra-fine Australian merino wool, structured drape, breathable thermoregulation for all seasons.",
  },
  {
    id: "prod-4",
    name: "Spectra Polarized Carbon Aviator Sunglasses",
    category: "accessories",
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=75",
    colors: ["#000000", "#9333EA", "#2563EB"],
    sizes: ["Medium", "Large"],
    description: "HD polarized UV400 lenses with ultra-light carbon fiber frame and spring hinges.",
  },
  {
    id: "prod-5",
    name: "Apex Heritage Full-Grain Leather Duffle",
    category: "accessories",
    price: 9999,
    originalPrice: 13999,
    rating: 5.0,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=75",
    colors: ["#78350F", "#000000"],
    sizes: ["35L", "50L"],
    tag: "Limited Batch",
    description: "Handcrafted full-grain vegetable-tanned leather, brass hardware, waterproof nylon interior with shoe compartment.",
  },
  {
    id: "prod-6",
    name: "Urban Elite Waterproof Commuter Backpack",
    category: "accessories",
    price: 3999,
    originalPrice: 5499,
    rating: 4.8,
    reviews: 520,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=75",
    colors: ["#1E293B", "#0F172A", "#64748B"],
    sizes: ["20L"],
    description: "Cordura ballistic nylon, dedicated 16-inch padded laptop pocket, TSA-approved luggage strap and USB charging port.",
  },
];

export default function EcommerceDemoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: products[0],
      quantity: 1,
      selectedColor: products[0].colors[0],
      selectedSize: products[0].sizes[0],
    },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedColor: product.colors[0],
          selectedSize: product.sizes[0],
        },
      ];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discountAmount = discountApplied ? Math.round(subtotal * 0.2) : 0;
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 250;
  const total = subtotal - discountAmount + shipping;
  const freeShippingThreshold = 5000;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "SAVE20") {
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon code. Try 'SAVE20' for 20% off!");
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutOpen(false);
      setCartOpen(false);
      setCheckoutSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans antialiased">
      {/* Demo Sticky Bar */}
      <DemoTopBar
        templateName="NovaTrend Luxe Direct-to-Consumer"
        category="E-Commerce & Retail"
        priceFrom="₹25,000"
        deliveryTime="10–14 Days"
      />

      {/* Promo Notification Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white text-xs py-2 px-4 text-center border-b border-purple-500/20 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Special Offer: Use code <strong className="text-amber-300 font-mono">SAVE20</strong> for 20% off all orders • Free express shipping above ₹5,000</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 sticky top-[41px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Nova<span className="text-purple-400">Trend</span>
              </span>
              <p className="text-[10px] font-mono text-purple-300 uppercase tracking-widest font-semibold">
                Luxe Direct-To-Consumer
              </p>
            </div>
          </div>

          {/* Desktop Categories */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <button onClick={() => setSelectedCategory("all")} className="hover:text-purple-400 transition-colors">All Products</button>
            <button onClick={() => setSelectedCategory("audio")} className="hover:text-purple-400 transition-colors">Audio & Tech</button>
            <button onClick={() => setSelectedCategory("accessories")} className="hover:text-purple-400 transition-colors">Accessories</button>
            <button onClick={() => setSelectedCategory("apparel")} className="hover:text-purple-400 transition-colors">Apparel</button>
          </nav>

          {/* Header Cart Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 text-white transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 text-purple-400" />
              <span className="text-xs font-bold font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#110B1E] via-[#0B0F19] to-[#07090E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Next-Generation D2C Shopping Experience</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Engineered for Comfort.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                  Designed to Inspire.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Browse our flagship audio gear, precision titanium accessories, and artisanal merino apparel.
                Same-day dispatch and 30-day risk-free returns.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#catalog"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Flagship Catalog</span>
                </a>
                <button
                  onClick={() => addToCart(products[0])}
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-purple-400 text-white font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span>Quick Add Best Seller</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Free Shipping &gt; ₹5,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>30-Day Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Right Hero Product Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#130E24] p-4 shadow-2xl border border-purple-500/30 overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={products[0].image}
                    alt={products[0].name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow">
                    {products[0].tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white truncate max-w-[200px]">{products[0].name}</p>
                      <p className="text-xs font-mono text-purple-300 font-bold">₹{products[0].price.toLocaleString("en-IN")}</p>
                    </div>
                    <button
                      onClick={() => addToCart(products[0])}
                      className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="catalog" className="py-20 bg-[#0B0F19] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-purple-400">
                CURATED INVENTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Items" },
                { id: "audio", label: "Audio Gear" },
                { id: "accessories", label: "Accessories" },
                { id: "apparel", label: "Apparel" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === c.id
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="rounded-3xl bg-[#111624] border border-white/10 overflow-hidden shadow-xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 bg-slate-900 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {prod.tag && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow">
                        {prod.tag}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-slate-300 hover:text-red-400 transition-colors">
                      <Heart className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold">{prod.rating}</span>
                        <span className="text-slate-500">({prod.reviews})</span>
                      </div>
                      <span className="text-slate-400 uppercase font-mono text-[10px]">{prod.category}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{prod.description}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-white font-mono">₹{prod.price.toLocaleString("en-IN")}</span>
                        <span className="text-xs text-slate-500 line-through font-mono">₹{prod.originalPrice.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {prod.colors.map((col, ci) => (
                          <span
                            key={ci}
                            className="w-3.5 h-3.5 rounded-full border border-white/20"
                            style={{ backgroundColor: col }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => addToCart(prod)}
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide-over Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[500] flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0F1424] h-full p-6 shadow-2xl border-l border-white/10 flex flex-col justify-between text-white overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-bold text-lg">
                  <ShoppingBag className="w-5 h-5 text-purple-400" />
                  <span>Your Shopping Cart ({cart.reduce((a, c) => a + c.quantity, 0)})</span>
                </div>
                <button onClick={() => setCartOpen(false)} className="p-2 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Meter */}
              <div className="my-4 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs">
                <div className="flex justify-between font-mono mb-1.5">
                  <span className="text-slate-300">
                    {subtotal >= freeShippingThreshold
                      ? "🎉 You unlocked Free Express Shipping!"
                      : `Add ₹${(freeShippingThreshold - subtotal).toLocaleString("en-IN")} more for Free Shipping`}
                  </span>
                  <span className="text-purple-400 font-bold">{Math.round(freeShippingProgress)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-500 space-y-2">
                  <ShoppingBag className="w-12 h-12 mx-auto text-slate-600" />
                  <p className="text-sm">Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4 my-4 divide-y divide-white/5">
                  {cart.map((item) => (
                    <div key={item.product.id} className="pt-4 flex gap-4 items-center justify-between">
                      <div className="relative w-16 h-16 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{item.product.name}</p>
                        <p className="text-xs font-mono text-purple-300 font-bold mt-0.5">
                          ₹{item.product.price.toLocaleString("en-IN")}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => updateQuantity(item.product.id, -item.quantity)}
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer & Checkout */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-4">
                {/* Coupon input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code (Try SAVE20)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white uppercase focus:outline-none"
                  />
                  <button type="submit" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold">
                    Apply
                  </button>
                </form>

                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Discount (SAVE20)</span>
                      <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                    <span>Total Amount</span>
                    <span className="text-purple-300 font-mono">₹{total.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutOpen(true)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Proceed to Instant Checkout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0F1424] rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/30 text-white">
            <button onClick={() => setCheckoutOpen(false)} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Order Confirmed!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for testing the NovaTrend E-Commerce checkout simulation. Your simulated receipt has been generated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase font-mono">
                    FAST 1-CLICK CHECKOUT
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Shipping & Payment Details
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Total Payable: ₹{total.toLocaleString("en-IN")}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Delivery Address & PIN Code</label>
                  <input
                    type="text"
                    required
                    placeholder="Apartment, Street, Landmark, PIN"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#07090E] text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button type="button" className="p-2 rounded-xl bg-purple-600 text-white font-bold text-xs text-center border border-purple-400">
                      UPI / GPay
                    </button>
                    <button type="button" className="p-2 rounded-xl bg-white/5 text-slate-300 font-semibold text-xs text-center border border-white/10">
                      Cards
                    </button>
                    <button type="button" className="p-2 rounded-xl bg-white/5 text-slate-300 font-semibold text-xs text-center border border-white/10">
                      COD
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30"
                >
                  Pay ₹{total.toLocaleString("en-IN")} & Place Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#05060A] text-slate-400 py-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                <span>NovaTrend Luxe</span>
              </div>
              <p className="leading-relaxed">
                E-Commerce Store demo website created by IntekCT Technologies. Ready to customize with Razorpay, Stripe, inventory sync, and customer order management.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Customer Support</h4>
              <p className="leading-relaxed">
                Order Tracking & Returns<br />
                WhatsApp: +91 95942 92262<br />
                Support: 24/7 Live Desk
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Secure Commerce</h4>
              <p className="leading-relaxed">
                256-Bit SSL Encrypted Checkout<br />
                PCI-DSS Level 1 Compliant<br />
                Razorpay, Stripe & Apple Pay
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-mono uppercase mb-3">Delivery Partner</h4>
              <p className="leading-relaxed">
                Bluedart Express, Delhivery & DHL Express for international orders.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center text-[11px]">
            <p>© 2026 NovaTrend Luxe Demo. Built by IntekCT Technologies.</p>
            <Link href="/demo" className="text-purple-400 hover:underline">
              ← Return to All IntekCT Demos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
