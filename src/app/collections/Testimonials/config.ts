// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      unique: true,
      admin: {
        description: 'Add the title of the testimonial here.',
      },
    },
    {
      name: 'callout',
      type: 'textarea',
      label: 'Callout',
      required: true,
      admin: {
        description: 'Add a short excerpt of the testimonial here.',
      },
    },
    {
      name: 'testimonial',
      type: 'richText',
      label: 'Full Testimonial',
      required: true,
      admin: {
        description: 'Add the full testimonial content here. ',
      },
    },
    {
      name: 'author',
      type: 'text',
      label: 'Testimonial Author',
      required: true,
      admin: {
        description: 'Add the name of the person that left the testimonial',
      },
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
