import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin Wessa',
  description: 'Fullstack Creative',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
