import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Client Demos | Atlas Lab AI",
  description: "Browse AI automation demos built for real prospects. Each demo is a tailored flow map showing exactly how Atlas would automate their business.",
};

const demos = [
  {
    company: "Trulieve",
    industry: "Cannabis",
    icon: "🌿",
    trustScore: 95,
    description: "Automated patient intake — 40-min manual process reduced to 8 minutes",
    slug: "trulieve-flow",
    badge: "Excellent",
  },
  {
    company: "JARS Cannabis",
    industry: "Cannabis",
    icon: "🌿",
    trustScore: 90,
    description: "Compliance monitoring + SMS alerts across 55+ locations",
    slug: "jars-cannabis-flow",
    badge: "Excellent",
  },
  {
    company: "Story McDowell",
    industry: "Dispensary",
    icon: "🏪",
    trustScore: 88,
    description: "AI loyalty flow detecting purchase patterns for repeat customer revenue",
    slug: "story-mcdowell-flow",
    badge: "High",
  },
  {
    company: "Apex Medical Billing",
    industry: "Medical",
    icon: "🏥",
    trustScore: 86,
    description: "Automated claim validation and denial follow-up pipeline",
    slug: "apex-medical-billing-flow",
    badge: "High",
  },
  {
    company: "Test Automation Corp",
    industry: "Technology",
    icon: "💻",
    trustScore: 85,
    description: "End-to-end QA pipeline automation eliminating manual test runs",
    slug: "test-automation-corp-flow",
    badge: "High",
  },
  {
    company: "Elliott 24-7",
    industry: "Services",
    icon: "🔧",
    trustScore: 82,
    description: "24/7 dispatch routing and job assignment automation",
    slug: "elliott-247-flow",
    badge: "High",
  },
  {
    company: "Arizona Same Day Trucking",
    industry: "Logistics",
    icon: "🚛",
    trustScore: 73,
    description: "Real-time load matching and driver communication automation",
    slug: "arizona-same-day-trucking-flow",
    badge: "Good",
  },
  {
    company: "South Mountain Internal Medicine",
    industry: "Medical",
    icon: "🏥",
    trustScore: 72,
    description: "Patient appointment reminders and follow-up care automation",
    slug: "south-mountain-internal-medicine-flow",
    badge: "Good",
  },
  {
    company: "AZ Insurance Team",
    industry: "Insurance",
    icon: "🛡️",
    trustScore: 71,
    description: "Lead nurture sequences and renewal reminder automation",
    slug: "az-insurance-team-flow",
    badge: "Good",
  },
];

function getTrustScoreColor(score: number) {
  if (score >= 90) return { bar: "bg-emerald-500", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
  if (score >= 80) return { bar: "bg-orange-500", text: "text-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20" };
  return { bar: "bg-amber-500", text: "text-amber-400", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20" };
}

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <img src="/images/logo.svg" alt="Atlas Logo" className="w-full h-full" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-lg text-neutral-100">Atlas</span>
              <span className="text-orange-500 font-bold text-lg">Lab</span>
              <span className="text-neutral-500 ml-1 text-sm font-medium">AI</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#case-studies" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors hidden md:block">
              Case Studies
            </Link>
            <Link
              href="https://cal.com/atlaslab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">Live Prospect Demos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-neutral-100">Real Automations</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-[length:200%_auto] animate-gradient-x">
              Built for Real Businesses
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Each demo is a custom-built flow map showing exactly how Atlas would automate that business. Trust Scores reflect automation opportunity strength.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-10 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="text-2xl font-bold text-neutral-100">{demos.length}</span>
              <span>demos live</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Updated continuously</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="text-emerald-400 font-semibold">
                {demos.filter(d => d.trustScore >= 90).length} Excellent
              </span>
              <span>·</span>
              <span className="text-orange-400 font-semibold">
                {demos.filter(d => d.trustScore >= 80 && d.trustScore < 90).length} High
              </span>
              <span>·</span>
              <span className="text-amber-400 font-semibold">
                {demos.filter(d => d.trustScore < 80).length} Good
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, i) => {
              const colors = getTrustScoreColor(demo.trustScore);
              return (
                <div
                  key={demo.slug}
                  className="group bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-3xl p-6 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 75}ms` }}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{demo.icon}</div>
                      <div>
                        <div className="font-semibold text-neutral-100 group-hover:text-orange-400 transition-colors">
                          {demo.company}
                        </div>
                        <div className="text-xs text-neutral-500">{demo.industry}</div>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                      {demo.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {demo.description}
                  </p>

                  {/* Trust Score */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-500 font-medium">Trust Score</span>
                      <span className={`text-sm font-bold font-mono ${colors.text}`}>
                        {demo.trustScore}
                        <span className="text-neutral-600 font-normal">/100</span>
                      </span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors.bar} rounded-full transition-all duration-700`}
                        style={{ width: `${demo.trustScore}%` }}
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`/demos/demo-${demo.slug}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/40 text-neutral-300 hover:text-orange-400 px-4 py-3 rounded-xl text-sm font-medium transition-all group/btn"
                  >
                    <span>View Demo Flow</span>
                    <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-neutral-100">Want a demo built</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  for your business?
                </span>
              </h2>
              <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                Atlas scouts your business, identifies automation gaps, and builds a custom flow map — before you commit to anything.
              </p>
              <Link
                href="https://cal.com/atlaslab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
              >
                Schedule a Call
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="text-sm text-neutral-500 hover:text-orange-400 transition-colors">
            ← Back to Atlas Lab AI
          </Link>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Atlas Lab AI
          </div>
        </div>
      </footer>
    </main>
  );
}
