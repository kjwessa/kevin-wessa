import type { TextProps } from '@/components/ui/Text'

export type TypographySize =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'

export type TextPreset = {
  size: TypographySize
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export type StringPreset = string

export type TypographyPreset = {
  paragraph: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  list: string
  listItem: string
  quote: string
  link: string
}

export const typographyPresets = {
  default: {
    paragraph: 'text-body-large mt-6',
    h1: 'text-headline-large mt-24',
    h2: 'text-headline-medium mt-24',
    h3: 'text-headline-small mt-8',
    h4: 'text-title-large mt-8',
    h5: 'text-title-medium mt-8',
    h6: 'text-title-small mt-8',
    list: 'list-disc list-inside text-body-medium mt-6',
    listItem: 'mb-2',
    quote: 'border-l-4 pl-4 italic mt-8',
    link: 'underline hover:text-brand-gold',
  },
  blogPost: {
    paragraph: 'text-body-large mt-6',
    h1: 'text-headline-large mt-24',
    h2: 'text-headline-medium mt-24',
    h3: 'text-headline-small mt-8',
    h4: 'text-title-large mt-8',
    h5: 'text-title-medium mt-8',
    h6: 'text-title-small mt-8',
    list: 'list-disc list-inside text-body-medium mt-6',
    listItem: 'mb-2',
    quote: 'border-l-4 pl-4 italic mt-8',
    link: 'underline hover:text-brand-gold',
  },
  compact: {
    paragraph: 'text-body-small mt-4',
    h1: 'text-title-large mt-12',
    h2: 'text-title-medium mt-12',
    h3: 'text-title-small mt-6',
    h4: 'text-body-large mt-6',
    h5: 'text-body-medium mt-6',
    h6: 'text-body-small mt-6',
    list: 'list-disc list-inside text-body-small mt-4',
    listItem: 'mb-1',
    quote: 'border-l-2 pl-3 italic mt-6',
    link: 'underline hover:text-brand-gold',
  },
} as const

export default typographyPresets
