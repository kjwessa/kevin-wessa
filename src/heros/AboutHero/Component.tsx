'use client'

import React from 'react'
import Image from 'next/image'
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'
import { cn } from '@/utilities/cn'
import '@/styles/animations.css'
import type { HeroProps } from '../types'

type Props = Omit<Extract<HeroProps, { blockType: 'aboutHero' }>, 'blockType'>

export const AboutHero: React.FC<Props> = ({
  breadcrumbs = [],
  title,
  description,
  image,
  theme = 'light',
}) => {
  // Create the scrolling text by repeating the items 6 times
  const scrollText = Array(6)
    .fill(breadcrumbs || [])
    .flat()
    .map((item) => item.text)
    .join(' / ')

  return (
    <BlockThemeBeta theme={theme || 'light'}>
      <BlockWrapperBeta padding={{ top: 'xlarge', bottom: 'xlarge' }}>
        {/* Scrolling Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="absolute top-8 right-0 left-0 overflow-hidden text-9xl whitespace-nowrap">
            <div
              className={cn(
                'animate-scroll inline-block font-medium tracking-wider',
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600',
              )}
            >
              {scrollText}
            </div>
            <div
              className={cn(
                'animate-scroll-delayed inline-block font-medium tracking-wider',
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600',
              )}
            >
              {scrollText}
            </div>
          </div>
        )}

        <BlockContainerBeta size="large">
          {/* Main Content */}
          <div
            className={cn(
              'grid grid-cols-1 items-center gap-8 md:grid-cols-2',
              breadcrumbs && breadcrumbs.length > 0 ? 'pt-16' : 'pt-0',
            )}
          >
            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-tight font-bold md:text-6xl">{title}</h1>
              {description && <p className="text-lg opacity-80 md:text-xl">{description}</p>}
            </div>
            {image && typeof image !== 'string' && image.url && (
              <div className="relative aspect-square overflow-hidden rounded-lg">
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
        </BlockContainerBeta>
      </BlockWrapperBeta>
    </BlockThemeBeta>
  )
}
