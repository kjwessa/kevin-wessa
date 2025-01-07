import type { Block } from 'payload'

export const ProjectInsight: Block = {
  slug: 'projectInsight',
  interfaceName: 'ProjectInsightBlock',
  labels: {
    singular: 'Project Insight Block',
    plural: 'Project Insight Blocks',
  },
  fields: [
    {
      name: 'insight',
      type: 'text',
      required: true,
      label: 'Insight Text',
    },
  ],
}
