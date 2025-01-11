'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import type { NavItem } from '@/types/navigation'
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '@/icons/index'

type FooterClientProps = {
  navItems: NavItem[]
}

const defaultNavItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CONTACT', href: '/contact' },
]

export function FooterClient({ navItems }: FooterClientProps) {
  const pathname = usePathname()

  return (
    <footer className="mt-auto">
      {/* Top Card Section */}
      <div className="mx-auto max-w-[120rem] px-[3.75rem] pb-32">
        <div className="relative rounded-[1.25rem] bg-[#F5E2CA] px-32 py-24">
          {/* Left Side Text */}
          <div className="absolute bottom-[13.5rem] -left-10 flex rotate-90 gap-[1.875rem] text-[1.375rem] text-[#27272A]">
            <span>Ac tristique</span>
            <span>Accumsan</span>
            <span>Pellentesque</span>
          </div>

          {/* Right Side Text */}
          <div className="absolute top-10 -right-10 flex -rotate-90 gap-[1.875rem] text-[1.375rem] text-[#27272A]">
            <span>Lacinia</span>
            <span>Sed</span>
            <span>Venenatis</span>
          </div>

          <div className="mx-auto max-w-[73.25rem] text-center">
            <p className="mb-4 text-sm tracking-wider text-[#27272A] uppercase">
              Sit arcu a orci elit
            </p>
            <h2 className="mb-8 text-[4rem] leading-tight font-medium">
              <span className="text-[#27272A]">BUT ENOUGH ABOUT ME,</span>
              <br />
              <span className="text-[#B43435]">LET'S CONNECT</span>
              <span className="text-[#27272A]"> AND TALK ABOUT YOU.</span>
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#27272A]"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#27272A]"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#27272A]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#27272A]"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="relative">
        {/* Navigation Bar */}
        <nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
          <div className="bg-background/80 flex items-center gap-8 rounded-full px-8 py-4 backdrop-blur-sm">
            {defaultNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'hover:text-foreground/80 text-sm font-medium transition-colors',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60',
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Background Text */}
        <div className="pointer-events-none right-0 bottom-0 left-0 z-40 bg-[#8B0000]/5 py-4">
          <p className="text-center text-[120px] leading-none font-bold text-[#8B0000]/10">
            KEVINWESSA
          </p>
        </div>
      </div>
    </footer>
  )
}
