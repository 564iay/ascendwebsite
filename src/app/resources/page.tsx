"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

export default function Resources() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-6 pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">Ascend <span className="text-gradient-primary">Resources</span></h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Everything you need to know about our roadmap, updates, and ecosystem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        <Link href="/resources" className="block">
          <GlassCard delay={0.1} className="h-full">
            <div className="mb-4 text-3xl">🗺️</div>
            <h3 className="text-xl font-bold mb-2">Roadmap</h3>
            <p className="text-white/60 text-sm">See what we're building next. Vote on upcoming features and RPG expansions.</p>
          </GlassCard>
        </Link>
        
        <Link href="/resources" className="block">
          <GlassCard delay={0.2} className="h-full">
            <div className="mb-4 text-3xl">📝</div>
            <h3 className="text-xl font-bold mb-2">Changelog</h3>
            <p className="text-white/60 text-sm">Stay up to date with the latest patches, bug fixes, and feature drops.</p>
          </GlassCard>
        </Link>
        
        <Link href="/resources" className="block">
          <GlassCard delay={0.3} className="h-full">
            <div className="mb-4 text-3xl">📚</div>
            <h3 className="text-xl font-bold mb-2">Documentation</h3>
            <p className="text-white/60 text-sm">Learn how to maximize your XP gains and configure your AI coach effectively.</p>
          </GlassCard>
        </Link>
      </div>
    </div>
  );
}
