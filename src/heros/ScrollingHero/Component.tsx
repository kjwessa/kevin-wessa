'use client'

import React from 'react'
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { cn } from '@/utilities/cn'
import '@/styles/animations.css'
import type { HeroProps } from '../types'

type Props = Omit<Extract<HeroProps, { blockType: 'scrollingHero' }>, 'blockType'>

export function ScrollingHero({ scrollingText = [], theme = 'light' }: Props) {
  // Create the scrolling text by repeating the items 6 times
  const scrollTextString = Array(6)
    .fill(scrollingText || [])
    .flat()
    .map((item) => item.text)
    .join(' / ')

  return (
    <BlockThemeBeta theme={theme}>
      <BlockWrapperBeta padding={{ top: 'xlarge', bottom: 'xlarge' }}>
        {/* Scrolling Text */}
        {scrollingText && scrollingText.length > 0 && (
          <div className="overflow-hidden text-9xl whitespace-nowrap">
            <div
              className={cn(
                'animate-scroll inline-block font-medium tracking-wider',
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600',
              )}
            >
              {scrollTextString}
            </div>
            <div
              className={cn(
                'animate-scroll-delayed inline-block font-medium tracking-wider',
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600',
              )}
            >
              {scrollTextString}
            </div>
          </div>
        )}
      </BlockWrapperBeta>
    </BlockThemeBeta>
  )
}
