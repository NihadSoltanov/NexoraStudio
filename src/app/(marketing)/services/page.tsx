import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Bot, Cloud, Shield, Headphones, Palette, BarChart3 } from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/animations/reveal";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "IT Services — Custom Software, AI, Cloud & More",
  description:
    "Explore all Nexora Studio services: custom software development, web & mobile apps, AI automation, cloud solutions, cybersecurity, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageClient />
      <FinalCtaSection />
    </>
  );
}
