import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      fields: [
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Reference', value: 'reference' },
                { label: 'Custom', value: 'custom' },
              ],
            },
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'reference',
              type: 'relationship',
              relationTo: ['pages', 'posts'],
              admin: {
                condition: (_, { type } = {}) => type === 'reference',
              },
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, { type } = {}) => type === 'custom',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
}
