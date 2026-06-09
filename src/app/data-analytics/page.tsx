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
import { dataTechStack, dataProjects, certifications, dataExperience, dataEducation, dataStats } from '../data/dataAnalyticsData'

export default function DataAnalyticsPage() {
  const [mounted, setMounted] = useState(false)
  const [showCertifications, setShowCertifications] = useState(false)
  const accentColor = '#059669'
  const email = 'kavishedenis55@gmail.com'
  const phone = '+255746965913'
  const location = 'Arusha, Tanzania'

  useEffect(() => {
    setMounted(true)
    
    // Force show certifications after mount
    setTimeout(() => {
      setShowCertifications(true)
    }, 100)
    
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

    document.querySelectorAll('.tech-card, .portfolio-card, .timeline-item, .cert-card').forEach(el => observer.observe(el))

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
          <p style={{ color: '#6b7280' }}>Loading Data Analytics Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="data-page">
      <style jsx global>{`
        .data-page {
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
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cert-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border-color: ${accentColor};
        }
        .cert-image {
          width: 100%;
          height: 160px;
          background: linear-gradient(135deg, #064e3b, #059669);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .cert-icon-svg {
          width: 70px;
          height: 70px;
          stroke: white;
          stroke-width: 1.5;
          fill: none;
        }
        .cert-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: white;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .cert-content {
          padding: 24px;
        }
        .cert-title {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 10px;
          color: #1a1a2e;
        }
        .cert-issuer {
          font-size: 13px;
          font-weight: 600;
          color: ${accentColor};
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cert-date {
          font-size: 12px;
          color: #9ca3af;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cert-credential {
          font-size: 12px;
          color: #6b7280;
          background: #f5f5f7;
          padding: 8px 12px;
          border-radius: 8px;
          margin: 12px 0;
          font-family: monospace;
        }
        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .cert-skill {
          background: #d1fae5;
          color: ${accentColor};
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .verify-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 12px;
          color: ${accentColor};
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .verify-link:hover {
          gap: 12px;
          color: #047857;
        }
        .about-section {
          background: linear-gradient(135deg, white 0%, #ecfdf5 100%);
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
          background: #d1fae5;
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
          border-color: #d1fae5;
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
          .cert-grid {
            grid-template-columns: 1fr;
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
          .cert-content {
            padding: 16px;
          }
        }
      `}</style>

      <Navbar variant="data" />
      
      <Hero 
        badge="Data Analyst"
        title="I'm"
        name="Denis Kavishe"
        role="Data Analytics Expert"
        description="Turning raw data into actionable insights using Excel, Python, SQL, and modern visualization tools. Helping businesses make data-driven decisions."
        stats={dataStats}
        imageUrl="/denis.PNG"
        accentColor={accentColor}
      />

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="about-badge">Who I Am</div>
            <h2>Turning <span className="about-highlight">Data</span> Into Strategic Insights</h2>
            <div className="about-text">I'm a data analyst passionate about extracting meaningful patterns from complex datasets. Using Excel, Python, SQL, and visualization tools, I help organizations uncover trends and make informed decisions.</div>
            <div className="about-signature">
              <div className="signature-line"></div>
              <p>Denis Kavishe</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-quote">"Data-driven decisions start with clean analysis and compelling visualizations."</div>
            <div className="about-full-text">Passionate Data Analyst with strong expertise in Excel (advanced formulas, PivotTables, Power Query), Python (pandas, numpy, matplotlib, seaborn), and SQL (complex queries, joins, window functions). I specialize in transforming raw data into actionable insights through interactive dashboards and compelling visualizations.</div>
            <div className="about-stats-mini">
              <div className="stat-mini"><div className="stat-mini-number">50+</div><div className="stat-mini-label">Dashboards</div></div>
              <div className="stat-mini"><div className="stat-mini-number">100+</div><div className="stat-mini-label">Reports</div></div>
              <div className="stat-mini"><div className="stat-mini-number">30%</div><div className="stat-mini-label">Efficiency Gain</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="technologies">
        <div className="section-header">
          <div className="section-label">Analytics Stack</div>
          <h2 className="section-title">Excel • Python • SQL • Visualization</h2>
        </div>
        <div className="tech-grid">
          {dataTechStack && dataTechStack.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} accentColor={accentColor} />
          ))}
        </div>
      </section>

      <section className="section-alt" id="portfolio">
        <div className="section-alt-inner">
          <div className="section-header">
            <div className="section-label">Analytics Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="portfolio-grid">
            {dataProjects && dataProjects.map(project => (
              <PortfolioCard key={project.id} project={project} accentColor={accentColor} isData />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Simplified without opacity animation */}
      <section className="section" id="certifications">
        <div className="section-header">
          <div className="section-label">Professional Credentials</div>
          <h2 className="section-title">Certifications & Badges</h2>
          <p style={{ color: '#6b7280', maxWidth: '600px', margin: '16px auto 0' }}>Industry-recognized certifications that validate my expertise in data analytics and visualization.</p>
        </div>
        <div className="cert-grid">
          {certifications && certifications.map((cert) => (
            <div key={cert.id} className="cert-card" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <div className="cert-image">
                <svg className="cert-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span className="cert-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Verified
                </span>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  {cert.issuer}
                </div>
                <div className="cert-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {cert.date}
                </div>
                {cert.description && (
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>{cert.description}</p>
                )}
                <div className="cert-skills">
                  {cert.skills && cert.skills.map(skill => (
                    <span key={skill} className="cert-skill">{skill}</span>
                  ))}
                </div>
                <a href="https://www.credly.com/users/denis-kavishe" className="verify-link">
                  Verify Credential 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-header">
          <div className="section-label">Career Roadmap</div>
          <h2 className="section-title">Analytics Experience</h2>
        </div>
        <Timeline 
          experienceData={dataExperience} 
          educationData={dataEducation} 
          accentColor={accentColor}
        />
      </section>

      <ContactSection 
        accentColor={accentColor}
        email={email}
        phone={phone}
        location={location}
        title="Turn Your Data Into Insights"
        subtitle="Available for data analysis projects, dashboard creation, or analytics consulting."
      />

      <Footer variant="data" />
      <FloatingCVButton accentColor={accentColor} />
    </div>
  )
}