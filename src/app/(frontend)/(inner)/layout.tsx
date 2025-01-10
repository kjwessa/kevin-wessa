import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import { Footer } from '@/Footer/Component'
import { Grain } from '@/components/Grain'

export const metadata: Metadata = {
  title: {
    template: '%s | Kevin Wessa',
    default: 'Kevin Wessa',
  },
}

export default function InnerLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Grain>
        <main className="flex-1">{children}</main>
        <Footer />
      </Grain>
    </div>
  )
}
