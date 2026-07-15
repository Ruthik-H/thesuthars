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
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="12" y2="12"/><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.5" fill="currentColor"/></svg>
                        </div>
                        <h3 className="service-title">Wardrobes</h3>
                        <p className="service-desc">Elegant wardrobes designed to maximize storage while complementing your bedroom aesthetics.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                        </div>
                        <h3 className="service-title">TV Units</h3>
                        <p className="service-desc">Contemporary entertainment units that become the sophisticated focal point of your living space.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20"/><circle cx="12" cy="14" r="3"/><path d="M8 14h-2"/><path d="M18 14h-2"/></svg>
                        </div>
                        <h3 className="service-title">Entertainment Units</h3>
                        <p className="service-desc">Custom entertainment centers that seamlessly integrate technology with elegant design.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>
                        </div>
                        <h3 className="service-title">Custom Wooden Furniture</h3>
                        <p className="service-desc">Handcrafted furniture pieces that showcase our Rajasthani heritage of exceptional woodworking.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20"/><path d="M4 20V8l4-4h8l4 4v12"/><path d="M4 8h16"/><path d="M9 20v-6h6v6"/></svg>
                        </div>
                        <h3 className="service-title">Bedroom Interiors</h3>
                        <p className="service-desc">Tranquil bedroom designs that create a perfect retreat for rest and rejuvenation.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h20"/><path d="M4 4c0 0 1 8 8 8s8-8 8-8"/><path d="M12 12v4"/><circle cx="12" cy="18" r="2"/></svg>
                        </div>
                        <h3 className="service-title">POP Ceiling</h3>
                        <p className="service-desc">Artistic ceiling designs that add depth, character, and a touch of grandeur to every room.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M21 15l-5-5L5 21"/></svg>
                        </div>
                        <h3 className="service-title">Wall Painting</h3>
                        <p className="service-desc">Premium wall finishes and artistic painting that set the perfect mood for your interiors.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                        </div>
                        <h3 className="service-title">Polishing</h3>
                        <p className="service-desc">Expert polishing services that bring out the natural beauty of wood and surfaces.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                        </div>
                        <h3 className="service-title">Tiles Fitting</h3>
                        <p className="service-desc">Precision tile installation with meticulous attention to patterns, alignment, and finish quality.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M12 22V12"/><path d="M20 14.66V7.34"/><path d="M4 14.66V7.34"/></svg>
                        </div>
                        <h3 className="service-title">Granite Installation</h3>
                        <p className="service-desc">Premium granite work that adds timeless elegance and durability to your counters and surfaces.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                        </div>
                        <h3 className="service-title">Fabrication Works</h3>
                        <p className="service-desc">Custom metal and material fabrication for structural and decorative interior elements.</p>
                    </div>
                    <div className="service-card service-card-highlight">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <h3 className="service-title">Complete Interior Solutions</h3>
                        <p className="service-desc">End-to-end interior services from concept to completion — your single destination for premium interiors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
