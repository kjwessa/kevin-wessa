import React from 'react'
import Image from 'next/image'
import { ScrollingHeroClient } from '@/heros/ScrollingHero/Component.client'
import { ThemeBeta } from '@/components/layout/ThemeBeta'

const scrollingText = [
  { text: 'INSIGHTS + INSIGHTS + INSIGHTS', id: '1' },
  { text: 'INSIGHTS + INSIGHTS + INSIGHTS', id: '2' },
  { text: 'INSIGHTS + INSIGHTS + INSIGHTS', id: '3' },
]

export function JournalHero() {
  return (
    <ThemeBeta theme="inherit" background="primary">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 py-4">
          <ScrollingHeroClient scrollingText={scrollingText} theme="light" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="font-inter text-secondary-100/90 text-xl font-[400] tracking-[3.2px] uppercase">
                Featured
              </p>
              <h1 className="font-bebas-neue text-secondary-100 text-[134px] leading-[91%] font-[400] tracking-[-4px] uppercase">
                Starting in the Middle
              </h1>
              <p className="font-inter text-secondary-100/90 text-2xl leading-[150%]">
                On beginning to share after years of building - because there's never a perfect time
                to start.
              </p>
            </div>

            <button className="group border-secondary-100/90 hover:bg-secondary-100 hover:text-primary-600 flex w-fit items-center gap-8 rounded-full border px-8 py-6 transition-all">
              <span className="font-inter text-secondary-100/90 group-hover:text-primary-600 text-2xl tracking-[3.84px] uppercase transition-colors">
                Keep Reading
              </span>
              <svg
                className="text-secondary-100/90 group-hover:text-primary-600 h-6 w-6 transition-transform group-hover:translate-x-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG_8519.jpeg"
              alt="Featured journal image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    </ThemeBeta>
  )
}
