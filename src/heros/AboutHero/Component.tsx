'use client'

import React from 'react'
import Image from 'next/image'
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'
import { BlockSpacingBeta } from '@/components/layout/BlockSpacingBeta'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { cn } from '@/utilities/cn'
import '@/styles/animations.css'
import type { HeroProps } from '../types'

type Props = Omit<Extract<HeroProps, { blockType: 'aboutHero' }>, 'blockType'>

export const AboutHero: React.FC<Props> = ({
  breadcrumbs = [],
  title,
  description,
  image,
  theme = 'light'
}) => {
  // Create the scrolling text by repeating the items 4 times
  const scrollText = Array(4).fill(breadcrumbs || []).flat().map(item => item.text).join(' / ')

  return (
    <BlockThemeBeta theme={theme || 'light'}>
      <BlockSpacingBeta>
        <BlockWrapperBeta>
          <div className="relative">
            {/* Scrolling Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="absolute top-0 left-0 right-0 overflow-hidden whitespace-nowrap">
                <div 
                  className={cn(
                    'inline-block font-medium tracking-wider animate-scroll',
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  )}
                >
                  {scrollText}
                </div>
                <div 
                  className={cn(
                    'inline-block font-medium tracking-wider animate-scroll-delayed',
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  )}
                >
                  {scrollText}
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
              breadcrumbs && breadcrumbs.length > 0 ? "pt-16" : "pt-0"
            )}>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                  {title}
                </h1>
                {description && (
                  <p className="text-lg md:text-xl opacity-80">
                    {description}
                  </p>
                )}
              </div>
              {image && typeof image !== 'string' && image.url && (
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt || ''}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </BlockWrapperBeta>
      </BlockSpacingBeta>
    </BlockThemeBeta>
  )
}
