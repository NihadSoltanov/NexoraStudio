"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BLOG_POSTS = [
  {
    slug: "custom-software-vs-saas",
    title: "Custom Software vs. SaaS: How to Choose the Right Approach",
    excerpt: "Making the build-vs-buy decision is one of the most consequential technology choices a business can make. Here's how to think about it clearly.",
    category: "Strategy",
    readTime: "7 min",
    date: "Jan 12, 2025",
    image: "/blog/custom-vs-saas.jpg",
  },
  {
    slug: "ai-automation-real-roi",
    title: "AI Automation: Where It Creates Real ROI vs. Where It's Hype",
    excerpt: "Not every workflow is a good candidate for automation. We break down where AI genuinely pays off and where businesses often overspend chasing the trend.",
    category: "AI & Automation",
    readTime: "9 min",
    date: "Jan 5, 2025",
    image: "/blog/ai-roi.jpg",
  },
  {
    slug: "cloud-migration-mistakes",
    title: "5 Cloud Migration Mistakes That Slow Down Every Project",
    excerpt: "Cloud migrations are complex. These five patterns consistently cause delays, budget overruns, and post-migration instability — and how to avoid them.",
    category: "Cloud",
    readTime: "6 min",
    date: "Dec 18, 2024",
    image: "/blog/cloud-migration.jpg",
  },
  {
    slug: "small-business-cybersecurity",
    title: "Cybersecurity for Growing Businesses: Where to Start",
    excerpt: "You don't need a six-figure security budget to meaningfully reduce risk. Here's a practical prioritization framework for businesses at the growth stage.",
    category: "Cybersecurity",
    readTime: "8 min",
    date: "Dec 10, 2024",
    image: "/blog/cybersecurity.jpg",
  },
  {
    slug: "ui-ux-business-outcomes",
    title: "Why UI/UX is a Business Outcome Problem, Not a Design Problem",
    excerpt: "The best design decisions are grounded in measurable goals. A look at how we approach design work as a business performance lever.",
    category: "Design",
    readTime: "5 min",
    date: "Dec 3, 2024",
    image: "/blog/ux-outcomes.jpg",
  },
  {
    slug: "data-dashboards-that-work",
    title: "Building Internal Dashboards That People Actually Use",
    excerpt: "Most internal dashboards get built and then ignored. Here's what separates tools that get adopted from ones that collect dust.",
    category: "Data & Analytics",
    readTime: "7 min",
    date: "Nov 25, 2024",
    image: "/blog/dashboards.jpg",
  },
  {
    slug: "managed-it-vs-in-house",
    title: "Managed IT Support vs. In-House IT: A Realistic Comparison",
    excerpt: "The real cost comparison is rarely what people expect. We break down the tradeoffs between managed IT and internal teams for growing businesses.",
    category: "IT Support",
    readTime: "6 min",
    date: "Nov 18, 2024",
    image: "/blog/managed-it.jpg",
  },
  {
    slug: "tech-stack-decisions",
    title: "How to Evaluate Technology Stack Decisions Without Being a Developer",
    excerpt: "You don't need to understand every framework to make informed technology decisions. A practical guide for business leaders working with technical teams.",
    category: "Strategy",
    readTime: "8 min",
    date: "Nov 10, 2024",
    image: "/blog/tech-stack.jpg",
  },
];

const CATEGORIES = ["All", "Strategy", "AI & Automation", "Cloud", "Cybersecurity", "Design", "Data & Analytics", "IT Support"];

const CATEGORY_COLORS: Record<string, string> = {
  Strategy: "text-[var(--accent)] bg-[var(--accent)]/10",
  "AI & Automation": "text-[var(--cyan)] bg-[var(--cyan)]/10",
  Cloud: "text-[var(--accent)] bg-[var(--accent)]/10",
  Cybersecurity: "text-[var(--violet)] bg-[var(--violet)]/10",
  Design: "text-[var(--accent)] bg-[var(--accent)]/10",
  "Data & Analytics": "text-[var(--violet)] bg-[var(--violet)]/10",
  "IT Support": "text-[var(--cyan)] bg-[var(--cyan)]/10",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="hero-gradient absolute inset-0 pointer-events-none" />
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-6">
              Insights & Resources
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Practical Thinking on{" "}
              <span className="gradient-text">Technology & Business</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
              Clear, actionable perspectives on software, AI, cloud, security, and how technology can drive real business outcomes — without the hype.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[var(--accent)] text-white"
                    : "glass border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {featured && (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block glass border border-white/10 rounded-3xl p-8 mb-10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[featured.category]}`}>
                        {featured.category}
                      </span>
                      <span className="text-[var(--text-muted)] text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featured.readTime} read
                      </span>
                      <span className="text-[var(--text-muted)] text-xs">{featured.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[var(--accent)] font-medium text-sm group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="w-full md:w-72 h-48 md:h-auto rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--violet)]/20 border border-white/5 shrink-0 flex items-center justify-center">
                    <Tag className="w-12 h-12 text-white/10" />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block glass border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[var(--surface)] to-[var(--accent)]/10 border border-white/5 mb-5 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-white/10" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${CATEGORY_COLORS[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-[var(--text-muted)] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)] text-xs">{post.date}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FinalCtaSection />
    </main>
  );
}
