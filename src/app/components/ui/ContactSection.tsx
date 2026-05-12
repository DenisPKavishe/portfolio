'use client'

interface ContactSectionProps {
  accentColor: string
  email: string
  phone: string
  location: string
  title?: string
  subtitle?: string
}

export default function ContactSection({ 
  accentColor, 
  email, 
  phone, 
  location, 
  title = "Let's talk about your project",
  subtitle = "Available for freelance work, collaborations, or full-time opportunities."
}: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-label" style={{ color: accentColor }}>Get In Touch</div>
          <h2 className="contact-title">Let's Work Together</h2>
        </div>

        <div className="contact-card">
          <div className="contact-info" style={{ backgroundColor: accentColor }}>
            <h3>{title}</h3>
            <p>{subtitle}</p>

            <div className="contact-details">
              <a href={`mailto:${email}`} className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <strong>EMAIL ME</strong>
                  <span>{email}</span>
                </div>
              </a>

              <a href={`tel:${phone}`} className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <strong>CALL / WHATSAPP</strong>
                  <span>{phone}</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <strong>LOCATION</strong>
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 80px 40px;
          background: linear-gradient(135deg, white 0%, #faf5f6 100%);
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .contact-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .contact-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
        }
        .contact-card {
          background: linear-gradient(135deg, white 0%, #faf5f6 100%);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
        }
        .contact-info {
          padding: 60px 48px;
          color: white;
          text-align: center;
        }
        .contact-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .contact-info p {
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.7;
          font-size: 16px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 450px;
          margin: 0 auto;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255,255,255,0.12);
          padding: 18px 28px;
          border-radius: 60px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
        }
        .contact-item:hover {
          background: rgba(255,255,255,0.25);
          transform: translateX(8px);
        }
        .contact-icon {
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-icon svg {
          width: 24px;
          height: 24px;
          stroke: white;
        }
        .contact-text strong {
          font-size: 14px;
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
          opacity: 0.8;
        }
        .contact-text span {
          font-size: 17px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 20px;
          }
          .contact-info {
            padding: 40px 24px;
          }
        }
      `}</style>
    </section>
  )
}