import type { Block } from 'payload'

export const LandingAbout: Block = {
  slug: 'landingAbout',
  interfaceName: 'LandingAboutBlock',
  labels: {
    singular: 'Landing About Block',
    plural: 'Landing About Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content',
    },
  ],
}