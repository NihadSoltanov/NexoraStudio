import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Nexora Studio — IT Services, AI Automation & Custom Software",
    template: "%s | Nexora Studio",
  },
  description:
    "Nexora Studio is a modern IT and digital solutions partner helping businesses build smarter systems, scalable software, and AI-powered automation.",
  keywords: [
    "IT services",
    "custom software development",
    "AI automation",
    "cloud solutions",
    "cybersecurity",
    "managed IT support",
    "web app development",
    "digital transformation",
  ],
  authors: [{ name: "Nexora Studio" }],
  creator: "Nexora Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexorastudio.com",
    siteName: "Nexora Studio",
    title: "Nexora Studio — Build Smart. Scale Faster.",
    description:
      "Modern IT, AI, and software solutions for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Studio — Build Smart. Scale Faster.",
    description:
      "Modern IT, AI, and software solutions for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-bg text-text font-sans min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
