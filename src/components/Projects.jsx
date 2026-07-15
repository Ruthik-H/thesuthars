import React, { useState } from 'react';

const projects = [
  { id: 1,  category: 'bedroom',    img: '/assets/photos/IMG-20260523-WA0062.jpg', title: 'Premium Master Bedroom',       label: 'Bedroom' },
  { id: 2,  category: 'kitchen',    img: '/assets/photos/IMG-20230428-WA0024.jpg', title: 'Classic Modular Kitchen',      label: 'Kitchen' },
  { id: 3,  category: 'bedroom',    img: '/assets/photos/IMG-20230428-WA0012.jpg', title: 'Luxury Bedroom Suite',         label: 'Bedroom' },
  { id: 4,  category: 'living-room',img: '/assets/photos/IMG20240401151717.jpg',   title: 'Modern TV Unit & Living Area', label: 'Living Room' },
  { id: 5,  category: 'study',      img: '/assets/photos/IMG-20230428-WA0002.jpg', title: 'Contemporary Study Room',      label: 'Study Room' },
  { id: 6,  category: 'bedroom',    img: '/assets/photos/IMG20231205145213.jpg',   title: 'Tropical Bedroom Design',      label: 'Bedroom' },
  { id: 7,  category: 'living-room',img: '/assets/photos/IMG-20230428-WA0006.jpg', title: 'Elegant Living Room',          label: 'Living Room' },
  { id: 8,  category: 'bedroom',    img: '/assets/photos/IMG-20260523-WA0063.jpg', title: 'Warm Bedroom Interior',        label: 'Bedroom' },
  { id: 9,  category: 'living-room',img: '/assets/photos/IMG-20260523-WA0066.jpg', title: 'Sophisticated Living Space',   label: 'Living Room' },
  { id: 10, category: 'bedroom',    img: '/assets/photos/IMG-20260523-WA0074.jpg', title: 'Serene Master Suite',          label: 'Bedroom' },
  { id: 11, category: 'study',      img: '/assets/photos/IMG-20230428-WA0013.jpg', title: 'Home Office Design',           label: 'Study Room' },
  { id: 12, category: 'living-room',img: '/assets/photos/IMG-20230428-WA0014.jpg', title: 'Premium Living Space',         label: 'Living Room' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, img: '', category: '', title: '' });

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const openLightbox = (project) => {
    setLightbox({ isOpen: true, img: project.img, category: project.label, title: project.title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, img: '', category: '', title: '' });
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label center">Our Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">A showcase of spaces transformed with heritage craftsmanship and modern design.</p>

        <div className="filter-buttons">
          {[
            { key: 'all',        label: 'All' },
            { key: 'bedroom',    label: 'Bedroom' },
            { key: 'living-room',label: 'Living Room' },
            { key: 'kitchen',    label: 'Kitchen' },
            { key: 'study',      label: 'Study Room' },
          ].map(f => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openLightbox(project)}>
              <div className="project-img-container">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category">{project.label}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-view">View Project →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div id="lightbox" style={{ display: 'flex' }}>
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button id="lightboxClose" className="lightbox-close" onClick={closeLightbox}>×</button>
            <img id="lightboxImg" className="lightbox-img" src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox-caption">
              <span id="lightboxCategory" className="lightbox-category">{lightbox.category}</span>
              <h3 id="lightboxTitle" className="lightbox-title">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
