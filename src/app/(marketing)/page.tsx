import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackBar } from "@/components/sections/tech-stack-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyNexora } from "@/components/sections/why-nexora";
import { ProcessSection } from "@/components/sections/process-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { EngagementSection } from "@/components/sections/engagement-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export const metadata: Metadata = {
  title: "Nexora Studio — IT Services, AI Automation & Custom Software",
  description:
    "Nexora Studio helps startups and growing companies build scalable software, automate workflows, strengthen infrastructure, and unlock growth through modern digital systems.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackBar />
      <ServicesOverview />
      <WhyNexora />
      <ProcessSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <EngagementSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
