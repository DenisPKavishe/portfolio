'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavbarProps {
  variant?: 'frontend' | 'backend' | 'data'
}

export default function Navbar({ variant = 'frontend' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getAccentColor = () => {
    switch(variant) {
      case 'frontend': return '#6B1D2B'
      case 'backend': return '#0F4C81'
      case 'data': return '#059669'
      default: return '#6B1D2B'
    }
  }

  const accentColor = getAccentColor()
  const accentLight = variant === 'frontend' ? '#f8e6e9' : variant === 'backend' ? '#e6f0fa' : '#d1fae5'
  const accentHover = variant === 'frontend' ? '#4a1520' : variant === 'backend' ? '#0a3a62' : '#047857'

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuBtn = document.getElementById('mobileMenuBtn')
      const dropdown = document.getElementById('mobileDropdown')
      if (menuBtn && dropdown && !menuBtn.contains(event.target as Node) && !dropdown.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            DENIS <span style={{ color: accentColor }}>KAVISHE</span>
          </Link>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
            <li><a href="#technologies" onClick={(e) => handleLinkClick(e, '#technologies')}>Tech Stack</a></li>
            <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
            <li><a href="#resume" onClick={(e) => handleLinkClick(e, '#resume')}>Resume</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <div 
              className="nav-menu" 
              id="mobileMenuBtn"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </div>
            <a href="#contact" className="btn-primary" onClick={(e) => handleLinkClick(e, '#contact')} style={{ backgroundColor: accentColor }}>
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <div className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`} id="mobileDropdown">
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#technologies" onClick={(e) => handleLinkClick(e, '#technologies')}>Tech Stack</a></li>
          <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#resume" onClick={(e) => handleLinkClick(e, '#resume')}>Resume</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
          <li><a href="#contact" className="mobile-contact-btn" onClick={(e) => handleLinkClick(e, '#contact')} style={{ backgroundColor: accentColor, borderColor: accentColor }}>Hire Me</a></li>
        </ul>
      </div>

      <style jsx>{`
        :root {
          --bg-primary: #f5f5f7;
          --bg-white: #ffffff;
          --bg-card: #ffffff;
          --text-primary: #1a1a2e;
          --text-secondary: #6b7280;
          --text-muted: #9ca3af;
          --accent: ${accentColor};
          --accent-light: ${accentLight};
          --accent-hover: ${accentHover};
          --border: #e5e7eb;
          --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
          --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          padding: 0 40px;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          position: relative;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--text-primary);
          text-decoration: none;
        }
        .nav-logo span {
          background: linear-gradient(135deg, var(--accent) 0%, #c44536 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-menu {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-primary);
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .nav-menu:hover {
          background: var(--accent-light);
        }
        .nav-menu svg {
          width: 20px;
          height: 20px;
          stroke: var(--text-primary);
        }
        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(107, 29, 43, 0.3);
        }
        .mobile-dropdown {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: 999;
          transform: translateY(-120%);
          transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: var(--shadow-md);
          border-radius: 0 0 24px 24px;
        }
        .mobile-dropdown.open {
          transform: translateY(0);
        }
        .mobile-nav-links {
          list-style: none;
          padding: 20px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-nav-links li a {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          display: block;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          transition: var(--transition);
        }
        .mobile-nav-links li a:hover {
          color: var(--accent);
          padding-left: 12px;
        }
        .mobile-contact-btn {
          margin-top: 12px;
          background: var(--accent);
          color: white;
          text-align: center;
          padding: 14px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          display: block;
          transition: var(--transition);
          border-bottom: none !important;
        }
        .mobile-contact-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          padding-left: 0 !important;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }
          .nav-links {
            display: none;
          }
          .nav-menu {
            display: flex;
          }
        }
        @media (min-width: 769px) {
          .mobile-dropdown {
            display: none;
          }
        }
      `}</style>
    </>
  )
}