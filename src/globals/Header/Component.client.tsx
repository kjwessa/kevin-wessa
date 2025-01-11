'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import type { NavItem } from '@/types/navigation'
import { useState } from 'react'

type HeaderClientProps = {
  navItems?: NavItem[]
}

export function HeaderClient({ navItems = [] }: HeaderClientProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-colors duration-500',
          isOpen ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm',
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              'text-xl font-medium transition-colors duration-500',
              isOpen ? 'text-foreground' : 'text-foreground',
            )}
          >
            Kevin Wessa
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-current"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={cn(
                'text-sm transition-colors duration-500',
                isOpen ? 'text-foreground' : 'text-foreground',
              )}
            >
              {isOpen ? '−' : '+'}
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-500',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {/* Dark overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-black/90 transition-opacity duration-500',
            isOpen ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Menu content */}
        <div
          className={cn(
            'absolute inset-x-4 top-4 h-[400px] rounded-2xl bg-[#F2F2F2] transition-all duration-500',
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <div className="container h-full">
            <div className="grid h-full grid-cols-4">
              {navItems.map((item, i) => {
                const href =
                  item.link.type === 'reference'
                    ? `/${item.link.reference?.value}`
                    : item.link.url || '/'

                return (
                  <Link
                    key={i}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="group border-foreground/10 relative border-l px-8 pt-20 first:border-l-0"
                  >
                    <span
                      className={cn(
                        'text-foreground/60 group-hover:text-foreground text-2xl font-light transition-colors',
                        pathname === href ? 'text-foreground' : '',
                      )}
                    >
                      {item.link.label}
                    </span>
                    <span className="absolute top-20 right-8 text-xl opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
