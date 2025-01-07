import type { Block } from 'payload'

export const BeforeAfterSlider: Block = {
  slug: 'beforeAfterSlider',
  interfaceName: 'BeforeAfterSliderBlock',
  labels: {
    singular: 'Before/After Slider Block',
    plural: 'Before/After Slider Blocks',
  },
  fields: [
    {
      name: 'beforeImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Before Image',
    },
    {
      name: 'afterImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'After Image',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'bg-neutral-950',
      options: [
        { label: 'Black', value: 'bg-neutral-950' },
        { label: 'White', value: 'bg-white' },
        { label: 'Gray', value: 'bg-neutral-100' },
      ],
      required: true,
    },
  ],
}
