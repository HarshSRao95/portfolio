import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './About.css';

const About = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const education = [
    {
      degree: "B.E. Computer Engineering",
      institution: "Pillai College of Engineering",
      score: "CGPI: 9.21 / 10",
      year: "2021 – 2025",
      icon: "bx-graduation-cap"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "New Horizon Public School",
      score: "92.00%",
      year: "",
      icon: "bx-book-open"
    },
    {
      degree: "Class X (CBSE)",
      institution: "New Horizon Public School",
      score: "91.00%",
      year: "",
      icon: "bx-book"
    }
  ];

  const highlights = [
    { icon: "bx-map-pin", label: "Location", value: "Airoli, Navi Mumbai" },
    { icon: "bx-phone", label: "Phone", value: "+91 9136214990" },
    { icon: "bx-envelope", label: "Email", value: "harshrao5518@gmail.com" },
    { icon: "bx-code-alt", label: "Focus", value: "Full Stack Development" },
  ];

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'active' : ''}`}>
          <span className="section-label">About</span>
          <h2 className="section-title">Get to know me</h2>
          <p className="section-subtitle">A passionate developer with a strong academic foundation and a drive to build meaningful digital experiences.</p>
        </div>

        <div className="about-layout">
          {/* Left — Bio + Quick Info */}
          <div className={`about-bio reveal ${sectionVisible ? 'active' : ''}`}>
            <div className="bio-card glass-panel">
              <p>
                I'm a Final-year Computer Engineering student at Pillai College of Engineering. 
                My passion lies in crafting <strong>clean, performant, and user-centric</strong> web applications 
                that solve real-world problems.
              </p>
              <p>
                With hands-on experience in <strong>Python, Django, React, and modern JavaScript</strong>, 
                I bridge the gap between elegant front-end interfaces and robust back-end architectures. 
                I thrive on learning new technologies and contributing to projects that make a difference.
              </p>

              <div className="quick-info-grid">
                {highlights.map((item, i) => (
                  <div className="quick-info-item" key={i}>
                    <i className={`bx ${item.icon}`}></i>
                    <div>
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Education Timeline */}
          <div className={`about-education reveal reveal-delay-2 ${sectionVisible ? 'active' : ''}`}>
            <h3 className="edu-heading">
              <i className='bx bx-graduation-cap'></i>
              Education
            </h3>
            <div className="edu-timeline">
              {education.map((edu, index) => (
                <div className="edu-card glass-panel" key={index}>
                  <div className="edu-icon-wrap">
                    <i className={`bx ${edu.icon}`}></i>
                  </div>
                  <div className="edu-details">
                    <h4>{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta">
                      <span className="edu-score">{edu.score}</span>
                      {edu.year && <span className="edu-year">{edu.year}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
