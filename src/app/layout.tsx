import type { Metadata } from 'next'
import { Outfit, Great_Vibes } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FloatingActions from '@/components/ui/FloatingActions'

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
  metadataBase: new URL('https://www.drvikasgiri.com'),
  title: 'Dr. Vikas Giri | Veneers & Cosmetic Dentist, Dubai',
  description:
    "Dr. Vikas Giri is a veneers specialist and cosmetic dentist in Dubai with 23+ years of experience in smile design, veneers, implants, and advanced dental care.",
  openGraph: {
    title: 'Dr. Vikas Giri | Veneers & Cosmetic Dentist, Dubai',
    description:
      "Experience refined cosmetic dentistry with Dr. Vikas Giri in Dubai. Veneers, smile makeovers, implants, and advanced dental care backed by 23+ years of excellence.",
    url: 'https://www.drvikasgiri.com',
    siteName: 'Dr. Vikas Giri',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'og:logo': 'https://www.drvikasgiri.com/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Vikas Giri | Veneers & Cosmetic Dentist, Dubai',
    description:
      "Veneers, smile makeovers, implants, and advanced dental care in Dubai with Dr. Vikas Giri.",
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Dentist'],
  name: 'Dr. Vikas Giri',
  description:
    'Dr. Vikas Giri is a veneers specialist and cosmetic dentist in Dubai with 23+ years of experience in smile design, veneers, implants, and advanced dental care.',
  url: 'https://www.drvikasgiri.com',
  telephone: '+971581049475',
  email: 'contact@drvikasgiri.com',
  image: 'https://www.drvikasgiri.com/doctor.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nadd Hessa, Cedre Villas',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2048',
    longitude: '55.2708',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  openingHours: [
    'Mo-Sa 08:00-20:00',
    'Su 10:00-18:00',
  ],
  medicalSpecialty: 'Dentistry',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      'Veneers',
      'Smile Makeovers',
      'Dental Implants',
      'Teeth Whitening',
      'Root Canal',
      'Laser Dentistry',
      'Pediatric Dentistry',
    ].map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'MedicalProcedure', name: service },
    })),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.className} ${greatVibes.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KL3ZD5DD');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased bg-background">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KL3ZD5DD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReveal />
        <FloatingActions />
        {children}
      </body>
    </html>
  )
}
