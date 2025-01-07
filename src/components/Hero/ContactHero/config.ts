import type { Block } from 'payload'
import { link } from '@/fields/link'

export const ContactHero: Block = {
  slug: 'contactHero',
  labels: {
    singular: 'Contact Hero',
    plural: 'Contact Heroes',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
      defaultValue: 'Contact',
      admin: {
        description: 'The smaller text that appears above the title.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Exhale. Help is here.',
      admin: {
        description: 'The main heading text.',
      },
    },
    {
      ...link({
        appearances: ['default'],
        overrides: {
          name: 'titleLink',
          label: 'Title Link',
          admin: {
            description: 'The link for the button next to the title.',
          },
        },
      }),
    },
    {
      name: 'showVideo',
      type: 'checkbox',
      label: 'Show Background Video',
      defaultValue: false,
      admin: {
        description: 'Enable this to add a background video to the hero.',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Video URL',
      required: true,
      admin: {
        description: 'URL for the hero background video.',
        condition: (_, { showVideo }) => Boolean(showVideo),
      },
    },
  ],
}
