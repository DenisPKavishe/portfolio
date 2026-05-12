'use client'
import Link from 'next/link'

interface FooterProps {
  variant?: 'frontend' | 'backend' | 'data'
}

export default function Footer({ variant = 'frontend' }: FooterProps) {
  const getAccentColor = () => {
    switch(variant) {
      case 'frontend': return '#6B1D2B'
      case 'backend': return '#0F4C81'
      case 'data': return '#059669'
      default: return '#6B1D2B'
    }
  }

  const accentColor = getAccentColor()
  const accentHover = variant === 'frontend' ? '#4a1520' : variant === 'backend' ? '#0a3a62' : '#047857'

  const getTitle = () => {
    switch(variant) {
      case 'frontend': return 'Frontend Developer crafting modern, high-performance web experiences.'
      case 'backend': return 'Backend Developer crafting high‑performance APIs with Python, Django, Redis, and Celery.'
      case 'data': return 'Data Analyst transforming raw data into actionable business insights.'
      default: return 'Building high-quality digital solutions with passion and precision.'
    }
  }

  return (
    <footer className="footer-modern">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 style={{ background: `linear-gradient(135deg, #fff 0%, ${accentColor} 100%)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Denis Kavishe
            </h3>
            <p>{getTitle()}</p>
            <div className="footer-social">
              <a href="mailto:kavishedenis55@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://wa.me/255748920929">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#technologies">Tech Stack</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><Link href="/">Home-Index</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Denis Kavishe</p>
        </div>
      </div>

      <style jsx>{`
        :root {
          --accent: ${accentColor};
          --accent-hover: ${accentHover};
          --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-modern {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          color: white;
          padding: 60px 40px 30px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .footer-brand h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .footer-brand p {
          color: #a0a0b0;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .footer-social {
          display: flex;
          gap: 12px;
        }
        .footer-social a {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition);
        }
        .footer-social a:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }
        .footer-links h4 {
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: #a0a0b0;
          text-decoration: none;
          font-size: 14px;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 5px;
        }
        .footer-newsletter p {
          color: #a0a0b0;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .newsletter-input {
          display: flex;
          gap: 10px;
        }
        .newsletter-input input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 30px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: white;
          outline: none;
        }
        .newsletter-input input::placeholder {
          color: #888;
        }
        .newsletter-input button {
          border: none;
          padding: 12px 20px;
          border-radius: 30px;
          color: white;
          cursor: pointer;
          transition: var(--transition);
        }
        .newsletter-input button:hover {
          background: var(--accent-hover);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
          text-align: center;
          color: #888;
          font-size: 13px;
        }
        .footer-heart {
          color: #e91e63;
          display: inline-block;
          animation: heartbeat 1.5s ease infinite;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @media (max-width: 768px) {
          .footer-modern {
            padding: 40px 20px 30px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }
          .footer-social {
            justify-content: center;
          }
          .footer-links ul {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .newsletter-input {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  )
}