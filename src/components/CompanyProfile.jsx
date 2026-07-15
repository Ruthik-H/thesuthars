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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
