import { Block } from 'payload'

export const SplitContent: Block = {
  slug: 'splitContent',
  interfaceName: 'SplitContentBlock',
  labels: {
    singular: 'Split Content',
    plural: 'Split Content Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'firstPart',
          label: 'First Part',
          type: 'text',
          required: true,
          defaultValue: 'Posuere interdum',
        },
        {
          name: 'highlight',
          label: 'Highlighted Part',
          type: 'text',
          required: true,
          defaultValue: 'tincidunt',
        },
        {
          name: 'lastPart',
          label: 'Last Part',
          type: 'text',
          required: true,
          defaultValue: 'tortor',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content',
    },
  ],
}
