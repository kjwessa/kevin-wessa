import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '@/icons/index'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

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

      {/* Bottom Navigation Section */}
      <div className="bg-[#F5E2CA] text-[#B43435]">
        <div className="mx-auto flex h-32 max-w-[120rem] items-center justify-between px-[3.75rem]">
          <Link href="/" className="text-[2.625rem] font-medium">
            Kevinwessa
          </Link>

          <nav className="flex gap-10">
            <Link href="/" className="text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium">
              About
            </Link>
            <Link href="/portfolio" className="text-base font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-base font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[4.175rem] items-center justify-center rounded-[75rem] border border-[#B43435]"
            >
              <LinkedInIcon color="#B43435" width={34} height={32} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[4.175rem] items-center justify-center rounded-[75rem] border border-[#B43435]"
            >
              <FacebookIcon color="#B43435" width={17} height={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[4.175rem] items-center justify-center rounded-[75rem] border border-[#B43435]"
            >
              <InstagramIcon color="#B43435" width={34} height={33} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-[4.175rem] items-center justify-center rounded-[75rem] border border-[#B43435]"
            >
              <GitHubIcon color="#B43435" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
