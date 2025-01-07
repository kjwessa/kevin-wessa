import type { Block } from 'payload'

export const ServiceIntroContent: Block = {
  slug: 'serviceIntroContent',
  interfaceName: 'ServiceIntroContentBlock',
  labels: {
    singular: 'Service Intro Content',
    plural: 'Service Intro Contents',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      admin: {
        description: 'The small text that appears above the title',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The main title for this section',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content for this section',
      },
    },
  ],
}
