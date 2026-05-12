'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/ui/Hero'
import TechCard from '../components/ui/TechCard'
import PortfolioCard from '../components/ui/PortfolioCard'
import Timeline from '../components/ui/Timeline'
import ContactSection from '../components/ui/ContactSection'
import FloatingCVButton from '../components/ui/FloatingCVButton'
import { backendTechStack, backendProjects, backendExperience, backendEducation, backendStats } from '../data/backendData'

export default function BackendPage() {
  const accentColor = '#0F4C81'
  const email = 'zooperk2g@gmail.com'
  const phone = '+255748920929'
  const location = 'Arusha, Tanzania'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.tech-card, .portfolio-card, .timeline-item').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="backend-page">
      <style jsx global>{`
        .backend-page {
          background-color: #f5f5f7;
          min-height: 100vh;
        }
        .section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-alt {
          background: white;
          width: 100%;
          padding: 80px 40px;
        }
        .section-alt-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${accentColor};
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }
        .about-section {
          background: linear-gradient(135deg, white 0%, #f0f5fb 100%);
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          padding: 80px 40px;
        }
        .about-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .about-badge {
          background: #e6f0fa;
          color: ${accentColor};
          display: inline-block;
          padding: 8px 20px;
          border-radius: 60px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .about-left h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .about-highlight {
          color: ${accentColor};
        }
        .about-text {
          font-size: 17px;
          line-height: 1.75;
          color: #6b7280;
          margin-bottom: 28px;
        }
        .about-signature {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
        }
        .signature-line {
          width: 50px;
          height: 2px;
          background: ${accentColor};
        }
        .about-signature p {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #1a1a2e;
        }
        .about-right {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .about-right:hover {
          transform: translateY(-5px);
          border-color: #e6f0fa;
        }
        .about-quote {
          font-size: 18px;
          font-weight: 500;
          color: ${accentColor};
          margin-bottom: 20px;
          font-style: italic;
          border-left: 4px solid ${accentColor};
          padding-left: 20px;
        }
        .about-full-text {
          font-size: 16px;
          line-height: 1.7;
          color: #6b7280;
          margin-bottom: 24px;
        }
        .about-stats-mini {
          display: flex;
          gap: 24px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
        .stat-mini {
          text-align: center;
        }
        .stat-mini-number {
          font-size: 24px;
          font-weight: 800;
          color: ${accentColor};
          font-family: 'Poppins', sans-serif;
        }
        .stat-mini-label {
          font-size: 12px;
          color: #9ca3af;
        }
        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .about-signature {
            justify-content: center;
          }
          .section, .section-alt {
            padding: 60px 20px;
          }
        }
      `}</style>

      <Navbar variant="backend" />
      
      <Hero 
        badge="Backend Engineer"
        title="I'm"
        name="Denis Kavishe"
        role="Python Backend Developer"
        description="Scalable APIs, asynchronous task queues, optimized database queries, and high-performance backend systems. Specializing in Django, DRF, Celery, and Redis."
        stats={backendStats}
        imageUrl="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&h=500&fit=crop"
        accentColor={accentColor}
      />

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="about-badge">Who I Am</div>
            <h2>Building <span className="about-highlight">Scalable Backends</span> That Power Experiences</h2>
            <div className="about-text">I design and implement robust backend systems using Python, Django, and modern tools like Redis & Celery. My focus is on clean architecture, high-performance APIs, and reliable async task processing.</div>
            <div className="about-signature">
              <div className="signature-line"></div>
              <p>Denis Kavishe</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-quote">"Passionate Backend Developer with a strong foundation in Python ecosystem."</div>
            <div className="about-full-text">Passionate Backend Developer with a strong foundation in Python, Django, and RESTful API design. I specialize in building scalable, high-performance server-side applications that power exceptional digital experiences. My practical training at e-Government Authority (e-GA) and commercial experience at KH MMBAGA and God's Plan Charity have sharpened my ability to deliver robust backend solutions using Redis caching, Celery task queues, and optimized database architectures.</div>
            <div className="about-stats-mini">
              <div className="stat-mini"><div className="stat-mini-number">4+</div><div className="stat-mini-label">Years Exp</div></div>
              <div className="stat-mini"><div className="stat-mini-number">20+</div><div className="stat-mini-label">APIs Built</div></div>
              <div className="stat-mini"><div className="stat-mini-number">99.9%</div><div className="stat-mini-label">Uptime</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="technologies">
        <div className="section-header">
          <div className="section-label">Backend Stack</div>
          <h2 className="section-title">Python • Django • Redis • Celery</h2>
        </div>
        <div className="tech-grid">
          {backendTechStack.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} accentColor={accentColor} />
          ))}
        </div>
      </section>

      <section className="section-alt" id="portfolio">
        <div className="section-alt-inner">
          <div className="section-header">
            <div className="section-label">Backend Engineering</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="portfolio-grid">
            {backendProjects.map(project => (
              <PortfolioCard key={project.id} project={project} accentColor={accentColor} isBackend />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-header">
          <div className="section-label">Career Roadmap</div>
          <h2 className="section-title">Backend Experience</h2>
        </div>
        <Timeline 
          experienceData={backendExperience} 
          educationData={backendEducation} 
          accentColor={accentColor}
        />
      </section>

      <ContactSection 
        accentColor={accentColor}
        email={email}
        phone={phone}
        location={location}
        title="Let's talk about your backend needs"
        subtitle="Available for backend architecture, API design, or full‑stack collaboration. I bring robust, production-ready solutions."
      />

      <Footer variant="backend" />
      <FloatingCVButton accentColor={accentColor} />
    </div>
  )
}