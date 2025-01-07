import type { GlobalConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Footer: GlobalConfig = {
  slug: 'footer',

  //* Admin Settings
  access: {
    read: anyone,
  },

  //* Global Fields
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'logo',
      required: false,
    },

    {
      name: 'copyrightNotice',
      label: 'Copyright Notice',
      type: 'text',
      required: false,
      admin: {
        description: 'Appears in the footer',
      },
    },
  ],
}
