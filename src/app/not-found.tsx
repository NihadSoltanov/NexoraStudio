"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="hero-gradient absolute inset-0 pointer-events-none" />
      <div className="grid-bg absolute inset-0 pointer-events-none opacity-30" />

      {/* Glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-[10rem] md:text-[14rem] font-black leading-none gradient-text select-none">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-white/20 transition-all"
          >
            <Search className="w-4 h-4" />
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-[var(--text-muted)] font-semibold text-sm hover:text-white hover:border-white/20 transition-all"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 pt-10 border-t border-white/5"
        >
          <p className="text-[var(--text-muted)] text-sm mb-4">Popular pages</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "About", href: "/about" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
