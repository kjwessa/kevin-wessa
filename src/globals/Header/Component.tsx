import { HeaderClient } from './Component.client'
import type { NavItem } from '@/types/navigation'

const defaultNavItems: NavItem[] = [
  {
    link: {
      type: 'custom' as const,
      url: '/portfolio',
      label: 'Portfolio',
    },
  },
  {
    link: {
      type: 'custom' as const,
      url: '/specialties',
      label: 'Specialties',
    },
  },
  {
    link: {
      type: 'custom' as const,
      url: '/about',
      label: 'About',
    },
  },
  {
    link: {
      type: 'custom' as const,
      url: '/approach',
      label: 'Approach',
    },
  },
]

export function Header() {
  // We'll wire this up to the CMS later
  return <HeaderClient navItems={defaultNavItems} />
}
