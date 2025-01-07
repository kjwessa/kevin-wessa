// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

// Hooks
import { revalidateTeam, revalidateDelete } from './hooks/revalidateTeam'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

// Utilities
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Team: CollectionConfig = {
  slug: 'team',

  //* Access Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
      label: 'Full Name',
    },
    ...slugField(),
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Role',
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'bioImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Bio Image',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'heroTitle',
      type: 'text',
      label: 'Hero Title',
      required: true,
      admin: {
        description:
          'Will be later replaced by blocks, but for now allows a unique title to appear in the hero',
      },
    },
    {
      name: 'heroDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
        ],
      }),
      label: 'Hero Description',
      required: true,
      admin: {
        description:
          'Will be later replaced by blocks, but for now allows a unique description to appear in the hero',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
        ],
      }),
      label: 'Biography',
      required: true,
      admin: {
        description: 'The biography of the team member.',
      },
    },
    {
      name: 'linkWebsite',
      type: 'text',
      label: 'Website Link',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'linkLinkedin',
      type: 'text',
      label: 'LinkedIn Link',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'linkInstagram',
      type: 'text',
      label: 'Instagram Link',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'linkFacebook',
      type: 'text',
      label: 'Facebook Link',
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      type: 'tabs',
      tabs: [
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
            description: 'Advanced settings for controlling team member visibility and behavior.',
          },
        },
      ],
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Company',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'team',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'team',
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
    singular: 'Team Member',
    plural: 'Team',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateTeam],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
