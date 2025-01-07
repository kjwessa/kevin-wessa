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
import { revalidateService, revalidateDelete } from './hooks/revalidateService'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

// Utilities
import { generatePreviewPath } from '@root/utilities/generatePreviewPath'

// Blocks
import { ServiceHeroBlock } from '@/components/Hero/ServiceHero/config'
import { ServiceSplitContent } from '@/blocks/ServiceSplitContent/config'
import { ServiceTextCallout } from '@/blocks/ServiceTextCallout/config'
import { ServiceDifferentContent } from '@/blocks/ServiceDifferentContent/config'
import { ServiceIntroContent } from '@/blocks/ServiceIntroContent/config'

export const Services: CollectionConfig = {
  slug: 'services',

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
      label: 'Service Title',
      required: true,
      unique: true,
      admin: {
        description: 'The name of the service as it appears around the site.',
      },
    },
    ...slugField(),
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
        description: 'This image will be used in the hero section and throughout the site.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'pillars',
      required: true,
      hasMany: false,
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
              blocks: [ServiceHeroBlock],
              maxRows: 1,
              defaultValue: [
                {
                  blockType: 'serviceHero',
                },
              ],
              admin: {
                description: 'The hero section for this service.',
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                ServiceSplitContent,
                ServiceDifferentContent,
                ServiceTextCallout,
                ServiceIntroContent,
              ],
              admin: {
                description: 'Add content blocks to build out this service page.',
              },
              required: true,
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
            description: 'Advanced settings for controlling service visibility and behavior.',
          },
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Service',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'services',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'services',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: 'title',
  },
  defaultSort: '-title',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateService],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
