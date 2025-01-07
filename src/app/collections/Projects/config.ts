// Payload Imports
import type { CollectionConfig } from 'payload'

// Access Control
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

// Fields
import { slugField } from '@/fields/slug'

// Hooks
import { revalidateProject, revalidateDelete } from './hooks/revalidateProject'
import { setMetaImageFallback } from '@/hooks/setMetaImageFallback'

import { generatePreviewPath } from '@root/utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Blocks
import { ProjectHero } from '@/components/Hero/ProjectHero/config'
import { ProjectImageBlock } from '@/blocks/ProjectImage/config'
import { ProjectSplitContent } from '@/blocks/ProjectSplitContent/config'
import { ProjectInsight } from '@/blocks/ProjectInsight/config'
import { ProjectGallerySlider } from '@/blocks/ProjectGallerySlider/config'

export const Projects: CollectionConfig = {
  slug: 'projects',

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
      label: 'Project Title',
      required: true,
      unique: true,
      admin: {
        description: 'The title of the project as it appears around the site.',
      },
    },
    {
      name: 'snippet',
      type: 'text',
      label: 'Project Snippet',
      required: true,
      admin: {
        description: 'The snippet of the project as it appears around the site.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      required: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: false,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Select the services associated with this project.',
      },
    },
    {
      name: 'projectLink',
      type: 'text',
      label: 'Project Link',
      required: false,
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
              blocks: [ProjectHero],
              maxRows: 1,
              defaultValue: [
                {
                  blockType: 'projectHero',
                },
              ],
              admin: {
                description: 'The hero section for this project.',
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                ProjectImageBlock,
                ProjectSplitContent,
                ProjectInsight,
                ProjectGallerySlider,
              ],
              admin: {
                description: 'Add content blocks to build out this project page.',
              },
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
            description: 'Advanced settings for controlling project visibility and behavior.',
          },
        },
      ],
    },
    ...slugField(),
  ],

  //* Admin Settings
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Portfolio',
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'projects',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'projects',
        req,
      }),
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
  },
  defaultSort: 'title',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  hooks: {
    beforeChange: [setMetaImageFallback],
    afterChange: [revalidateProject],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 } },
    maxPerDoc: 25,
  },
}
