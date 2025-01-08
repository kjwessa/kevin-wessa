import type { Block } from 'payload'

export const MediaSlider: Block = {
  slug: 'mediaSlider',
  interfaceName: 'MediaSliderBlock',
  labels: {
    singular: 'Media Slider',
    plural: 'Media Slider Blocks',
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 5,
      maxRows: 8,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
          admin: {
            description: 'Brief description of the image for accessibility',
          },
        },
      ],
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'autoplay',
          type: 'checkbox',
          label: 'Enable Autoplay',
          defaultValue: true,
        },
        {
          name: 'loop',
          type: 'checkbox',
          label: 'Enable Loop',
          defaultValue: true,
        },
        {
          name: 'speed',
          type: 'number',
          label: 'Transition Speed (ms)',
          defaultValue: 500,
          admin: {
            description: 'Speed of the slide transition in milliseconds',
          },
        },
      ],
    },
  ],
}
