"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 transition-colors duration-300",
        "bg-white/5 border border-white/10 backdrop-blur-[24px]",
        "hover:border-white/20 hover:bg-white/10 group",
        className
      )}
    >
      {/* Subtle Internal Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 group-hover:from-indigo-500/20 group-hover:via-purple-500/10 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
