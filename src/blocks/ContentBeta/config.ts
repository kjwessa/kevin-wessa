import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
    ],
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
    name: 'highlight',
    type: 'group',
    fields: [
      {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enable Text Highlight',
      },
      {
        name: 'color',
        type: 'select',
        admin: {
          condition: (_, { enabled }) => Boolean(enabled),
        },
        options: [
          {
            label: 'Primary',
            value: 'primary',
          },
          {
            label: 'Secondary',
            value: 'secondary',
          },
        ],
      },
    ],
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const ContentBeta: Block = {
  slug: 'contentBeta',
  interfaceName: 'ContentBetaBlock',
  labels: {
    singular: 'Content Beta',
    plural: 'Content Beta Blocks',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid Layout',
          value: 'grid',
        },
        {
          label: 'Centered Content',
          value: 'centered',
        },
        {
          label: 'Split Content',
          value: 'split',
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
        condition: (_, { layout }) => layout === 'grid' || layout === 'split',
      },
      fields: columnFields,
    },
    {
      name: 'center',
      type: 'group',
      admin: {
        condition: (_, { layout }) => layout === 'centered',
      },
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'highlight',
          type: 'group',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Text Highlight',
            },
            {
              name: 'color',
              type: 'select',
              admin: {
                condition: (_, { enabled }) => Boolean(enabled),
              },
              options: [
                {
                  label: 'Primary',
                  value: 'primary',
                },
                {
                  label: 'Secondary',
                  value: 'secondary',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
