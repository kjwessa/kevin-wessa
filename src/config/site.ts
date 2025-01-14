export type SiteConfig = {
  meta: {
    brand: {
      name: string
      domain: string
      logo: string
      social: {
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
      }
    }
    seo: {
      titleTemplate: string
      defaultTitle: string
      defaultDescription: string
      defaultImage: string
      locale: string
      openGraph: {
        images: {
          width: number
          height: number
          alt: string
        }
      }
      additionalMeta: Array<{
        name: string
        content: string
      }>
      additionalLinks: Array<{
        rel: string
        href: string
      }>
      twitter?: {
        handle: string
        cardType: 'summary' | 'summary_large_image'
      }
      globalKeywords: string[]
    }
    environments?: {
      development?: {
        noIndex?: boolean
      }
      staging?: {
        noIndex?: boolean
        basicAuth?: {
          enabled: boolean
          username: string
          password: string
        }
      }
    }
  }
  schema: {
    organization: {
      type: 'Organization'
      sameAs: string[]
    }
  }
}

export const siteConfig: SiteConfig = {
  meta: {
    brand: {
      name: 'Kevin Wessa',
      domain: 'https://www.kevinwessa.com',
      logo: 'https://bucket.brewww.studio/brewww/media/brewww_logo_mark_letter-b_gold.svg',
      social: {
        facebook: 'https://www.facebook.com/kevinwessa',
        instagram: 'https://www.instagram.com/kevinwessa',
        twitter: '@kevinwessa',
      },
    },
    seo: {
      titleTemplate: '%s | Kevin Wessa',
      defaultTitle: 'Kevin Wessa - Software Engineer',
      defaultDescription: 'Software Engineer',
      defaultImage: '/website-template-OG.webp',
      locale: 'en_US',
      openGraph: {
        images: {
          width: 1200,
          height: 630,
          alt: 'Kevin Wessa',
        },
      },
      additionalMeta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Kevin Wessa' },
      ],
      additionalLinks: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'me', href: 'https://www.facebook.com/kevinwessa' },
        { rel: 'me', href: 'https://www.instagram.com/kevinwessa' },
      ],
      twitter: {
        handle: '@kevinwessa',
        cardType: 'summary_large_image',
      },
      globalKeywords: ['software', 'engineer', 'developer'],
    },
  },
  schema: {
    organization: {
      type: 'Organization',
      sameAs: ['https://www.facebook.com/kevinwessa', 'https://www.instagram.com/kevinwessa'],
    },
  },
}
