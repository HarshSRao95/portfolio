import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Certifications.css';

const Certifications = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const certifications = [
    {
      title: "Data Analytics & Visualization Job Simulation",
      issuer: "Accenture",
      icon: "bx-bar-chart-alt-2",
      color: "#818cf8"
    },
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      icon: "bx-code-block",
      color: "#67e8f9"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      icon: "bx-brain",
      color: "#a78bfa"
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      icon: "bx-line-chart",
      color: "#e879f9"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      icon: "bx-devices",
      color: "#34d399"
    }
  ];

  return (
    <section id="certifications" className="certifications section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'active' : ''}`}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials & Learning</h2>
          <p className="section-subtitle">Professional certifications that validate my continuous learning journey.</p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              className={`cert-card glass-panel reveal reveal-delay-${Math.min(index + 1, 5)} ${sectionVisible ? 'active' : ''}`}
              key={index}
              style={{ '--cert-accent': cert.color }}
            >
              <div className="cert-icon">
                <i className={`bx ${cert.icon}`}></i>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer-badge">
                  <i className='bx bx-check-shield'></i>
                  <span>{cert.issuer}</span>
                </div>
              </div>
              <div className="cert-shine" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
