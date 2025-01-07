import type { Block } from 'payload'

export const LandingFooter: Block = {
  slug: 'landingFooter',
  interfaceName: 'LandingFooterBlock',
  labels: {
    singular: 'Landing Footer Block',
    plural: 'Landing Footer Blocks',
  },
  fields: [
    {
      name: 'mainLinks',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Work', href: '/work' },
        { text: 'About', href: '/about' },
        { text: 'News', href: '/news' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { platform: 'Facebook', href: 'https://www.facebook.com/brewwwstudio' },
        { platform: 'Instagram', href: 'https://www.instagram.com/brewwwstudio/' },
      ],
    },
    {
      name: 'consultationText',
      type: 'text',
      required: true,
      defaultValue: 'Interested in working with us? Schedule a free 30 minute consultation.',
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
      defaultValue: "Let's Chat",
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      defaultValue: 'https://go.brewww.studio/discovery',
    },
  ],
}