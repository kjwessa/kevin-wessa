import type { Block } from 'payload'

export const ProjectHero: Block = {
  slug: 'projectHero',
  interfaceName: 'ProjectHeroBlock',
  labels: {
    singular: 'Project Hero Block',
    plural: 'Project Hero Blocks',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'This block will use the current project data automatically.',
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'challengeTitle',
      type: 'text',
      label: 'Challenge Title',
      required: true,
      admin: {
        description: 'The title for the challenge section below the hero image',
      },
    },
    {
      name: 'challengeContent',
      type: 'richText',
      label: 'Challenge Content',
      required: true,
      admin: {
        description: 'The rich text content describing the challenge',
      },
    },
  ],
}
