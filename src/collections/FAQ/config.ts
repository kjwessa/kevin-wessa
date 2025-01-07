// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const FAQ: CollectionConfig = {
  slug: 'faq',

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
      label: 'Question',
      required: true,
      unique: true,
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Answer',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      defaultValue: 'general',
      options: [
        {
          label: 'Web Design',
          value: 'web-design',
        },
        {
          label: 'SEO',
          value: 'seo',
        },
        {
          label: 'General',
          value: 'general',
        },
      ],
      admin: {
        description: 'Select the category this FAQ belongs to',
        position: 'sidebar',
      },
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Company',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'FAQ',
    plural: 'FAQ',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
