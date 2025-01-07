// Payload Imports
import type { CollectionConfig } from 'payload'
// Access Control
import { authenticated } from '@/access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',

  //* Access Settings
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Full Name',
          required: true,
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  timestamps: true,
}
