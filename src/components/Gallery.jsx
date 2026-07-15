import React, { useState } from 'react';

/**
 * Gallery Section — Real photos from /public/assets/photos/
 * Videos are not required (removed as per user instruction).
 */

const PHOTOS = [
  { src: '/assets/photos/IMG-20230504-WA0036.jpg', caption: 'Interior Craftsmanship' },
  { src: '/assets/photos/IMG-20230504-WA0038.jpg', caption: 'Detail Work' },
  { src: '/assets/photos/IMG-20230504-WA0040.jpg', caption: 'Custom Joinery' },
  { src: '/assets/photos/IMG-20230504-WA0041.jpg', caption: 'Premium Finish' },
  { src: '/assets/photos/IMG-20230504-WA0042.jpg', caption: 'Living Space Design' },
  { src: '/assets/photos/IMG-20230504-WA0043.jpg', caption: 'Bedroom Interiors' },
  { src: '/assets/photos/IMG-20260523-WA0014.jpg', caption: 'Modern Interior' },
  { src: '/assets/photos/usethis.jpg', caption: 'Elegant Space' },
  { src: '/assets/photos/IMG-20260523-WA0016.jpg', caption: 'Luxury Details' },
  { src: '/assets/photos/IMG-20230428-WA0017.jpg', caption: 'Handcrafted Furniture' },
  { src: '/assets/photos/IMG-20230428-WA0029.jpg', caption: 'Premium Interior' },
  { src: '/assets/photos/IMG-20230428-WA0030.jpg', caption: 'Modern Living' },
  { src: '/assets/photos/IMG-20230428-WA0032.jpg', caption: 'Crafted Interiors' },
  { src: '/assets/photos/IMG-20230428-WA0034.jpg', caption: 'The Suthars Work' },
  { src: '/assets/photos/IMG20221119180354.jpg',   caption: 'Signature Project' },
  { src: '/assets/photos/IMG20240106120016.jpg',   caption: 'Design Excellence' },
  { src: '/assets/photos/IMG20240401154652.jpg',   caption: 'Premium Finish' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', caption: '' });

  const openLightbox = (photo) => {
    setLightbox({ isOpen: true, src: photo.src, caption: photo.caption });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', caption: '' });
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <span className="section-label center">Our Work</span>
        <h2 className="section-title">Photo Gallery</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">A visual journey through our finest craftsmanship and completed projects.</p>

        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="gallery-photo-card reveal"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              onClick={() => openLightbox(photo)}
            >
              <img src={photo.src} alt={photo.caption} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div id="lightbox" style={{ display: 'flex' }}>
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img className="lightbox-img" src={lightbox.src} alt={lightbox.caption} />
            {lightbox.caption && (
              <div className="lightbox-caption">
                <h3 className="lightbox-title">{lightbox.caption}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
