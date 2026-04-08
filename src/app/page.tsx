"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudies } from "./CaseStudies";
import { Results } from "./Results";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navigation } from "@/components/Navigation";
import "@/lib/patterns.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ScrollProgressBar />
      <Navigation />

      {/* HERO */}
      <section className="reveal-on-scroll relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/95 to-neutral-950" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">
              AI-powered systems for local businesses
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We build AI that grows
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-[length:200%_auto] animate-gradient-x">
              your business while you sleep.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-neutral-400 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Professional website. 24/7 AI receptionist. Smart automations.<br className="hidden md:block" />
            All built and managed for you — live in under 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a
              href="https://cal.com/atlaslabsai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-center hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a Free Discovery Call</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+18564228099"
              className="w-full sm:w-auto bg-neutral-800/50 backdrop-blur-sm text-neutral-100 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-center border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              Call +1 (856) 422-8099
            </a>
          </div>

          <p className="mt-4 text-sm text-neutral-500 animate-in fade-in duration-700 delay-400">
            Our AI receptionist Jordan answers 24/7
          </p>

          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap text-sm text-neutral-400 animate-in fade-in duration-700 delay-500">
            {["Live in 24 hours", "Fully managed", "Fair, transparent pricing"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-ping" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="reveal-on-scroll py-32 px-6 border-y border-neutral-800/50 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Simple process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">How It </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Works</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              We handle everything — you just focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <HowItWorksCard
              step="01"
              title="We Build Your Site"
              description="A professional, mobile-first website built by AI and live in 24 hours. Includes local SEO, industry templates, and a client portal."
              iconPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
            <HowItWorksCard
              step="02"
              title="We Answer Your Calls"
              description="Your AI receptionist answers every call 24/7, captures leads, books appointments to your calendar, and alerts you instantly."
              iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              featured
            />
            <HowItWorksCard
              step="03"
              title="We Automate Your Growth"
              description="Email follow-ups, review collection, lead capture, and booking — all running on autopilot while you focus on the work."
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="services" className="reveal-on-scroll py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              What we offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Services &amp; </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Pricing</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Built for local businesses. Priced to stay accessible.
            </p>
          </div>

          {/* Individual products — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProductCard
              name="Website"
              tagline="Mobile-first, SEO-ready, live in 24 hours"
              description="Professional website built and managed for you — no tech knowledge needed."
              features={["Hosting included", "Local SEO built-in", "Live in under 24 hours"]}
            />
            <ProductCard
              name="AI Receptionist"
              tagline="Never miss a call — books directly to your calendar"
              description="24/7 call answering that captures leads and books appointments automatically."
              features={["Answers every call 24/7", "Books to your calendar", "Instant lead alerts"]}
            />
            <ProductCard
              name="Atlas CRM"
              tagline="Every lead captured, organized, and followed up"
              description="Automatically captures and organizes every lead from every channel."
              features={["Auto-captures all leads", "Contact timeline view", "Pipeline management"]}
            />
            <ProductCard
              name="Automations Suite"
              tagline="Email sequences, reviews & booking on autopilot"
              description="Email follow-ups, review collection, and booking — all running without you."
              features={["Email follow-up sequences", "Review collection", "Booking automation"]}
            />
          </div>

          {/* Pricing CTA */}
          <div className="text-center mt-12 space-y-5">
            <p className="text-neutral-300 text-lg">
              Maintenance fee starts at only{" "}
              <span className="text-orange-400 font-semibold">$50/mo</span>
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              See What&apos;s Included →
            </a>
          </div>
        </div>
      </section>

      {/* WHY ATLAS VS TRADITIONAL */}
      <section className="reveal-on-scroll py-32 px-6 bg-neutral-900/40 border-y border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              The difference is clear
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-neutral-100">Atlas Labs AI vs. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Traditional Agencies</span>
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 text-neutral-500 font-medium text-sm w-1/3"></th>
                    <th className="px-6 py-4 text-center">
                      <span className="text-neutral-400 font-semibold text-sm">Traditional Agency</span>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold px-5 py-2 rounded-xl">
                        Atlas Labs AI
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Time to launch", "4–12 weeks", "Under 24 hours"],
                    ["Monthly cost", "$500–$3,000/mo", "Starting at $50/mo"],
                    ["Contracts", "6–12 month lock-in", "Month to month"],
                    ["Setup process", "Endless back-and-forth", "We handle everything"],
                    ["Tech knowledge needed", "Required", "None needed"],
                    ["Call answering", "Hire a receptionist", "AI answers 24/7"],
                    ["Lead capture", "Manual CRM entry", "Auto-captured instantly"],
                  ].map(([label, bad, good], i) => (
                    <tr key={label} className={`border-b border-neutral-800/40 last:border-0 ${i % 2 === 0 ? "bg-neutral-900/30" : ""}`}>
                      <td className="px-6 py-4 text-neutral-300 font-medium text-sm">{label}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-neutral-500 text-sm">
                          <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          {bad}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
                          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {good}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Mobile stacked comparison */}
          <div className="md:hidden space-y-3">
            {[
              ["Time to launch", "4–12 weeks", "Under 24 hours"],
              ["Monthly cost", "$500–$3,000/mo", "Starting at $50/mo"],
              ["Contracts", "6–12 month lock-in", "Month to month"],
              ["Setup process", "Endless back-and-forth", "We handle everything"],
              ["Tech knowledge needed", "Required", "None needed"],
              ["Call answering", "Hire a receptionist", "AI answers 24/7"],
              ["Lead capture", "Manual CRM entry", "Auto-captured instantly"],
            ].map(([label, bad, good]) => (
              <div key={label} className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
                <p className="text-sm font-semibold text-neutral-200 mb-3">{label}</p>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm text-neutral-500">{bad}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-emerald-400 font-medium">{good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="reveal-on-scroll py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            <span className="text-neutral-100">Ready to put your business</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">on autopilot?</span>
          </h2>
          <p className="text-base sm:text-xl text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Jordan, our AI, answers immediately and can book your discovery call on the spot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://cal.com/atlaslabsai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl text-center hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a Free Call</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+18564228099"
              className="w-full sm:w-auto bg-neutral-800/50 backdrop-blur-sm text-neutral-100 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl text-center border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              Call +1 (856) 422-8099
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="reveal-on-scroll py-32 px-6 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Real results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Case </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Studies</span>
            </h2>
            <p className="text-xl text-neutral-400">Real systems. Real impact. Updated live.</p>
          </div>
          <CaseStudies />
        </div>
      </section>

      {/* Results Dashboard */}
      <section id="results" className="reveal-on-scroll py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Live performance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Live </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Results</span>
            </h2>
            <p className="text-xl text-neutral-400">Real-time metrics from active systems</p>
          </div>
          <Results />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal-on-scroll py-16 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-neutral-950" />
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/50">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-neutral-100">Get Started </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Today</span>
              </h2>
              <p className="text-lg text-neutral-400">
                Tell us about your business. We&apos;ll reach out within the hour.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                <img src="/images/logo.svg" alt="Atlas Logo" className="w-full h-full" />
              </div>
              <div>
                <span className="font-bold text-lg text-neutral-100">Atlas</span>
                <span className="text-orange-500 font-bold text-lg">Labs</span>
                <span className="text-neutral-500 ml-1 text-sm">AI</span>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              © {new Date().getFullYear()} AtlasLabs AI. Built to scale → Never stop automating.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-neutral-500 hover:text-orange-400 transition-colors">Privacy</a>
              <a href="#" className="text-neutral-500 hover:text-orange-400 transition-colors">Terms</a>
              <a href="#contact" className="text-neutral-500 hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HowItWorksCard({
  step,
  title,
  description,
  iconPath,
  featured,
}: {
  step: string;
  title: string;
  description: string;
  iconPath: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm transition-all duration-300 ${
        featured
          ? "border-orange-500/30 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 md:scale-105"
          : "hover:border-neutral-700/50 hover:-translate-y-1"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Most Impactful
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <div className="text-sm font-mono text-neutral-500 mb-2">{step}</div>
        <h3 className="text-2xl font-bold mb-4 text-neutral-100 group-hover:text-orange-400 transition-colors">{title}</h3>
        <p className="text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ProductCard({
  name,
  tagline,
  description,
  features,
}: {
  name: string;
  tagline: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-6 rounded-3xl hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-neutral-100 mb-1">{name}</h3>
        <p className="text-sm text-orange-400 font-medium">{tagline}</p>
      </div>
      <p className="text-neutral-400 text-sm mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}


const INPUT_CLS = "w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-3.5 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
    consent_calls: false, consent_sms: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to submit");
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-100">Inquiry Received!</h3>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto">
          Our team will review and follow up within 24 hours. If you opted in, Jordan — our AI receptionist — may reach out first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          {errorMessage}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Full Name <span className="text-orange-500">*</span></label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={INPUT_CLS} placeholder="John Doe" required disabled={isSubmitting} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Business Name</label>
          <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={INPUT_CLS} placeholder="Acme Landscaping" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Email <span className="text-orange-500">*</span></label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={INPUT_CLS} placeholder="you@company.com" required disabled={isSubmitting} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Phone <span className="text-orange-500">*</span></label>
          <input type="tel" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
            className={INPUT_CLS} placeholder="(555) 123-4567" required disabled={isSubmitting} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Service Interest <span className="text-orange-500">*</span></label>
        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`${INPUT_CLS} cursor-pointer`} required disabled={isSubmitting}>
          <option value="">Select a service...</option>
          <option value="ai-receptionist">AI Receptionist (Phone & Web Chat)</option>
          <option value="lead-automation">Lead Automation & CRM</option>
          <option value="full-ai-stack">Full AI Stack Implementation</option>
          <option value="consulting">AI Strategy Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">How Can We Help?</label>
        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${INPUT_CLS} h-28 resize-none`}
          placeholder="Tell us about your business and what you're looking to achieve..."
          disabled={isSubmitting} />
      </div>

      <div className="space-y-3 pt-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input type="checkbox" checked={formData.consent_calls}
            onChange={(e) => setFormData({ ...formData, consent_calls: e.target.checked })}
            className="mt-0.5 w-4 h-4 accent-orange-500 flex-shrink-0 cursor-pointer" disabled={isSubmitting} />
          <span className="text-xs text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-300">I&apos;m open to a quick phone call.</span>{" "}
            Our AI receptionist (Jordan) may call to qualify your inquiry and answer questions.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input type="checkbox" checked={formData.consent_sms}
            onChange={(e) => setFormData({ ...formData, consent_sms: e.target.checked })}
            className="mt-0.5 w-4 h-4 accent-orange-500 flex-shrink-0 cursor-pointer" disabled={isSubmitting} />
          <span className="text-xs text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-300">Send me SMS updates.</span>{" "}
            I agree to receive text message confirmations and updates. Reply STOP to opt out.
          </span>
        </label>
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-base hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2">
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
