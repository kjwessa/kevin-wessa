'use client'

import React from 'react'
import type { Page, Media, Post } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

type HeroBaseProps = {
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

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
} as const

export const RenderHero: React.FC<{ hero?: NonNullable<Page['hero']> }> = ({ hero }) => {
  if (!Array.isArray(hero) || hero.length === 0) return null

  const heroData = hero[0]
  const { type } = heroData || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  // Extract and transform the props that the hero components expect
  const heroProps: HeroBaseProps = {
    links: heroData.links?.map((item) => ({
      link: {
        type: item.link?.type || undefined,
        label: item.link?.label || undefined,
        reference: item.link?.reference
          ? {
              relationTo: item.link.reference.relationTo,
              value: item.link.reference.value,
            }
          : undefined,
        url: item.link?.url || undefined,
      },
    })),
    media: heroData.media as Media | undefined,
    richText: heroData.richText || undefined,
  }

  return <HeroToRender {...heroProps} />
}
