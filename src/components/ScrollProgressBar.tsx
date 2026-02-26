/**
 * Scroll Progress Bar Component
 * Animated header transition, scroll progress, sticky navigation
 * Uses custom hooks for proper state management
 * Following react-patterns and scroll-driven-animation skills
 */

'use client';

import { useScrollPosition } from '@/hooks';
import { useState, useEffect } from 'react';

export function ScrollProgressBar() {
  const scrolled = useScrollPosition();

  // Calculate scroll progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progressValue)));
    };

    // Throttled for performance (60fps)
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress(); // Initial value

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      data-scroll-progress
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 z-[51] transition-all duration-150 ease-out origin-left scale-x-0"
      style={{
        width: `${progress}%`,
        transform: `scaleX(${scrolled ? progress / 100 : 0})`
      }}
    />
  );
}