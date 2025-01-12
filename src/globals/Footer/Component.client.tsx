'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import { Title } from '@/components/ui/Title'
import { FacebookIcon } from '@/icons/FacebookIcon'
import { GitHubIcon } from '@/icons/GitHubIcon'
import { InstagramIcon } from '@/icons/InstagramIcon'
import { LinkedInIcon } from '@/icons/LinkedInIcon'
import type { NavItem } from '@/types/navigation'

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
    <footer className="mt-auto w-full bg-[#B43435] px-2 pb-[183px]">
      <div className="flex h-full w-full flex-col items-center">
        {/* Top Card Section */}
        <div className="relative w-full rounded-[1.25rem] bg-[#F5E2CA] p-10">
          {/* Left Side Text */}
          <div className="absolute bottom-[13.5rem] -left-10 flex rotate-90 gap-[1.875rem] text-[1.375rem] text-[#27272A]">
            <span className="font-bold">Ac tristique</span>
            <span className="font-bold">Accumsan</span>
            <span>Pellentesque</span>
          </div>

          {/* Right Side Text */}
          <div className="absolute top-10 -right-10 flex -rotate-90 gap-[1.875rem] text-[1.375rem] text-[#27272A]">
            <span className="font-bold">Lacinia</span>
            <span className="font-bold">Sed</span>
            <span>Venenatis</span>
          </div>

          <div className="mx-auto max-w-[73.25rem] text-center">
            <p className="mb-4 text-sm tracking-[3.84px] text-[#27272A] uppercase">
              Sit arcu a orci elit
            </p>
            <Title
              size="display-large"
              className="mb-8 text-[114px] leading-[89%] tracking-[-4px] uppercase"
            >
              <span className="text-[#27272A]">BUT ENOUGH ABOUT ME,</span>
              <br />
              <span className="text-[#B43435]">LET'S CONNECT</span>
              <span className="text-[#27272A]"> AND TALK ABOUT YOU.</span>
            </Title>
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

        {/* Journal Section */}
        <div className="mt-16 flex w-full">
          <div className="pr-[265px]">
            <Title
              size="display-large"
              className="text-[134px] leading-[91%] tracking-[-4px] text-[#FDEFDD] uppercase"
            >
              Thoughts on cool things.
            </Title>
            <p className="mt-4 text-[28px] leading-[143%] text-[#FDEFDD]">
              Oh no! My journal got leaked to the internet. How did this happen?
            </p>
            <button className="mt-8 flex items-center gap-8 rounded-full border border-[#F5E2CA] px-[30px] py-[22px]">
              <span className="text-2xl tracking-[3.84px] text-[#F5E2CA] uppercase">
                Explore the Journal
              </span>
              <span className="text-[#F5E2CA]">→</span>
            </button>
          </div>

          <div className="w-[828px]">
            {/* Journal Entry 1 */}
            <div className="border-y border-[#FDEFDD] py-7">
              <div className="flex flex-col gap-4">
                <p className="text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">Category</p>
                <Title
                  size="display-large"
                  className="text-[114px] leading-[89%] tracking-[-4px] text-[#FDEFDD] uppercase"
                >
                  A SIDE HUSTLE HELPS YOU PRIORITIZE
                </Title>
                <p className="text-2xl leading-[150%] text-[#FDEFDD]">
                  Nothing reveals what truly matters like having no time to waste. The real value
                  isn't the extra money, it's the brutal clarity.
                </p>
                <button className="flex items-center gap-1.5 text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">
                  Keep Reading <span>→</span>
                </button>
              </div>
            </div>

            {/* Journal Entry 2 */}
            <div className="border-b border-[#FDEFDD] py-7">
              <div className="flex flex-col gap-4">
                <p className="text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">Category</p>
                <Title
                  size="display-large"
                  className="text-[114px] leading-[89%] tracking-[-4px] text-[#FDEFDD] uppercase"
                >
                  BRANDING MAKES YOU CHOOSE
                </Title>
                <p className="text-2xl leading-[150%] text-[#FDEFDD]">
                  Real branding isn't about logos - it's about the courage to choose what you're not
                  and the power of saying no.
                </p>
                <button className="flex items-center gap-1.5 text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">
                  Keep Reading <span>→</span>
                </button>
              </div>
            </div>

            {/* Journal Entry 3 */}
            <div className="border-b border-[#FDEFDD] py-7">
              <div className="flex flex-col gap-4">
                <p className="text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">Category</p>
                <Title
                  size="display-large"
                  className="text-[114px] leading-[89%] tracking-[-4px] text-[#FDEFDD] uppercase"
                >
                  DESIGN HELPS YOU COMMUNICATE
                </Title>
                <p className="text-2xl leading-[150%] text-[#FDEFDD]">
                  Design isn't about making things pretty - it's about making complex ideas clear
                  through intentional choices.
                </p>
                <button className="flex items-center gap-1.5 text-xl tracking-[3.2px] text-[#FDEFDD] uppercase">
                  Keep Reading <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="mt-16 flex w-full items-center justify-between rounded-full bg-[#F5E2CA] px-[60px] py-8">
          <Title
            size="display-small"
            className="text-[44px] leading-[95%] tracking-[-2px] text-[#B43435] uppercase"
          >
            Kevinwessa
          </Title>
          <div className="flex items-center gap-10">
            {defaultNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-xl tracking-[3.2px] uppercase',
                  pathname === item.href ? 'text-[#B43435]' : 'text-[#B43435]/60',
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-[#B43435]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-[#B43435]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-[#B43435]" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="text-[#B43435]" />
            </a>
          </div>
        </div>

        {/* Background Text */}
        <Title
          size="display-large"
          className="mt-8 text-[461.8px] leading-[90%] tracking-[-10.6px] text-white/10 uppercase"
        >
          Kevinwessa
        </Title>
      </div>
    </footer>
  )
}
