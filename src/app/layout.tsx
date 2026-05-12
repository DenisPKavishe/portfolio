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
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}