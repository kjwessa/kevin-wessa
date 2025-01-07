// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Blocks
import { LocationHeroBlock } from '@/components/Hero/LocationHero/config'
import { ContentBasic } from '@/blocks/ContentBasic/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { LocationIntroContent } from '@/blocks/LocationIntroContent/config'

// Hooks
import { revalidateLocation, revalidateDelete } from './hooks/revalidateLocation'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

// Utilities
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Location: CollectionConfig = {
  slug: 'locations',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  //* Collection Fields
  fields: [
    ...slugField(),
    {
      name: 'title',
      type: 'text',
      label: 'Location Title',
      index: true,
      required: true,
      unique: true,
      admin: {
        description: 'The title of the location as it appears around the site.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'locationCity',
          type: 'text',
          label: 'Location City',
          required: true,
          admin: {
            description: 'The city of the location.',
          },
        },
        {
          name: 'locationState',
          type: 'text',
          label: 'Location State',
          required: true,
          admin: {
            description: 'The state of the location.',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'hero',
              type: 'blocks',
              blocks: [LocationHeroBlock],
              maxRows: 1,
              defaultValue: [
                {
                  blockType: 'locationHero',
                  layout: 'splitWide',
                  label: {
                    enabled: true,
                  },
                },
              ],
              admin: {
                description: 'The hero section for this location.',
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              label: 'Layout',
              required: false,
              blocks: [ContentBasic, MediaBlock, LocationIntroContent],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
        {
          name: 'advanced',
          label: 'Advanced',
          fields: [
            {
              name: 'excludeFromSitemap',
              type: 'checkbox',
              label: 'Exclude from Sitemap',
              defaultValue: false,
            },
          ],
          admin: {
            description: 'Advanced settings for controlling location visibility and behavior.',
          },
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title', 'locationCity', 'locationState'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'locations',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'locations',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: 'locationCity',
  labels: {
    singular: 'Location',
    plural: 'Locations',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateLocation],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
