import React from 'react';

const Services = () => {
    return (
        <section id="services" className="section section-dark">
            <div className="container">
                <span className="section-label center light">What We Offer</span>
                <h2 className="section-title light">Our Services</h2>
                <div className="title-line light"></div>
                <p className="section-subtitle light">Comprehensive interior solutions crafted with precision and delivered with excellence.</p>

                <div className="services-grid stagger-children">
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                        </div>
                        <h3 className="service-title">Interior Planning</h3>
                        <p className="service-desc">Strategic space planning that maximizes functionality while creating harmonious living environments.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                        </div>
                        <h3 className="service-title">Interior Design</h3>
                        <p className="service-desc">Bespoke design concepts that blend aesthetics with practicality, tailored to your unique vision.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        </div>
                        <h3 className="service-title">Interior Execution</h3>
                        <p className="service-desc">Flawless project execution with skilled craftsmen ensuring every detail meets our exacting standards.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <h3 className="service-title">Residential Interiors</h3>
                        <p className="service-desc">Transform your home into a luxurious sanctuary that reflects your personality and lifestyle.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </div>
                        <h3 className="service-title">Commercial Interiors</h3>
                        <p className="service-desc">Premium commercial spaces designed to impress clients and inspire productivity.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </div>
                        <h3 className="service-title">Corporate Office Interiors</h3>
                        <p className="service-desc">Professional workspaces that elevate your brand identity and enhance employee well-being.</p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="14" x2="20" y2="14"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="12" cy="4" r="0.5" fill="currentColor"/></svg>
                        </div>
                        <h3 className="service-title">Kitchen Cabinets</h3>
                        <p className="service-desc">Custom cabinetry crafted with premium materials for lasting beauty and optimal storage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
