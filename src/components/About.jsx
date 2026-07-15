import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal reveal-left">
            <div className="about-img-wrapper">
              <img src="/assets/gallery/hero-bg.png" alt="The Suthar's craftsmanship heritage" loading="lazy" />
              <div className="about-img-accent"></div>
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">39+</span>
              <span className="experience-text">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-content reveal reveal-right">
            <span className="section-label">Our Legacy</span>
            <h2 className="section-title text-left">Our Story</h2>
            <div className="title-line left"></div>
            <p className="about-lead">
              Rooted in the rich artisan traditions of Rajasthan, The Suthar's represent a legacy of master craftsmanship that spans generations. As traditional <em>Karigars</em> — skilled artisans whose hands have shaped wood and stone into works of lasting beauty — our family has carried forward an ancient art form, perfecting it with each generation.
            </p>
            <p className="about-text">
              Since 1985, we have proudly served Bangalore, transforming homes, offices, and commercial spaces into timeless sanctuaries of elegance. Every project we undertake is more than interior work — it is a testament to our heritage, a canvas where traditional Rajasthani woodworking techniques meet contemporary design sensibilities.
            </p>
            <p className="about-text">
              We believe that true craftsmanship cannot be rushed. Every joint, every finish, every detail is executed with the precision and patience that has been passed down through our family for decades. This is what sets us apart — not just the interiors we create, but the soul we pour into every space.
            </p>
            <div className="about-values">
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Heritage</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <span>Trust</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>Excellence</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Experience</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <span>Precision</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Quality</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>Client Satisfaction</span>
              </div>
              <div className="value-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <span>Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
