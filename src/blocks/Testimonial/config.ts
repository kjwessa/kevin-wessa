import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'testimonial',
      type: 'relationship',
      relationTo: 'testimonials',
      required: true,
      admin: {
        description: 'Select a testimonial to display in this block',
      },
    },
  ],
}
