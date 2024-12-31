import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const HumaneVF = localFont({
  variable: '--font-humane-vf',
  display: 'swap',
  src: [
    {
      path: '../../../src/fonts/Humane-VF.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
})

const GeneralSansVariable = localFont({
  variable: '--font-general-sans-variable',
  display: 'swap',
  src: [
    {
      path: '../../../src/fonts/GeneralSans-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Kevin Wessa - Designer, Developer, Photographer',
  description: 'Kevin J. Wessa is a designer, developer, and photographer based in Cleveland, OH',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${HumaneVF.variable} ${GeneralSansVariable.variable}`}>
      <body>{children}</body>
    </html>
  )
}
