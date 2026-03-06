"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/data";

const NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-white" />
          </motion.div>
          <span
            className="font-display text-lg font-bold tracking-tight text-text"
          >
            Nexora<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    "text-muted hover:text-text hover:bg-white/5"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-72"
                    >
                      <div className="glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40 p-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted hover:text-text hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <span className="text-accent text-xs">▸</span>
                            </div>
                            <span className="font-medium">{service.title}</span>
                          </Link>
                        ))}
                        <div className="border-t border-border mt-1 pt-1">
                          <Link
                            href="/services"
                            className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-accent hover:text-white font-medium transition-colors rounded-xl hover:bg-accent/10"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 animated-underline",
                  pathname === link.href
                    ? "text-text bg-white/5"
                    : "text-muted hover:text-text hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="primary"
            size="md"
            className="pulse-glow"
          >
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-text hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
            className="lg:hidden overflow-hidden border-t border-border glass"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-text hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <Button asChild variant="primary" className="w-full">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
