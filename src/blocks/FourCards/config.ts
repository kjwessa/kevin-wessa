import type { Block } from 'payload'

export const FourCards: Block = {
  slug: 'fourCards',
  interfaceName: 'FourCardsBlock',
  labels: {
    singular: 'Four Cards',
    plural: 'Four Cards Blocks',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 4,
      admin: {
        description: 'Exactly 4 cards are required',
      },
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: {
            description: 'Number displayed at the top (e.g., "01")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
