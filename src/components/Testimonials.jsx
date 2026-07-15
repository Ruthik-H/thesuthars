import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section section-dark">
      <div className="container">
        <span className="section-label center light">Client Stories</span>
        <h2 className="section-title light">What Our Clients Say</h2>
        <div className="title-line light"></div>
        <p className="section-subtitle light">Hear from the families and businesses whose spaces we've had the privilege to transform.</p>

        <div className="testimonials-grid stagger-children">
          <div className="testimonial-card reveal fadeInUp">
            <div className="testimonial-stars">★★★★★</div>
            <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p className="testimonial-text">The Suthars transformed our 3BHK apartment into a dream home. Their attention to detail and craftsmanship is truly exceptional. The modular kitchen and wardrobes are stunning — exactly what we envisioned.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">RK</div>
              <div>
                <h4 className="testimonial-name">Rajesh Kumar</h4>
                <span className="testimonial-role">Homeowner, Whitefield</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card reveal fadeInUp">
            <div className="testimonial-stars">★★★★★</div>
            <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p className="testimonial-text">We hired The Suthars for our corporate office interiors and the result exceeded our expectations. Professional, punctual, and the quality of woodwork is unmatched. Highly recommend their services.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">PS</div>
              <div>
                <h4 className="testimonial-name">Priya Sharma</h4>
                <span className="testimonial-role">CEO, TechVista Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card reveal fadeInUp">
            <div className="testimonial-stars">★★★★★</div>
            <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p className="testimonial-text">From the initial consultation to the final handover, The Suthars were exceptional. Their traditional craftsmanship combined with modern design sensibilities created the perfect space for our family. A truly premium experience.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AM</div>
              <div>
                <h4 className="testimonial-name">Anita Menon</h4>
                <span className="testimonial-role">Homeowner, Indiranagar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
