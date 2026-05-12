'use client'
import { useState, useEffect } from 'react'

interface FloatingCVButtonProps {
  accentColor: string
  cvUrl?: string
}

export default function FloatingCVButton({ accentColor, cvUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }: FloatingCVButtonProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-cv-btn ${isVisible ? 'visible' : 'hidden'}`}
      style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}CC 100%)` }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      <span>View CV (PDF)</span>

      <style jsx>{`
        .floating-cv-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 60px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          letter-spacing: 0.5px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          animation: bounce 2s ease-in-out infinite;
          white-space: nowrap;
        }
        .floating-cv-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          animation: none;
        }
        .floating-cv-btn.hidden {
          opacity: 0;
          pointer-events: none;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 768px) {
          .floating-cv-btn {
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            font-size: 13px;
          }
        }
        @media (max-width: 480px) {
          .floating-cv-btn {
            padding: 9px 16px;
            font-size: 12px;
            gap: 6px;
          }
        }
      `}</style>
    </a>
  )
}