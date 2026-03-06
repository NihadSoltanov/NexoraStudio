"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/animations/effects";

const TRUST_ITEMS = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Shield, label: "Security-First" },
  { icon: Cpu, label: "AI-Powered" },
  { icon: Globe, label: "Scalable Systems" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg">
      {/* Animated orbs */}
      <FloatingOrbs />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(79,140,255,0.15), transparent)",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-3/4 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(123,97,255,0.1), transparent)",
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <span className="tag mb-8 inline-flex">
              <Zap className="w-3 h-3" />
              Strategic Technology Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text leading-[1.05] tracking-tight max-w-5xl"
          >
            Technology That Helps{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Businesses</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              >
                <motion.path
                  d="M0 3 Q150 0 300 3"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4F8CFF" />
                    <stop offset="100%" stopColor="#35D6FF" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>{" "}
            Scale Faster
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            Nexora Studio helps startups and growing companies build scalable
            software, automate workflows, strengthen infrastructure, and unlock
            growth through modern digital systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button asChild gradient size="lg" className="min-w-52 shadow-2xl shadow-accent/20">
              <Link href="/contact">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="min-w-52">
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.06] text-sm text-muted"
              >
                <Icon className="w-3.5 h-3.5 text-accent" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99.9%", label: "Reliability Focus" },
              { value: "12+", label: "Industries Served" },
              { value: "< 1d", label: "Avg Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  className="font-display text-3xl md:text-4xl font-bold gradient-text-blue"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Hero visual — Abstract dashboard mockup */}
          <motion.div
            variants={itemVariants}
            className="mt-20 relative w-full max-w-4xl"
          >
            <div className="relative rounded-2xl overflow-hidden glass border border-white/[0.08] shadow-2xl shadow-black/60">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-0.5 rounded text-xs text-muted bg-white/5 border border-white/[0.06]">
                    nexorastudio.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {/* Left sidebar */}
                <div className="col-span-1 space-y-3">
                  {["Overview", "Analytics", "Automation", "Cloud", "Security", "Reports"].map((item, i) => (
                    <motion.div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-xs flex items-center gap-2 ${i === 0 ? "bg-accent/20 text-accent" : "text-muted hover:bg-white/5"}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + i * 0.07 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-muted/40"}`} />
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Main area */}
                <div className="col-span-2 space-y-4">
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Uptime", value: "99.9%", color: "#35D6FF" },
                      { label: "Deployments", value: "124", color: "#4F8CFF" },
                      { label: "Automations", value: "38", color: "#7B61FF" },
                    ].map((m, i) => (
                      <motion.div
                        key={m.label}
                        className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                      >
                        <div className="text-xs text-muted mb-1">{m.label}</div>
                        <div className="font-display text-xl font-bold" style={{ color: m.color }}>{m.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <motion.div
                    className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 h-28 flex items-end gap-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    {[40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 72, 98].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          background: `linear-gradient(180deg, #4F8CFF, #7B61FF)`,
                          opacity: 0.7 + i * 0.025,
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 2 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                      />
                    ))}
                  </motion.div>

                  {/* Activity items */}
                  <div className="space-y-2">
                    {[
                      { label: "Deployment pipeline completed", time: "2m ago", dot: "#35D6FF" },
                      { label: "AI automation triggered — 14 tasks processed", time: "8m ago", dot: "#4F8CFF" },
                      { label: "Security scan: 0 vulnerabilities found", time: "1h ago", dot: "#7B61FF" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-xs text-muted"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 + i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                        <span className="flex-1 truncate">{item.label}</span>
                        <span className="text-muted/50 flex-shrink-0">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow under */}
            <div className="absolute -inset-4 -z-10 rounded-3xl blur-3xl opacity-20"
              style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
