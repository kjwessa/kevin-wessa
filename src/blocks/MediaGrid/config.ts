import type { Block } from 'payload'

export const MediaGrid: Block = {
  slug: 'mediaGrid',
  interfaceName: 'MediaGridBlock',
  labels: {
    singular: 'Media Grid',
    plural: 'Media Grid Blocks',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'aspectRatio',
          type: 'select',
          defaultValue: 'auto',
          options: [
            {
              label: 'Auto',
              value: 'auto',
            },
            {
              label: 'Square (1:1)',
              value: '1:1',
            },
            {
              label: 'Portrait (3:4)',
              value: '3:4',
            },
            {
              label: 'Landscape (4:3)',
              value: '4:3',
            },
            {
              label: 'Wide (16:9)',
              value: '16:9',
            },
          ],
        },
        {
          name: 'size',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'Masonry',
          value: 'masonry',
        },
      ],
    },
  ],
}
