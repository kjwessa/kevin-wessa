import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { HeadingFeature } from '@payloadcms/richtext-lexical'

export const ServiceDifferentContent: Block = {
  slug: 'serviceDifferentContent',
  interfaceName: 'ServiceDifferentContent',
  labels: {
    singular: 'Service Different Content',
    plural: 'Service Different Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The main title for this section.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
        ],
      }),
      required: true,
      admin: {
        description: 'The main content that will be displayed in two columns.',
      },
    },
  ],
}
