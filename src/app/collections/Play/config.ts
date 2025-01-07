// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import {
  PreviewField,
  OverviewField,
  MetaTitleField,
  MetaImageField,
  MetaDescriptionField,
} from '@payloadcms/plugin-seo/fields'

// Hooks
import { populatePublishedOn } from '@/hooks/populatePublishedOn'

// Utilities
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'

export const Playground: CollectionConfig = {
  slug: 'play',

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
        description: 'Add the title of the Playground case study here.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        description: 'Add the tagline for the playground here.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Add the description for the playground here.',
      },
    },

    ...slugField(),
    {
      name: 'publishedOn',
      type: 'date',
      required: true,
      label: 'Published On',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'play',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'play',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Playground',
    plural: 'Playground',
  },

  hooks: {
    beforeChange: [populatePublishedOn],
    afterRead: [
      ({ doc }) => {
        if (doc.publishedOn && typeof doc.publishedOn === 'object' && '$date' in doc.publishedOn) {
          doc.publishedOn = new Date(doc.publishedOn.$date)
        }
        return doc
      },
    ],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
