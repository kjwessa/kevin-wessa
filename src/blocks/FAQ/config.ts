import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      required: true,
      minRows: 3,
      maxRows: 10,
      admin: {
        description: 'Select FAQs to display in this block',
      },
    },
  ],
}
