import { Block } from 'payload'

export const AboutHero: Block = {
  slug: 'aboutHero',
  labels: {
    singular: 'About Hero',
    plural: 'About Heros',
  },
  fields: [
    {
      name: 'breadcrumbs',
      type: 'array',
      label: 'Animated Breadcrumbs',
      minRows: 2,
      maxRows: 2,
      labels: {
        singular: 'Breadcrumb',
        plural: 'Breadcrumbs',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description:
          'Enter two text items that will alternate in the header (e.g., "KEVIN WESSA", "MY STORY")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'light',
      options: [
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
      ],
    },
  ],
}
