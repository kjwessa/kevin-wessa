'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page, Media, Post } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media as MediaComponent } from '@/components/Media'
import { RichText } from '@/components/RichText'

type HighImpactHeroProps = {
  links?: {
    link: {
      type?: 'reference' | 'custom'
      label?: string
      reference?: {
        relationTo: 'pages' | 'posts'
        value: string | number | Page | Post
      }
      url?: string
    }
  }[]
  media?: Media
  richText?: any
}

export const HighImpactHero: React.FC<HighImpactHeroProps> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="relative z-10 container mb-8 flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 md:justify-center">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <MediaComponent fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
