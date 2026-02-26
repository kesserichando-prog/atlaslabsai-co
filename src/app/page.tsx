"use client";

import Link from "next/link";
import { CaseStudies } from "./CaseStudies";
import { Results } from "./Results";
import { useEffect, useState } from "react";
import "@/lib/patterns.js";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Scroll Progress Bar */}
      <div data-scroll-progress className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 z-50 transition-all duration-100 ease-out" style={{ width: "0%" }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <img src="/images/logo.svg" alt="Atlas Logo" className="w-full h-full" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-xl text-neutral-100">Atlas</span>
              <span className="text-orange-500 font-bold text-xl">Labs</span>
              <span className="text-neutral-500 ml-1 text-sm font-medium">AI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
              Services
            </Link>
            <Link href="#case-studies" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
              Case Studies
            </Link>
            <Link href="#results" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
              Results
            </Link>
            <Link
              href="#contact"
              className="text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-nav-burger
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          data-mobile-menu
          hidden={!mobileMenuOpen}
          className="md:hidden bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-neutral-300 hover:text-orange-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-neutral-300 hover:text-orange-400 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-neutral-300 hover:text-orange-400 transition-colors"
            >
              Results
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="reveal-on-scroll relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/95 to-neutral-950" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">
              Autonomous AI-Powered Revenue Organization
            </span>
          </div>

          {/* Headline with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We Build Systems
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-[length:200%_auto] animate-gradient-x">
              That Scale
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <span className="text-orange-400 font-semibold">Scout.</span> Find opportunities.{" "}
            <span className="text-orange-400 font-semibold">Solve.</span> Build systems.{" "}
            <span className="text-orange-400 font-semibold">Prove.</span> Publish results.{" "}
            <span className="text-orange-400 font-semibold">Sell.</span> Scale revenue.
            <br className="hidden md:block" />
            {""}Atlas automates the entire client acquisition lifecycle—24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link
              href="#contact"
              className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Automating</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#case-studies"
              className="bg-neutral-800/50 backdrop-blur-sm text-neutral-100 px-8 py-4 rounded-2xl font-semibold text-lg border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap text-sm text-neutral-500 animate-in fade-in duration-700 delay-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">A</div>
                <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">B</div>
                <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">C</div>
              </div>
              <span>Trusted by 47 businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>24/7 automation running</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-ping" />
          </div>
        </div>
      </section>

      {/* Stats Section - with CSS Grid and Microinteractions */}
      <section className="py-24 px-6 border-y border-neutral-800/50 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-3 group-hover:scale-105 transition-transform">
                500+
              </div>
              <div className="text-sm text-neutral-400">Automation Gaps Found</div>
              <div className="mt-4 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                → And growing daily
              </div>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-3 group-hover:scale-105 transition-transform">
                $2.3M
              </div>
              <div className="text-sm text-neutral-400">Revenue Unlocked</div>
              <div className="mt-4 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                → For our clients
              </div>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-3 group-hover:scale-105 transition-transform">
                12,000+
              </div>
              <div className="text-sm text-neutral-400">Hours Saved</div>
              <div className="mt-4 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                → This year alone
              </div>
            </div>

            <div className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-3 group-hover:scale-105 transition-transform">
                98%
              </div>
              <div className="text-sm text-neutral-400">Client Satisfaction</div>
              <div className="mt-4 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                → Proven track record
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="reveal-on-scroll py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Three-Step</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Engine
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              End-to-end automation systems that find clients, solve problems, and scale revenue—without the manual grind.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              iconsrc="/images/icon-scout.svg"
              step="01"
              title="Scout"
              description="Continuously searches the internet for automation gaps—businesses losing time, money, or opportunities to manual processes."
              features={["24/7 opportunity scanning across industries", "Pain point identification & qualification", "Targeted prospect database building"]}
              gradient="from-blue-500 to-cyan-500"
            />

            <ServiceCard
              iconsrc="/images/icon-solve.svg"
              step="02"
              title="Solve"
              description="Builds custom automation systems that eliminate bottlenecks, reduce manual work, and unlock hidden revenue."
              features={["Custom workflow automation pipelines", "Third-party integrations & APIs", "Process optimization & documentation"]}
              gradient="from-orange-500 to-amber-500"
              featured
            />

            <ServiceCard
              iconsrc="/images/icon-scale.svg"
              step="03"
              title="Scale"
              description="Documents results, publishes case studies, and creates a flywheel of trust that attracts more opportunities."
              features={["Auto-published case studies", "Proven ROI metrics tracking", "Recurring revenue systems"]}
              gradient="from-emerald-500 to-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="reveal-on-scroll py-32 px-6 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Real Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Case</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Studies
              </span>
            </h2>
            <p className="text-xl text-neutral-400">Real automations. Real impact. Updated live.</p>
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
              Live Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neutral-100">Live</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Results
              </span>
            </h2>
            <p className="text-xl text-neutral-400">Real-time metrics from active systems</p>
          </div>
          <Results />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="reveal-on-scroll py-32 px-6 bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-neutral-950" />

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-neutral-100">Ready to</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  Automate?
                </span>
              </h2>
              <p className="text-lg text-neutral-400">
                Tell us about your business. Atlas will analyze your processes and identify automation opportunities.
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
              <a href="#" className="text-neutral-500 hover:text-orange-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-neutral-500 hover:text-orange-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-neutral-500 hover:text-orange-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  iconsrc,
  step,
  title,
  description,
  features,
  gradient,
  featured,
}: {
  iconsrc: string;
  step: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
        featured
          ? "border-orange-500/30 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 scale-105"
          : "hover:border-neutral-700/50 hover:-translate-y-1"
      }`}
    >
      {featured && <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">HOT</div>}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg overflow-hidden`}>
          <img src={iconsrc} alt={title} className="w-8 h-8" />
        </div>
        <div className="text-sm font-mono text-neutral-500 mb-2">{step}</div>
        <h3 className="text-2xl font-bold mb-4 text-neutral-100 group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-400 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
              <div className={`w-1.5 h-1.5 bg-gradient-to-br ${gradient} rounded-full animate-pulse`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-emerald-400 flex items-center gap-2">
          <span>✓</span>
          <span>Thank you! We'll be in touch soon.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 flex items-center gap-2">
          <span>✗</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Your Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          placeholder="John Doe"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          placeholder="you@company.com"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          What's your biggest pain point?
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all h-32 resize-none"
          placeholder="Describe the manual processes slowing you down..."
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? 'Sending...' : 'Find My Automation Gaps'}
      </button>
    </form>
  );
}