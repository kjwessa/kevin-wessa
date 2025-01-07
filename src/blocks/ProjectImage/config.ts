import type { Block } from 'payload'

type DataWithLayout = {
  layout?: 'split' | 'full' | 'asymmetrical'
}

export const ProjectImageBlock: Block = {
  slug: 'projectImage',
  labels: {
    singular: 'Project Image Block',
    plural: 'Project Image Blocks',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      required: true,
      defaultValue: 'full',
      admin: {
        description: 'Choose how the images should be displayed',
      },
      options: [
        { label: 'Split (Two Equal)', value: 'split' },
        { label: 'Full Width', value: 'full' },
        { label: 'Asymmetrical', value: 'asymmetrical' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Add images based on the selected layout. Full width: 1 image, Split/Asymmetrical: 2 images',
      },
      validate: (value, { data }) => {
        if (!value) return true
        const maxRows = (data as DataWithLayout)?.layout === 'full' ? 1 : 2

        if (Array.isArray(value) && value.length > maxRows) {
          return `Maximum ${maxRows} image${maxRows > 1 ? 's' : ''} allowed for this layout`
        }
        return true
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          admin: {
            description: 'Alternative text for accessibility',
          },
        },
        {
          name: 'caption',
          type: 'text',
          admin: {
            description: 'Optional caption displayed below the image',
          },
        },
        {
          name: 'aspectRatio',
          type: 'text',
          admin: {
            description: 'Example: 16/9, 4/3, or 100% (default: 100%)',
            condition: (data) => (data as DataWithLayout)?.layout !== 'asymmetrical',
          },
        },
        {
          name: 'width',
          type: 'number',
          admin: {
            description: 'Image width in pixels',
            condition: (data) => (data as DataWithLayout)?.layout === 'asymmetrical',
          },
        },
        {
          name: 'height',
          type: 'number',
          admin: {
            description: 'Image height in pixels',
            condition: (data) => (data as DataWithLayout)?.layout === 'asymmetrical',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
      admin: {
        description: 'Choose the background color for this section',
      },
    },
  ],
}
