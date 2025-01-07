'use client'

import React, { useState, useEffect } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

import { CMSLink } from '@/components/Link'
import { ThemeBeta } from '@/components/layout'
import OffCanvas from './OffCanvas'
import MenuButton from './MenuButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <ThemeBeta theme="dark" className="sticky top-0 z-50 w-full transition-colors duration-300">
      <header className="text-sm">
        <div className="mx-auto max-w-[100rem] px-6 md:px-8 lg:px-12">
          <div className="relative flex items-center justify-between py-4">
            {/* Left side - Navigation Links */}
            <nav className="hidden items-center space-x-8 font-semibold uppercase lg:flex">
              <div>
                <CMSLink type="custom" url="/work" appearance="link" label="Our Work" />
              </div>
              <div>
                <CMSLink type="custom" url="/services" appearance="link" label="Services" />
              </div>
              <div>
                <CMSLink type="custom" url="/about" appearance="link" label="About" />
              </div>
              <div>
                <CMSLink type="custom" url="/why-brewww" appearance="link" label="Why Us?" />
              </div>
              <div>
                <CMSLink type="custom" url="/journal" appearance="link" label="Journal" />
              </div>
            </nav>

            {/* Center - Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/home">
                <Image
                  className="w-36 max-w-full cursor-pointer"
                  src="https://bucket.brewww.studio/brewww/media/brewww_logo_logotype_full_gold.svg"
                  alt="Brewww Studio logo version logotype in brand gold"
                  width={144}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Right side - Contact */}
            <div className="flex items-center space-x-4">
              <span className="hidden lg:inline-block">
                <CMSLink
                  type="custom"
                  url="mailto:hello@brewww.studio"
                  appearance="link"
                  label="hello@brewww.studio"
                  className="uppercase"
                />
              </span>
              <div className="flex items-center space-x-4">
                <CMSLink url="/contact" label="Let's talk" appearance="default" />
                <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvas isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </ThemeBeta>
  )
}
