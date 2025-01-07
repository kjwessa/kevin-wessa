import type { Block } from 'payload'
import { link } from '@/fields/link'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ContactFormSection: Block = {
  slug: 'contactFormSection',
  interfaceName: 'ContactFormSection',
  labels: {
    singular: 'Contact Form Section',
    plural: 'Contact Form Sections',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      admin: {
        description: 'Select the form to display in this section.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      admin: {
        description: 'The text that appears above the contact form.',
      },
    },
    {
      name: 'showPlanner',
      type: 'checkbox',
      label: 'Enable Project Planner Link',
      defaultValue: true,
    },
    {
      admin: {
        condition: (_, { showPlanner }) => Boolean(showPlanner),
      },
      ...link({
        appearances: ['default'],
        overrides: {
          name: 'planner',
          label: 'Project Planner Link',
          admin: {
            description: 'Link to the project planner.',
          },
        },
      }),
    },
    {
      name: 'showEmail',
      type: 'checkbox',
      label: 'Enable Email Contact',
      defaultValue: true,
    },
    {
      name: 'email',
      type: 'group',
      label: 'Email Contact',
      admin: {
        condition: (_, { showEmail }) => Boolean(showEmail),
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Hate contact forms?',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'hello@brewww.studio',
        },
      ],
    },
  ],
}
