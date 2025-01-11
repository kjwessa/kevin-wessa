'use client'

import React from 'react'
import { cn } from '@/utilities/cn'
import '@/styles/animations.css'

type Props = {
  scrollingText: Array<{
    text: string
    id?: string | null
  }>
  theme?: 'light' | 'dark' | null
}

export function ScrollingHeroClient({ scrollingText = [], theme = 'light' }: Props) {
  // Create the scrolling text by repeating the items 6 times
  const scrollTextString = Array(6)
    .fill(scrollingText || [])
    .flat()
    .map((item) => item.text)
    .join(' / ')

  return (
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
  )
}
