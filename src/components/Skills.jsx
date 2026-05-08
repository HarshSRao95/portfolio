import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Skills.css';

const Skills = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const skillCategories = [
    {
      title: "Programming",
      icon: "bx-terminal",
      color: "#818cf8",
      skills: [
        { name: "Python", level: 90 },
      ]
    },
    {
      title: "Web Development",
      icon: "bx-globe",
      color: "#67e8f9",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Frameworks",
      icon: "bx-layer",
      color: "#a78bfa",
      skills: [
        { name: "Django", level: 85 },
        { name: "React", level: 75 },
        { name: "Node JS", level: 70 },
      ]
    },
    {
      title: "Databases",
      icon: "bx-data",
      color: "#e879f9",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'active' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              className={`skill-card glass-panel reveal reveal-delay-${index + 1} ${sectionVisible ? 'active' : ''}`}
              key={index}
              style={{ '--card-accent': category.color }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  <i className={`bx ${category.icon}`}></i>
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-bars">
                {category.skills.map((skill, idx) => (
                  <div className="skill-bar-item" key={idx}>
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: sectionVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.3 + idx * 0.15}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
