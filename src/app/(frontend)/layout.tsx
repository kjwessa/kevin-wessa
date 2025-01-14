import type { Metadata } from 'next'
import React from 'react'
import { AdminBar } from '@/components/payload/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import localFont from 'next/font/local'
import { Footer } from '@/Footer/Component'
import { Grain } from '@/components/Grain'
import { Header } from '@/globals/Header/Component'

import '@/styles/globals.css'
import { siteConfig } from '@/config/site'

const bebasNeue = localFont({
  src: '../../fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas-neue',
  preload: true,
  display: 'swap',
})

const roboto = localFont({
  src: '../../fonts/Roboto.ttf',
  variable: '--font-roboto',
  preload: true,
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" className={`${bebasNeue.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />
        <div className="flex min-h-screen w-full flex-col">
          <Grain>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </Grain>
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.brand.domain),
  title: siteConfig.meta.seo.defaultTitle,
  description: siteConfig.meta.seo.defaultDescription,
  openGraph: mergeOpenGraph(),
  twitter: {
    card: siteConfig.meta.seo.twitter?.cardType || 'summary_large_image',
    creator: siteConfig.meta.seo.twitter?.handle,
  },
}
