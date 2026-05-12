'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const container = document.getElementById('particles')
    if (container) {
      const particleCount = 80
      for (let i = 0; i < particleCount; i++) {
        const span = document.createElement('span')
        const size = Math.random() * 6 + 2
        span.style.width = size + 'px'
        span.style.height = size + 'px'
        span.style.left = Math.random() * 100 + '%'
        span.style.animationDuration = Math.random() * 15 + 10 + 's'
        span.style.animationDelay = Math.random() * 10 + 's'
        span.style.background = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`
        container.appendChild(span)
      }
    }

    const cards = document.querySelectorAll('.role-card')
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const ripple = document.createElement('div')
        ripple.style.position = 'absolute'
        ripple.style.top = (e as MouseEvent).clientY - card.getBoundingClientRect().top + 'px'
        ripple.style.left = (e as MouseEvent).clientX - card.getBoundingClientRect().left + 'px'
        ripple.style.width = '10px'
        ripple.style.height = '10px'
        ripple.style.background = 'rgba(255,255,255,0.4)'
        ripple.style.borderRadius = '50%'
        ripple.style.transform = 'scale(0)'
        ripple.style.transition = 'transform 0.4s ease-out'
        ripple.style.pointerEvents = 'none'
        ;(card as HTMLElement).style.position = 'relative'
        card.appendChild(ripple)
        requestAnimationFrame(() => {
          ripple.style.transform = 'scale(30)'
          ripple.style.opacity = '0'
        })
        setTimeout(() => ripple.remove(), 400)
      })
    })
  }, [])

  return (
    <div className="home-page">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f1f5f9;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .bg-animation span {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }
        @keyframes float {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 30px;
          position: relative;
          z-index: 2;
        }

        .hero {
          text-align: center;
          padding: 80px 20px 60px;
          animation: fadeInUp 0.8s ease forwards;
        }
        .badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.4);
          padding: 8px 20px;
          border-radius: 60px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #60a5fa;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff, #94a3b8, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero h1 .highlight {
          background: linear-gradient(135deg, #3b82f6, #10b981, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-desc {
          font-size: 18px;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto 32px;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-label {
          font-size: 13px;
          color: #94a3b8;
          letter-spacing: 1px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin: 40px 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .role-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(16px);
          border-radius: 32px;
          padding: 40px 32px;
          border: 1px solid rgba(71, 85, 105, 0.5);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          cursor: pointer;
          text-decoration: none;
          display: block;
          color: inherit;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        .role-card:nth-child(1) { animation-delay: 0.1s; }
        .role-card:nth-child(2) { animation-delay: 0.2s; }
        .role-card:nth-child(3) { animation-delay: 0.3s; }
        
        .role-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent);
          transition: left 0.6s ease;
        }
        .role-card:hover::before {
          left: 100%;
        }
        .role-card:hover {
          transform: translateY(-12px);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.5);
        }
        .card-icon svg {
          width: 64px;
          height: 64px;
          stroke-width: 1.5;
          margin-bottom: 24px;
        }
        .role-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .role-card p {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .tech-badge {
          background: rgba(59, 130, 246, 0.2);
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 500;
          color: #93c5fd;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .arrow-link {
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #60a5fa;
          transition: gap 0.3s;
        }
        .role-card:hover .arrow-link {
          gap: 14px;
        }

        .card-frontend:hover {
          border-color: #932804;
          box-shadow: 0 20px 35px -12px rgba(59, 130, 246, 0.3);
        }
        .card-backend:hover {
          border-color: #0046dd;
          box-shadow: 0 20px 35px -12px rgba(16, 185, 129, 0.3);
        }
        .card-data:hover {
          border-color: #10b981;
          box-shadow: 0 20px 35px -12px rgba(245, 158, 11, 0.3);
        }

        .about-short {
          background: rgba(15, 23, 42, 0.6);
          border-radius: 28px;
          padding: 50px 40px;
          margin: 60px 0;
          border: 1px solid rgba(71, 85, 105, 0.4);
          backdrop-filter: blur(8px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .about-short h3 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .about-short p {
          color: #cbd5e1;
          line-height: 1.8;
        }
        .quick-contact {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        .contact-chip {
          background: rgba(30, 41, 59, 0.8);
          padding: 10px 24px;
          border-radius: 40px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          text-decoration: none;
          color: #e2e8f0;
          transition: all 0.3s;
          border: 1px solid rgba(71, 85, 105, 0.5);
        }
        .contact-chip:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          transform: translateY(-3px);
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          border-top: 1px solid rgba(71, 85, 105, 0.4);
          margin-top: 40px;
          color: #94a3b8;
          font-size: 14px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }
          .hero {
            padding: 60px 20px 40px;
          }
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .role-card {
            padding: 28px 24px;
          }
          .about-short {
            padding: 30px 24px;
          }
          .hero-stats {
            gap: 28px;
          }
        }
      `}</style>

      <div className="bg-animation" id="particles"></div>

      <div className="container">
        <div className="hero">
          <div className="badge">✦ PORTFOLIO HUB ✦</div>
          <h1>Denis <span className="highlight">Kavishe</span><br />Multi‑Disciplinary Developer</h1>
          <p className="hero-desc">Explore my work across frontend engineering, backend architecture, and data analytics. Each portfolio showcases specialized skills, projects, and professional journey.</p>
          <div className="hero-stats">
            <div className="stat"><div className="stat-number">4+</div><div className="stat-label">Years Exp</div></div>
            <div className="stat"><div className="stat-number">35+</div><div className="stat-label">Projects</div></div>
            <div className="stat"><div className="stat-number">3</div><div className="stat-label">Specializations</div></div>
          </div>
        </div>

        <div className="cards-grid">
          <Link href="/frontend" className="role-card card-frontend">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M7 7l2 2-2 2M17 7l-2 2 2 2"></path>
              </svg>
            </div>
            <h3>Frontend Development</h3>
            <p>Modern, responsive web applications with React, Next.js, TypeScript, and Tailwind CSS. Crafting pixel-perfect interfaces with exceptional UX.</p>
            <div className="tech-badges">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">API Integration</span>
            </div>
            <div className="arrow-link">Explore Frontend →</div>
          </Link>

          <Link href="/backend" className="role-card card-backend">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 12H4M12 4v16M5 5l14 14M5 19L19 5" stroke="currentColor"/>
                <circle cx="12" cy="12" r="2.5" stroke="currentColor"/>
              </svg>
            </div>
            <h3>Backend Engineering</h3>
            <p>Scalable APIs, asynchronous task queues, and optimized databases. Expert in Python, Django, DRF, Celery, Redis, and PostgreSQL.</p>
            <div className="tech-badges">
              <span className="tech-badge">Python/Django</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">Celery</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">PostgreSQL</span>
            </div>
            <div className="arrow-link">Explore Backend →</div>
          </Link>

          <Link href="/data-analytics" className="role-card card-data">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3M12 2v8M9 7l3-3 3 3" stroke="currentColor"/>
                <rect x="3" y="12" width="18" height="8" rx="1" stroke="currentColor"/>
              </svg>
            </div>
            <h3>Data Analytics</h3>
            <p>Turn raw data into actionable insights. Expertise in Excel, Python (pandas), SQL, Tableau, Power BI, and statistical analysis.</p>
            <div className="tech-badges">
              <span className="tech-badge">Excel / Power Query</span>
              <span className="tech-badge">Python (pandas)</span>
              <span className="tech-badge">SQL</span>
              <span className="tech-badge">Tableau / Power BI</span>
              <span className="tech-badge">Data Visualization</span>
            </div>
            <div className="arrow-link">Explore Data Analytics →</div>
          </Link>
        </div>

        <div className="about-short">
          <h3>👋 About Me</h3>
          <p>I'm Denis Kavishe, a versatile technologist based in Arusha, Tanzania. With a strong foundation in computer science and hands-on experience at e-Government Authority (e-GA), KH MMBAGA, and God's Plan Charity, I deliver high-quality solutions across the full technology spectrum. Whether it's building dynamic frontends, robust backends, or data-driven insights, I bring precision, creativity, and reliability to every project.</p>
          <div className="quick-contact">
            <a href="mailto:zooperk2g@gmail.com" className="contact-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              zooperk2g@gmail.com
            </a>
            <a href="https://wa.me/255748920929" className="contact-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +255 748 920 929
            </a>
            <a href="#" className="contact-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Arusha, Tanzania
            </a>
          </div>
        </div>

        <div className="footer">
          <p>© 2026 Denis Kavishe — Portfolio Hub. Choose a specialization to explore detailed projects, experience, and certifications.</p>
        </div>
      </div>
    </div>
  )
}