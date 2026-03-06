"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { CASE_STUDIES } from "@/lib/data";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

const COLOR_MAP: Record<string, { accent: string; bg: string; border: string }> = {
  accent: { accent: "#4F8CFF", bg: "rgba(79,140,255,0.06)", border: "rgba(79,140,255,0.2)" },
  violet: { accent: "#7B61FF", bg: "rgba(123,97,255,0.06)", border: "rgba(123,97,255,0.2)" },
  cyan: { accent: "#35D6FF", bg: "rgba(53,214,255,0.06)", border: "rgba(53,214,255,0.2)" },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag mb-6 inline-flex">Results That Matter</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-6">
              Real Projects,{" "}
              <span className="gradient-text">Real Outcomes</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              Every case study here reflects a real business challenge, a
              structured solution, and a measurable result. No hype, no vague
              claims.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* Case studies grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {CASE_STUDIES.map((cs) => {
              const colors = COLOR_MAP[cs.color];
              return (
                <motion.div key={cs.slug} variants={staggerItem}>
                  <Link href={`/case-studies/${cs.slug}`} className="block h-full group">
                    <div
                      className="h-full rounded-2xl border transition-all duration-300 card-shine flex flex-col overflow-hidden"
                      style={{ background: "rgba(18,26,43,0.6)", borderColor: "rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = colors.border;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${colors.bg}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      {/* Visual header */}
                      <div
                        className="h-40 flex items-center justify-center relative overflow-hidden"
                        style={{ background: colors.bg }}
                      >
                        <div className="grid-bg absolute inset-0 opacity-50" />
                        <div
                          className="relative px-4 py-2 rounded-lg text-sm font-bold font-display"
                          style={{
                            color: colors.accent,
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          {cs.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-muted">{cs.client}</span>
                        </div>
                        <h3 className="font-display font-bold text-text text-lg mb-3">{cs.title}</h3>
                        
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-muted/60 uppercase tracking-wide mb-1">Challenge</p>
                          <p className="text-sm text-muted">{cs.challenge.slice(0, 100)}...</p>
                        </div>

                        <div className="mt-auto">
                          <div
                            className="px-4 py-3 rounded-xl text-xs leading-relaxed mb-4"
                            style={{ background: colors.bg, borderLeft: `3px solid ${colors.accent}` }}
                          >
                            <strong className="text-text/70">Result: </strong>
                            <span className="text-muted">{cs.result}</span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {cs.tech.slice(0, 3).map((t) => (
                              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-muted border border-border">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div
                            className="flex items-center gap-1 text-xs font-semibold"
                            style={{ color: colors.accent }}
                          >
                            View full case study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
