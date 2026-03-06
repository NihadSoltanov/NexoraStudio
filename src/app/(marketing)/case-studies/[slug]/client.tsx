"use client";

import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const COLOR_MAP: Record<string, string> = {
  accent: "var(--accent)",
  violet: "var(--violet)",
  cyan: "var(--cyan)",
};

interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  tech: string[];
  result: string;
  color: string;
}

export function CaseStudyDetailClient({ study }: { study: CaseStudy }) {
  const color = COLOR_MAP[study.color] ?? "var(--accent)";

  const highlights = [
    {
      icon: Target,
      label: "Challenge",
      content: study.challenge,
    },
    {
      icon: Zap,
      label: "Solution",
      content: study.solution,
    },
    {
      icon: TrendingUp,
      label: "Result",
      content: study.result,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="hero-gradient absolute inset-0 pointer-events-none" />
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-white text-sm mb-8 transition-colors"
            >
              ← All Case Studies
            </Link>
          </Reveal>
          <div className="flex flex-wrap gap-3 mb-6">
            <Reveal>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ color, borderColor: `${color}40`, background: `${color}10` }}
              >
                {study.category}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-[var(--text-muted)]">
                {study.client}
              </span>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{study.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">{study.challenge}</p>
          </Reveal>
        </div>
      </section>

      {/* Result Highlight Banner */}
      <section className="px-4 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="rounded-2xl p-8 border"
              style={{ background: `${color}08`, borderColor: `${color}30` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6" style={{ color }} />
                <span className="font-bold text-white text-lg">Key Result</span>
              </div>
              <p className="text-2xl text-white font-semibold leading-snug">{study.result}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="space-y-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                variants={staggerItem}
                className="glass border border-white/10 rounded-2xl p-8 flex gap-6"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <h.icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{h.label}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed text-lg">{h.content}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-8">Technology Used</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {study.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium border"
                  style={{ color, borderColor: `${color}30`, background: `${color}08` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4">Facing a Similar Challenge?</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8">
              Tell us about your situation. We&apos;ll share how we&apos;d approach it and whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: color }}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCtaSection />
    </main>
  );
}
