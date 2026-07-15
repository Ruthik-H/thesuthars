import React from 'react';

const CompanyProfile = () => {
  return (
    <section id="company-profile" className="section section-alt">
      <div className="container">
        <span className="section-label center">Who We Are</span>
        <h2 className="section-title">Company Profile</h2>
        <div className="title-line"></div>

        <div className="profile-content reveal fadeInUp">
          <div className="profile-quote">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <blockquote>Simplicity with style — delivering exceptional quality through every stage of the project.</blockquote>
          </div>

          <div className="profile-text">
            <p>The Suthars, operating under <strong>Bhavana Interior</strong>, stands among Bangalore's most trusted interior contractors — renowned for creating timeless interior spaces that seamlessly blend aesthetic beauty with practical functionality. Our portfolio encompasses complete architectural interior solutions, from the initial consultation and conceptual planning through meticulous execution and flawless finishing.</p>
            <p>We are privileged to work across a diverse spectrum of projects — from intimate residential apartments and expansive luxury villas to sophisticated corporate offices, dynamic retail spaces, and large-scale commercial environments. Each project, regardless of scale, receives the same unwavering attention to detail and commitment to perfection that defines our craft.</p>
          </div>

          <div className="profile-specializations">
            <div className="profile-col">
              <h3 className="profile-heading">We Undertake</h3>
              <ul className="profile-list">
                <li><span className="check-icon">✦</span> Residential Projects</li>
                <li><span className="check-icon">✦</span> Corporate Projects</li>
                <li><span className="check-icon">✦</span> Commercial Spaces</li>
                <li><span className="check-icon">✦</span> Luxury Villas</li>
                <li><span className="check-icon">✦</span> Premium Apartments</li>
                <li><span className="check-icon">✦</span> Modern Offices</li>
                <li><span className="check-icon">✦</span> Retail Spaces</li>
              </ul>
            </div>
            <div className="profile-col">
              <h3 className="profile-heading">We Specialize In</h3>
              <ul className="profile-list">
                <li><span className="check-icon">✦</span> Premium Woodwork</li>
                <li><span className="check-icon">✦</span> Modular Kitchens</li>
                <li><span className="check-icon">✦</span> Designer Wardrobes</li>
                <li><span className="check-icon">✦</span> Bedroom Furniture</li>
                <li><span className="check-icon">✦</span> TV & Entertainment Units</li>
                <li><span className="check-icon">✦</span> POP Ceilings & Painting</li>
                <li><span className="check-icon">✦</span> Granite, Tiles & Fabrication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
