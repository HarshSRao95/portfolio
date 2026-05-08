import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Contact.css';

const Contact = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const contactLinks = [
    {
      href: "mailto:harshrao5518@gmail.com",
      icon: "bx-envelope",
      label: "Email",
      value: "harshrao5518@gmail.com",
      color: "#818cf8",
      external: false
    },
    {
      href: "tel:+919136214990",
      icon: "bx-phone",
      label: "Phone",
      value: "+91 9136214990",
      color: "#67e8f9",
      external: false
    },
    {
      href: "https://www.linkedin.com/in/harshsrao/",
      icon: "bxl-linkedin",
      label: "LinkedIn",
      value: "/in/harshsrao",
      color: "#0a66c2",
      external: true
    },
    {
      href: "https://github.com/HarshSRao95",
      icon: "bxl-github",
      label: "GitHub",
      value: "HarshSRao95",
      color: "#e879f9",
      external: true
    }
  ];

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="bg-glow bg-glow-3"></div>

      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'active' : ''}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        </div>

        <div className={`contact-cta reveal ${sectionVisible ? 'active' : ''}`}>
          <div className="cta-card glass-panel">
            <div className="cta-icon">
              <i className='bx bx-message-dots'></i>
            </div>
            <h3>Ready to start a conversation?</h3>
            <p>Whether it's a new project, job opportunity, or just a friendly hello — my inbox is always open.</p>
            <a href="mailto:harshrao5518@gmail.com" className="btn btn-primary">
              <i className='bx bx-send'></i>
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            <a
              href={link.href}
              className={`contact-card glass-panel reveal reveal-delay-${index + 1} ${sectionVisible ? 'active' : ''}`}
              key={index}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{ '--contact-accent': link.color }}
              aria-label={`Contact via ${link.label}`}
            >
              <div className="contact-card-icon">
                <i className={`bx ${link.icon}`}></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </div>
              <i className='bx bx-right-arrow-alt contact-arrow'></i>
            </a>
          ))}
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-logo">HSR<span className="logo-dot">.</span></span>
            <p>&copy; {new Date().getFullYear()} Harsh S Rao. Built with React.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/HarshSRao95" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/harshsrao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="mailto:harshrao5518@gmail.com" aria-label="Email">
              <i className='bx bx-envelope'></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
