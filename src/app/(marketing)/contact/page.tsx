"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Reveal } from "@/components/animations/reveal";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  details: z.string().min(20, "Please provide at least 20 characters about your project"),
});

type FormData = z.infer<typeof schema>;

const SERVICES_OPTIONS = [
  "Custom Software Development",
  "Web & Mobile App Development",
  "AI Automation & Integration",
  "Cloud Solutions & Infrastructure",
  "Cybersecurity Services",
  "Managed IT Support",
  "UI/UX Design",
  "Data & Analytics",
  "Not sure — need guidance",
];

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000+",
  "Prefer to discuss",
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="tag mb-6 inline-flex">Get in Touch</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-6">
              Tell Us About Your{" "}
              <span className="gradient-text">Project</span>
            </h1>
            <p className="text-muted text-xl max-w-xl mx-auto">
              Tell us about your goals, challenges, or project idea. We&apos;ll
              help you identify the right next step.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* Form section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div className="p-6 rounded-2xl glass border border-border">
                  <Mail className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display font-bold text-text mb-2">Email Us</h3>
                  <p className="text-muted text-sm mb-3">
                    For direct inquiries or questions before filling out the form.
                  </p>
                  <a
                    href="mailto:hello@nexorastudio.com"
                    className="text-accent text-sm font-medium hover:underline"
                  >
                    hello@nexorastudio.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl glass border border-border">
                  <Clock className="w-8 h-8 text-violet mb-4" />
                  <h3 className="font-display font-bold text-text mb-2">Response Time</h3>
                  <p className="text-muted text-sm">
                    We usually respond within{" "}
                    <strong className="text-text">1 business day</strong>. Complex
                    inquiries may take up to 2 days to review properly.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
                  <h3 className="font-display font-bold text-text mb-3">What Happens Next</h3>
                  <div className="space-y-3">
                    {[
                      "We review your inquiry within 1 business day",
                      "We schedule a discovery call to learn more",
                      "We prepare a scoped proposal with timeline",
                      "You decide how and when to proceed",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="rounded-2xl glass border border-border p-8">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-5" />
                      <h3 className="font-display text-2xl font-bold text-text mb-3">
                        Message Received
                      </h3>
                      <p className="text-muted">
                        Thank you for reaching out. We&apos;ll review your inquiry and
                        get back to you within 1 business day.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            Full Name *
                          </label>
                          <input
                            {...register("fullName")}
                            className="w-full px-4 py-3 rounded-xl border bg-white/[0.04] text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                            style={{ borderColor: errors.fullName ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                            placeholder="Jane Smith"
                          />
                          {errors.fullName && (
                            <p className="mt-1.5 text-xs text-red-400">{errors.fullName.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">
                            Company Name *
                          </label>
                          <input
                            {...register("company")}
                            className="w-full px-4 py-3 rounded-xl border bg-white/[0.04] text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                            style={{ borderColor: errors.company ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                            placeholder="Acme Corp"
                          />
                          {errors.company && (
                            <p className="mt-1.5 text-xs text-red-400">{errors.company.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border bg-white/[0.04] text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                          style={{ borderColor: errors.email ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                          placeholder="jane@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Service Needed *
                        </label>
                        <select
                          {...register("service")}
                          className="w-full px-4 py-3 rounded-xl border bg-surface text-text focus:outline-none focus:border-accent/50 transition-colors text-sm cursor-pointer"
                          style={{ borderColor: errors.service ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                        >
                          <option value="">Select a service...</option>
                          {SERVICES_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Estimated Budget *
                        </label>
                        <select
                          {...register("budget")}
                          className="w-full px-4 py-3 rounded-xl border bg-surface text-text focus:outline-none focus:border-accent/50 transition-colors text-sm cursor-pointer"
                          style={{ borderColor: errors.budget ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                        >
                          <option value="">Select a range...</option>
                          {BUDGET_OPTIONS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.budget.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Project Details *
                        </label>
                        <textarea
                          {...register("details")}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border bg-white/[0.04] text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
                          style={{ borderColor: errors.details ? "#ef4444" : "rgba(255,255,255,0.08)" }}
                          placeholder="Tell us a bit about your goals, timeline, and technical needs."
                        />
                        {errors.details && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.details.message}</p>
                        )}
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          Something went wrong. Please try again or email us directly.
                        </div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {status === "loading" ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
