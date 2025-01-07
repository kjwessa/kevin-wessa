import type { Page, Project, Media, Service } from '@root/payload-types'

export type BaseHeroProps = {}

export type LandingHeroProps = BaseHeroProps & {
  blockType: 'landingHero'
  heroTitle?: string | null
  locationText?: string | null
  descriptionText?: string | null
  image?: (string | null) | Media
}

export type LocationHeroProps = BaseHeroProps & {
  blockType: 'locationHero'
  layout?: 'splitWide' | 'splitEqual' | 'full' | null
  label?: {
    enabled?: boolean | null
    text?: string | null
  } | null
  description: any
  locationData: {
    city: string
    state: string
  }
}

export type ProjectHeroBlock = {
  challengeTitle: string
  challengeContent: any
}

export type ProjectHeroProps = BaseHeroProps & {
  blockType: 'projectHero'
  project: Project & {
    hero?: ProjectHeroBlock[] | null
  }
}

export type ServiceHeroProps = BaseHeroProps & {
  blockType: 'serviceHero'
  service: Service
  mainTitle: string
}

export type ContactHeroProps = BaseHeroProps & {
  blockType: 'contactHero'
  title?: string | null
  subtitle?: string | null
  titleLink?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages'
      value: string | Page
    } | null
    url?: string | null
    label?: string
    appearance?: 'default' | null
  } | null
  showVideo?: boolean | null
  videoUrl?: string | null
}

export type HeroProps =
  | LandingHeroProps
  | LocationHeroProps
  | ProjectHeroProps
  | ServiceHeroProps
  | ContactHeroProps
