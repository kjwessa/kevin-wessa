import type { Block } from 'payload'

export const ServiceTextCallout: Block = {
  slug: 'serviceTextCallout',
  interfaceName: 'ServiceTextCallout',
  labels: {
    singular: 'Service Text Callout',
    plural: 'Service Text Callouts',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'The main title text for the callout section.',
      },
    },
    {
      name: 'subtext',
      type: 'text',
      label: 'Subtext',
      required: true,
      admin: {
        description: 'The smaller text that appears below the title.',
      },
    },
  ],
}
