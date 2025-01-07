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
import { Banner } from '@/blocks/Banner/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { LandingAbout } from '@/blocks/LandingAbout/config'
import { LandingHero } from '@/components/Hero/LandingHero/config'
import { ContactHero } from '@/components/Hero/ContactHero/config'
import { LandingWork } from '@/blocks/LandingWork/config'
import { LandingFooter } from '@/blocks/LandingFooter/config'
import { LandingService } from '@/blocks/LandingService/config'
import { LandingImage } from '@/blocks/LandingImage/config'
import { FormBlock } from '@/blocks/Form/config'
import { BeforeAfterSlider } from '@/blocks/BeforeAfter/config'
import { TestimonialBlock } from '@/blocks/Testimonial/config'
import { FAQ } from '@/blocks/FAQ/config'
import { HomeImageGrowBlock } from '@/blocks/HomeImageGrow/config'
import { ContactFormSection } from '@/blocks/ContactFormSection/config'

// Utilities Imports
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

const contentFields: Field[] = [
  {
    name: 'hero',
    type: 'blocks',
    blocks: [LandingHero, ContactHero],
    required: true,
    minRows: 1,
    maxRows: 1,
    defaultValue: [
      {
        blockType: 'landingHero',
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
      FormBlock,
      Banner,
      CallToAction,
      LandingAbout,
      LandingWork,
      LandingFooter,
      LandingService,
      LandingImage,
      BeforeAfterSlider,
      TestimonialBlock,
      FAQ,
      HomeImageGrowBlock,
      ContactFormSection,
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
