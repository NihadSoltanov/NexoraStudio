export const SERVICES = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: "Code2",
    shortDesc: "Tailored digital systems built around your workflows, operational needs, and long-term growth.",
    color: "accent",
  },
  {
    slug: "web-mobile-apps",
    title: "Web & Mobile App Development",
    icon: "Smartphone",
    shortDesc: "Modern digital products that are fast, intuitive, and built to scale with your business.",
    color: "violet",
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Integration",
    icon: "Bot",
    shortDesc: "Intelligent workflows that reduce repetitive work and improve efficiency across your teams.",
    color: "cyan",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Solutions & Infrastructure",
    icon: "Cloud",
    shortDesc: "Reliable cloud environments with modern deployment, scaling, and performance practices.",
    color: "accent",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    icon: "Shield",
    shortDesc: "Strengthen systems, reduce risk, and support security-conscious growth for your business.",
    color: "violet",
  },
  {
    slug: "managed-it-support",
    title: "Managed IT Support",
    icon: "Headphones",
    shortDesc: "Dependable technical support and operational continuity for growing businesses.",
    color: "cyan",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Palette",
    shortDesc: "Interfaces and experiences that feel clear, efficient, and aligned with user needs.",
    color: "accent",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    icon: "BarChart3",
    shortDesc: "Turn data into visibility through dashboards, reporting systems, and actionable insights.",
    color: "violet",
  },
];

export const CASE_STUDIES = [
  {
    slug: "ecommerce-operations-upgrade",
    title: "E-commerce Operations Upgrade",
    category: "Custom Software",
    client: "Retail & E-commerce",
    challenge: "Outdated backend systems causing order delays, inventory mismatches, and poor customer experience during peak seasons.",
    solution: "Rebuilt the entire order management system with custom workflows, real-time inventory sync, and automated fulfillment routing.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    result: "42% reduction in order processing time. Zero downtime during Black Friday peak.",
    color: "accent",
  },
  {
    slug: "logistics-ops-dashboard",
    title: "Internal Dashboard for Logistics Team",
    category: "Data & Analytics",
    client: "Logistics & Supply Chain",
    challenge: "Operational data scattered across five disconnected tools, making it impossible to get a real-time view of fleet and delivery status.",
    solution: "Built a unified operations dashboard with real-time fleet tracking, delivery KPIs, and automated alerting for critical events.",
    tech: ["React", "TypeScript", "Node.js", "SQL Server", "Power BI API"],
    result: "Reduced reporting time by 70%. Management now operates from a single source of truth.",
    color: "violet",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation for Support Team",
    category: "AI Automation",
    client: "SaaS Company",
    challenge: "Support team spending 60% of time on repetitive ticket triage, routing, and template responses — causing burnout and slow resolution times.",
    solution: "Deployed an AI-powered automation layer that classifies incoming tickets, routes them to the right team, and drafts initial responses.",
    tech: ["OpenAI API", "Python", "n8n", "Webhook pipelines", "PostgreSQL"],
    result: "First response time dropped from 4 hours to 18 minutes. Team now handles 3x volume with same headcount.",
    color: "cyan",
  },
  {
    slug: "cloud-migration-finance",
    title: "Cloud Migration & Optimization",
    category: "Cloud Solutions",
    client: "Financial Services",
    challenge: "Legacy on-premise infrastructure causing reliability issues, high maintenance cost, and inability to scale during reporting periods.",
    solution: "Migrated all workloads to AWS with auto-scaling architecture, CI/CD pipelines, and comprehensive monitoring and alerting.",
    tech: ["AWS", "Terraform", "Docker", "GitHub Actions", "Datadog"],
    result: "Infrastructure cost reduced by 35%. System uptime improved from 97.2% to 99.9%.",
    color: "accent",
  },
  {
    slug: "security-audit-healthcare",
    title: "Security Audit & Infrastructure Hardening",
    category: "Cybersecurity",
    client: "Healthcare Technology",
    challenge: "Growing patient data platform with no formal security audit history, potential HIPAA compliance gaps, and unpatched vulnerabilities.",
    solution: "Conducted full penetration testing, remediated 23 critical vulnerabilities, implemented zero-trust access policies and audit logging.",
    tech: ["Penetration Testing", "AWS Security Hub", "SIEM", "IAM", "Encryption"],
    result: "Full HIPAA compliance achieved. Zero security incidents in 14 months post-hardening.",
    color: "violet",
  },
  {
    slug: "mobile-app-field-teams",
    title: "Mobile App for Field Operations Teams",
    category: "Web & Mobile",
    client: "Enterprise Operations",
    challenge: "Field teams relying on paper forms and phone calls to report work orders, causing data loss, delays, and poor accountability.",
    solution: "Built a cross-platform mobile app for field reporting, offline capability, GPS tracking, photo capture, and real-time sync to headquarters.",
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL", "AWS S3"],
    result: "Paperwork eliminated. Field-to-HQ data sync now happens in real time across 200+ field workers.",
    color: "cyan",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus D.",
    role: "CTO",
    company: "Vantage SaaS",
    text: "Nexora Studio didn't just deliver code — they understood our business constraints and built something that actually solves the problem. Their technical execution was sharp and communication was refreshingly clear throughout the engagement.",
  },
  {
    name: "Layla K.",
    role: "Head of Operations",
    company: "Meridian Logistics",
    text: "We had three vendors fail to deliver a workable internal dashboard before we found Nexora Studio. In six weeks, they shipped something our entire operations team now relies on daily. Reliable, professional, and technically excellent.",
  },
  {
    name: "James T.",
    role: "Founder",
    company: "Orbit Commerce",
    text: "The AI automation work they delivered reduced our support overhead significantly. What impressed me most was how quickly they grasped our workflows and translated that into a system that just works. Highly recommended for any serious project.",
  },
];

export const FAQS = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, SMBs, and enterprise teams across a range of industries including SaaS, e-commerce, logistics, healthcare, finance, and professional services. Our focus is on businesses that are serious about technology as a growth driver.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Most of our clients continue with a monthly retainer or managed IT support arrangement after project delivery. We believe in long-term partnerships, not one-time deliveries.",
  },
  {
    q: "Can you improve an existing system instead of building from scratch?",
    a: "Absolutely. Many of our engagements involve auditing, refactoring, and improving legacy systems or existing codebases. We assess what exists before recommending a path forward.",
  },
  {
    q: "Do you provide AI and automation consulting?",
    a: "Yes. We help businesses identify automation opportunities, design intelligent workflows, and integrate AI tools into existing operations — without overpromising or over-engineering.",
  },
  {
    q: "How do projects typically begin?",
    a: "Projects start with a discovery call where we learn about your goals, current systems, pain points, and priorities. From there, we prepare a scoped proposal with timelines and delivery milestones.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with modern, maintainable technologies chosen for the project's actual needs — including Next.js, React, Node.js, Python, AWS, PostgreSQL, SQL Server, Docker, and more. We don't force a single stack on every engagement.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope and complexity. A focused feature build or dashboard might take 4–6 weeks. A full product or system migration can take 3–6 months. We provide clear timelines during the planning phase.",
  },
  {
    q: "Is there a minimum project size?",
    a: "We focus on projects where we can deliver meaningful value. Strategy and consulting engagements can start small, while full-build projects typically require a minimum scope to execute properly. We'll be upfront during the initial call.",
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    icon: "Rocket",
    forWho: "Ideal for defined scopes with clear deliverables",
    description: "Best for startups and businesses with a clear project in mind — a new product, system migration, or feature build.",
    includes: ["Fixed scope & milestones", "Clear delivery timeline", "Dedicated project team", "Post-launch support window"],
  },
  {
    title: "Monthly Retainer",
    icon: "RefreshCw",
    forWho: "Ideal for ongoing product or IT support needs",
    description: "For businesses that need consistent technical support, regular development capacity, or continuous IT management.",
    includes: ["Allocated monthly hours", "Priority response", "Proactive monitoring", "Regular progress reporting"],
    featured: true,
  },
  {
    title: "Dedicated Team",
    icon: "Users",
    forWho: "Ideal for scaling companies needing execution power",
    description: "A fully embedded technical team that operates as an extension of your business — without the overhead of full-time hiring.",
    includes: ["Full team allocation", "Direct communication", "Agile delivery cycles", "Long-term roadmap alignment"],
  },
  {
    title: "Strategy & Consulting",
    icon: "Lightbulb",
    forWho: "Ideal for planning, audits, and technical advisory",
    description: "For leadership teams that need expert guidance on architecture decisions, technology strategy, or system audits before building.",
    includes: ["Technical audit", "Architecture planning", "Vendor evaluation", "Roadmap recommendations"],
  },
];

export const INDUSTRIES = [
  { name: "Startups", icon: "Rocket" },
  { name: "SaaS", icon: "Cloud" },
  { name: "E-commerce", icon: "ShoppingCart" },
  { name: "Healthcare", icon: "Heart" },
  { name: "Logistics", icon: "Truck" },
  { name: "Finance", icon: "TrendingUp" },
  { name: "Professional Services", icon: "Briefcase" },
  { name: "Enterprise", icon: "Building2" },
];

export const TECH_STACK = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "AWS", "Docker", "PostgreSQL", "SQL Server", "Redis",
  "OpenAI", "Terraform", "GitHub Actions", "Prisma", "Vercel",
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Reliability Focus" },
  { value: "12+", label: "Industries Served" },
  { value: "1 Day", label: "Avg. Response Time" },
];
