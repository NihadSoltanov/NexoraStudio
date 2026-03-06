"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

export function FinalCtaSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,140,255,0.08), transparent)",
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,140,255,0.3), rgba(123,97,255,0.3), transparent)",
        }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            Let&apos;s Start a Conversation
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            Let&apos;s Build Smarter Systems{" "}
            <span className="gradient-text">for Your Business</span>
          </h2>

          <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you want to improve, automate, or build — and we&apos;ll
            help you define the right technology solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-2xl shadow-accent/20 hover:shadow-accent/40"
                style={{
                  background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                }}
              >
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <Link
              href="/contact?type=proposal"
              className="flex items-center gap-2 px-10 py-4 rounded-full border border-border text-muted hover:text-text hover:border-accent/40 hover:bg-accent/5 transition-all font-semibold"
            >
              Get a Proposal
            </Link>
          </div>

          <p className="text-muted/50 text-sm mt-8">
            We usually respond within 1 business day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
