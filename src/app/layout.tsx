import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Denis Kavishe — Portfolio Hub | Frontend • Backend • Data Analytics',
  description: 'Explore my work across frontend engineering, backend architecture, and data analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}