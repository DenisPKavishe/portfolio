'use client'
import { useEffect, useRef } from 'react'

interface Stat {
  number: string
  label: string
}

interface HeroProps {
  badge: string
  title: string
  name: string
  role: string
  description: string
  stats: Stat[]
  imageUrl: string
  accentColor: string
}

export default function Hero({ 
  badge, 
  title, 
  name, 
  role, 
  description, 
  stats, 
  imageUrl,
  accentColor
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0'
      heroRef.current.style.animation = 'fadeInUp 0.8s ease forwards'
    }
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-label" style={{ color: accentColor }}>{badge}</div>
        <h1 className="hero-title">{title} <span className="accent" style={{ color: accentColor }}>{name}</span><br />{role}</h1>
        <p className="hero-desc">{description}</p>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-number" style={{ color: accentColor }}>{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-socials">
          <a href="mailto:zooperk2g@gmail.com" className="social-btn" style={{ '--hover-color': accentColor } as React.CSSProperties}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://wa.me/255748920929" className="social-btn" style={{ '--hover-color': accentColor } as React.CSSProperties}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/denis-kavishe" className="social-btn" style={{ '--hover-color': accentColor } as React.CSSProperties}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={imageUrl} alt={name} />
      </div>

      <style>{`
        .hero {
          padding: 120px 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: calc(100vh - 70px);
        }
        .hero-content {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .hero-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .hero-desc {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 480px;
        }
        .hero-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 32px;
        }
        .stat-item {
          text-align: center;
        }
        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 800;
          display: block;
        }
        .stat-label {
          font-size: 12px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-socials {
          display: flex;
          gap: 12px;
        }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .social-btn:hover {
          background: var(--hover-color, ${accentColor});
          color: white;
          border-color: var(--hover-color, ${accentColor});
          transform: translateY(-3px);
        }
        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          opacity: 0;
          animation: fadeIn 1s ease 0.3s forwards;
        }
        .hero-image img {
          width: 100%;
          max-width: 400px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 3px solid white;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (max-width: 968px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 140px 30px 80px;
          }
          .hero-desc {
            margin: 0 auto 32px;
          }
          .hero-stats, .hero-socials {
            justify-content: center;
          }
          .hero-image {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}