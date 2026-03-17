import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'FAMGCE | Industrial Contracting & Manpower Services – Saudi Arabia',
  description: 'Future Al Millennium General Contracting Est — comprehensive industrial support services in Saudi Arabia including manpower, equipment, vehicles, and material supply.',
  keywords: 'industrial contracting Saudi Arabia, manpower services KSA, equipment rental Saudi Arabia, FAMGCE, construction services',
  icons: {
    icon: '/images/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "Future Al Millennium General Contracting Est",
              "alternateName": "FAMGCE",
              "description": "Comprehensive industrial support and general contracting services in Saudi Arabia",
              "areaServed": { "@type": "Country", "name": "Saudi Arabia" },
              "serviceType": ["Manpower Services","Equipment Services","Vehicle Services","Material and Supply"],
            })
          }}
        />
      </body>
    </html>
  )
}
