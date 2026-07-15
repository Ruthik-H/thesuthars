/**
 * ============================================================
 * THE SUTHARS — Animations
 * Scroll-triggered animations for the luxury interior design site
 * Uses IntersectionObserver & requestAnimationFrame for performance
 * ============================================================
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────
  // 1. SCROLL REVEAL SYSTEM
  // ──────────────────────────────────────────────

  /**
   * Observe all `.reveal` elements and add `.active` when they
   * enter the viewport. Each element only animates once.
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('active');
          observer.unobserve(entry.target); // animate only once
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px', // slight delay — triggers a bit later
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // ──────────────────────────────────────────────
  // 2. STAGGERED ANIMATIONS
  // ──────────────────────────────────────────────

  /**
   * For containers with `.stagger-children`, assign an incrementing
   * transition-delay (100ms per child) so children animate in sequence.
   */
  function initStaggeredAnimations() {
    const staggerContainers = document.querySelectorAll('.stagger-children');
    if (staggerContainers.length === 0) return;

    staggerContainers.forEach((container) => {
      const children = container.children;
      const INCREMENT_MS = 100; // delay step per child

      Array.from(children).forEach((child, index) => {
        child.style.transitionDelay = `${index * INCREMENT_MS}ms`;
      });
    });

    // Also observe stagger containers to trigger animations
    const staggerObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('active');

          // Add active class to each child for animation triggering
          Array.from(entry.target.children).forEach((child) => {
            child.classList.add('active');
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    staggerContainers.forEach((container) => staggerObserver.observe(container));
  }

  // ──────────────────────────────────────────────
  // 3. PARALLAX EFFECT
  // ──────────────────────────────────────────────

  /**
   * Move the hero background element at 50 % of scroll speed
   * to create a subtle parallax depth effect.
   * Disabled on mobile (≤ 768px) for performance.
   */
  function initParallax() {
    const heroBackground = document.querySelector(
      '.hero-bg, .hero-background, .hero .parallax-bg'
    );
    if (!heroBackground) return;

    let ticking = false;
    const PARALLAX_SPEED = 0.5;

    function updateParallax() {
      // Only apply on wider screens
      if (window.innerWidth <= 768) {
        heroBackground.style.transform = 'translateY(0)';
        ticking = false;
        return;
      }

      const scrolled = window.scrollY;
      heroBackground.style.transform = `translateY(${scrolled * PARALLAX_SPEED}px)`;
      ticking = false;
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Also recalculate on resize (viewport crossing 768px boundary)
    window.addEventListener('resize', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ──────────────────────────────────────────────
  // 4. COUNTER ANIMATION HELPER
  // ──────────────────────────────────────────────

  /**
   * easeOutQuad easing — fast start, decelerate towards end.
   * @param {number} t — normalised progress (0 → 1)
   * @returns {number}
   */
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  /**
   * Smoothly animate a numeric counter from 0 to `target`.
   * Exposed on `window` so main.js can call it from IntersectionObserver.
   *
   * @param {HTMLElement} element   — Element whose textContent will update
   * @param {number}      target   — Target number
   * @param {string}      suffix   — Text appended after the number ('+', '%', etc.)
   * @param {number}      duration — Animation duration in milliseconds
   */
  function animateCounter(element, target, suffix = '', duration = 2000) {
    if (!element || isNaN(target)) return;

    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * target);

      element.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Ensure final value is exact
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // Expose globally for main.js
  window.animateCounter = animateCounter;

  // ──────────────────────────────────────────────
  // 5. TEXT REVEAL ANIMATION
  // ──────────────────────────────────────────────

  /**
   * Elements with `.text-reveal` are progressively revealed using
   * a clip-path animation as they scroll into view.
   *
   * CSS should define the initial state:
   *   .text-reveal { clip-path: inset(0 100% 0 0); transition: clip-path 0.8s ease; }
   *   .text-reveal.active { clip-path: inset(0 0 0 0); }
   */
  function initTextReveal() {
    const textRevealElements = document.querySelectorAll('.text-reveal');
    if (textRevealElements.length === 0) return;

    const textRevealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    textRevealElements.forEach((el) => textRevealObserver.observe(el));
  }

  // ──────────────────────────────────────────────
  // BONUS: SMOOTH NUMBER FORMATTING
  // ──────────────────────────────────────────────

  /**
   * Optional: format large numbers with commas for readability
   * during counter animations. Call manually if needed.
   * @param {number} num
   * @returns {string}
   */
  window.formatNumber = function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // ──────────────────────────────────────────────
  // INITIALIZE ALL ANIMATIONS
  // ──────────────────────────────────────────────

  function init() {
    initScrollReveal();
    initStaggeredAnimations();
    initParallax();
    initTextReveal();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded (script may be deferred)
    init();
  }
})();
