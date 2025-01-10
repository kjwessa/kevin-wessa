import type { Media } from '@/payload-types'

type BaseHeroProps = {
  id?: string | null
  blockName?: string | null
  blockType: 'verticals' | 'aboutHero' | 'homeHero'
}

export type VerticalsHeroProps = BaseHeroProps & {
  blockType: 'verticals'
  verticals: {
    firstVertical: {
      firstTitle: string
      firstSubtitle: string
      firstDescription: string
    }
    secondVertical: {
      secondTitle: string
      secondSubtitle: string
      secondDescription: string
    }
    thirdVertical: {
      thirdTitle: string
      thirdSubtitle: string
      thirdDescription: string
    }
    fourthVertical: {
      fourthTitle: string
      fourthSubtitle: string
      fourthDescription: string
    }
  }
}

export type AboutHeroProps = BaseHeroProps & {
  blockType: 'aboutHero'
  breadcrumbs?: Array<{
    text: string
    id?: string | null
  }> | null
  title: string
  description?: string | null
  image?: string | Media | null
  theme?: 'light' | 'dark' | null
}

export type HomeHeroProps = BaseHeroProps & {
  blockType: 'homeHero'
}

export type HeroProps = VerticalsHeroProps | AboutHeroProps | HomeHeroProps
