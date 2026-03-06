"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ENGAGEMENT_MODELS, FAQS } from "@/lib/data";
import {
  Rocket, RefreshCw, Users, Lightbulb, Check, ChevronDown, ChevronUp,
  ArrowRight, Phone, MessageSquare, Shield, Zap,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, RefreshCw, Users, Lightbulb,
};

const PHILOSOPHY = [
  {
    icon: Shield,
    title: "Transparent Scoping",
    desc: "We define deliverables clearly before work begins. No surprise scope changes or hidden fees.",
  },
  {
    icon: Zap,
    title: "Right-sized Engagements",
    desc: "We match our engagement model to your actual needs — not the most expensive option available.",
  },
  {
    icon: MessageSquare,
    title: "Pricing Starts with a Conversation",
    desc: "Every project is different. We provide proposals based on your real situation, not generic tiers.",
  },
  {
    icon: Phone,
    title: "No Pressure Sales Process",
    desc: "Our initial call is about understanding your needs. There's no commitment required to talk.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Book a Discovery Call", desc: "Share your goals, context, and constraints. We listen before we speak." },
  { step: "02", title: "Receive a Scoped Proposal", desc: "We prepare a clear proposal with timeline, deliverables, and budget estimate." },
  { step: "03", title: "Review & Align", desc: "We walk through the proposal together, adjust scope if needed, and answer all questions." },
  { step: "04", title: "Begin Work", desc: "Once aligned, we kick off — with clear milestones and regular communication throughout." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="hero-gradient absolute inset-0 pointer-events-none" />
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-6">
              Engagement Models
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Flexible Pricing Built{" "}
              <span className="gradient-text">Around Your Needs</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
              We don&apos;t publish fixed price lists because every engagement is unique. Instead, we offer four flexible engagement models designed to match your context, budget, and timeline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = ICON_MAP[model.icon] ?? Rocket;
              return (
                <motion.div
                  key={model.title}
                  variants={staggerItem}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                    model.featured
                      ? "bg-gradient-to-br from-[var(--accent)]/10 to-[var(--violet)]/10 border-[var(--accent)]/40 shadow-lg shadow-[var(--accent)]/10"
                      : "glass border-white/10 hover:border-white/20"
                  }`}
                >
                  {model.featured && (
                    <div className="absolute -top-3 left-8">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent)] text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    model.featured ? "bg-[var(--accent)]/20" : "bg-white/5"
                  }`}>
                    <Icon className={`w-6 h-6 ${model.featured ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-sm text-[var(--accent)] font-medium mb-4">{model.forWho}</p>
                  <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{model.description}</p>
                  <ul className="space-y-3">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                        model.featured
                          ? "text-[var(--accent)] hover:text-white"
                          : "text-[var(--text-muted)] hover:text-white"
                      }`}
                    >
                      Discuss this model <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Pricing Philosophy</h2>
              <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                We believe pricing should be transparent, fair, and aligned with the value we deliver.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="glass border border-white/10 rounded-2xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-[var(--text-muted)] text-lg">From first conversation to project start in four steps.</p>
            </div>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 mb-4 leading-none">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full text-left px-6 py-5 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </main>
  );
}
