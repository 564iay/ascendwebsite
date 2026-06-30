"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-6 pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">Invest in Your <span className="text-gradient-primary">Evolution</span></h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Choose the tier that fits your journey. No hidden fees. Cancel anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {/* Tier 1 */}
        <GlassCard delay={0.1} className="flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Novice</h3>
            <p className="text-white/60 text-sm">Perfect for building your first habits.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">Free</span>
          </div>
          <ul className="flex-1 space-y-4 mb-8 text-white/80">
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✓</span> Basic Habit Tracking (Up to 5)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✓</span> Standard Quests
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✓</span> 7-Day Analytics History
            </li>
          </ul>
          <button className="w-full rounded-full border border-white/10 bg-white/5 py-3 font-semibold text-white transition-all hover:bg-white/10">
            Get Started
          </button>
        </GlassCard>

        {/* Tier 2 */}
        <GlassCard delay={0.2} className="flex flex-col h-full border-[#6366F1]/50 bg-[#6366F1]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#6366F1] text-xs font-bold px-4 py-1 rounded-bl-xl text-white">
            MOST POPULAR
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Ascendant</h3>
            <p className="text-white/60 text-sm">Unlock the full power of your AI Coach.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$9</span>
            <span className="text-white/60">/mo</span>
          </div>
          <ul className="flex-1 space-y-4 mb-8 text-white/80">
            <li className="flex items-center gap-3">
              <span className="text-[#A855F7]">✓</span> Unlimited Habit Tracking
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#A855F7]">✓</span> Proactive AI Coaching & Adjustments
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#A855F7]">✓</span> Cinematic Deep Analytics (Lifetime)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#A855F7]">✓</span> Exclusive Epic Quests
            </li>
          </ul>
          <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02]">
            Upgrade Now
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
