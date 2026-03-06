"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { FAQS } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            Straight answers to what businesses typically want to know before starting.
          </p>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-accent/30 bg-accent/5"
                  : "border-border glass-hover"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-display font-semibold text-sm transition-colors duration-200 ${
                    openIndex === i ? "text-accent" : "text-text"
                  }`}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors ${
                      openIndex === i ? "text-accent" : "text-muted"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-border mb-4" />
                      <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
