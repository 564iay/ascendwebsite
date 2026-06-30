"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "./GlassCard";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/5 backdrop-blur-3xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Ascend
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/resources" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Resources
          </Link>
        </div>

        <div>
          <Link
            href="/#get-started"
            className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6366F1]/30 transition-all hover:bg-[#4f46e5] hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
