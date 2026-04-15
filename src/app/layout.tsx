import type { Metadata } from 'next'
import { Outfit, Great_Vibes } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ui/ScrollReveal'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-cursive',
})

export const metadata: Metadata = {
  title: 'Dr. Vikas — Health Specialist',
  description: 'Dedicated to helping you achieve mental clarity and emotional well being through compassionate, personalized care.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.className} ${greatVibes.variable}`}>
      <body className="antialiased bg-background">
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
