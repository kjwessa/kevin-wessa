import type { Field } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

type SEOFieldsConfig = {
  /**
   * The path to the title field in the collection
   * @default 'title'
   */
  titleField?: string
  /**
   * The path to the description field in the collection
   * @default 'description'
   */
  descriptionField?: string
  /**
   * The path to the image field in the collection
   * @default 'image'
   */
  imageField?: string
  /**
   * Whether to show the fields in a tab
   * @default false
   */
  useTab?: boolean
  /**
   * Whether to show the preview field
   * @default true
   */
  showPreview?: boolean
}

export const getSEOFields = ({
  titleField = 'title',
  descriptionField = 'description',
  imageField = 'image',
  useTab = false,
  showPreview = true,
}: SEOFieldsConfig = {}): Field[] => {
  const fields: Field[] = [
    MetaTitleField({
      hasGenerateFn: true,
      overrides: {
        admin: {
          description: `The SEO title. If not set, will use the ${titleField} field.`,
        },
      },
    }),
    MetaDescriptionField({
      overrides: {
        admin: {
          description: `The SEO description. If not set, will use the ${descriptionField} field.`,
        },
      },
    }),
    MetaImageField({
      relationTo: 'media',
      overrides: {
        admin: {
          description: `The SEO image. If not set, will use the ${imageField} field.`,
        },
      },
    }),
    OverviewField({
      titlePath: 'meta.title',
      descriptionPath: 'meta.description',
      imagePath: 'meta.image',
    }),
  ]

  if (showPreview) {
    fields.push(
      PreviewField({
        hasGenerateFn: true,
        titlePath: 'meta.title',
        descriptionPath: 'meta.description',
      }),
    )
  }

  if (useTab) {
    return [
      {
        type: 'tabs',
        tabs: [
          {
            name: 'meta',
            label: 'SEO',
            fields,
          },
        ],
      },
    ]
  }

  return [
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      fields,
    },
  ]
}
