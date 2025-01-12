import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import { Footer } from '@/Footer/Component'
import { Grain } from '@/components/Grain'
import { cn } from '@/utilities/cn'
import { Header } from '@/globals/Header/Component'
import localFont from 'next/font/local'

const bebasNeue = localFont({
  src: '../../../fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas-neue',
  preload: true,
  display: 'swap',
})

const roboto = localFont({
  src: '../../../fonts/Roboto.ttf',
  variable: '--font-roboto',
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Kevin Wessa',
    default: 'Kevin Wessa',
  },
}

export default function InnerLayout({ children }: PropsWithChildren) {
  return (
    <div className={cn('flex min-h-screen w-full flex-col', bebasNeue.variable, roboto.variable)}>
      <Grain>
        <Header />
        <main className={cn('flex-1')}>{children}</main>
        <Footer />
      </Grain>
    </div>
  )
}
