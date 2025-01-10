import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import { Footer } from '@/Footer/Component'

export const metadata: Metadata = {
  title: {
    template: '%s | Kevin Wessa',
    default: 'Kevin Wessa',
  },
}

export default function InnerLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
