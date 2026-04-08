'use client';

import Link from 'next/link';

const CLIENT_PORTAL = 'https://app.atlaslabsai.co/portal';
const TEAM_BACKEND = 'https://app.atlaslabsai.co/login';

export default function LoginChoicePage() {
  return (
    <main
      className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 60%), #09090b' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-16 group">
        <div className="relative">
          <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-orange-500/20">
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

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-neutral-100 mb-3">Welcome back</h1>
        <p className="text-neutral-400">Choose how you'd like to log in</p>
      </div>

      {/* Choice cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">

        {/* Client card */}
        <a
          href={CLIENT_PORTAL}
          className="group relative flex flex-col bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent opacity-0 group-hover:opacity-[0.04] transition-opacity rounded-3xl pointer-events-none" />
          <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            🔑
          </div>
          <h2 className="text-xl font-bold text-neutral-100 mb-2">I'm a Client</h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            Access your website dashboard, AI receptionist controls, and service stats. Enter your auth key to continue.
          </p>
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Enter Client Portal
              <span className="text-lg">→</span>
            </div>
          </div>
        </a>

        {/* Team card */}
        <a
          href={TEAM_BACKEND}
          className="group relative flex flex-col bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-500 to-transparent opacity-0 group-hover:opacity-[0.04] transition-opacity rounded-3xl pointer-events-none" />
          <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            👥
          </div>
          <h2 className="text-xl font-bold text-neutral-100 mb-2">I'm a Team Member</h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            Atlas Labs staff only. Sign in or request access — all new accounts require admin approval before activation.
          </p>
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 text-neutral-400 font-semibold text-sm group-hover:text-neutral-200 group-hover:gap-3 transition-all">
              Team Login
              <span className="text-lg">→</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 text-xs text-neutral-600 font-medium border border-neutral-800 rounded-full px-2 py-0.5">
            Staff only
          </div>
        </a>

      </div>

      {/* Bottom links */}
      <div className="mt-12 flex items-center gap-6 text-sm text-neutral-600">
        <Link href="/" className="hover:text-neutral-400 transition-colors">← Back to home</Link>
        <span>·</span>
        <a href="/#contact" className="hover:text-neutral-400 transition-colors">Contact support</a>
        <span>·</span>
        <a href={CLIENT_PORTAL} className="hover:text-orange-400 transition-colors">Try free demo</a>
      </div>
    </main>
  );
}
