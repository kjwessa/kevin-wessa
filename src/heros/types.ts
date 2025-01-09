import type { Media } from '@/payload-types'

type BaseHeroProps = {
  id?: string | null
  blockName?: string | null
  blockType: 'verticals' | 'aboutHero'
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
  breadcrumbs: Array<{ text: string }>
  title: string
  description?: string
  image?: {
    id: string
    alt: string
    url: string
  }
  theme?: 'light' | 'dark'
}

export type HeroProps = VerticalsHeroProps | AboutHeroProps
