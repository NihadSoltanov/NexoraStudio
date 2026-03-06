"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
  ArrowRight,
} from "lucide-react";
import { StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
};

const COLOR_MAP: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  accent: {
    bg: "rgba(79,140,255,0.08)",
    border: "rgba(79,140,255,0.2)",
    icon: "#4F8CFF",
    glow: "rgba(79,140,255,0.1)",
  },
  violet: {
    bg: "rgba(123,97,255,0.08)",
    border: "rgba(123,97,255,0.2)",
    icon: "#7B61FF",
    glow: "rgba(123,97,255,0.1)",
  },
  cyan: {
    bg: "rgba(53,214,255,0.08)",
    border: "rgba(53,214,255,0.2)",
    icon: "#35D6FF",
    glow: "rgba(53,214,255,0.1)",
  },
};

export function ServicesOverview() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-flex">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Services Built Around{" "}
            <span className="gradient-text">Business Outcomes</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every service we offer is designed to deliver measurable results —
            not just technical deliverables.
          </p>
        </div>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.07}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            const colors = COLOR_MAP[service.color];

            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <div
                    className="h-full rounded-2xl p-6 border transition-all duration-300 card-shine cursor-pointer"
                    style={{
                      background: "rgba(18,26,43,0.6)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = colors.border;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${colors.glow}`;
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(26,37,64,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(18,26,43,0.6)";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: colors.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: colors.icon }} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-semibold text-text text-sm mb-2 leading-snug">
                      {service.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Link */}
                    <div
                      className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
                      style={{ color: colors.icon }}
                    >
                      Learn more{" "}
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-muted hover:text-text hover:border-accent/40 hover:bg-accent/5 transition-all text-sm font-medium"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
