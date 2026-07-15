import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#home" className="footer-logo">
              <img 
                src="/assets/logo/new logo.png" 
                alt="The Suthar's" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }} 
              />
              <span className="footer-logo-fallback" style={{ display: 'none' }}>The Suthar's</span>
            </a>
            <p className="footer-about">
              Premium interior design and execution. Generations of Rajasthan heritage craftsmanship bringing timeless elegance to Bangalore since 1985.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Residential Interiors</a></li>
              <li><a href="#services">Commercial Spaces</a></li>
              <li><a href="#services">Modular Kitchens</a></li>
              <li><a href="#services">Wardrobes & Furniture</a></li>
              <li><a href="#services">Complete Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links">
              <li>184/2 KANNUR VILLAGE BIDRAHALLI HOBLI<br />BENGALURU URBAN<br />562149</li>
              <li><a href="tel:+919008088001">+91 9008088001</a></li>
              <li><a href="tel:+918880276624">+91 8880276624</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&to=thesutharsinterior@gmail.com" target="_blank" rel="noopener noreferrer">thesutharsinterior@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <p style={{ fontFamily: 'var(--ff-sub)', fontSize: '1rem', color: 'var(--text-light)', fontWeight: '500', letterSpacing: '1px', textAlign: 'center' }}>
              Follow us on Instagram and Facebook <br />
              <span style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>@The_Suthar's_interior</span>
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/The_Suthar's_interior" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com/The_Suthar's_interior" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.19-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          <p className="copyright" style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} The Suthar's. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
