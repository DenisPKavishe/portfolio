'use client'
import { useEffect, useRef } from 'react'
import { Project } from '../../types'

interface PortfolioCardProps {
  project: Project
  accentColor: string
  isBackend?: boolean
  isData?: boolean
}

export default function PortfolioCard({ project, accentColor, isBackend = false, isData = false }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="portfolio-card">
      {project.image ? (
        <img className="portfolio-img" src={project.image} alt={project.title} />
      ) : (
        <div className="portfolio-img-icon">{project.icon}</div>
      )}
      <div className="portfolio-content">
        <div className="portfolio-tag" style={{ color: accentColor }}>{project.tag}</div>
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-desc">{project.desc}</p>
        {project.techStack && (
          <div className="tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-pill" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>{tech}</span>
            ))}
          </div>
        )}
        {project.date && (
          <div className="portfolio-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {project.date}
          </div>
        )}
        <div className="portfolio-buttons">
          <a href={project.demoUrl || '#'} className="btn-icon btn-preview" style={{ backgroundColor: accentColor }}>
            {isData ? 'Live Demo' : isBackend ? 'API Docs' : 'Preview'}
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} className="btn-icon btn-github">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .portfolio-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
        }
        .portfolio-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.03);
        }
        .portfolio-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .portfolio-img-icon {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, ${accentColor}, ${isBackend ? '#1e6aa5' : isData ? '#10b981' : '#c44536'});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 56px;
          color: white;
        }
        .portfolio-content {
          padding: 24px;
        }
        .portfolio-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .portfolio-title {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .portfolio-desc {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tech-pill {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .portfolio-date {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .portfolio-buttons {
          display: flex;
          gap: 12px;
        }
        .btn-icon {
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .btn-preview {
          color: white;
          border: none;
        }
        .btn-preview:hover {
          background: ${accentColor};
          opacity: 0.85;
          transform: translateY(-2px);
        }
        .btn-github {
          background: #f5f5f7;
          color: #1a1a2e;
          border: 1px solid #e5e7eb;
        }
        .btn-github:hover {
          border-color: ${accentColor};
          color: ${accentColor};
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}