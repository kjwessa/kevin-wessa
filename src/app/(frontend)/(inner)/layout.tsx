import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import { Footer } from '@/Footer/Component'
import { Grain } from '@/components/Grain'
import { cn } from '@/utilities/cn'
import { Header } from '@/globals/Header/Component'

export const metadata: Metadata = {
  title: {
    template: '%s | Kevin Wessa',
    default: 'Kevin Wessa',
  },
}

export default function InnerLayout({ children }: PropsWithChildren) {
  return (
    <div className={cn('flex min-h-screen w-full flex-col')}>
      <Grain>
        <Header />
        <main style={{ fontFamily: 'var(--font-bebas-neue)' }} className={cn('flex-1')}>
          {children}
        </main>
        <Footer />
      </Grain>
    </div>
  )
}
