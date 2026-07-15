/**
 * ============================================================
 * THE SUTHARS — Main JavaScript
 * Core functionality for the luxury interior design website
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ──────────────────────────────────────────────
  // 1. LOADING SCREEN
  // ──────────────────────────────────────────────
  const loader = document.getElementById('loader');

  window.addEventListener('load', () => {
    if (!loader) return;

    setTimeout(() => {
      loader.classList.add('loader-hidden');

      // Remove from DOM flow after CSS transition finishes
      loader.addEventListener('transitionend', () => {
        loader.style.display = 'none';
      }, { once: true });
    }, 1500);
  });

  // ──────────────────────────────────────────────
  // 2. NAVBAR SCROLL BEHAVIOR
  // ──────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const NAVBAR_SCROLL_THRESHOLD = 80;
  const NAVBAR_HEIGHT = 80; // px offset for smooth scrolling

  function handleNavbarScroll() {
    if (!navbar) return;

    if (window.scrollY > NAVBAR_SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ──────────────────────────────────────────────
  // 3. ACTIVE NAV LINK HIGHLIGHTING
  // ──────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  /**
   * Determine which section is currently in the viewport
   * and highlight the corresponding nav link.
   */
  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + NAVBAR_HEIGHT + 100; // offset for accuracy

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Consolidated scroll listener (navbar + active link)
  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    highlightActiveNavLink();
    handleScrollTopVisibility();
    handleStickyCta();
  }, { passive: true });

  // ──────────────────────────────────────────────
  // 4. MOBILE NAVIGATION
  // ──────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  /** Toggle mobile navigation open/closed */
  function toggleMobileNav() {
    if (!navLinksContainer) return;
    navLinksContainer.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  }

  /** Close mobile navigation */
  function closeMobileNav() {
    if (!navLinksContainer) return;
    navLinksContainer.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Close mobile nav when a link inside it is clicked
  if (navLinksContainer) {
    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // Close on clicking outside the nav
  document.addEventListener('click', (e) => {
    if (
      navLinksContainer &&
      navLinksContainer.classList.contains('active') &&
      !navLinksContainer.contains(e.target) &&
      e.target !== hamburger
    ) {
      closeMobileNav();
    }
  });

  // ──────────────────────────────────────────────
  // 5. SMOOTH SCROLLING
  // ──────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return; // skip bare hashes

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      closeMobileNav();

      const targetPosition = targetEl.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });

  // ──────────────────────────────────────────────
  // 6. ANIMATED COUNTERS (IntersectionObserver)
  // ──────────────────────────────────────────────
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';

          // Use the shared animateCounter from animations.js if available,
          // otherwise fall back to a local implementation
          if (typeof window.animateCounter === 'function') {
            window.animateCounter(el, target, suffix, 2000);
          } else {
            animateCounterLocal(el, target, suffix, 2000);
          }

          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((num) => counterObserver.observe(num));
  }

  /**
   * Local fallback counter animation with easeOutQuad easing.
   * @param {HTMLElement} el       - Element to update
   * @param {number}      target   - Target number
   * @param {string}      suffix   - Text suffix ('+', '%', etc.)
   * @param {number}      duration - Animation duration in ms
   */
  function animateCounterLocal(el, target, suffix, duration) {
    const start = performance.now();

    function easeOutQuad(t) {
      return t * (2 - t);
    }

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const current = Math.floor(easedProgress * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // ──────────────────────────────────────────────
  // 7. SCROLL-TO-TOP BUTTON
  // ──────────────────────────────────────────────
  const scrollTopBtn = document.getElementById('scrollTop');
  const SCROLL_TOP_THRESHOLD = 500;

  function handleScrollTopVisibility() {
    if (!scrollTopBtn) return;

    if (window.scrollY > SCROLL_TOP_THRESHOLD) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ──────────────────────────────────────────────
  // 8. STICKY CTA
  // ──────────────────────────────────────────────
  const stickyCta = document.getElementById('stickyCta');
  const stickyCtaClose = stickyCta ? stickyCta.querySelector('.sticky-cta-close') : null;
  let stickyCtaDismissed = false;

  function handleStickyCta() {
    if (!stickyCta || stickyCtaDismissed) return;

    const heroHeight = window.innerHeight; // 100vh
    const footer = document.querySelector('footer');
    const footerTop = footer ? footer.offsetTop : Infinity;
    const scrollPos = window.scrollY + window.innerHeight;

    // Show after hero, hide near footer
    if (window.scrollY > heroHeight && scrollPos < footerTop - 100) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  }

  if (stickyCtaClose) {
    stickyCtaClose.addEventListener('click', () => {
      stickyCta.classList.remove('visible');
      stickyCtaDismissed = true; // stays dismissed for the session
    });
  }

  // ──────────────────────────────────────────────
  // 9. WHATSAPP & CALL BUTTONS
  // ──────────────────────────────────────────────
  const whatsappBtn = document.querySelector('.whatsapp-btn, #whatsappBtn');
  const callBtn = document.querySelector('.call-btn, #callBtn');

  if (whatsappBtn && !whatsappBtn.getAttribute('href')) {
    whatsappBtn.setAttribute('href', 'https://wa.me/PHONE_PLACEHOLDER');
    whatsappBtn.setAttribute('target', '_blank');
    whatsappBtn.setAttribute('rel', 'noopener noreferrer');
  }

  if (callBtn && !callBtn.getAttribute('href')) {
    callBtn.setAttribute('href', 'tel:PHONE_PLACEHOLDER');
  }

  // ──────────────────────────────────────────────
  // 10. CONTACT FORM VALIDATION
  // ──────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        showSuccessMessage();
        contactForm.reset();
        clearAllErrors();
      }
    });

    // Live validation on blur for better UX
    contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        // Clear error as user types
        const errorEl = field.parentElement.querySelector('.error-message');
        if (errorEl) errorEl.remove();
        field.classList.remove('error');
      });
    });
  }

  /**
   * Validate the entire contact form.
   * @returns {boolean} True if all fields pass validation.
   */
  function validateForm() {
    let isValid = true;
    clearAllErrors();

    const name = contactForm.querySelector('#name, [name="name"]');
    const phone = contactForm.querySelector('#phone, [name="phone"]');
    const email = contactForm.querySelector('#email, [name="email"]');
    const projectType = contactForm.querySelector('#projectType, [name="projectType"]');
    const message = contactForm.querySelector('#message, [name="message"]');

    // Name validation
    if (name) {
      if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
      } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters');
        isValid = false;
      }
    }

    // Phone validation
    if (phone) {
      const phoneClean = phone.value.replace(/\D/g, '');
      if (!phone.value.trim()) {
        showError(phone, 'Phone number is required');
        isValid = false;
      } else if (phoneClean.length !== 10) {
        showError(phone, 'Please enter a valid 10-digit phone number');
        isValid = false;
      }
    }

    // Email validation
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      }
    }

    // Project type validation
    if (projectType) {
      if (!projectType.value) {
        showError(projectType, 'Please select a project type');
        isValid = false;
      }
    }

    // Message validation
    if (message) {
      if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
      }
    }

    return isValid;
  }

  /**
   * Validate a single field on blur.
   * @param {HTMLElement} field - The form field to validate.
   */
  function validateField(field) {
    const name = field.getAttribute('name') || field.id;
    const value = field.value.trim();

    // Remove existing error first
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    field.classList.remove('error');

    switch (name) {
      case 'name':
        if (!value) showError(field, 'Name is required');
        else if (value.length < 2) showError(field, 'Name must be at least 2 characters');
        break;
      case 'phone': {
        const digits = value.replace(/\D/g, '');
        if (!value) showError(field, 'Phone number is required');
        else if (digits.length !== 10) showError(field, 'Please enter a valid 10-digit phone number');
        break;
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) showError(field, 'Email is required');
        else if (!emailRegex.test(value)) showError(field, 'Please enter a valid email address');
        break;
      }
      case 'projectType':
        if (!value) showError(field, 'Please select a project type');
        break;
      case 'message':
        if (!value) showError(field, 'Message is required');
        else if (value.length < 10) showError(field, 'Message must be at least 10 characters');
        break;
    }
  }

  /**
   * Display an inline error message below a form field.
   * @param {HTMLElement} field   - The field with an error.
   * @param {string}      message - Error message text.
   */
  function showError(field, message) {
    field.classList.add('error');

    // Avoid duplicate error messages
    const existing = field.parentElement.querySelector('.error-message');
    if (existing) existing.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      color: #e74c3c;
      font-size: 0.8rem;
      margin-top: 4px;
      font-weight: 500;
      animation: fadeIn 0.3s ease;
    `;
    field.parentElement.appendChild(errorDiv);
  }

  /** Remove all error messages from the form. */
  function clearAllErrors() {
    if (!contactForm) return;
    contactForm.querySelectorAll('.error-message').forEach((el) => el.remove());
    contactForm.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
  }

  /** Show a success message after valid form submission. */
  function showSuccessMessage() {
    // Remove any existing success messages
    const existing = document.querySelector('.form-success');
    if (existing) existing.remove();

    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border: 1px solid #b8860b;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
        margin-top: 20px;
        animation: fadeInUp 0.5s ease;
      ">
        <div style="
          width: 60px; height: 60px;
          background: linear-gradient(135deg, #b8860b, #d4a843);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 15px;
          font-size: 28px;
        ">✓</div>
        <h3 style="
          color: #b8860b;
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          margin-bottom: 8px;
        ">Thank You!</h3>
        <p style="
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.6;
        ">Your message has been received. Our design team will reach out to you within 24 hours.</p>
      </div>
    `;

    contactForm.parentElement.appendChild(successDiv);

    // Auto-remove after 6 seconds
    setTimeout(() => {
      successDiv.style.opacity = '0';
      successDiv.style.transition = 'opacity 0.5s ease';
      setTimeout(() => successDiv.remove(), 500);
    }, 6000);
  }

  // ──────────────────────────────────────────────
  // 11. INITIALIZE — Run on first load
  // ──────────────────────────────────────────────
  handleNavbarScroll();
  highlightActiveNavLink();
  handleScrollTopVisibility();
  handleStickyCta();
});
