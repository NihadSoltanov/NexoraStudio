import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/data";
import { CaseStudyDetailClient } from "./client";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Nexora Studio`,
    description: study.challenge,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  return <CaseStudyDetailClient study={study} />;
}
