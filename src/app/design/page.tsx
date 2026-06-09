'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/ui/Hero'
import Timeline from '../components/ui/Timeline'
import ContactSection from '../components/ui/ContactSection'
import FloatingCVButton from '../components/ui/FloatingCVButton'
import { designTechStack, designProjects, designExperience, designEducation, designStats } from '../data/designData'

export default function DesignPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null)
  const accentColor = '#8B5CF6'
  const email = 'kavishedenis55@gmail.com'
  const phone = '+255746965913'
  const location = 'Arusha, Tanzania'

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simple scroll animation without IntersectionObserver
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const items = document.querySelectorAll('.animate-on-scroll')
      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight - 100
        if (isVisible) {
          item.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const openModal = (project: typeof designProjects[0]) => {
    setSelectedImage({
      src: project.image,
      title: project.title,
      category: project.category
    })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  if (!mounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid rgba(255,255,255,0.3)', 
            borderTopColor: 'white', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: 'white' }}>Loading Graphic Design Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="design-page">
      <style jsx global>{`
        .design-page {
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
          border-radius: 40px 40px 0 0;
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
          color: #1f2937;
        }
        
        /* Tech Stack Cards */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .tech-card {
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          border-radius: 20px;
          padding: 32px 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        }
        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px -8px rgba(139, 92, 246, 0.4);
        }
        .tech-icon {
          font-size: 56px;
          margin-bottom: 16px;
          display: inline-block;
        }
        .tech-name {
          font-weight: 700;
          font-size: 16px;
          color: white;
        }
        
        /* Design Gallery Grid */
        .design-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }
        .design-gallery-item {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        }
        .design-gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 40px -12px rgba(139, 92, 246, 0.3);
        }
        .design-gallery-item .image-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
        }
        .design-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .design-gallery-item:hover img {
          transform: scale(1.05);
        }
        .design-info {
          padding: 20px;
          background: white;
        }
        .design-info h4 {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 6px;
        }
        .design-info p {
          font-size: 13px;
          color: ${accentColor};
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          animation: zoomIn 0.3s ease;
        }
        .modal-image-container {
          position: relative;
          width: auto;
          height: auto;
          max-width: 85vw;
          max-height: 75vh;
        }
        .modal-image-container img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
        }
        .modal-info {
          padding: 20px;
          text-align: center;
          background: white;
        }
        .modal-info h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .modal-info p {
          font-size: 14px;
          color: ${accentColor};
          font-weight: 600;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        .modal-close:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        /* About Section */
        .about-section {
          background: linear-gradient(135deg, white 0%, #F3E8FF 100%);
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
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          color: white;
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
          color: #1f2937;
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
          color: #1f2937;
        }
        .about-right {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .about-right:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 45px -12px rgba(139, 92, 246, 0.2);
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
        
        /* Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
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
          .design-gallery {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }
        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .design-gallery {
            grid-template-columns: 1fr;
          }
          .tech-card {
            padding: 24px 16px;
          }
          .tech-icon {
            font-size: 48px;
          }
          .design-gallery-item .image-container {
            height: 220px;
          }
          .modal-info h3 {
            font-size: 16px;
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
          .design-gallery-item .image-container {
            height: 200px;
          }
          .modal-close {
            top: 8px;
            right: 8px;
            width: 32px;
            height: 32px;
            font-size: 18px;
          }
        }
      `}</style>

      <Navbar variant="graphic" />
      
      <Hero 
        badge="✦ CREATIVE PORTFOLIO ✦"
        title="I'm"
        name="Denis Kavishe"
        role="Graphic Designer"
        description="Creative Graphic Designer specializing in brand identity, logo design, social media graphics, and print materials. Transforming ideas into stunning visual stories that captivate and communicate."
        stats={designStats}
        imageUrl="/denis.PNG"
        accentColor={accentColor}
      />

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="about-badge">Who I Am</div>
            <h2>Creating Visual <span className="about-highlight">Stories</span> That Inspire</h2>
            <div className="about-text">I'm Denis Kavishe, a creative graphic designer with a passion for visual storytelling. I blend artistic vision with strategic thinking to create designs that not only look beautiful but also communicate effectively.</div>
            <div className="about-signature">
              <div className="signature-line"></div>
              <p>Denis Kavishe</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-quote">"Design is not just what it looks like and feels like. Design is how it works."</div>
            <div className="about-full-text">Creative Graphic Designer with a strong foundation in visual communication and brand identity. I specialize in creating memorable designs that help businesses stand out. My experience includes logo design, social media graphics, print materials, and complete brand identity systems. I combine creativity with strategic thinking to deliver designs that achieve real results.</div>
            <div className="about-stats-mini">
              <div className="stat-mini"><div className="stat-mini-number">3+</div><div className="stat-mini-label">Years Exp</div></div>
              <div className="stat-mini"><div className="stat-mini-number">50+</div><div className="stat-mini-label">Projects</div></div>
              <div className="stat-mini"><div className="stat-mini-number">100%</div><div className="stat-mini-label">Satisfaction</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="technologies">
        <div className="section-header">
          <div className="section-label">Creative Tools</div>
          <h2 className="section-title">Design Software</h2>
        </div>
        <div className="tech-grid">
          {designTechStack.map((tech, index) => (
            <div key={index} className="tech-card animate-on-scroll">
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Gallery Section - Grid of Images with Modal */}
      <section className="section-alt" id="gallery">
        <div className="section-alt-inner">
          <div className="section-header">
            <div className="section-label">Visual Showcase</div>
            <h2 className="section-title">Design Gallery</h2>
            <p style={{ color: '#6b7280', marginTop: '8px' }}>Click on any image to view full size</p>
          </div>
          <div className="design-gallery">
            {designProjects.map((project, index) => (
              <div 
                key={index} 
                className="design-gallery-item animate-on-scroll"
                onClick={() => openModal(project)}
              >
                <div className="image-container">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={index < 3}
                  />
                </div>
                <div className="design-info">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <section className="section" id="resume">
        <div className="section-header">
          <div className="section-label">Career Journey</div>
          <h2 className="section-title">Experience Timeline</h2>
        </div>
        <Timeline 
          experienceData={designExperience} 
          educationData={designEducation} 
          accentColor={accentColor}
        />
      </section>

      <ContactSection 
        accentColor={accentColor}
        email={email}
        phone={phone}
        location={location}
        title="Let's Create Something Beautiful"
        subtitle="I'm currently available for freelance design projects, brand identity work, or full-time creative positions."
      />

      <Footer variant="graphic" />
      <FloatingCVButton accentColor={accentColor} />
    </div>
  )
}