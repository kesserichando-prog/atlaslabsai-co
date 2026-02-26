/**
 * AtlasLabs AI - Vanilla JavaScript Patterns
 * Enhances website with scroll reveals, smooth scroll, and interactions
 */

// Pattern 1: IntersectionObserver - Scroll Reveals
function initScrollReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  // Observe all sections with reveal class
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// Pattern 2: Smooth Scroll with Header Offset
function initSmoothScroll() {
  const header = document.querySelector('nav');
  const headerHeight = header?.offsetHeight ?? 80;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const offset = targetTop - headerHeight - 24; // 24px breathing room

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });

      // Update URL without triggering scroll
      history.pushState(null, '', href);

      // Close mobile menu if open
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      if (mobileMenu && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });
}

// Pattern 3: Mobile Navigation
function initMobileNav() {
  const burger = document.querySelector('[data-nav-burger]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!burger || !menu) return;

  const getFocusable = () => Array.from(
    menu.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')
  ).filter(el => !el.disabled);

  function open() {
    menu.classList.add('is-open');
    menu.removeAttribute('hidden');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const firstFocusable = getFocusable()[0];
    firstFocusable?.focus();
  }

  function close() {
    menu.classList.remove('is-open');
    menu.setAttribute('hidden', '');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger.focus();
  }

  // Focus trap
  menu.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  burger.addEventListener('click', () => {
    menu.classList.contains('is-open') ? close() : open();
  });

  // Close on escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) close();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target) && menu.classList.contains('is-open')) {
      close();
    }
  });
}

// Pattern 4: Event Delegation - Card Hover Effects
function initCardInteractions() {
  document.querySelectorAll('[data-card-grid]')?.forEach(grid => {
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-card]');
      if (!card) return;
      // Add visual feedback or navigation
      const link = card.querySelector('a');
      if (link) link.click();
    });
  });
}

// Pattern 5: Throttle - Scroll Performance
function initScrollProgress() {
  const progressBar = document.querySelector('[data-scroll-progress]');
  if (!progressBar) return;

  let ticking = false;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${progress}%`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}

// Pattern 6: Copy to Clipboard
function initCopyToClipboard() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy || btn.closest('[data-copy-source]')?.textContent;
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);

        const label = btn.querySelector('[data-copy-label]');
        const originalText = label?.textContent;

        if (label && originalText) {
          label.textContent = 'Copied!';
          setTimeout(() => { label.textContent = originalText; }, 2000);
        }
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    });
  });
}

// Initialize all patterns when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollReveals();
      initSmoothScroll();
      initMobileNav();
      initCardInteractions();
      initScrollProgress();
      initCopyToClipboard();
    });
  } else {
    // DOM already ready
    initScrollReveals();
    initSmoothScroll();
    initMobileNav();
    initCardInteractions();
    initScrollProgress();
    initCopyToClipboard();
  }
}

// Export functions for manual control if needed
export {
  initScrollReveals,
  initSmoothScroll,
  initMobileNav,
  initCardInteractions,
  initScrollProgress,
  initCopyToClipboard
};