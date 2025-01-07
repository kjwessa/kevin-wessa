import type { Block } from 'payload'

export const LandingImage: Block = {
  slug: 'landingImage',
  interfaceName: 'LandingImageBlock',
  labels: {
    singular: 'Landing Image Block',
    plural: 'Landing Image Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    }
  ],
}