import type { GlobalConfig } from 'payload'
import { anyone } from '@/access/anyone'

export const Header: GlobalConfig = {
  slug: 'header',

  //* Access Settings
  access: {
    read: anyone,
  },

  //* Global Fields
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      required: false,
    },
    {
      name: 'nav',
      type: 'array',
      label: 'Navigation',
      required: false,
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'link', label: 'Link', type: 'text' },
      ],
    },
  ],
}
