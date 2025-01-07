import localFont from 'next/font/local'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GridGuide } from '@/components/layout/GridGuide/index'
import { Grain } from '@/components/Grain/index'
import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import Script from 'next/script'

const DMSans = localFont({
  variable: '--font-dm-sans',
  display: 'swap',
  src: [
    {
      path: '../../fonts/DMSans.ttf',
      weight: '100 400 900',
      style: 'normal',
    },
  ],
})

const BebasNeue = localFont({
  variable: '--font-bebas-neue',
  display: 'swap',
  src: [
    {
      path: '../../fonts/BebasNeue.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

// Define the JSON-LD schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brewww Studio',
  url: process.env.NEXT_PUBLIC_SERVER_URL || 'https://brewww.studio',
  logo: 'https://bucket.brewww.studio/brewww/media/brewww_logo_mark_letter-b_gold.svg',
  description: 'We craft brands beyond tomorrow - Brewww Studio',
  sameAs: ['https://www.facebook.com/brewwwstudio', 'https://www.instagram.com/brewwwstudio'],
}

export default async function InnerLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" className={`${DMSans.variable} ${BebasNeue.variable}`} suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-gray-950 text-gray-50 antialiased">
        <AdminBar adminBarProps={{ preview: isEnabled }} />
        <Grain>
          <LivePreviewListener />
          <Header />
          {children}
          <Footer />
        </Grain>
        <GridGuide />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://brewww.studio'),
  title: 'Brewww Studio',
  description: 'We craft brands beyond tomorrow - Brewww Studio',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@brewwwstudio',
  },
}
