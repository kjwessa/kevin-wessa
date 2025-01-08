import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { fields } from '@payloadcms/plugin-form-builder'

export const formBuilder = formBuilderPlugin({
  fields: {
    payment: false,
    text: true,
    email: true,
    textarea: true,
    number: true,
    select: true,
    state: true,
    country: true,
    checkbox: true,
    message: true,
  },
  formOverrides: {
    fields: ({ defaultFields }) => {
      return defaultFields.map((field) => {
        if (field.type === 'blocks') {
          return {
            ...field,
            blocks: field.blocks.map((block) => {
              if (['text', 'email', 'textarea', 'number'].includes(block.slug)) {
                return {
                  ...block,
                  fields: [
                    ...(block.fields || []),
                    {
                      name: 'placeholder',
                      type: 'text',
                      label: 'Placeholder',
                      admin: {
                        description: 'The text to show when the field is empty',
                      },
                    },
                  ],
                }
              }
              return block
            }),
          }
        }
        return field
      })
    },
  },
})
