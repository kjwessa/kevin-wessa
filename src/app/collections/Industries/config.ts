// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'

export const Industries: CollectionConfig = {
  slug: 'industries',

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
      label: 'Industry Name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Add the industry name as it will appear around the site.',
      },
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Services',
    listSearchableFields: ['title'],
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Industry',
    plural: 'Industries',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
