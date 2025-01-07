import { Block } from 'payload'

export const ProjectGallerySlider: Block = {
  slug: 'projectGallerySlider',
  labels: {
    singular: 'Project Gallery Slider',
    plural: 'Project Gallery Sliders',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 10,
      labels: {
        singular: 'Image',
        plural: 'Images',
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
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Brief description of the image for accessibility',
          },
        },
      ],
      admin: {
        description: 'Add between 3 and 10 images to display in the slider.',
      },
    },
  ],
}
