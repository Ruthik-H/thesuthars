import React from 'react';

const steps = [
    {
        num: '01',
        title: 'Consultation',
        desc: 'We understand your vision, lifestyle, and budget through a detailed discussion.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Site Visit',
        desc: 'Our team visits your space for precise measurements and planning.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Design Planning',
        desc: 'Detailed design plans and 3D visualizations refined to your vision.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Material Selection',
        desc: 'Premium materials chosen to match your design, budget, and quality needs.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
        ),
    },
    {
        num: '05',
        title: '3D Presentation',
        desc: 'Experience a realistic preview of your space before work begins.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12h20M12 2v20M12 12l8 8M12 12L4 4M12 12l8-8M12 12L4 20"/>
            </svg>
        ),
    },
    {
        num: '06',
        title: 'Execution',
        desc: 'Skilled Karigars bring your design to life with meticulous craftsmanship.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
    },
    {
        num: '07',
        title: 'Quality Check',
        desc: 'Rigorous multi-point inspections ensure every detail meets our standards.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
        ),
    },
    {
        num: '08',
        title: 'Final Handover',
        desc: 'Your beautifully transformed space is handed over — ready to enjoy.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
        ),
    },
];

const Process = () => {
    return (
        <section id="process" className="section section-alt">
            <div className="container">
                <span className="section-label center">How We Work</span>
                <h2 className="section-title">Our Process</h2>
                <div className="title-line"></div>
                <p className="section-subtitle">A seamless journey from vision to reality, guided by expertise at every step.</p>

                <div className="process-grid stagger-children">
                    {steps.map((step) => (
                        <div className="process-step reveal fadeInUp" key={step.num}>
                            <div className="process-num">{step.num}</div>
                            <div className="process-icon">{step.icon}</div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
