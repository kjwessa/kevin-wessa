import { HeaderClient } from './Component.client'
import type { NavItem } from '@/types/navigation'

const defaultNavItems: NavItem[] = [
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
      url: '/work',
      label: 'Work',
    },
  },
  {
    link: {
      type: 'custom' as const,
      url: '/contact',
      label: 'Contact',
    },
  },
]

export function Header() {
  // We'll wire this up to the CMS later
  return <HeaderClient navItems={defaultNavItems} />
}
