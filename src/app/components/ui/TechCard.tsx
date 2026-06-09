'use client'

import { IconType } from 'react-icons'

interface TechCardProps {
  icon: IconType
  name: string
  accentColor: string
}

export default function TechCard({
  icon: Icon,
  name,
  accentColor
}: TechCardProps) {
  return (
    <div
      className="tech-card"
      style={
        {
          ['--accent' as any]: accentColor
        } as React.CSSProperties
      }
    >
      <div className="tech-icon">
        <Icon size={26} />
      </div>

      <span className="tech-name">{name}</span>

      <style jsx>{`
        .tech-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          transition: all 0.25s ease;
          cursor: pointer;

          position: relative;
          overflow: hidden;
        }

        /* glow effect */
        .tech-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top left,
            var(--accent),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .tech-card:hover::before {
          opacity: 0.15;
        }

        .tech-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          z-index: 1;
        }

        .tech-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--accent);
          z-index: 1;
        }
      `}</style>
    </div>
  )
}