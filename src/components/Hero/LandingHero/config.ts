import type { Block } from 'payload'

export const LandingHero: Block = {
  slug: 'landingHero',
  labels: {
    singular: 'Landing Hero',
    plural: 'Landing Heroes',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      label: 'Hero Title',
    },
    {
      name: 'locationText',
      type: 'text',
      required: true,
      label: 'Location Text',
    },
    {
      name: 'descriptionText',
      type: 'textarea',
      required: true,
      label: 'Description Text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hero Image',
    },
  ],
}
