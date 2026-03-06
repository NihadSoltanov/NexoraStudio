"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import {
  Check, ArrowRight, ChevronDown, ChevronUp,
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
  TrendingUp, Clock, Users, Zap, type LucideProps,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type IconComponent = React.ComponentType<LucideProps>;

const ICON_MAP: Record<string, IconComponent> = {
  Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3,
};

const COLOR_MAP: Record<string, string> = {
  accent: "var(--accent)",
  violet: "var(--violet)",
  cyan: "var(--cyan)",
};

const SERVICE_DETAILS: Record<string, {
  tagline: string;
  description: string;
  included: string[];
  outcomes: { icon: IconComponent; title: string; desc: string }[];
  challenges: string[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  useCases: { title: string; industry: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "custom-software": {
    tagline: "Software built around how you work — not the other way around.",
    description:
      "Off-the-shelf tools rarely fit growing businesses perfectly. We design and build custom software that maps to your actual operational workflows, integrates with your existing systems, and scales as your business evolves.",
    included: [
      "Requirements discovery & system design",
      "Full-stack custom application development",
      "Third-party integrations & API connections",
      "Database architecture & optimization",
      "Testing, QA, and deployment",
      "Documentation & post-launch support",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Operational Efficiency", desc: "Eliminate manual workarounds and redundant steps in your workflows." },
      { icon: Zap, title: "Faster Execution", desc: "Systems that work exactly the way your team works — no adaptation required." },
      { icon: Users, title: "Team Adoption", desc: "Custom UX ensures high adoption rates versus generic tools." },
      { icon: Clock, title: "Long-Term Scalability", desc: "Architected to grow with your business, not replaced every 3 years." },
    ],
    challenges: [
      "Existing SaaS tools that don't fit your workflows and require constant workarounds",
      "Disconnected systems that create data silos and manual handoffs",
      "Off-the-shelf software costs that exceed the value delivered",
      "Workflows that rely on spreadsheets or email because no proper tool exists",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We map your workflows, pain points, and system requirements before writing a single line of code." },
      { step: "02", title: "Architecture", desc: "We design the technical structure — database schema, APIs, integrations, and deployment approach." },
      { step: "03", title: "Development", desc: "Iterative build cycles with regular demos so you see progress throughout, not just at the end." },
      { step: "04", title: "Testing & QA", desc: "Comprehensive testing across functional, performance, and edge case scenarios." },
      { step: "05", title: "Deploy & Support", desc: "Smooth deployment with documentation, training, and ongoing support options." },
    ],
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "SQL Server", "Docker", "AWS", "Prisma"],
    useCases: [
      { title: "Internal Operations Platform", industry: "Logistics" },
      { title: "Customer Portal & Self-Service App", industry: "SaaS" },
      { title: "Order Management System", industry: "E-commerce" },
      { title: "Field Reporting Software", industry: "Enterprise" },
    ],
    faqs: [
      { q: "How long does custom software typically take?", a: "Scope varies significantly. A focused tool can be delivered in 6–10 weeks. A complex platform might take 4–6 months. We provide clear timelines after the discovery phase." },
      { q: "Can you integrate with our existing tools?", a: "Yes. Integration work is a core part of most custom software engagements — CRMs, ERPs, APIs, and legacy systems included." },
      { q: "Who owns the code?", a: "You do. All intellectual property, source code, and documentation is transferred to you at project completion." },
    ],
  },
  "web-mobile-apps": {
    tagline: "Digital products built to be fast, intuitive, and production-ready.",
    description:
      "We design and develop web applications and mobile apps that combine technical quality with user-centered design. Whether you're launching a new product or rebuilding an existing one, we focus on what users actually need.",
    included: [
      "Product discovery & UX planning",
      "Responsive web application development",
      "iOS and Android mobile development (React Native)",
      "Backend API development",
      "Performance optimization & testing",
      "App Store / Play Store submission support",
    ],
    outcomes: [
      { icon: TrendingUp, title: "User Retention", desc: "Products that users come back to because the experience is genuinely good." },
      { icon: Zap, title: "Performance", desc: "Fast-loading, responsive apps that work across all devices and connections." },
      { icon: Users, title: "Engagement", desc: "Clear UX flows that reduce friction and drive the actions that matter most." },
      { icon: Clock, title: "Time to Market", desc: "Iterative development so you can launch early and improve continuously." },
    ],
    challenges: [
      "Existing app feels outdated, slow, or frustrating for users",
      "New product idea with no technical team to build it",
      "Web app that doesn't work well on mobile devices",
      "Need for a cross-platform mobile presence without two separate codebases",
    ],
    process: [
      { step: "01", title: "Product Discovery", desc: "We define user personas, core flows, and MVP scope before any design work begins." },
      { step: "02", title: "UX Design", desc: "Wireframes and interaction flows reviewed and approved before development starts." },
      { step: "03", title: "Development", desc: "Frontend, backend, and mobile built in parallel with weekly demos." },
      { step: "04", title: "Testing", desc: "Device testing, accessibility review, and performance benchmarks." },
      { step: "05", title: "Launch & Iterate", desc: "Deployment support and post-launch iteration based on real user data." },
    ],
    techStack: ["Next.js", "React Native", "TypeScript", "Expo", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS"],
    useCases: [
      { title: "SaaS Product Dashboard", industry: "SaaS" },
      { title: "Mobile Field Operations App", industry: "Enterprise" },
      { title: "Customer-Facing E-commerce App", industry: "E-commerce" },
      { title: "Healthcare Patient Portal", industry: "Healthcare" },
    ],
    faqs: [
      { q: "Do you build for iOS and Android?", a: "Yes. We use React Native and Expo to build cross-platform mobile apps that work on both platforms from a single codebase — reducing cost and maintenance overhead." },
      { q: "Can you redesign and rebuild an existing app?", a: "Yes. We conduct a full UX and technical audit before recommending an approach — sometimes a significant rebuild, sometimes targeted improvements." },
      { q: "Do you help with App Store submissions?", a: "Yes. We handle the technical side of App Store and Google Play submissions, including review issue resolution." },
    ],
  },
  "ai-automation": {
    tagline: "Intelligent automation that removes repetitive work and improves efficiency.",
    description:
      "We help businesses identify the right automation opportunities, design intelligent workflows, and integrate AI tools into existing operations. Our approach focuses on practical business value — not automation for its own sake.",
    included: [
      "Automation opportunity assessment",
      "AI workflow design & architecture",
      "LLM integration (OpenAI, Anthropic, and others)",
      "Process automation with n8n, custom pipelines",
      "Data extraction, classification, and routing systems",
      "Integration with existing tools (CRM, helpdesk, ERP)",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Reduced Manual Work", desc: "Repetitive tasks automated so teams focus on higher-value work." },
      { icon: Zap, title: "Faster Response Times", desc: "Automated triage, routing, and responses measured in seconds, not hours." },
      { icon: Users, title: "Team Capacity", desc: "Same headcount handles significantly more volume after automation." },
      { icon: Clock, title: "Consistent Quality", desc: "Automated processes reduce human error in repetitive, rule-based work." },
    ],
    challenges: [
      "Support team spending most of their time on repetitive tier-1 tickets",
      "Manual data entry and transfer between systems",
      "Document processing that requires human review of predictable patterns",
      "Reporting and data aggregation done manually on a recurring basis",
    ],
    process: [
      { step: "01", title: "Process Audit", desc: "We map your current workflows and identify the highest-value automation candidates." },
      { step: "02", title: "Solution Design", desc: "We design the automation architecture — tools, integrations, and failure handling." },
      { step: "03", title: "Build & Test", desc: "Automation built and tested against real-world scenarios before deployment." },
      { step: "04", title: "Deploy & Monitor", desc: "Staged rollout with monitoring and human fallback paths in place." },
      { step: "05", title: "Optimize", desc: "Post-deployment tuning based on observed performance and edge cases." },
    ],
    techStack: ["OpenAI API", "Python", "n8n", "LangChain", "PostgreSQL", "Node.js", "Webhook Pipelines", "AWS Lambda"],
    useCases: [
      { title: "Support Ticket Triage & Routing", industry: "SaaS" },
      { title: "Document Extraction & Classification", industry: "Finance" },
      { title: "Automated Lead Qualification", industry: "Professional Services" },
      { title: "Recurring Reporting & Alerting", industry: "Enterprise" },
    ],
    faqs: [
      { q: "Is AI automation right for every business?", a: "Not every workflow is a good automation candidate. We assess your specific processes honestly — we won't over-sell automation where manual handling is actually more appropriate." },
      { q: "Do you build custom AI models?", a: "Most engagements use existing LLMs (OpenAI, Anthropic) with custom prompting and orchestration. We recommend custom model training only when off-the-shelf models genuinely fall short." },
      { q: "What happens when the automation fails?", a: "We build human fallback paths into every automation workflow — so when edge cases arise, work routes to a human rather than getting lost." },
    ],
  },
  "cloud-infrastructure": {
    tagline: "Reliable, scalable cloud environments built on modern practices.",
    description:
      "We help businesses move to the cloud, optimize existing cloud environments, and build deployment infrastructure that supports growth without excessive cost or complexity.",
    included: [
      "Cloud infrastructure architecture design",
      "AWS / Azure migration & deployment",
      "CI/CD pipeline setup (GitHub Actions, etc.)",
      "Container orchestration (Docker, ECS, Kubernetes)",
      "Auto-scaling, load balancing, and cost optimization",
      "Monitoring, alerting, and incident response setup",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Higher Availability", desc: "Redundant, auto-scaling infrastructure with 99.9%+ uptime targets." },
      { icon: Zap, title: "Faster Deployments", desc: "CI/CD pipelines reduce release cycles from weeks to hours." },
      { icon: Users, title: "Cost Efficiency", desc: "Pay-per-use cloud resources eliminate waste from over-provisioning." },
      { icon: Clock, title: "Operational Confidence", desc: "Monitoring and alerting before problems become incidents." },
    ],
    challenges: [
      "On-premise servers reaching end-of-life or capacity limits",
      "Manual deployment processes causing errors and downtime",
      "Cloud bills growing faster than business revenue",
      "No visibility into infrastructure performance until users complain",
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Assess current state — architecture, costs, risks, and migration complexity." },
      { step: "02", title: "Architecture Design", desc: "Design target state with right-sized services, security controls, and scaling rules." },
      { step: "03", title: "Migration Planning", desc: "Phased migration plan to minimize downtime and operational disruption." },
      { step: "04", title: "Deployment & Testing", desc: "Infrastructure provisioned with Terraform, tested under load before cutover." },
      { step: "05", title: "Handoff & Training", desc: "Documentation, runbooks, and team knowledge transfer included." },
    ],
    techStack: ["AWS", "Azure", "Terraform", "Docker", "GitHub Actions", "Datadog", "Kubernetes", "Nginx"],
    useCases: [
      { title: "On-Premise to AWS Migration", industry: "Finance" },
      { title: "CI/CD Pipeline Setup", industry: "SaaS" },
      { title: "Auto-Scaling Architecture", industry: "E-commerce" },
      { title: "Multi-Region Deployment", industry: "Enterprise" },
    ],
    faqs: [
      { q: "Which cloud provider do you recommend?", a: "We're provider-agnostic. AWS is our most common platform, but we also work with Azure and GCP. We recommend based on your existing ecosystem and specific requirements." },
      { q: "Can you optimize our existing cloud environment?", a: "Yes. Cloud cost and architecture audits are a standalone service. Many businesses find 20–40% cost savings after a proper review." },
      { q: "Do you provide ongoing infrastructure support?", a: "Yes, through our managed IT support or retainer model — including monitoring, incident response, and continuous optimization." },
    ],
  },
  cybersecurity: {
    tagline: "Reduce risk, strengthen systems, and build security into how you operate.",
    description:
      "We help businesses understand their security posture, address vulnerabilities, and implement practices that reduce risk without creating unnecessary friction for teams. Security that actually works.",
    included: [
      "Security audit & vulnerability assessment",
      "Penetration testing (network, application, social)",
      "Zero-trust access policy implementation",
      "Compliance readiness (HIPAA, SOC 2, GDPR)",
      "Security awareness training",
      "SIEM setup, monitoring & incident response",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Risk Reduction", desc: "Known vulnerabilities remediated before they become incidents." },
      { icon: Zap, title: "Compliance Readiness", desc: "Documentation and controls in place for relevant certifications." },
      { icon: Users, title: "Team Security Culture", desc: "Training programs that reduce human error — the most common attack vector." },
      { icon: Clock, title: "Incident Visibility", desc: "Monitoring and alerting that catches anomalies early." },
    ],
    challenges: [
      "No formal security review ever conducted",
      "Compliance requirements approaching (HIPAA, SOC 2, ISO 27001)",
      "Recent security incident or near-miss prompting action",
      "Rapid growth introducing new attack surface without corresponding security work",
    ],
    process: [
      { step: "01", title: "Security Assessment", desc: "Comprehensive review of systems, access controls, policies, and current risks." },
      { step: "02", title: "Risk Prioritization", desc: "Critical findings ranked by severity and business impact — not everything requires immediate action." },
      { step: "03", title: "Remediation", desc: "Systematic resolution of vulnerabilities with documented evidence for audits." },
      { step: "04", title: "Controls Implementation", desc: "Access policies, monitoring, logging, and alerting configured." },
      { step: "05", title: "Ongoing Monitoring", desc: "Continuous security monitoring with regular reporting and incident response." },
    ],
    techStack: ["Penetration Testing Tools", "AWS Security Hub", "SIEM", "IAM Policies", "Encryption", "Audit Logging"],
    useCases: [
      { title: "HIPAA Compliance Readiness", industry: "Healthcare" },
      { title: "Penetration Testing & Hardening", industry: "Finance" },
      { title: "Zero-Trust Access Implementation", industry: "Enterprise" },
      { title: "Post-Incident Security Review", industry: "SaaS" },
    ],
    faqs: [
      { q: "Do we need cybersecurity if we're a small company?", a: "Yes. Small businesses are frequently targeted precisely because they lack formal security practices. The cost of prevention is almost always less than the cost of an incident." },
      { q: "How long does a security audit take?", a: "A standard assessment takes 2–4 weeks. Comprehensive penetration testing with remediation support can span 6–10 weeks depending on scope." },
      { q: "Can you help us get SOC 2 or HIPAA certified?", a: "We prepare the technical controls and documentation needed for certification. We work alongside your legal team or the certifying auditor." },
    ],
  },
  "managed-it-support": {
    tagline: "Reliable technical support and operational continuity for growing businesses.",
    description:
      "We provide ongoing IT support that keeps your systems running, your team unblocked, and your operations stable — without the cost of a full in-house IT department.",
    included: [
      "Help desk support (remote & on-site options)",
      "System monitoring & proactive maintenance",
      "Network management & troubleshooting",
      "Software and license management",
      "Security patching & compliance monitoring",
      "Regular infrastructure review & reporting",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Business Continuity", desc: "Issues resolved before they escalate into outages or data loss." },
      { icon: Zap, title: "Faster Resolution", desc: "Responsive support that unblocks your team quickly." },
      { icon: Users, title: "Predictable Costs", desc: "Fixed monthly support costs replace unpredictable break-fix spend." },
      { icon: Clock, title: "Proactive Maintenance", desc: "Regular reviews and updates prevent issues before they occur." },
    ],
    challenges: [
      "IT issues causing hours of lost productivity for team members",
      "No proactive monitoring — finding out about problems from users",
      "Limited internal IT capacity as the business grows",
      "Inconsistent system configurations and security practices",
    ],
    process: [
      { step: "01", title: "Onboarding Audit", desc: "We document your current IT environment, access controls, and pain points." },
      { step: "02", title: "Baseline Setup", desc: "Monitoring, alerting, and documentation tools configured for your environment." },
      { step: "03", title: "Ongoing Support", desc: "Responsive help desk and proactive monitoring from day one." },
      { step: "04", title: "Monthly Reviews", desc: "Regular infrastructure health reports and improvement recommendations." },
      { step: "05", title: "Continuous Improvement", desc: "Iterative improvements based on incident patterns and business changes." },
    ],
    techStack: ["RMM Tools", "Microsoft 365", "AWS", "Azure AD", "Endpoint Management", "SIEM", "Ticketing Systems"],
    useCases: [
      { title: "Full IT Department Outsourcing", industry: "Professional Services" },
      { title: "Supplemental IT for Growing Team", industry: "Startups" },
      { title: "Remote Workforce Support", industry: "Enterprise" },
      { title: "Compliance-Focused IT Management", industry: "Healthcare" },
    ],
    faqs: [
      { q: "What response times can we expect?", a: "Typical response time is under 1 business day for standard issues, with same-day response for critical incidents. SLAs are tailored to your support tier." },
      { q: "Do you provide on-site support?", a: "We primarily provide remote support, which resolves the vast majority of issues. On-site visits are available for hardware or network infrastructure work." },
      { q: "Can we add managed IT after a project?", a: "Yes. Many of our project clients transition to managed support after delivery. We already know your systems, which makes the transition seamless." },
    ],
  },
  "ui-ux-design": {
    tagline: "Interfaces built around how users think, not how systems work.",
    description:
      "We design digital experiences that are clear, efficient, and visually strong — grounded in user research and tested against real behavior. Design that serves business outcomes, not just aesthetics.",
    included: [
      "User research & persona development",
      "Information architecture & user flow mapping",
      "Wireframing & interactive prototyping",
      "Visual design (UI system, component library)",
      "Usability testing & iteration",
      "Design handoff & developer collaboration",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Conversion Rates", desc: "Cleaner flows and clearer CTAs that drive the actions that matter." },
      { icon: Zap, title: "Task Completion", desc: "Users complete key workflows faster and with fewer errors." },
      { icon: Users, title: "User Satisfaction", desc: "Products that users recommend because the experience is genuinely good." },
      { icon: Clock, title: "Development Efficiency", desc: "Detailed design systems reduce frontend build time and rework." },
    ],
    challenges: [
      "High user drop-off or low feature adoption despite good functionality",
      "Customer feedback consistently mentioning confusion or frustration",
      "New product that needs design before development start",
      "Inconsistent UI across a product that has grown without a design system",
    ],
    process: [
      { step: "01", title: "Research", desc: "User interviews, competitor analysis, and behavioral data review." },
      { step: "02", title: "Architecture", desc: "Site maps, user flows, and information hierarchy defined before visual work." },
      { step: "03", title: "Wireframes", desc: "Low-fidelity wireframes reviewed and iterated before visual polish." },
      { step: "04", title: "Visual Design", desc: "High-fidelity UI with design system, component library, and interactive prototype." },
      { step: "05", title: "Handoff", desc: "Developer-ready specs and design tokens. We remain available during build for questions." },
    ],
    techStack: ["Figma", "Framer", "Tailwind CSS", "Storybook", "Next.js", "Radix UI", "Design Tokens"],
    useCases: [
      { title: "SaaS Dashboard Redesign", industry: "SaaS" },
      { title: "New Product Design from Scratch", industry: "Startups" },
      { title: "E-commerce UX Optimization", industry: "E-commerce" },
      { title: "Design System Creation", industry: "Enterprise" },
    ],
    faqs: [
      { q: "Do you do design only, or also development?", a: "Both. Many clients engage us for design and then continue with us for development. We also provide design-only engagements for teams with their own developers." },
      { q: "What does a typical design engagement include?", a: "Discovery and research, wireframes, high-fidelity UI, interactive prototypes, and a handoff-ready Figma file with a component library." },
      { q: "How do you measure success in design work?", a: "We establish measurable objectives before design begins — task completion rates, conversion rates, or time-on-task — and design toward those outcomes." },
    ],
  },
  "data-analytics": {
    tagline: "Turn data into visibility — actionable dashboards and insights that stick.",
    description:
      "We help businesses make sense of their data through well-designed dashboards, reliable reporting systems, and data architecture that supports long-term analysis. Data that actually informs decisions.",
    included: [
      "Data audit & source mapping",
      "Data warehouse / data lake setup",
      "ETL pipeline development",
      "Custom dashboard & reporting tool development",
      "KPI definition & metric instrumentation",
      "Ongoing maintenance & analytics support",
    ],
    outcomes: [
      { icon: TrendingUp, title: "Decision Speed", desc: "Real-time visibility into the metrics that drive decisions — no waiting for reports." },
      { icon: Zap, title: "Single Source of Truth", desc: "All operational data unified and consistent across teams." },
      { icon: Users, title: "Cross-Team Alignment", desc: "Everyone working from the same numbers — no more spreadsheet reconciliation." },
      { icon: Clock, title: "Reporting Efficiency", desc: "Automated reporting replaces hours of manual data extraction and formatting." },
    ],
    challenges: [
      "Data scattered across multiple tools with no unified view",
      "Recurring reports that take hours to compile manually",
      "Leadership making decisions without reliable real-time data",
      "ETL processes that are fragile, undocumented, and break regularly",
    ],
    process: [
      { step: "01", title: "Data Audit", desc: "Map all data sources, assess quality, identify gaps and inconsistencies." },
      { step: "02", title: "Architecture Design", desc: "Design the data pipeline, warehouse structure, and access model." },
      { step: "03", title: "ETL Build", desc: "Reliable pipelines that extract, transform, and load data on schedule." },
      { step: "04", title: "Dashboard Development", desc: "Dashboards built with the actual users — reviewed iteratively until they work." },
      { step: "05", title: "Training & Handoff", desc: "Team training, documentation, and ongoing support options." },
    ],
    techStack: ["PostgreSQL", "SQL Server", "Python", "dbt", "Apache Airflow", "Metabase", "Power BI", "Tableau"],
    useCases: [
      { title: "Operations KPI Dashboard", industry: "Logistics" },
      { title: "Customer Health Scoring", industry: "SaaS" },
      { title: "Financial Reporting Automation", industry: "Finance" },
      { title: "Cross-Platform Sales Analytics", industry: "E-commerce" },
    ],
    faqs: [
      { q: "Can you work with our existing BI tools?", a: "Yes. We integrate with Power BI, Tableau, Metabase, and others. We recommend the right tool based on your team's skills and your reporting requirements." },
      { q: "What if our data quality is poor?", a: "Data quality issues are common. We include a data audit and cleaning phase before building dashboards — otherwise the dashboards reflect the underlying data problems." },
      { q: "Do you build real-time dashboards?", a: "Yes, when the use case warrants it. We assess whether real-time is genuinely necessary or whether near-real-time (e.g., refreshed every 15 minutes) meets the actual need at lower cost." },
    ],
  },
};

interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  color: string;
}

export function ServiceDetailClient({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const Icon = ICON_MAP[service.icon] ?? Code2;
  const color = COLOR_MAP[service.color] ?? "var(--accent)";
  const details = SERVICE_DETAILS[service.slug];

  if (!details) return null;

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="hero-gradient absolute inset-0 pointer-events-none" />
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-white text-sm mb-8 transition-colors"
            >
              ← All Services
            </Link>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Reveal>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4"
                  style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                  {service.title}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{details.tagline}</h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">{details.description}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
                    style={{ background: color }}
                  >
                    Start a Conversation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm glass border border-white/10 hover:border-white/20 transition-all"
                  >
                    View Case Studies
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Challenges */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
              <ul className="space-y-4">
                {details.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-muted)]">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Challenges We Solve</h2>
              <ul className="space-y-4">
                {details.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[var(--text-muted)]">
                    <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: color }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-12">Business Outcomes</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.outcomes.map((outcome) => (
              <motion.div
                key={outcome.title}
                variants={staggerItem}
                className="glass border border-white/10 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}>
                  <outcome.icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{outcome.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-12">How We Work</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {details.process.map((step) => (
              <motion.div key={step.step} variants={staggerItem} className="relative">
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: `${color}30` }}>{step.step}</div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack + Use Cases */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Technology We Use</h2>
              <div className="flex flex-wrap gap-2">
                {details.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                    style={{ color, borderColor: `${color}30`, background: `${color}08` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Common Use Cases</h2>
              <div className="space-y-3">
                {details.useCases.map((uc) => (
                  <div
                    key={uc.title}
                    className="glass border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between"
                  >
                    <span className="text-white font-medium text-sm">{uc.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: `${color}30`, background: `${color}10` }}>
                      {uc.industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-3">
            {details.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full text-left px-6 py-5 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 shrink-0" style={{ color }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </main>
  );
}
