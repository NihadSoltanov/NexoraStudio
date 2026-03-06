"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { StaggerContainer, staggerItem, Reveal } from "@/components/animations/reveal";
import { TESTIMONIALS } from "@/lib/data";

const COLORS = ["#4F8CFF", "#7B61FF", "#35D6FF"];

export function TestimonialsSection() {
  return (
    <section className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,140,255,0.04), transparent)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">What Clients Say</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Trusted by Teams That{" "}
            <span className="gradient-text">Move Fast</span>
          </h2>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="relative rounded-2xl p-7 border border-border glass card-shine group"
              whileHover={{
                borderColor: COLORS[i] + "50",
                boxShadow: `0 0 30px ${COLORS[i]}15`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-5 opacity-60"
                style={{ color: COLORS[i] }}
              />

              <p className="text-text/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${COLORS[i]}, ${COLORS[(i + 1) % 3]})` }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">{t.name}</p>
                  <p className="text-muted text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
