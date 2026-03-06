"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { StaggerContainer, staggerItem, Reveal } from "@/components/animations/reveal";

const VALUE_POINTS = [
  {
    title: "Strategy Before Code",
    desc: "We understand your business context before writing a single line. Every system we build is designed to solve real operational problems.",
  },
  {
    title: "Scalable by Default",
    desc: "Systems designed to grow with your business — from early-stage MVP to enterprise-grade infrastructure.",
  },
  {
    title: "Business-Focused Technology",
    desc: "We translate technical complexity into business outcomes. No jargon, no black boxes — just clear results.",
  },
  {
    title: "Fast, Transparent Collaboration",
    desc: "Weekly updates, clear milestones, and direct communication. You always know exactly where your project stands.",
  },
  {
    title: "Security-Conscious Delivery",
    desc: "Security is built into every layer of what we build — from infrastructure choices to access controls to code review.",
  },
  {
    title: "Long-Term Partnership Mindset",
    desc: "We don't disappear after launch. We help you iterate, optimize, and grow your systems over time.",
  },
];

export function WhyNexora() {
  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(ellipse, rgba(79,140,255,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <span className="tag mb-4 inline-flex">Why Choose Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-6 leading-tight">
                Why Businesses Choose{" "}
                <span className="gradient-text">Nexora Studio</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                We combine technical depth with business understanding. The result
                is technology that actually works — and keeps working as you grow.
              </p>

              <div className="mt-8 p-6 rounded-2xl border border-border glass">
                <p className="text-text/90 text-sm leading-relaxed italic">
                  &ldquo;Nexora Studio combines technical execution with business
                  understanding to help companies move faster, operate smarter, and
                  build systems designed for long-term growth.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-1"
                    style={{ background: "linear-gradient(90deg, #4F8CFF, #7B61FF)" }}
                  />
                  <span className="text-xs text-muted">Our operating principle</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — value grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            staggerDelay={0.08}
          >
            {VALUE_POINTS.map((point) => (
              <motion.div
                key={point.title}
                variants={staggerItem}
                className="p-5 rounded-2xl glass-hover border border-border"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-text text-sm mb-1.5">
                      {point.title}
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
