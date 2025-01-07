import React from 'react'

import type { Page, Media, Post } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

type HeroProps = {
  type?: 'highImpact' | 'mediumImpact' | 'lowImpact' | 'none'
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

export const RenderHero: React.FC<{ hero?: unknown[] }> = ({ hero }) => {
  if (!Array.isArray(hero) || hero.length === 0) return null

  const heroData = hero[0] as HeroProps
  const { type } = heroData || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...heroData} />
}
