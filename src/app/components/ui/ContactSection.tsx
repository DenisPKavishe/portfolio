'use client'

import { useState } from 'react'

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
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 1500)
  }

  const callNumber = "0748920929"

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-glow" />

      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge" style={{ color: accentColor }}>
            ✦ Get In Touch
          </span>
          <h2 className="contact-title">{title}</h2>
          <p className="contact-subtitle">{subtitle}</p>
        </div>

        <div className="contact-card">
          <div
            className="contact-glass"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, #111827)`
            }}
          >
            <div className="contact-grid">

              {/* Email */}
              <div className="contact-item">
                <div className="text">
                  <strong>Email</strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              {/* Call */}
              <div className="contact-item">
                <div className="text">
                  <strong>Call</strong>
                  <a href={`tel:${callNumber}`}>{callNumber}</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item">
                <div className="text">
                  <strong>WhatsApp</strong>
                  <a
                    href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="text">
                  <strong>Location</strong>
                  <span>{location}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          padding: 100px 20px;
          background: radial-gradient(circle at top, #f8fafc, #ffffff);
          overflow: hidden;
        }

        .contact-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: ${accentColor}33;
          filter: blur(120px);
          top: -150px;
          left: -150px;
          z-index: 0;
        }

        .contact-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-badge {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .contact-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          margin: 12px 0;
        }

        .contact-subtitle {
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-card {
          border-radius: 28px;
          padding: 2px;
          background: linear-gradient(135deg, ${accentColor}, transparent);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .contact-glass {
          border-radius: 26px;
          padding: 40px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: white;
        }

        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 16px;
          background: rgba(255,255,255,0.08);
          transition: all 0.25s ease;
        }

        .contact-item:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.15);
        }

        .text {
          flex: 1;
        }

        .text strong {
          display: block;
          font-size: 13px;
          opacity: 0.7;
          margin-bottom: 4px;
        }

        .text a,
        .text span {
          font-size: 16px;
          font-weight: 600;
          color: white;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .contact-glass {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  )
}