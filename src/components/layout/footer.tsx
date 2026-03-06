import Link from "next/link";
import { Github, Twitter, Linkedin, Zap, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const FOOTER_LINKS = {
  Services: SERVICES.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top CTA strip */}
        <div className="py-16 border-b border-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-text mb-2">
              Ready to build something serious?
            </h3>
            <p className="text-muted text-sm">
              Let&apos;s discuss your project and define the right path forward.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
            }}
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}
              >
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-text">
                Nexora<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Nexora Studio builds modern software, smart systems, and scalable IT
              solutions for ambitious businesses.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 text-sm text-muted">
              <p>hello@nexorastudio.com</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-text font-semibold text-sm mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-text transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </p>
          <p className="text-muted/60 text-xs">
            Build Smart. Scale Faster.
          </p>
        </div>
      </div>
    </footer>
  );
}
