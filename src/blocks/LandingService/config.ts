import { Block } from 'payload'

export const LandingService: Block = {
  slug: 'landingService',
  interfaceName: 'LandingServiceBlock',
  labels: {
    singular: 'Landing Service Block',
    plural: 'Landing Service Blocks',
  },
  fields: [
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'Service ID',
          required: true,
        },
        {
          name: 'serviceName',
          type: 'text',
          label: 'Service Name',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'mainImage',
          type: 'upload',
          label: 'Main Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'hoverImage',
          type: 'upload',
          label: 'Hover Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'tools',
          type: 'array',
          label: 'Tools',
          required: true,
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Tool Name',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
