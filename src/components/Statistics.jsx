import React, { useEffect, useState, useRef } from 'react';

const Statistics = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { id: 1, target: 545, suffix: '+', label: 'Projects Completed' },
    { id: 2, target: 39, suffix: '+', label: 'Years Experience' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutQuad
      const easing = progress * (2 - progress);

      setCounts(stats.map(stat => Math.floor(stat.target * easing)));

      if (frame === totalFrames) {
        clearInterval(timer);
        setCounts(stats.map(stat => stat.target));
      }
    }, frameRate);
  };

  return (
    <section id="stats" className="section section-dark stats-bg" ref={sectionRef}>
      <div className="container">
        <div className="stats-flex stagger-children">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-item reveal fadeInUp">
              <div className="stat-number">
                {counts[index]}{stat.suffix}
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
