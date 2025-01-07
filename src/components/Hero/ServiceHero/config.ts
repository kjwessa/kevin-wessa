import type { Block } from 'payload'

export const ServiceHeroBlock: Block = {
  slug: 'serviceHero',
  interfaceName: 'ServiceHeroBlock',
  labels: {
    singular: 'Service Hero',
    plural: 'Service Heroes',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'The main title (h1) for the service',
      },
    },
  ],
}
