import React from 'react';

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <span className="section-label center">Leadership</span>
        <h2 className="section-title">Meet Our Team</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">The passionate leaders behind every masterpiece we create.</p>

        <div className="team-grid stagger-children">
          {/* Team Member 1 */}
          <div className="team-card reveal fadeInUp">

            <div className="team-info">
              <h3 className="team-name">Mr. Shyam Lal Suthar</h3>
              <span className="team-role">Director</span>
              <p className="team-bio">Young and energetic, Mr. Shyam Lal Suthar leads the company with passion and vision. Having been exposed to the business from an early age, he possesses deep practical knowledge of interior contracting and project execution. His commitment to excellence, innovation, and customer satisfaction continues to drive The Suthars toward greater success.</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-card reveal fadeInUp">

            <div className="team-info">
              <h3 className="team-name">Mr. Manoj Suthar</h3>
              <span className="team-role">Project Manager</span>
              <p className="team-bio">Quality defines Mr. Manoj Suthar. His advanced thinking, attention to detail, and unwavering dedication ensure that every project meets the highest standards. He plays a vital role in maintaining exceptional workmanship and delivering projects with perfection.</p>
            </div>
          </div>


          {/* Team Member 4 */}
          <div className="team-card reveal fadeInUp">
            <div className="team-info">
              <h3 className="team-name">Sunil Suthar</h3>
              <span className="team-role">Floor Manager</span>
              <p className="team-bio">A master of the craft and an irreplaceable force behind our manufacturing excellence, Mr. Sunil Suthar commands the entire factory floor with unrivalled precision and authority. With an encyclopaedic knowledge of advanced woodworking machinery and an unyielding eye for perfection, he orchestrates every production process to ensure that each piece leaving our facility is nothing short of extraordinary. His relentless pursuit of flawless quality and on-time delivery forms the very backbone of The Suthar's legendary craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
