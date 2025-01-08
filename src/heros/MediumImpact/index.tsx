import React from 'react'

import type { Page, Media, Post } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media as MediaComponent } from '@/components/Media'
import { RichText } from '@/components/RichText'

type MediumImpactHeroProps = {
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

export const MediumImpactHero: React.FC<MediumImpactHeroProps> = ({ links, media, richText }) => {
  return (
    <div className="">
      <div className="container mb-8">
        <div className="max-w-[36.5rem]">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
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
      {media && typeof media === 'object' && (
        <div className="relative">
          <MediaComponent className="w-full" priority resource={media} />
        </div>
      )}
    </div>
  )
}
