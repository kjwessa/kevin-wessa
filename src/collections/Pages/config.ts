// Payload Imports
import type { CollectionConfig, Field, Block } from 'payload'

// Access Imports
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Hooks Imports
import { revalidatePage, revalidateDelete } from './hooks/revalidatePage'

// Field Imports
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Block Imports
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { config as VerticalsHero } from '@/heros/VerticalsHero/config'
import { SplitContent } from '@/blocks/SplitContent/config'
import { Content } from '@/blocks/Content/config'
import { ContentBeta } from '@/blocks/ContentBeta/config'
import { MediaGrid } from '@/blocks/MediaGrid/config'
import { Bio } from '@/blocks/Bio/config'

// Utilities Imports
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

const contentFields: Field[] = [
  {
    name: 'hero',
    type: 'blocks',
    blocks: [VerticalsHero],
    required: true,
    minRows: 1,
    maxRows: 1,
    defaultValue: [
      {
        blockType: 'verticals',
        verticals: {
          firstVertical: {
            firstTitle: 'Brand',
            firstSubtitle: 'Strategy & Identity',
            firstDescription:
              'A tool to shape perceptions, craft meaningful stories, and build lasting connections with audiences.',
          },
          secondVertical: {
            secondTitle: 'Design',
            secondSubtitle: 'UX Designer',
            secondDescription:
              'A tool to create experiences, guide journeys, and empathize with the needs of others.',
          },
          thirdVertical: {
            thirdTitle: 'Code',
            thirdSubtitle: 'Full Stack Developer',
            thirdDescription:
              'A tool to give the order to the chaos, commit to the bigger picture, and git ship done.',
          },
          fourthVertical: {
            fourthTitle: 'Build',
            fourthSubtitle: 'Company Leadership',
            fourthDescription:
              'A tool to transform ideas into ventures, navigate growth challenges, and scale meaningful businesses.',
          },
        },
      },
    ],
    admin: {
      description: 'The hero section for this page.',
    },
  },
  {
    name: 'layout',
    type: 'blocks',
    label: 'Layout',
    required: true,
    minRows: 1,
    maxRows: 20,
    blocks: [MediaBlock, SplitContent, Content, ContentBeta, MediaGrid, Bio] as Block[],
    admin: {
      description: 'Add content blocks to build out this page.',
    },
  },
]

export const Pages: CollectionConfig = {
  slug: 'pages',

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
      label: 'Title',
      type: 'text',
      required: true,
      unique: true,
    },
    ...slugField(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: contentFields,
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
            description: 'Advanced settings for controlling page visibility and behavior.',
          },
        },
      ],
    },
  ],

  //* Admin Settings
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => {
        return generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })
      },
    },
    preview: (data, { req }) => {
      return generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      })
    },
  },
  hooks: {
    beforeDelete: [revalidateDelete],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
