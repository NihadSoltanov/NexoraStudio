"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Users, Zap, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

const VALUES = [
  { icon: Target, title: "Clarity", desc: "We communicate simply and directly. No fluff, no hand-waving — just clear answers and honest timelines.", color: "#4F8CFF" },
  { icon: Shield, title: "Reliability", desc: "We do what we said we would. Consistent delivery and proactive communication are non-negotiable.", color: "#7B61FF" },
  { icon: Lightbulb, title: "Innovation with Purpose", desc: "We adopt new technology when it solves real problems — not because it's trending.", color: "#35D6FF" },
  { icon: Zap, title: "Quality Execution", desc: "We care deeply about the quality of what we build — code, design, architecture, and communication.", color: "#4F8CFF" },
  { icon: Users, title: "Partnership Mindset", desc: "We work as an extension of your team, not a vendor. Your success is a shared objective.", color: "#7B61FF" },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We evolve alongside your business — iterating, optimizing, and staying ahead of what you need next.", color: "#35D6FF" },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Industries Served" },
  { value: "99.9%", label: "Reliability Focus" },
  { value: "4+", label: "Years Operating" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 hero-gradient grid-bg overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag mb-6 inline-flex">About Nexora Studio</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-6">
              Technology Partner,{" "}
              <span className="gradient-text">Not Just a Vendor</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Nexora Studio combines technical execution with business understanding
              to help companies move faster, operate smarter, and build systems
              designed for long-term growth.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-surface/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-4xl font-bold gradient-text-blue mb-2">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="tag mb-4 inline-flex">Our Mission</span>
              <h2 className="font-display text-4xl font-bold text-text mt-4 mb-6">
                Practical Technology,{" "}
                <span className="gradient-text">Measurable Results</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                We started Nexora Studio because too many businesses were getting burned
                by technology vendors who delivered code without understanding context.
                Systems that looked impressive in demos but didn&apos;t fit how the team
                actually worked.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Our approach is different. We invest heavily in understanding your
                business before proposing a solution. That means asking hard questions,
                challenging assumptions, and sometimes recommending simpler answers than
                you expected.
              </p>
              <p className="text-muted leading-relaxed">
                The result is technology that actually works — that your team uses, that
                scales with your growth, and that you understand and own.
              </p>
            </Reveal>

            {/* Right side visual */}
            <Reveal delay={0.2}>
              <div className="space-y-4">
                {[
                  { num: "01", title: "Business Understanding First", desc: "Every engagement starts with listening, not proposing." },
                  { num: "02", title: "Architecture That Scales", desc: "We build for where you're going, not just where you are." },
                  { num: "03", title: "Clear Communication Always", desc: "No black boxes. Every decision is explained and documented." },
                  { num: "04", title: "Support Beyond Launch", desc: "We're invested in what happens after go-live." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 p-5 rounded-2xl glass-hover border border-border">
                    <div className="font-display text-3xl font-bold text-accent/20 leading-none">{item.num}</div>
                    <div>
                      <h4 className="font-display font-semibold text-text text-sm mb-1">{item.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface/10 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="tag mb-4 inline-flex">Our Values</span>
            <h2 className="font-display text-4xl font-bold text-text mt-4">
              What We Stand For
            </h2>
          </Reveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="p-6 rounded-2xl glass-hover border border-border"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: value.color + "15" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-display font-bold text-text mb-2">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
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
