// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { authenticated } from '@/access/authenticated'

// Fields
import { slugField } from '@/fields/slug'

// Utilities
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Categories: CollectionConfig = {
  slug: 'categories',

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
      label: 'Category Title',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        description: 'The title of the category as it appears around the site.',
      },
    },
    ...slugField(),
    {
      name: 'relatedPosts',
      label: 'Related Posts',
      type: 'join',
      collection: 'posts',
      on: 'categories',
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Blog Posts',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'categories',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'categories',
        req,
      }),
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'title',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
