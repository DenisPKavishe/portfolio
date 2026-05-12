'use client'
import { useState, useEffect } from 'react'
import { Experience, Education } from '../../types'

interface TimelineProps {
  experienceData: Experience[]
  educationData: Education[]
  accentColor: string
}

export default function Timeline({ experienceData, educationData, accentColor }: TimelineProps) {
  const [activeTab, setActiveTab] = useState<'exp' | 'edu'>('exp')

  const currentData = activeTab === 'exp' ? experienceData : educationData

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

    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [activeTab])

  return (
    <div>
      <div className="resume-tabs">
        <button
          onClick={() => setActiveTab('exp')}
          className={`tab-btn ${activeTab === 'exp' ? 'active' : ''}`}
          style={activeTab === 'exp' ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab('edu')}
          className={`tab-btn ${activeTab === 'edu' ? 'active' : ''}`}
          style={activeTab === 'edu' ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
        >
          Education
        </button>
      </div>

      <div className="timeline-wrapper">
        {currentData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year" style={{ color: accentColor }}>{item.year}</div>
            <div className="timeline-content">
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-subtitle">{item.role}</div>
              <div className="timeline-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .resume-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 10px 28px;
          border-radius: 30px;
          border: 1px solid #e5e7eb;
          background: white;
          color: #6b7280;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-btn.active {
          color: white;
        }
        .tab-btn:hover:not(.active) {
          border-color: ${accentColor};
          color: ${accentColor};
        }
        .timeline-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline-item {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-year {
          min-width: 100px;
          font-weight: 800;
          font-size: 18px;
          font-family: 'Poppins', sans-serif;
        }
        .timeline-content {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px 24px;
          flex: 1;
          transition: all 0.3s ease;
        }
        .timeline-content:hover {
          border-color: ${accentColor};
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .timeline-title {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .timeline-subtitle {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 12px;
        }
        .timeline-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  )
}