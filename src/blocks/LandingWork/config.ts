import type { Block } from 'payload'

export const LandingWork: Block = {
  slug: 'landingWork',
  interfaceName: 'LandingWorkBlock',
  labels: {
    singular: 'Landing Work Block',
    plural: 'Landing Work Blocks',
  },
  fields: [
    {
      name: 'date',
      type: 'text',
      required: true,
      defaultValue: '2024',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Work',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'We help brands grow by crafting digital experiences that connect with people.',
    },
    {
      name: 'viewAllText',
      type: 'text',
      required: true,
      defaultValue: 'View All',
    },
    {
      name: 'viewAllLink',
      type: 'text',
      required: true,
      defaultValue: '/work',
    },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      required: true,
      minRows: 4,
      maxRows: 6,
    },
  ],
}