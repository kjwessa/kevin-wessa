import type { Block } from 'payload'
import { HeadingFeature, LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const CalloutText: Block = {
  slug: 'calloutText',
  interfaceName: 'CalloutTextBlock',
  labels: {
    singular: 'Callout Text',
    plural: 'Callout Texts',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({
              enabledHeadingSizes: ['h2', 'h3'],
            }),
            LinkFeature({}),
          ]
        },
      }),
    },
    {
      name: 'attribution',
      type: 'text',
      admin: {
        description: 'Optional attribution text',
      },
    },
  ],
}
