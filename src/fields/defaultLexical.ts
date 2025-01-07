import { Config } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  StrikethroughFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      StrikethroughFeature(),
      LinkFeature({
        enabledCollections: [
          // 'pages',
          // 'posts',
          // 'categories',
          // 'locations',
          // 'brands',
          // 'faq',
          // 'industries',
          // 'journeys',
          // 'locations',
          // 'pillars',
          // 'play',
          // 'results',
          // 'services',
          // 'team',
          // 'technologies',
          // 'work',
        ],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
            },
          ]
        },
      }),
    ]
  },
})
