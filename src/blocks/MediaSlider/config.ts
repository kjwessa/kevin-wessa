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
          name: 'variant',
          type: 'select',
          defaultValue: 'centered',
          options: [
            {
              label: 'Centered with Overflow',
              value: 'centered',
            },
            {
              label: 'Full Width Grid',
              value: 'grid',
            },
            {
              label: 'Contained',
              value: 'contained',
            },
          ],
        },
        {
          name: 'gap',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small (8px)',
              value: 'small',
            },
            {
              label: 'Medium (16px)',
              value: 'medium',
            },
            {
              label: 'Large (24px)',
              value: 'large',
            },
          ],
        },
        {
          name: 'aspectRatio',
          type: 'select',
          defaultValue: '4/3',
          options: [
            {
              label: '4:3 (Standard)',
              value: '4/3',
            },
            {
              label: '16:9 (Widescreen)',
              value: '16/9',
            },
            {
              label: '1:1 (Square)',
              value: '1/1',
            },
            {
              label: '3:4 (Portrait)',
              value: '3/4',
            },
          ],
        },
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
