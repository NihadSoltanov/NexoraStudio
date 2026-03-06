"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start by listening. Understanding your goals, workflows, pain points, and technical context before proposing anything.",
    color: "#4F8CFF",
  },
  {
    number: "02",
    title: "Planning",
    desc: "We define scope, architecture, delivery milestones, and success criteria. No surprises — just clear alignment.",
    color: "#7B61FF",
  },
  {
    number: "03",
    title: "Design",
    desc: "We create UX direction, system structure, and user journeys that match your users' needs and business goals.",
    color: "#35D6FF",
  },
  {
    number: "04",
    title: "Build",
    desc: "We develop, test, integrate, and optimize. Regular demos ensure alignment throughout delivery.",
    color: "#4F8CFF",
  },
  {
    number: "05",
    title: "Launch & Support",
    desc: "We deploy, monitor, and continually improve. Most engagements continue well beyond initial launch.",
    color: "#7B61FF",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(79,140,255,0.05), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            A Process Built for{" "}
            <span className="gradient-text">Clarity</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From first conversation to long-term support — a structured
            engagement that delivers consistently.
          </p>
        </Reveal>

        {/* Steps */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-5 gap-4 relative"
          staggerDelay={0.1}
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Number circle */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-full glass border-2 flex items-center justify-center mb-5 font-display font-bold text-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: step.color + "60",
                  color: step.color,
                }}
                whileHover={{ boxShadow: `0 0 20px ${step.color}40` }}
              >
                {step.number}
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: step.color + "30" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
              </motion.div>

              <h3 className="font-display font-semibold text-text text-sm mb-2">{step.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
