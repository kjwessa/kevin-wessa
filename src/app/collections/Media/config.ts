// Payload Imports
import type { CollectionConfig, GetAdminThumbnail } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

// Hooks
import { generateFileHash } from './hooks/generateFileHash'
//TODO ensure the hash gets wiped if an image fails to actually upload
export const Media: CollectionConfig = {
  slug: 'media',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description: 'This is the alt text for the image',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
      required: false,
      admin: {
        description:
          'This is the caption for the image. Optional, but helpful for Blog Posts requiring a caption.',
      },
    },
    {
      name: 'fileHash',
      type: 'text',
      admin: {
        hidden: true,
      },
      unique: true,
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['filename', 'alt', 'caption'],
    listSearchableFields: ['alt', 'caption'],
  },

  hooks: {
    beforeChange: [generateFileHash],
  },

  upload: {
    adminThumbnail: (({
      doc,
    }: {
      doc: { sizes: { thumbnail?: { url: string } }; url?: string }
    }) => {
      if (doc.sizes?.thumbnail?.url) {
        return doc.sizes.thumbnail.url
      }
      return doc.url || null
    }) satisfies GetAdminThumbnail,
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'full',
        width: 2600,
      },
    ],
  },
}
