"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { StaggerContainer, staggerItem, Reveal } from "@/components/animations/reveal";
import { CASE_STUDIES } from "@/lib/data";

const COLOR_MAP: Record<string, { accent: string; bg: string; border: string }> = {
  accent: { accent: "#4F8CFF", bg: "rgba(79,140,255,0.06)", border: "rgba(79,140,255,0.2)" },
  violet: { accent: "#7B61FF", bg: "rgba(123,97,255,0.06)", border: "rgba(123,97,255,0.2)" },
  cyan: { accent: "#35D6FF", bg: "rgba(53,214,255,0.06)", border: "rgba(53,214,255,0.2)" },
};

export function CaseStudiesSection() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">Results That Matter</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real projects, realistic outcomes, and the technology decisions
            behind them.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {featured.map((cs) => {
            const colors = COLOR_MAP[cs.color];
            return (
              <motion.div key={cs.slug} variants={staggerItem}>
                <Link href={`/case-studies/${cs.slug}`} className="block h-full group">
                  <div
                    className="h-full rounded-2xl p-6 border transition-all duration-300 card-shine flex flex-col"
                    style={{
                      background: "rgba(18,26,43,0.6)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = colors.border;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${colors.bg}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Category tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                        style={
                          { color: colors.accent, background: colors.bg, borderColor: colors.border }
                        }
                      >
                        {cs.category}
                      </span>
                      <ExternalLink
                        className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: colors.accent }}
                      />
                    </div>

                    {/* Visual placeholder */}
                    <div
                      className="h-32 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden"
                      style={{ background: colors.bg }}
                    >
                      <div className="grid-bg absolute inset-0 opacity-50" />
                      <div
                        className="relative w-16 h-16 rounded-xl flex items-center justify-center font-display text-xs font-bold"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent}30, transparent)`,
                          border: `1px solid ${colors.border}`,
                          color: colors.accent,
                        }}
                      >
                        {cs.category.split(" ")[0]}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-text text-lg mb-3 group-hover:text-white transition-colors">
                      {cs.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                      <strong className="text-text/70">Challenge:</strong> {cs.challenge.slice(0, 120)}...
                    </p>

                    {/* Result callout */}
                    <div
                      className="px-4 py-3 rounded-xl text-xs leading-relaxed mb-4"
                      style={{ background: colors.bg, borderLeft: `3px solid ${colors.accent}` }}
                    >
                      <span className="text-text/70 font-semibold">Result: </span>
                      <span className="text-muted">{cs.result}</span>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.05] text-muted border border-border">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-1 text-xs font-semibold mt-auto transition-colors"
                      style={{ color: colors.accent }}
                    >
                      Read case study{" "}
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-muted hover:text-text hover:border-accent/40 hover:bg-accent/5 transition-all text-sm font-medium"
          >
            Explore All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
