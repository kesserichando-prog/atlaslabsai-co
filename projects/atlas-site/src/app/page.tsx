import Link from "next/link";
import { CaseStudies } from "./CaseStudies";
import { Results } from "./Results";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <span className="font-semibold text-lg">Atlas Automation</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">Services</Link>
            <Link href="#case-studies" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">Case Studies</Link>
            <Link href="#results" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">Results</Link>
            <Link href="#contact" className="text-sm bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-400 text-sm font-medium">Automation-First Acquisition Machine</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We Build Systems That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Scale
            </span>
          </h1>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Scout. Solve. Prove. Publish. Sell. Atlas automates the entire client acquisition lifecycle—from finding problems to closing deals.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-colors">
              Start Automating
            </Link>
            <Link href="#case-studies" className="bg-neutral-800 text-neutral-100 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-700 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Grid Cards */}
      <section className="py-24 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm text-neutral-400">Automation Gaps Found</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3M</div>
              <div className="text-sm text-neutral-400">Revenue Unlocked</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">12,000+</div>
              <div className="text-sm text-neutral-400">Hours Saved</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-sm text-neutral-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Feature Cards */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              End-to-end automation systems that find clients, solve problems, and scale revenue—without the manual grind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon="🔍"
              title="Scout"
              description="Continuously searches the internet for automation gaps—businesses losing time, money, or opportunities to manual processes."
              features={["24/7 opportunity scanning", "Industry-specific targeting", "Pain point identification"]}
            />
            <ServiceCard
              icon="⚡"
              title="Solve"
              description="Builds custom automation systems that eliminate bottlenecks, reduce manual work, and unlock hidden revenue."
              features={["Custom workflow automation", "Integration development", "Process optimization"]}
            />
            <ServiceCard
              icon="📈"
              title="Scale"
              description="Documents results, publishes case studies, and creates a flywheel of trust that attracts more opportunities."
              features={["Auto-published case studies", "Proven ROI metrics", "Recurring revenue systems"]}
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-neutral-400">Real results from real automation. Updated live.</p>
          </div>
          <CaseStudies />
        </div>
      </section>

      {/* Results Dashboard */}
      <section id="results" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Live Results</h2>
            <p className="text-neutral-400">Real-time metrics from active systems</p>
          </div>
          <Results />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate?</h2>
            <p className="text-neutral-400">
              Tell us about your business. Atlas will analyze your processes and identify automation opportunities.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-blue-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1">What's your biggest pain point?</label>
              <textarea 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-blue-500 h-32"
                placeholder="Describe the manual processes slowing you down..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-400 transition-colors"
            >
              Find My Automation Gap
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Atlas Automation. Built to scale.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }: { 
  icon: string; 
  title: string; 
  description: string; 
  features: string[] 
}) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-neutral-400 flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}