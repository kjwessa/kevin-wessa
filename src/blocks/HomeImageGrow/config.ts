import type { Block } from 'payload'

export const HomeImageGrowBlock: Block = {
  slug: 'home-image-grow',
  labels: {
    singular: 'Home Image Grow',
    plural: 'Home Image Grow Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
    },
  ],
}
