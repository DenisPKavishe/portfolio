'use client'
import { useEffect, useRef } from 'react'

interface TechCardProps {
  icon: string
  name: string
  category?: string
  proficiency?: number
  accentColor?: string
}

export default function TechCard({ icon, name, category, proficiency, accentColor = 'var(--accent)' }: TechCardProps) {
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
    <div ref={cardRef} className="tech-card">
      <div className="tech-icon">{icon}</div>
      <div className="tech-name">{name}</div>
      {category && <div className="tech-category">{category}</div>}
      {proficiency && (
        <div className="tech-progress">
          <div className="tech-progress-bar" style={{ width: `${proficiency}%`, backgroundColor: accentColor }} />
        </div>
      )}

      <style jsx>{`
        .tech-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: scale(0.95);
        }
        .tech-card.visible {
          opacity: 1;
          transform: scale(1);
        }
        .tech-card:hover {
          border-color: ${accentColor};
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .tech-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .tech-name {
          font-weight: 600;
          font-size: 14px;
        }
        .tech-category {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
        }
        .tech-progress {
          margin-top: 12px;
          height: 4px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }
        .tech-progress-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease;
        }
      `}</style>
    </div>
  )
}