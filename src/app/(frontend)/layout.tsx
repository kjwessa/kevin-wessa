import type { Metadata } from 'next'
import { cn } from 'src/utilities/cn'
import React from 'react'
import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import localFont from 'next/font/local'

import '@/styles/globals.css'
import { getServerSideURL } from '@/utilities/getURL'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={cn(bebasNeue.variable, roboto.variable, 'antialiased')}>
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
