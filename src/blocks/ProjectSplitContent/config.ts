import { Block } from 'payload'

export const ProjectSplitContent: Block = {
  slug: 'projectSplitContent',
  labels: {
    singular: 'Project Split Content',
    plural: 'Project Split Contents',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
  ],
}
