// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const Technologies: CollectionConfig = {
  slug: 'technologies',

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
        description: 'Add the title of the technology here.',
      },
    },
    {
      name: 'logoLight',
      type: 'upload',
      label: 'Logo Light',
      required: false,
      relationTo: 'media',
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
    singular: 'Technology',
    plural: 'Technologies',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
