import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vegan Retreat 2026 - Veganuary Special',
  description: 'A gathering for vegans to connect, reflect, and celebrate near Bangalore. January 1-4, 2026.',
  keywords: ['vegan', 'retreat', 'veganuary', 'bangalore', 'community', 'wellness'],
  openGraph: {
    title: 'Vegan Retreat 2026 - Veganuary Special',
    description: 'A gathering for vegans to connect, reflect, and celebrate near Bangalore. January 1-4, 2026.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
