"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

export function TechStackBar() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-16 relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="relative max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted/60">
          Built with modern, proven technology
        </p>
      </div>
      <div className="relative flex gap-0 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent" />

        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-5 py-2.5 rounded-full glass border border-white/[0.06] text-sm font-medium text-muted hover:text-text hover:border-accent/30 transition-colors duration-200 whitespace-nowrap cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
