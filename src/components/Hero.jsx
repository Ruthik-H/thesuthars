import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      let ticking = false;
      if (window.innerWidth > 768) {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
              heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="/assets/photos/newuse.webp"
          alt="Luxury interior design by THE SUTHAR'S"
          className="hero-bg-img"
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">


        <h1 className="hero-title reveal fadeInUp reveal-delay-1" style={{ marginBottom: '1rem', marginTop: '2rem' }}>
          Crafting <span className="text-gold">Timeless</span><br />Interiors Since 1985
        </h1>

        <div className="reveal fadeInUp reveal-delay-2" style={{ marginBottom: '2rem' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--gold)', fontSize: 'clamp(1rem, 3.5vw, 1.3rem)', fontFamily: 'var(--ff-heading)', letterSpacing: '1px' }}>
            "Karigar's Touch Crafted Through Generations"
          </p>
        </div>

        <p className="hero-subtitle reveal fadeInUp reveal-delay-2">
          Generations of craftsmanship from Rajasthan, creating premium interiors that combine heritage, functionality, and modern elegance.
        </p>

        <div className="hero-buttons reveal fadeInUp reveal-delay-3">
          <a href="#contact" className="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Get Free Consultation
          </a>
          <a href="#projects" className="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            View Our Projects
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="7 13 12 18 17 13"/>
            <line x1="12" y1="6" x2="12" y2="18"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
