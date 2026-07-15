import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMobileMenu}>
          <img src="/assets/logo/new logo.png" alt="The Suthar's" className="nav-logo-img" />
        </a>
        <ul id="navLinks" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#team" className="nav-link" onClick={closeMobileMenu}>Team</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Testimonials</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
          <li><a href="#contact" className="nav-link nav-cta-btn" onClick={closeMobileMenu}>Get a Quote</a></li>
        </ul>
        <button
          id="hamburger"
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
