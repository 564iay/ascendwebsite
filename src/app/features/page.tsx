"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

export default function Features() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-6 pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl font-bold mb-6">Ascend <span className="text-gradient-primary">Features</span></h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Deep dive into the tools designed to optimize your life and maximize your potential.
        </p>
      </motion.div>

      <div className="flex flex-col gap-32 w-full">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-4">
              AI Coach
            </div>
            <h2 className="text-4xl font-bold mb-6">Hyper-personalized guidance.</h2>
            <p className="text-lg text-white/70 mb-6">
              Ascend's AI isn't just a chatbot. It analyzes your daily habits, completion rates, and stated goals to construct a bespoke roadmap for your success. It knows when to push you and when to suggest a break.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="text-indigo-400">✦</span> Adaptive scheduling based on your energy levels
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-400">✦</span> Proactive habit correction prompts
              </li>
            </ul>
          </motion.div>
          <div className="flex-1 w-full">
            <GlassCard className="p-2">
              <img src="/images/ai_assistant.png" alt="AI Coach" className="w-full rounded-2xl" />
            </GlassCard>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4">
              RPG Progression
            </div>
            <h2 className="text-4xl font-bold mb-6">XP, Levels, and Quests.</h2>
            <p className="text-lg text-white/70 mb-6">
              Gamify your self-improvement. Turn mundane tasks into daily quests, earn Experience Points (XP) for consistency, and unlock exclusive achievement badges that prove your dedication.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="text-purple-400">✦</span> Daily, Weekly, and Epic Quests
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400">✦</span> Streak multipliers and level-up rewards
              </li>
            </ul>
          </motion.div>
          <div className="flex-1 w-full">
            <GlassCard className="p-2">
              <img src="/images/rpg_quests.png" alt="RPG Quests" className="w-full rounded-2xl" />
            </GlassCard>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-4">
              Deep Analytics
            </div>
            <h2 className="text-4xl font-bold mb-6">Cinematic trajectory charts.</h2>
            <p className="text-lg text-white/70 mb-6">
              Visualize your growth like never before. Ascend transforms your raw data into stunning, easy-to-understand charts that clearly show your progress over time.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✦</span> Beautiful interactive data visualizations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✦</span> Weekly and Monthly AI-generated performance reports
              </li>
            </ul>
          </motion.div>
          <div className="flex-1 w-full">
            <GlassCard className="p-2">
              <img src="/images/analytics.png" alt="Analytics" className="w-full rounded-2xl" />
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
