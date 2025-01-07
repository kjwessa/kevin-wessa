import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@root/payload-types'
import type { LandingHeroProps } from '../types'
import React from 'react'
import { Title } from '@/components/ui/Title'

export const LandingHero: React.FC<Omit<LandingHeroProps, 'blockType'>> = ({
  heroTitle,
  locationText,
  descriptionText,
  image,
}) => {
  // Return null if any required field is missing
  if (!heroTitle || !locationText || !descriptionText || !image) {
    return null
  }

  const imageUrl = typeof image === 'string' ? image : image.url
  const imageAlt = typeof image === 'string' ? heroTitle : image.alt || heroTitle

  return (
    <div className="relative min-h-[100svh] text-sm text-zinc-800">
      <section className="absolute top-0 right-0 left-0 z-30" id="header">
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-[auto] border-b-2 border-solid border-b-white/[0.15]">
          <div className="flex items-center justify-between border-r-2 border-solid border-r-white/[0.15] p-4">
            <Image
              className="inline-block h-6 w-auto max-w-full align-middle"
              src="/images/brand/brewww-logotype-gold.png"
              alt="Brewww Logo"
              width={200}
              height={40}
              priority
            />
            <div className="text-white">2024</div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer text-white">About</div>
              <div className="relative cursor-pointer text-white">Work</div>
              <div className="relative cursor-pointer text-white">Services</div>
            </div>
            <div className="relative cursor-pointer text-white">Contact</div>
          </div>
        </div>
      </section>

      <section className="relative h-[100svh]">
        <div className="relative z-20 flex h-full flex-col justify-between px-4 pt-24 pb-4">
          <Title el="h1" size="display-large" className="text-white">
            {heroTitle}
          </Title>
          <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-4">
            <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end text-white">
              {locationText}
            </div>
            <p className="col-span-3 col-start-4 row-start-1 row-end-2 text-xl text-white">
              {descriptionText}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 z-10">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={imageUrl || ''}
              alt={imageAlt}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </section>
    </div>
  )
}
