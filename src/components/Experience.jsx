import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Experience.css';

const Experience = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "Maharashtra State Human Rights Commission",
      location: "Mumbai",
      duration: "Dec – Apr",
      durationDays: "150 days",
      description: "Upgraded the entire MSHRC website to the latest versions and functionalities as a Full Stack Developer intern. Additionally managed social media content, posting updates about events, announcements, and alerts involving MSHRC.",
      link: "https://www.mshrc.gov.in/",
      tags: ["Full Stack", "Web Development", "CMS", "Social Media"],
      icon: "bx-building-house"
    },
    {
      role: "Web Development Intern",
      company: "Bhabha Atomic Research Center",
      location: "Trombay",
      duration: "May 26 – Jul 10",
      durationDays: "45 days",
      description: "Developed a Django-based Web Application tailored for Central Nervous System Cancer Patients, focusing on robust backend architecture and an intuitive user interface to support healthcare processes.",
      tags: ["Django", "Python", "PostgreSQL", "Healthcare"],
      icon: "bx-atom"
    },
    {
      role: "Full Stack Web Development Intern",
      company: "Bharat Intern",
      location: "Virtual",
      duration: "Jun 10 – Jul 9",
      durationDays: "30 days",
      description: "Completed multiple full-stack development projects demonstrating proficiency across the entire web development stack.",
      tasks: [
        "Registration Form — HTML, CSS, Node JS, MongoDB",
        "Blog Website — Full CRUD capabilities with dynamic content",
        "Money Tracker — Expense & income management webapp"
      ],
      tags: ["Node JS", "MongoDB", "HTML/CSS", "JavaScript"],
      icon: "bx-rocket"
    }
  ];

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'active' : ''}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">Professional experience that has shaped my skills and perspective.</p>
        </div>

        <div className="exp-cards">
          {experiences.map((exp, index) => (
            <div className={`exp-card glass-panel reveal reveal-delay-${index + 1} ${sectionVisible ? 'active' : ''}`} key={index}>
              {/* Accent bar */}
              <div className="exp-accent-bar"></div>

              <div className="exp-card-top">
                <div className="exp-icon-wrap">
                  <i className={`bx ${exp.icon}`}></i>
                </div>
                <div className="exp-meta-badges">
                  <span className="meta-badge">
                    <i className='bx bx-calendar'></i>
                    {exp.duration}
                  </span>
                  <span className="meta-badge">
                    <i className='bx bx-time'></i>
                    {exp.durationDays}
                  </span>
                  <span className="meta-badge">
                    <i className='bx bx-map-pin'></i>
                    {exp.location}
                  </span>
                </div>
              </div>

              <h3 className="exp-role">{exp.role}</h3>
              <h4 className="exp-company">{exp.company}</h4>

              <p className="exp-description">{exp.description}</p>

              {exp.tasks && (
                <ul className="exp-tasks">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>
                      <i className='bx bx-chevron-right'></i>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.link && (
                <a href={exp.link} className="exp-link" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                  <span>View Website</span>
                </a>
              )}

              <div className="exp-tags">
                {exp.tags.map((tag, idx) => (
                  <span className="exp-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
