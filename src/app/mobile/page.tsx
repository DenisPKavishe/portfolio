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
import { mobileTechStack, mobileProjects, mobileExperience, mobileEducation, mobileStats } from '../data/mobileData'

export default function MobilePage() {
  const [mounted, setMounted] = useState(false)
  const accentColor = '#0284C7' // Flutter blue
  const email = 'kavishedenis55@gmail.com'
  const phone = '+255746965913'
  const location = 'Arusha, Tanzania'

  useEffect(() => {
    setMounted(true)
    
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

  // Don't render until mounted to prevent FOUC
  if (!mounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ec 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #e5e7eb', 
            borderTopColor: accentColor, 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: '#6b7280' }}>Loading Mobile Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mobile-page">
      <style jsx global>{`
        .mobile-page {
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
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }
        .about-section {
          background: linear-gradient(135deg, white 0%, #f0f9ff 100%);
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
          background: #e0f2fe;
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
          border-color: #e0f2fe;
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
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .section, .section-alt {
            padding: 40px 16px;
          }
          .about-section {
            padding: 40px 16px;
          }
          .about-right {
            padding: 20px;
          }
        }
      `}</style>

      <Navbar variant="mobile" />
      
      <Hero 
        badge="✦ WELCOME TO MY WORLD ✦"
        title="I'm"
        name="Denis Kavishe"
        role="Mobile Developer (Flutter)"
        description="Passionate Mobile Developer specializing in Flutter and Dart. Building cross-platform, beautiful, and performant mobile applications for iOS and Android from a single codebase. Based in Arusha, Tanzania."
        stats={mobileStats}
        imageUrl="/denis.jpeg"
        accentColor={accentColor}
      />

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="about-badge">Who I Am</div>
            <h2>Crafting <span className="about-highlight">Cross-Platform</span> Mobile Experiences</h2>
            <div className="about-text">I'm Denis Kavishe, a mobile development specialist with expertise in Flutter. I create seamless, native-like experiences for both iOS and Android platforms using a single codebase, ensuring efficiency without compromising quality.</div>
            <div className="about-signature">
              <div className="signature-line"></div>
              <p>Denis Kavishe</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-quote">"Building beautiful, performant cross-platform apps with Flutter that users love."</div>
            <div className="about-full-text">Passionate Mobile Developer with strong foundation in Flutter and cross-platform development. I specialize in creating responsive, pixel-perfect mobile applications that deliver exceptional user experiences. My expertise includes state management, API integration, Firebase services, and custom animations that bring apps to life.</div>
            <div className="about-stats-mini">
              <div className="stat-mini"><div className="stat-mini-number">2+</div><div className="stat-mini-label">Years Exp</div></div>
              <div className="stat-mini"><div className="stat-mini-number">8+</div><div className="stat-mini-label">Mobile Apps</div></div>
              <div className="stat-mini"><div className="stat-mini-number">100%</div><div className="stat-mini-label">Satisfaction</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="technologies">
        <div className="section-header">
          <div className="section-label">Mobile Stack</div>
          <h2 className="section-title">Flutter Ecosystem</h2>
        </div>
        <div className="tech-grid">
          {mobileTechStack.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              accentColor={accentColor}
            />
          ))}
        </div>
      </section>

      <section className="section-alt" id="portfolio">
        <div className="section-alt-inner">
          <div className="section-header">
            <div className="section-label">Recent Work</div>
            <h2 className="section-title">Mobile Portfolio</h2>
          </div>
          <div className="portfolio-grid">
            {mobileProjects.map(project => (
              <PortfolioCard key={project.id} project={project} accentColor={accentColor} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-header">
          <div className="section-label">Career Journey</div>
          <h2 className="section-title">Experience Timeline</h2>
        </div>
        <Timeline 
          experienceData={mobileExperience} 
          educationData={mobileEducation} 
          accentColor={accentColor}
        />
      </section>

      <ContactSection 
        accentColor={accentColor}
        email={email}
        phone={phone}
        location={location}
        title="Let's Build Your Mobile App"
        subtitle="I'm currently available for Flutter app development, cross-platform projects, or full-time mobile developer positions."
      />

      <Footer variant="mobile" />
      <FloatingCVButton accentColor={accentColor} />
    </div>
  )
}