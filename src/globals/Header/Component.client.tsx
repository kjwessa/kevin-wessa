'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import type { NavItem } from '@/types/navigation'

type HeaderClientProps = {
  navItems?: NavItem[]
}

export function HeaderClient({ navItems = [] }: HeaderClientProps) {
  const pathname = usePathname()

  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Kevin Wessa
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item, i) => {
            const href =
              item.link.type === 'reference'
                ? `/${item.link.reference?.value}`
                : item.link.url || '/'

            return (
              <Link
                key={i}
                href={href}
                className={cn(
                  'hover:text-primary text-sm font-medium transition-colors',
                  pathname === href ? 'text-primary' : 'text-foreground/60',
                )}
              >
                {item.link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
