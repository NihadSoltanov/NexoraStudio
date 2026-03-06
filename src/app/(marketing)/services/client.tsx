"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
};

const COLOR_MAP: Record<string, { accent: string; bg: string; border: string; glow: string }> = {
  accent: { accent: "#4F8CFF", bg: "rgba(79,140,255,0.08)", border: "rgba(79,140,255,0.25)", glow: "rgba(79,140,255,0.12)" },
  violet: { accent: "#7B61FF", bg: "rgba(123,97,255,0.08)", border: "rgba(123,97,255,0.25)", glow: "rgba(123,97,255,0.12)" },
  cyan: { accent: "#35D6FF", bg: "rgba(53,214,255,0.08)", border: "rgba(53,214,255,0.25)", glow: "rgba(53,214,255,0.12)" },
};

const SERVICE_DETAILS: Record<string, { benefits: string[]; useCases: string[] }> = {
  "custom-software": {
    benefits: ["Tailored to your exact workflows", "Full ownership of codebase", "Built for long-term maintenance", "Integrates with existing tools"],
    useCases: ["Internal operations platforms", "Customer-facing SaaS products", "Workflow management systems", "Legacy system replacement"],
  },
  "web-mobile-apps": {
    benefits: ["Cross-platform compatibility", "Modern, intuitive UX", "Built for performance and scale", "API-first architecture"],
    useCases: ["Customer portals", "Mobile field tools", "E-commerce platforms", "SaaS dashboards"],
  },
  "ai-automation": {
    benefits: ["Reduce manual repetitive work", "Improve response and processing speed", "Connect disconnected tools", "Scale without hiring more staff"],
    useCases: ["Support ticket automation", "Data entry & document processing", "Sales pipeline automation", "Custom AI workflow bots"],
  },
  "cloud-infrastructure": {
    benefits: ["Improved reliability & uptime", "Auto-scaling environments", "Modern CI/CD pipelines", "Optimized infrastructure cost"],
    useCases: ["Cloud migration from on-premise", "Multi-cloud architecture", "Container orchestration", "DevOps transformation"],
  },
  "cybersecurity": {
    benefits: ["Proactive risk reduction", "Compliance support (SOC2, HIPAA, etc.)", "Incident response readiness", "Security-first architecture"],
    useCases: ["Penetration testing", "Security audits", "Zero-trust implementation", "SIEM setup & monitoring"],
  },
  "managed-it-support": {
    benefits: ["24/7 monitoring & alerting", "Proactive maintenance", "Predictable monthly cost", "Fast expert response"],
    useCases: ["Ongoing system management", "Vendor coordination", "Helpdesk & user support", "Performance optimization"],
  },
  "ui-ux-design": {
    benefits: ["User-centered design process", "Improved conversion & retention", "Consistent design systems", "Accessibility-first"],
    useCases: ["Product redesign", "New product design", "Design system creation", "Usability audits"],
  },
  "data-analytics": {
    benefits: ["Real-time visibility into operations", "Data-driven decision making", "Unified data from multiple sources", "Automated reporting"],
    useCases: ["Business intelligence dashboards", "KPI tracking systems", "Sales & ops analytics", "Customer behavior analysis"],
  },
};

export function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 hero-gradient grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag mb-6 inline-flex">What We Do</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-6">
              Services Built for{" "}
              <span className="gradient-text">Real Business Results</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Every service we offer is focused on delivering practical, 
              measurable outcomes — not just technical deliverables.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon];
              const colors = COLOR_MAP[service.color];
              const details = SERVICE_DETAILS[service.slug];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-border glass overflow-hidden group hover:border-[rgba(79,140,255,0.2)] transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: colors.bg }}
                        >
                          <Icon className="w-6 h-6" style={{ color: colors.accent }} />
                        </div>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full border"
                          style={{ color: colors.accent, background: colors.bg, borderColor: colors.border }}
                        >
                          Service {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted leading-relaxed mb-6">{service.shortDesc}</p>

                      {/* Benefits */}
                      <div className="space-y-2 mb-8">
                        {details.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2 text-sm text-muted">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
                            {b}
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="self-start flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}cc)`,
                          boxShadow: `0 8px 24px ${colors.glow}`,
                        }}
                      >
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div
                      className="p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border"
                    >
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted/60 mb-4">
                        Common Use Cases
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {details.useCases.map((uc) => (
                          <div
                            key={uc}
                            className="px-4 py-3 rounded-xl text-sm text-muted border transition-colors hover:text-text"
                            style={{
                              background: colors.bg,
                              borderColor: colors.border + "80",
                            }}
                          >
                            {uc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
