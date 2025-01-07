import localFont from 'next/font/local'
import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { GridGuide } from '@/components/layout/GridGuide/index'
import { Grain } from '@/components/Grain/index'
import Script from 'next/script'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const DMSans = localFont({
  variable: '--font-dm-sans',
  display: 'swap',
  src: [{ path: '../../fonts/DMSans.ttf', weight: '100 400 900', style: 'normal' }],
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://brewww.studio'),
  title: {
    default: 'Brewww Studio',
    template: '%s | Brewww Studio',
  },
  description: 'We craft brands beyond tomorrow - Brewww Studio',
  openGraph: mergeOpenGraph({
    type: 'website',
    locale: 'en_US',
    url: 'https://brewww.studio',
    siteName: 'Brewww Studio',
    images: [
      {
        url: 'https://brewww.studio/oh-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brewww Studio',
      },
    ],
  }),
  twitter: {
    card: 'summary_large_image',
    creator: '@brewwwstudio',
  },
  authors: [{ name: 'Brewww Studio' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    types: {
      'application/atom+xml': [
        { url: 'https://www.facebook.com/brewwwstudio', title: 'Facebook' },
        { url: 'https://www.instagram.com/brewwwstudio', title: 'Instagram' },
      ],
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      <body className="bg-brand-dark-bg text-gray-50 antialiased">
        <Grain>
          <main className="flex min-h-svh flex-col">{children}</main>
          <GridGuide />
        </Grain>
      </body>
    </html>
  )
}
