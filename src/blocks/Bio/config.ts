import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Bio: Block = {
  slug: 'bioBlock',
  interfaceName: 'BioBlock',
  labels: {
    singular: 'Bio Block',
    plural: 'Bio Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'text',
          required: true,
          label: 'Primary Title',
        },
        {
          name: 'secondary',
          type: 'text',
          required: true,
          label: 'Secondary Title',
          admin: {
            description: 'Will be displayed with emphasis/highlight',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'media',
      type: 'group',
      fields: [
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Avatar/Illustration',
        },
        {
          name: 'secondaryImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Secondary Image',
        },
        {
          name: 'verticalText',
          type: 'text',
          label: 'Vertical Text',
          admin: {
            description: 'Text that will appear vertically alongside the images',
          },
        },
      ],
    },
  ],
}
