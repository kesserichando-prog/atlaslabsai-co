/**
 * Navigation Component
 * Responsive navigation with mobile menu
 * Uses composition patterns and proper state management
 * Following react-patterns and accessibility best practices
 */

'use client';

import Link from 'next/link';
import { useScrollPosition, useMobileMenu } from '@/hooks';

export function Navigation() {
  const scrolled = useScrollPosition(50);
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#results', label: 'Results' },
    { href: '#contact', label: 'Get Started', isCTA: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow duration-300">
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
          {navLinks.map((link) =>
            link.isCTA ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-orange-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          data-nav-burger
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobileMenu}
          className="md:hidden w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-colors duration-200"
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
        className="md:hidden bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800 animate-slide-down"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`block text-base transition-colors duration-200 ${
                link.isCTA
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 text-center'
                  : 'text-neutral-300 hover:text-orange-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}