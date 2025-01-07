import type { Block } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const LocationIntroContent: Block = {
  slug: 'location_intro_content',
  interfaceName: 'LocationIntroContentBlock',
  labels: {
    singular: 'Location Intro Content',
    plural: 'Location Intro Contents',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      admin: {
        description: 'The small text that appears above the title',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The main title for this section',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: [
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
          LinkFeature({}),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      admin: {
        description: 'The main content for this section',
      },
    },
  ],
}
