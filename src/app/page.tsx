"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-6">
      {/* Hero Portal */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center mt-12 mb-24 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md"
        >
          🚀 The Future of Self-Improvement
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl text-5xl md:text-6xl font-extrabold tracking-tight sm:text-7xl mb-8"
        >
          Become the <span className="text-gradient-primary">Best Version</span> of Yourself
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-xl text-white/70 mb-12"
        >
          Ascend combines AI guidance, powerful habit tracking, and RPG gamification to help you level up your life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/features"
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 text-base font-medium text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Explore Ascend
          </Link>
          <Link
            href="/#get-started"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
          >
            Get Early Access
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-full mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <img
            src="/images/hero.png"
            alt="Ascend Dashboard"
            className="w-full rounded-t-[40px] border-t border-x border-white/10 shadow-2xl mx-auto object-cover max-w-5xl liquid-glass p-2"
          />
        </motion.div>
      </section>

      {/* Intro Grid */}
      <section className="w-full py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Ascend?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            More than just a to-do list. It's a complete ecosystem designed to gamify your life and provide actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <GlassCard delay={0}>
            <div className="flex justify-center mb-6">
              <img src="/images/ai_icon.png" alt="AI Icon" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">AI Guidance</h3>
            <p className="text-center text-white/70">
              Your personalized mentor that adapts to your behavior and pushes you further.
            </p>
          </GlassCard>

          <GlassCard delay={0.2}>
            <div className="flex justify-center mb-6">
              <img src="/images/game_icon.png" alt="Game Icon" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Gamification</h3>
            <p className="text-center text-white/70">
              Turn chores into quests. Earn XP, level up, and maintain streaks to build discipline.
            </p>
          </GlassCard>

          <GlassCard delay={0.4}>
            <div className="flex justify-center mb-6">
              <img src="/images/data_icon.png" alt="Data Icon" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Data Driven</h3>
            <p className="text-center text-white/70">
              Track your progress over time with beautiful, insightful analytics and charts.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
