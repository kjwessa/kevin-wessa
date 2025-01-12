'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import { Title } from '@/components/ui/Title'
import { FooterBlogCard } from '@/components/FooterBlogCard/index'
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

const blogPosts = [
  {
    category: 'Category',
    title: 'A SIDE HUSTLE HELPS YOU PRIORITIZE',
    description:
      "Nothing reveals what truly matters like having no time to waste. The real value isn't the extra money, it's the brutal clarity.",
    href: '/blog/side-hustle',
  },
  {
    category: 'Category',
    title: 'BRANDING MAKES YOU CHOOSE',
    description:
      "Real branding isn't about logos - it's about the courage to choose what you're not and the power of saying no.",
    href: '/blog/branding-choices',
  },
  {
    category: 'Category',
    title: 'DESIGN HELPS YOU COMMUNICATE',
    description:
      "Design isn't about making things pretty - it's about making complex ideas clear through intentional choices.",
    href: '/blog/design-communication',
  },
]

export function FooterClient({ navItems }: FooterClientProps) {
  const pathname = usePathname()

  return (
    <footer className="mt-auto w-full overflow-hidden bg-[#B43435] px-2">
      <div className="flex h-full w-full flex-col items-center">
        {/* Journal Section */}
        <div className="relative w-full bg-[#F5E2CA] p-20">
          {/* Header */}
          <div className="mb-32 flex w-full flex-row items-start justify-between">
            <Title size="headline-large">
              <span className="text-[#161616]">THOUGHTS ON</span>
              <br />
              <span className="text-[#B43435]">COOL THINGS.</span>
            </Title>
            <div className="flex flex-col items-end gap-6">
              <p className="text-[28px] leading-[143%] text-[#272727]">
                Oh no! My journal got leaked to the internet.
                <br />
                How did this happen?
              </p>
              <button className="flex items-center gap-4 rounded-full border border-[#161616] px-8 py-6">
                <span className="text-lg tracking-[3.84px] text-[#161616] uppercase">
                  Explore the Journal
                </span>
                <span className="text-[#161616]">→</span>
              </button>
            </div>
          </div>

          {/* Journal Cards */}
          <div className="grid grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <FooterBlogCard key={post.href} {...post} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative flex w-full flex-col items-center justify-center py-60">
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl leading-6 tracking-[3.84px] text-[#FDEFDD] uppercase">
              Contact me
            </p>
            <Title
              size="display-large"
              className="max-w-[1164px] text-center leading-[90%] tracking-[-4px] text-[#FDEFDD] uppercase"
            >
              But enough about me, let's connect and talk about you.
            </Title>
          </div>

          {/* Side Text */}
          <div className="absolute top-1/2 -left-20 flex -translate-y-1/2 -rotate-90 items-center gap-[30px]">
            <p className="text-2xl leading-[150%] font-bold text-[#FDEFDD]">Lacinia</p>
            <p className="text-2xl leading-[150%] font-bold text-[#FDEFDD]">Sed</p>
            <p className="text-2xl leading-[150%] text-[#FDEFDD]">Venenatis</p>
          </div>
          <div className="absolute top-1/2 -right-20 flex -translate-y-1/2 rotate-90 items-center gap-[30px]">
            <p className="text-2xl leading-[150%] font-bold text-[#FDEFDD]">Ac tristique</p>
            <p className="text-2xl leading-[150%] font-bold text-[#FDEFDD]">Accumsan</p>
            <p className="text-2xl leading-[150%] text-[#FDEFDD]">Pellentesque</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="mb-10 flex w-full items-center justify-between gap-[87px] rounded-[999px] bg-[#F5E2CA] px-[60px] py-8">
          <Title size="headline-small" className="tracking-[-2px] text-[#B43435] uppercase">
            KevinWessa
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
        <p className="font-secondary translate-y-[40%] text-[18vw] leading-[50%] font-bold tracking-[0px] text-[#FDEFDD] uppercase opacity-25">
          KevinWessa
        </p>
      </div>
    </footer>
  )
}
