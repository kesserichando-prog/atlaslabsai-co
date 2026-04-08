'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

const features = [
  {
    emoji: '🤖',
    title: 'AI-Generated in Minutes',
    description: 'Tell us your business name, industry, and services. Our AI writes the copy, selects the layout, and generates a full site — no blank-page stress.',
  },
  {
    emoji: '✏️',
    title: 'Client Portal Editor',
    description: 'Your personal editor. Log in anytime to update photos, text, hours, or services. No developer required.',
  },
  {
    emoji: '📱',
    title: 'Mobile Optimized',
    description: 'Every site looks flawless on phones, tablets, and desktops. We test across 12 device sizes before going live.',
  },
  {
    emoji: '📍',
    title: 'Local SEO Schema',
    description: 'Built-in structured data so Google knows exactly who you are, where you are, and what you offer.',
  },
  {
    emoji: '🎨',
    title: '12 Section Types',
    description: 'Hero, services, testimonials, gallery, pricing, FAQs, contact forms, team, booking, maps, and more.',
  },
  {
    emoji: '🔠',
    title: 'Custom Fonts & Colors',
    description: 'Match your brand exactly. Choose from 40+ premium fonts and set your color palette in seconds.',
  },
];

const sectionTypes = [
  'Hero & CTA', 'Services Grid', 'Testimonials', 'Photo Gallery',
  'Pricing Table', 'FAQ Accordion', 'Contact Form', 'Team Bios',
  'Online Booking', 'Google Maps', 'Before/After', 'Video Embed',
];

const steps = [
  {
    step: '01',
    title: 'We Build Your Site',
    description: 'Share your business info. Atlas AI generates your full website — copy, layout, and branding — in minutes.',
    emoji: '⚡',
  },
  {
    step: '02',
    title: 'You Get Portal Access',
    description: 'Log in to your private editor. Review every section, upload your photos, and tweak anything you want.',
    emoji: '🔑',
  },
  {
    step: '03',
    title: 'Go Live',
    description: "One click to publish. Your site is live on a custom domain, indexed by Google, and ready to convert.",
    emoji: '🚀',
  },
];

export default function WebsiteBuilderPage() {
  const [authKey, setAuthKey] = useState('');
  const [isLaunching, setIsLaunching] = useState(false);
  const [error, setError] = useState('');

  const handleLaunch = () => {
    const trimmed = authKey.trim();
    if (!trimmed) {
      setError('Please enter your access key.');
      return;
    }
    setError('');
    setIsLaunching(true);
    const url = `https://app.atlaslabsai.co/portal?token=${encodeURIComponent(trimmed)}`;
    window.location.href = url;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLaunch();
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/95 to-neutral-950" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">Website Builder — $99/mo</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-neutral-100">Your AI Website</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-[length:200%_auto] animate-gradient-x">
              Builder is Ready
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Atlas AI generates your full website in minutes. Then hands you a portal to edit, update, and own it — forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
            <a
              href="#try-it"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Try It Free →
            </a>
            <a
              href="#features"
              className="bg-neutral-800/50 text-neutral-100 px-8 py-4 rounded-2xl font-semibold text-lg border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              See Features
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              No coding required
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Live in under 24 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Editor Portal Preview */}
      <section className="py-16 px-6 bg-neutral-900/30 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Client Portal Preview
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neutral-100">Edit Your Site</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Like a Pro
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto">
              Your portal gives you full control — no agency middleman, no hourly rates.
            </p>
          </div>

          {/* Mock editor UI */}
          <div className="rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser chrome */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                <div className="w-3 h-3 bg-amber-500/60 rounded-full" />
                <div className="w-3 h-3 bg-emerald-500/60 rounded-full" />
              </div>
              <div className="flex-1 mx-4 bg-neutral-800 rounded-lg px-4 py-1.5 text-xs text-neutral-400 font-mono">
                app.atlaslabsai.co/portal
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </div>

            {/* Editor layout */}
            <div className="bg-neutral-950 grid md:grid-cols-[280px_1fr]">
              {/* Sidebar */}
              <div className="border-r border-neutral-800 p-5 space-y-2">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Page Sections</div>
                {sectionTypes.map((section, i) => (
                  <div
                    key={section}
                    className={`px-4 py-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
                      i === 0
                        ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                    }`}
                  >
                    {section}
                  </div>
                ))}
              </div>

              {/* Canvas */}
              <div className="p-6 space-y-4">
                <div className="h-32 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-neutral-300 font-semibold mb-1">Hero Section</div>
                    <div className="text-sm text-neutral-500">Click to edit headline, subtext, and CTA</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Service 1', 'Service 2', 'Service 3'].map((s) => (
                    <div key={s} className="h-20 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-sm text-neutral-500 hover:border-neutral-700 transition-colors cursor-pointer">
                      {s}
                    </div>
                  ))}
                </div>
                <div className="h-20 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-sm text-neutral-500">
                  Testimonials Row
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-sm font-semibold text-white">
                    Save &amp; Publish
                  </div>
                  <div className="h-12 px-5 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center text-sm text-neutral-300">
                    Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Everything Included
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neutral-100">Packed with</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Features
              </span>
            </h2>
            <p className="text-lg text-neutral-400">One $99/mo subscription. No hidden extras.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-neutral-900/30 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Simple Process
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neutral-100">How It</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Works
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="flex items-start gap-6 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-orange-500/20 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-2xl flex items-center justify-center text-2xl">
                    {step.emoji}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-xs font-mono text-orange-400 mb-1">{step.step}</div>
                  <h3 className="text-xl font-bold text-neutral-100 mb-2">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-shrink-0 hidden md:flex items-center text-neutral-700 text-2xl self-center">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo / Launch Portal */}
      <section id="try-it" className="py-24 px-6 border-t border-neutral-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto relative">
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                🔑
              </div>
              <h2 className="text-3xl font-bold mb-3">
                <span className="text-neutral-100">Launch Your</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  Portal
                </span>
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Enter your access key to open your website editor. Don't have one yet?{' '}
                <Link href="/#contact" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Get started here.
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="auth-key" className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Access Key
                </label>
                <input
                  id="auth-key"
                  type="text"
                  value={authKey}
                  onChange={(e) => {
                    setAuthKey(e.target.value);
                    if (error) setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your key (try: atlas2025)"
                  className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-mono"
                  disabled={isLaunching}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1.5">
                    <span>✗</span> {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleLaunch}
                disabled={isLaunching}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isLaunching ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Launching…
                  </>
                ) : (
                  'Launch Portal →'
                )}
              </button>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1 h-px bg-neutral-800" />
                <span className="text-xs text-neutral-600">demo</span>
                <div className="flex-1 h-px bg-neutral-800" />
              </div>

              <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl px-5 py-4 flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">✦</span>
                <p className="text-sm text-neutral-400">
                  Want to explore the portal before signing up? Use the demo key{' '}
                  <button
                    onClick={() => setAuthKey('atlas2025')}
                    className="text-orange-400 hover:text-orange-300 font-mono font-semibold transition-colors"
                  >
                    atlas2025
                  </button>{' '}
                  for free access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 px-6 bg-neutral-900/30 border-t border-neutral-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-neutral-800" />
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              $99/mo
            </span>
            <div className="h-px w-16 bg-neutral-800" />
          </div>
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Everything. No Setup Fee. No Surprises.
          </h2>
          <p className="text-lg text-neutral-400 mb-3">
            Includes your AI-built site, client portal, hosting, SEO schema, mobile optimization, and ongoing support.
          </p>
          <p className="text-sm text-neutral-600 mb-10">Cancel anytime. No contracts. Custom domain optional ($12/yr extra).</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'AI Site Build', value: 'Included' },
              { label: 'Client Portal', value: 'Included' },
              { label: 'Hosting', value: 'Included' },
              { label: 'SEO Schema', value: 'Included' },
            ].map((item) => (
              <div key={item.label} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 text-center">
                <div className="text-emerald-400 font-semibold text-sm mb-1">{item.value}</div>
                <div className="text-neutral-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#try-it"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Get Your Site Now →
            </a>
            <Link
              href="/products"
              className="bg-neutral-800/50 text-neutral-300 px-8 py-4 rounded-2xl font-semibold text-lg border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
              <img src="/images/logo.svg" alt="Atlas Logo" className="w-full h-full" />
            </div>
            <div>
              <span className="font-bold text-lg text-neutral-100">Atlas</span>
              <span className="text-orange-500 font-bold text-lg">Labs</span>
              <span className="text-neutral-500 ml-1 text-sm">AI</span>
            </div>
          </Link>
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} AtlasLabs AI. Built to scale.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Home</Link>
            <Link href="/products" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Products</Link>
            <a href="/#contact" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
