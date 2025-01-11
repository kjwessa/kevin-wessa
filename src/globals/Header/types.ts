import type { Page } from '@/payload-types'

export type NavItem = {
  link: {
    type?: 'reference' | 'custom'
    reference?: {
      relationTo: 'pages'
      value: string | Page
    }
    url?: string
    label: string
  }
}
