"use client";

import { motion } from "framer-motion";
import { Rocket, Cloud, ShoppingCart, Heart, Truck, TrendingUp, Briefcase, Building2 } from "lucide-react";
import { StaggerContainer, staggerItem, Reveal } from "@/components/animations/reveal";
import { INDUSTRIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket, Cloud, ShoppingCart, Heart, Truck, TrendingUp, Briefcase, Building2,
};

export function IndustriesSection() {
  return (
    <section className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 50%, rgba(123,97,255,0.04), transparent)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="tag mb-4 inline-flex">Industries We Serve</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-4 mb-4">
            Built for <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Our systems adapt to the specific operational realities of each industry.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICON_MAP[industry.icon];
            const colors = ["#4F8CFF", "#7B61FF", "#35D6FF", "#4F8CFF", "#7B61FF", "#35D6FF", "#4F8CFF", "#7B61FF"];
            const color = colors[i];

            return (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                className="group relative rounded-2xl p-6 border border-border glass-hover cursor-default text-center"
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color + "15" }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <p className="font-display font-semibold text-text text-sm">{industry.name}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
