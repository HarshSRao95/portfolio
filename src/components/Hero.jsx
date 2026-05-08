import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useAnimations';
import './Hero.css';

const Hero = () => {
  const typedText = useTypewriter(
    ['Full Stack Developer', 'Django Specialist', 'React Enthusiast', 'Problem Solver'],
    80,
    50,
    2000
  );

  const canvasRef = useRef(null);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${this.opacity})`;
        ctx.fill();
      }
    }

    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-particles" aria-hidden="true"></canvas>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="text-gradient">Harsh S Rao</span>
          </h1>

          <div className="hero-role">
            <span className="role-static">I'm a </span>
            <span className="role-typed text-gradient">{typedText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Final-year Computer Engineering student crafting robust, 
            scalable web applications with modern technologies. 
            Turning complex problems into elegant digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className='bx bx-send'></i>
              Get In Touch
            </a>
            <a href="#experience" className="btn btn-outline">
              <i className='bx bx-briefcase'></i>
              View Work
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">9.1</span>
              <span className="stat-label">CGPI</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-ring visual-ring-outer"></div>
          <div className="visual-ring visual-ring-inner"></div>
          <div className="visual-core">
            <div className="code-icon-wrapper">
              <i className='bx bx-code-alt'></i>
            </div>
          </div>
          {/* Orbiting Tech Icons */}
          <div className="orbit-track">
            <div className="orbit-item orbit-1"><i className='bx bxl-python'></i></div>
            <div className="orbit-item orbit-2"><i className='bx bxl-django'></i></div>
            <div className="orbit-item orbit-3"><i className='bx bxl-javascript'></i></div>
            <div className="orbit-item orbit-4"><i className='bx bxl-react'></i></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
