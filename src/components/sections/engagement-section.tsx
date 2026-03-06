"use client";

import { motion } from "framer-motion";
import { Rocket, RefreshCw, Users, Lightbulb } from "lucide-react";
import { StaggerContainer, staggerItem, Reveal } from "@/components/animations/reveal";
import { ENGAGEMENT_MODELS } from "@/lib/data";
import Link from "next/link";

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket, RefreshCw, Users, Lightbulb,
};

export function EngagementSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-surface/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">How We Engage</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Flexible Engagement{" "}
            <span className="gradient-text">Models</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Not every business needs the same arrangement. We work in the model
            that fits your stage, scope, and goals.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.08}
        >
          {ENGAGEMENT_MODELS.map((model, i) => {
            const Icon = ICON_MAP[model.icon];
            const isFeatured = model.featured;

            return (
              <motion.div
                key={model.title}
                variants={staggerItem}
                className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
                  isFeatured
                    ? "border-accent/40 bg-accent/5 shadow-lg shadow-accent/10"
                    : "border-border glass card-shine"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: isFeatured ? "rgba(79,140,255,0.2)" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: isFeatured ? "#4F8CFF" : "#A8B3C7" }}
                  />
                </div>

                <h3 className="font-display font-bold text-text text-lg mb-1.5">{model.title}</h3>
                <p className="text-muted/80 text-xs mb-3 italic">{model.forWho}</p>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{model.description}</p>

                <ul className="space-y-2 mb-6">
                  {model.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: isFeatured ? "#4F8CFF" : "#A8B3C7" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted/60 border-t border-border pt-4">
                  Custom pricing based on scope & needs
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <Reveal className="text-center mt-10">
          <p className="text-muted text-sm mb-4">
            Not sure what fits? Let&apos;s talk through your goals first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}
          >
            Book a Free Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
