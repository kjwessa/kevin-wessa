import type { Block } from 'payload'

export const LocationHeroBlock: Block = {
  slug: 'locationHero',
  interfaceName: 'LocationHeroBlock',
  labels: {
    singular: 'Location Hero',
    plural: 'Location Heroes',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'splitWide',
      admin: {
        position: 'sidebar',
        description: 'Choose the layout style for this hero section',
      },
      options: [
        { label: 'Split (Wide Left)', value: 'splitWide' },
        { label: 'Split (Equal)', value: 'splitEqual' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'label',
      type: 'group',
      admin: {
        description: 'Configure the label that appears above the title',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show or hide the label',
          },
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Web Design',
          admin: {
            description: 'The text to display in the label',
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Hero Description',
      required: true,
      admin: {
        description: 'The main description text that appears in the hero section.',
      },
    },
  ],
}
