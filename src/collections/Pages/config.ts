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

import { SplitContent } from '@/blocks/SplitContent/config'
import { Content } from '@/blocks/Content/config'
import { ContentBeta } from '@/blocks/ContentBeta/config'
import { MediaGrid } from '@/blocks/MediaGrid/config'
import { Bio } from '@/blocks/Bio/config'
import { MediaSlider } from '@/blocks/MediaSlider/config'
import { CalloutText } from '@/blocks/CalloutText/config'
import { AboutIntro } from '@/blocks/AboutIntro/config'
import { FourCards } from '@/blocks/FourCards/config'
import { FormBlock } from '@/blocks/Form/config'

// Hero Imports
import { config as VerticalsHero } from '@/heros/VerticalsHero/config'
import { config as AboutHero } from '@/heros/AboutHero/config'
import { config as HomeHero } from '@/heros/HomeHero/config'
import { ScrollingHeroBlock } from '@/heros/ScrollingHero/config'

// Utilities Imports
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

const contentFields: Field[] = [
  {
    name: 'hero',
    type: 'blocks',
    blocks: [VerticalsHero, AboutHero, HomeHero, ScrollingHeroBlock],
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
              'Crafting compelling brand stories and visual identities that resonate with your audience.',
          },
          secondVertical: {
            secondTitle: 'Digital',
            secondSubtitle: 'Design & Development',
            secondDescription:
              'Building beautiful, performant digital experiences that drive results.',
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
    blocks: [
      MediaBlock,
      SplitContent,
      Content,
      ContentBeta,
      MediaGrid,
      Bio,
      MediaSlider,
      CalloutText,
      AboutIntro,
      FourCards,
      FormBlock,
    ] as Block[],
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
