import type { Media } from '@/payload-types'

type BaseHeroProps = {
  id?: string | null
  blockName?: string | null
  blockType: 'verticals'
}

export type VerticalsHeroProps = BaseHeroProps & {
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

export type HeroProps = VerticalsHeroProps
