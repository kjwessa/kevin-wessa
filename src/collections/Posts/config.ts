// Payload
import type { CollectionConfig } from 'payload'
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

import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Code } from '@/blocks/Code/config'


// Utilities & Hooks
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { populatePublishedOn } from '@/hooks/populatePublishedOn'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
} from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',

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
      label: 'Post Title',
      unique: true,
      required: true,
      admin: {
        description: 'The title of the article as it appears around the site.',
      },
    },
    ...slugField(),
    {
      name: 'tagline',
      type: 'text',
      label: 'Post Tagline',
      required: false,
      admin: {
        description: 'The tagline of the article as it appears around the site.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Post Description',
      required: false,
      admin: {
        description: 'The description of the article as it appears around the site.',
      },
    },
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
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readTime',
      type: 'number',
      required: false,
      label: 'Read Time',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'categories',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ['h2', 'h3', 'h4'],
                    }),
                    BlocksFeature({
                      blocks: [Code],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
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
            description: 'Advanced settings for controlling post visibility and behavior.',
          },
        },
      ],
    },
  ],

  //* Admin Settings

  admin: {
    defaultColumns: ['title', '_status', 'publishedOn', 'updatedAt'],
    group: 'Blog Posts',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    pagination: {
      defaultLimit: 100,
      limits: [25, 50, 100],
    },
    useAsTitle: 'title',
  },

  defaultSort: '-publishedOn',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  hooks: {
    beforeChange: [populatePublishedOn, setMetaImageFallback],
    afterChange: [revalidatePost],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
