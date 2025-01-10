import type { Block } from 'payload'
import { HeadingFeature, LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const AboutIntro: Block = {
  slug: 'aboutIntro',
  interfaceName: 'AboutIntroBlock',
  labels: {
    singular: 'About Intro',
    plural: 'About Intro Blocks',
  },
  fields: [
    {
      name: 'mainText',
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'gridItems',
      type: 'array',
      required: true,
      minRows: 9,
      maxRows: 9,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
