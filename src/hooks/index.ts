/**
 * Custom Hooks for AtlasLabs AI Website
 * Extracted reusable patterns following react-patterns skill
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for tracking scroll position
 * Extracted from inline useEffect in page.tsx
 * Throttled for performance (60fps = ~16.67ms)
 */
export function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastTime = 0;
    const scrollInterval = 1000 / 60; // 60fps

    function handleScroll() {
      const now = Date.now();
      if (now - lastTime >= scrollInterval) {
        setScrolled(window.scrollY > threshold);
        lastTime = now;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Hook for mobile menu state management
 * Encapsulates toggle logic and keyboard/escape handling
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  // Close on escape key (better UX)
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, close]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return { isOpen, toggle, close, open };
}

/**
 * Hook for intersection observer (better than scroll listeners)
 * Used for scroll reveal animations
 */
export function useIntersectionObserver(
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useState<Element | null>(null)[0];

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef, threshold, rootMargin]);

  return { isVisible, elementRef };
}

/**
 * Hook for form state management
 * Generic reusable form handler
 */
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(values);
      setValues(initialValues);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }, [values, initialValues, onSubmit]);

  return { values, handleChange, handleSubmit, isSubmitting, error };
}