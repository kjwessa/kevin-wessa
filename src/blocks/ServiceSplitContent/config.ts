import type { Block } from 'payload'

export const ServiceSplitContent: Block = {
  slug: 'serviceSplitContent',
  interfaceName: 'ServiceSplitContent',
  labels: {
    singular: 'Service Split Content',
    plural: 'Service Split Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      admin: {
        description: 'Optional title for the content section',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content for this section',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The image to display alongside the content',
      },
    },
  ],
}
