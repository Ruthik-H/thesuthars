import React, { useState } from 'react';

const PHONE_PRIMARY = '9008088001';
const PHONE_SECONDARY = '8880276624';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_SECONDARY}`;
// Exact coordinates: 13°06'03.7"N 77°39'22.5"E
const MAPS_DIRECT = `https://www.google.com/maps/place/13%C2%B006'03.7%22N+77%C2%B039'22.5%22E/@13.1010278,77.6562222,18z`;
const MAPS_EMBED  = `https://maps.google.com/maps?q=13.1010278,77.6562222&z=17&output=embed`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', projectType: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Inquiry via Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}
*Message:* ${formData.message}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/91${PHONE_SECONDARY}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <span className="section-label center">Get in Touch</span>
        <h2 className="section-title">Start Your Project</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">Ready to transform your space? Contact us for a free consultation and estimate.</p>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info reveal reveal-left">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-desc">Visit our office or reach out directly. Our team is ready to discuss your interior design needs.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p><a href={`tel:+91${PHONE_PRIMARY}`}>+91 {PHONE_PRIMARY}</a></p>
                  <p><a href={`tel:+91${PHONE_SECONDARY}`}>+91 {PHONE_SECONDARY}</a></p>
                  <p style={{ marginTop: '8px' }}>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#25D366', fontWeight: 600 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.563 5.824 0 10.564 4.74 10.564 10.564 0 5.823-4.741 10.562-10.564 10.563z"/></svg>
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href="https://mail.google.com/mail/?view=cm&to=thesutharsinterior@gmail.com" target="_blank" rel="noopener noreferrer">thesutharsinterior@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>184/2 KANNUR VILLAGE BIDRAHALLI HOBLI<br />BENGALURU URBAN<br />562149</p>
                  <p>
                    <a href={MAPS_DIRECT} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                      View on Google Maps →
                    </a>
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right: Form */}
          <div className="contact-form-container reveal reveal-right">
            <h3 className="contact-heading">Send us a Message</h3>
            {submitted && (
              <div className="form-success">
                ✓ Thank you! Your message has been sent. We'll get back to you soon on <strong>+91 {PHONE_PRIMARY}</strong>.
              </div>
            )}
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select id="projectType" name="projectType" className="form-control" value={formData.projectType} onChange={handleChange} required>
                  <option value="" disabled>Select project type</option>
                  <option value="residential">Residential Interior</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="office">Corporate Office</option>
                  <option value="kitchen">Modular Kitchen</option>
                  <option value="bedroom">Bedroom Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message / Requirements</label>
                <textarea id="message" name="message" className="form-control" rows="4" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Maps — exact pinpoint */}
        <div className="contact-map-wrapper reveal fadeInUp" style={{ marginTop: '60px' }}>
          <iframe
            title="The Suthars Location"
            src={MAPS_EMBED}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
