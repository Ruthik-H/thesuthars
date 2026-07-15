/**
 * ============================================================
 * THE SUTHARS — Gallery
 * Project gallery with filtering, lightbox, and lazy loading
 * ============================================================
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────
  // 1. CATEGORY FILTERING
  // ──────────────────────────────────────────────

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card');
  const FILTER_TRANSITION_MS = 300;

  /**
   * Filter project cards by category.
   * Filtered-out cards fade to opacity 0 / scale 0.8, then hide.
   * Filtered-in cards show, then fade to opacity 1 / scale 1.
   *
   * @param {string} category — 'all' or a specific category slug
   */
  function filterProjects(category) {
    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const shouldShow = category === 'all' || cardCategory === category;

      if (shouldShow) {
        // Show: set display first, then animate in
        card.style.display = '';
        // Force reflow so the browser registers the display change
        void card.offsetHeight;

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        // Hide: animate out, then set display none
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        setTimeout(() => {
          card.style.display = 'none';
        }, FILTER_TRANSITION_MS);
      }
    });
  }

  // Bind filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state on buttons
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      filterProjects(category);
    });
  });

  // Apply initial CSS transition to cards
  projectCards.forEach((card) => {
    card.style.transition = `opacity ${FILTER_TRANSITION_MS}ms ease, transform ${FILTER_TRANSITION_MS}ms ease`;
  });

  // ──────────────────────────────────────────────
  // 2. LIGHTBOX GALLERY
  // ──────────────────────────────────────────────

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image, #lightboxImage, img') : null;
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption, .lightbox-info') : null;

  let visibleImages = [];  // array of currently filtered (visible) image data
  let currentIndex = 0;

  /**
   * Build the array of currently visible (filtered) images for navigation.
   * @returns {Array<{src: string, title: string, category: string}>}
   */
  function getVisibleImages() {
    const images = [];

    projectCards.forEach((card) => {
      // Skip cards that are hidden (filtered out)
      if (card.style.display === 'none') return;

      const img = card.querySelector('img');
      if (!img) return;

      images.push({
        src: img.getAttribute('src') || img.getAttribute('data-src') || '',
        title: card.getAttribute('data-title') || img.getAttribute('alt') || 'Project',
        category: card.getAttribute('data-category') || '',
      });
    });

    return images;
  }

  /**
   * Open the lightbox and display the image at `index`.
   * @param {number} index — Index in the `visibleImages` array
   */
  function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;

    visibleImages = getVisibleImages();
    if (visibleImages.length === 0) return;

    currentIndex = Math.max(0, Math.min(index, visibleImages.length - 1));
    showCurrentImage();

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // lock scroll
  }

  /** Close the lightbox. */
  function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // unlock scroll
  }

  /** Display the current image in the lightbox. */
  function showCurrentImage() {
    if (!lightboxImage || visibleImages.length === 0) return;

    const imageData = visibleImages[currentIndex];

    // Fade out, swap, fade in
    lightboxImage.style.opacity = '0';

    setTimeout(() => {
      lightboxImage.setAttribute('src', imageData.src);
      lightboxImage.setAttribute('alt', imageData.title);

      // Update caption
      if (lightboxCaption) {
        lightboxCaption.innerHTML = `
          <span class="lightbox-category">${capitalize(imageData.category)}</span>
          <span class="lightbox-title">${imageData.title}</span>
        `;
      }

      lightboxImage.style.opacity = '1';
    }, 200);
  }

  /** Navigate to the previous image (wraps around). */
  function prevImage() {
    if (visibleImages.length === 0) return;
    currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    showCurrentImage();
  }

  /** Navigate to the next image (wraps around). */
  function nextImage() {
    if (visibleImages.length === 0) return;
    currentIndex = (currentIndex + 1) % visibleImages.length;
    showCurrentImage();
  }

  /**
   * Capitalize the first letter of a string.
   * @param {string} str
   * @returns {string}
   */
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  }

  // ──────────────────────────────────────────────
  // 3. LIGHTBOX CONTROLS & EVENT LISTENERS
  // ──────────────────────────────────────────────

  // Open lightbox on card click
  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      // Find the index among currently *visible* cards
      const visibleCards = Array.from(projectCards).filter(
        (c) => c.style.display !== 'none'
      );
      const visibleIndex = visibleCards.indexOf(card);
      openLightbox(visibleIndex !== -1 ? visibleIndex : 0);
    });

    // Pointer cursor for cards
    card.style.cursor = 'pointer';
  });

  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Previous / Next buttons
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      prevImage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      nextImage();
    });
  }

  // Click on overlay (outside the image) to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      // Close if the click target is the overlay itself (not children)
      if (e.target === lightbox || e.target.classList.contains('lightbox-overlay')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
    }
  });

  // ──────────────────────────────────────────────
  // 4. LAZY LOADING
  // ──────────────────────────────────────────────

  /**
   * Lazy-load images that have a `data-src` attribute.
   * When the image scrolls near the viewport (200px margin),
   * swap `data-src` → `src` and add `.loaded` for a CSS fade-in.
   */
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length === 0) return;

    // Use IntersectionObserver if available
    if ('IntersectionObserver' in window) {
      const lazyObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const img = entry.target;
            const src = img.getAttribute('data-src');

            if (src) {
              img.setAttribute('src', src);
              img.removeAttribute('data-src');

              // Wait for load then reveal
              img.addEventListener(
                'load',
                () => {
                  img.classList.add('loaded');
                },
                { once: true }
              );

              // Handle already-cached images
              if (img.complete) {
                img.classList.add('loaded');
              }
            }

            observer.unobserve(img);
          });
        },
        {
          rootMargin: '200px', // start loading 200px before visible
          threshold: 0,
        }
      );

      lazyImages.forEach((img) => lazyObserver.observe(img));
    } else {
      // Fallback: load all images immediately
      lazyImages.forEach((img) => {
        const src = img.getAttribute('data-src');
        if (src) {
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
          img.classList.add('loaded');
        }
      });
    }
  }

  // ──────────────────────────────────────────────
  // INITIALIZE
  // ──────────────────────────────────────────────

  function init() {
    initLazyLoading();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
