import type { Block, Field } from 'payload'

const createVerticalFields = (position: string): Field[] => [
  {
    type: 'text',
    name: `${position}Title`,
    label: `${position} Title`,
    required: true,
  } as Field,
  {
    type: 'text',
    name: `${position}Subtitle`,
    label: `${position} Subtitle`,
    required: true,
  } as Field,
  {
    type: 'textarea',
    name: `${position}Description`,
    label: `${position} Description`,
    required: true,
  } as Field,
]

export const config: Block = {
  slug: 'verticals',
  labels: {
    singular: 'Verticals Hero',
    plural: 'Verticals Heroes',
  },
  fields: [
    {
      type: 'group',
      name: 'verticals',
      label: 'Verticals',
      fields: [
        {
          type: 'group',
          name: 'firstVertical',
          label: 'First Vertical',
          fields: createVerticalFields('first'),
        } as Field,
        {
          type: 'group',
          name: 'secondVertical',
          label: 'Second Vertical',
          fields: createVerticalFields('second'),
        } as Field,
        {
          type: 'group',
          name: 'thirdVertical',
          label: 'Third Vertical',
          fields: createVerticalFields('third'),
        } as Field,
        {
          type: 'group',
          name: 'fourthVertical',
          label: 'Fourth Vertical',
          fields: createVerticalFields('fourth'),
        } as Field,
      ],
    } as Field,
  ],
}
