import type { Block } from 'payload'

export const ScrollingHeroBlock: Block = {
  slug: 'scrollingHero',
  interfaceName: 'ScrollingHeroBlock',
  labels: {
    singular: 'Scrolling Hero',
    plural: 'Scrolling Heroes',
  },
  fields: [
    {
      name: 'scrollingText',
      type: 'array',
      label: 'Scrolling Text Items',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
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
