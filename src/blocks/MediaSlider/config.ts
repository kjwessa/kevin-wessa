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
          name: 'slidesVisible',
          type: 'select',
          defaultValue: '1.25',
          admin: {
            description: 'Number of slides visible at once (for centered variant)',
            condition: (_, { variant } = {}) => variant === 'centered',
          },
          options: [
            {
              label: 'Narrow (1.25)',
              value: '1.25',
            },
            {
              label: 'Medium (1.5)',
              value: '1.5',
            },
            {
              label: 'Wide (1.75)',
              value: '1.75',
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
              label: '3:2 (Standard)',
              value: '3/2',
            },
            {
              label: '4:3 (Classic)',
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
