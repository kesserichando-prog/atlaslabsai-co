'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconPhone({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconGlobe({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function IconZap({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconClipboard({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  );
}

function IconCpu({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  );
}

function IconCheck({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconRocket({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconTarget({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconClock({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconDollar({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function IconStar({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const tiers = [
  {
    id: 'growth',
    name: 'Growth Bundle',
    price: '~$500',
    period: '/mo',
    tagline: 'Website, automations, and lead capture — fully managed.',
    description: 'Everything a local business needs to look professional online and never miss a lead. We build it, we host it, we maintain it.',
    color: 'orange',
    includes: [
      'AI-built website with client portal',
      'Professional hosting + SSL',
      'Lead capture + CRM sync',
      'Email follow-up automation',
      'Online booking widget',
      'Review automation',
      'AI chat widget (free)',
      'Unlimited change requests',
    ],
    cta: 'Get Started',
    ctaHref: 'https://app.atlaslabsai.co/portal',
    featured: false,
  },
  {
    id: 'fullstack',
    name: 'Full Stack AI',
    price: '$1,000–$1,500',
    period: '/mo',
    tagline: 'Your entire customer pipeline — from first call to closed deal.',
    description: 'The complete done-for-you system. AI answers your phones, books appointments, runs your site, and follows up automatically. You just show up.',
    color: 'emerald',
    includes: [
      'Everything in Growth Bundle',
      'AI Receptionist — 24/7 call answering',
      'Appointment booking by AI',
      'Numbered service menu (press 1 for…)',
      'Time-sensitive promos & offers',
      'Hot lead alerts to your phone',
      'Call transcripts + recordings',
      'Monthly strategy call with your team',
    ],
    cta: 'Get the Full Stack',
    ctaHref: 'https://app.atlaslabsai.co/portal',
    featured: true,
  },
];

const products = [
  {
    icon: IconPhone,
    name: 'AI Receptionist',
    status: 'active' as const,
    tagline: '24/7 call answering with a human-sounding AI persona.',
    details: [
      'Answers every call instantly, day or night',
      'Presents a numbered service menu',
      'Books appointments directly on your calendar',
      'Runs time-limited promotions you control',
      'Sends hot-lead alerts straight to your phone',
    ],
    included: 'Full Stack AI',
    color: 'violet',
  },
  {
    icon: IconGlobe,
    name: 'Website Builder',
    status: 'active' as const,
    tagline: 'Professional AI-generated site — live in under 24 hours.',
    details: [
      'AI scrapes your existing site and builds a better one',
      'Multi-page support (Home, About, Services, Contact)',
      'Custom colors, fonts, logo, and photos',
      'Mobile-optimized + local SEO schema',
      'Client portal for minor edits + requests',
    ],
    included: 'Both Bundles',
    color: 'orange',
  },
  {
    icon: IconZap,
    name: 'Automations Suite',
    status: 'active' as const,
    tagline: 'Set-and-forget automations that run while you sleep.',
    details: [
      'Email follow-up sequences for new leads',
      'Automatic review requests after service',
      'Lead capture → CRM sync',
      'Online booking with Google Calendar sync',
      'AI chat widget on your site',
    ],
    included: 'Both Bundles',
    color: 'blue',
  },
];

const comparisonRows = [
  { label: 'Website + Hosting', diy: '$2,500–$10K setup + fees', agency: '$500–$3K/mo', atlas: 'Included in both tiers' },
  { label: 'AI Receptionist', diy: 'Hire a receptionist ($3K+/mo)', agency: 'Answering service $$$', atlas: 'Included — Full Stack AI' },
  { label: 'Email Automation', diy: 'Manual / $99+ SaaS', agency: 'Extra billable hours', atlas: 'Included in both tiers' },
  { label: 'Lead Capture + CRM', diy: 'Separate tool + setup', agency: 'Extra cost', atlas: 'Included in both tiers' },
  { label: 'Change Requests', diy: 'You do it yourself', agency: '$150–$300/hr', atlas: 'Unlimited — just text us' },
  { label: 'Setup Time', diy: '4–12 weeks', agency: '2–8 weeks', atlas: 'Under 24 hours' },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ScrollProgressBar />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">Done-for-you AI systems for local businesses</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-neutral-100">We Run the System.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400">
              You Run the Business.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
            AI that answers your calls, builds your website, captures every lead, and follows up automatically. One flat monthly fee. No tech skills required.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-neutral-500">
            {['No setup fees', 'No long-term contracts', 'Live in 24 hours', 'We handle everything'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-4xl font-bold text-neutral-100">Two Tiers. Both Fully Managed.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map(tier => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">The Stack</p>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neutral-100">Every Product,</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Explained
              </span>
            </h2>
            <p className="text-lg text-neutral-400">We build, configure, and maintain all of it — you just use it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductDetail key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-neutral-900/30 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">From Signup to Live in 24 Hours</h2>
            <p className="text-lg text-neutral-400">You answer a few questions. We do the rest.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            {[
              { step: '01', Icon: IconClipboard, title: 'Tell Us About Your Business', desc: 'Fill out a short onboarding form — takes under 10 minutes.' },
              { step: '02', Icon: IconCpu, title: 'AI Builds Everything', desc: 'We configure your site, automations, and AI receptionist using your info.' },
              { step: '03', Icon: IconCheck, title: 'Review & Approve', desc: 'Log in to your portal, review your setup, request any tweaks.' },
              { step: '04', Icon: IconRocket, title: 'Go Live', desc: 'Everything activates. Your AI starts answering calls and capturing leads.' },
            ].map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-neutral-900 border border-neutral-800 rounded-3xl mb-5 mx-auto relative hover:border-orange-500/30 transition-colors text-orange-400">
                  <s.Icon className="w-8 h-8" />
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {s.step}
                  </div>
                </div>
                <h3 className="text-base font-bold text-neutral-100 mb-2">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portal callout */}
      <section className="py-20 px-6 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-700 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none rounded-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Included with every plan</p>
                <h2 className="text-3xl font-bold text-neutral-100 mb-4">Your Client Dashboard</h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Log in anytime to see calls handled, leads captured, website traffic, and time saved. Submit change requests — our team executes them, usually same day.
                </p>
                <a
                  href="https://app.atlaslabsai.co/portal"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                >
                  Try Demo Portal →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Calls Handled', value: '847', Icon: IconPhone, color: 'text-violet-400' },
                  { label: 'Leads Captured', value: '124', Icon: IconTarget, color: 'text-blue-400' },
                  { label: 'Hours Saved', value: '68', Icon: IconClock, color: 'text-emerald-400' },
                  { label: 'Revenue Impact', value: '$18K', Icon: IconDollar, color: 'text-orange-400' },
                ].map(stat => (
                  <div key={stat.label} className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-5 text-center">
                    <div className={`flex justify-center mb-2 ${stat.color}`}><stat.Icon className="w-6 h-6" /></div>
                    <div className="text-2xl font-bold text-neutral-100 font-mono">{stat.value}</div>
                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Value Comparison</p>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neutral-100">Atlas vs.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Everything Else
              </span>
            </h2>
            <p className="text-lg text-neutral-400">Full agency results at a fraction of the cost.</p>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[600px] rounded-2xl border border-neutral-800 overflow-hidden">
              <div className="grid grid-cols-4 bg-neutral-900 border-b border-neutral-800">
                <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-neutral-400" />
                <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-neutral-400 text-center">DIY / SaaS</div>
                <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-neutral-400 text-center">Traditional Agency</div>
                <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-orange-400 text-center">Atlas Labs AI</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-4 border-b border-neutral-800/50 last:border-0 ${i % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900/40'}`}>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold text-neutral-300">{row.label}</div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm text-neutral-500 text-center">{row.diy}</div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm text-neutral-500 text-center">{row.agency}</div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold text-emerald-400 text-center flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                    {row.atlas}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-neutral-100">Ready to Stop</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Missing Calls?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mb-10">
            Our AI picks up where you leave off. 24/7, no holidays, no sick days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://app.atlaslabsai.co/portal"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-center hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Get Started Today →
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto bg-neutral-800/50 text-neutral-100 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-center border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              Talk to the Team
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
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} AtlasLabs AI. Built to scale.</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Home</Link>
            <Link href="/products" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Products</Link>
            <Link href="/website-builder" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">Website Builder</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TierCard({ tier }: { product?: unknown; tier: typeof tiers[number] }) {
  const isFeatured = tier.featured;
  return (
    <div className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
      isFeatured
        ? 'bg-gradient-to-br from-neutral-900 to-neutral-900/80 border-emerald-500/40 hover:border-emerald-500/70 shadow-xl shadow-emerald-500/10'
        : 'bg-gradient-to-br from-neutral-900 to-neutral-900/50 border-orange-500/25 hover:border-orange-500/50'
    }`}>
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
          <IconStar className="w-3.5 h-3.5 inline-block -mt-0.5" /> Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-neutral-100 mb-1">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className={`text-4xl font-bold font-mono ${isFeatured ? 'text-emerald-400' : 'text-orange-400'}`}>{tier.price}</span>
          <span className="text-neutral-500 text-base">{tier.period}</span>
        </div>
        <p className="text-neutral-300 font-medium leading-snug mb-2">{tier.tagline}</p>
        <p className="text-neutral-500 text-sm leading-relaxed">{tier.description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <span className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold ${isFeatured ? 'bg-emerald-500' : 'bg-orange-500'}`}>✓</span>
            <span className="text-neutral-300">{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={tier.ctaHref}
        className={`block w-full text-center text-white py-4 rounded-2xl font-bold text-base transition-all hover:shadow-lg hover:-translate-y-0.5 ${
          isFeatured
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-emerald-500/30'
            : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-orange-500/25'
        }`}
      >
        {tier.cta} →
      </a>
    </div>
  );
}

function ProductDetail({ product }: { product: typeof products[number] }) {
  const colorMap: Record<string, { dot: string; badge: string; icon: string }> = {
    violet: { dot: 'bg-violet-500', badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400', icon: 'text-violet-400' },
    orange: { dot: 'bg-orange-500', badge: 'bg-orange-500/10 border-orange-500/20 text-orange-400', icon: 'text-orange-400' },
    blue: { dot: 'bg-blue-500', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400', icon: 'text-blue-400' },
    emerald: { dot: 'bg-emerald-500', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', icon: 'text-emerald-400' },
  };
  const c = colorMap[product.color] || colorMap.orange;

  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center ${c.icon}`}><product.icon className="w-6 h-6" /></div>
        <span className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.dot}`} />
          Active
        </span>
      </div>
      <h3 className="text-lg font-bold text-neutral-100 mb-1">{product.name}</h3>
      <p className="text-neutral-400 text-sm mb-5 leading-snug">{product.tagline}</p>
      <ul className="space-y-2.5 mb-5">
        {product.details.map(d => (
          <li key={d} className="flex items-start gap-2.5 text-sm text-neutral-400">
            <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
            {d}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-neutral-800">
        <span className="text-xs text-neutral-500">Included in: </span>
        <span className="text-xs font-semibold text-neutral-300">{product.included}</span>
      </div>
    </div>
  );
}
