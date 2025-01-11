import React from 'react'
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import type { HeroProps } from '../types'
import { ScrollingHeroClient } from './Component.client'

type Props = Omit<Extract<HeroProps, { blockType: 'scrollingHero' }>, 'blockType'>

export function ScrollingHero({ scrollingText = [], theme = 'light' }: Props) {
  return (
    <BlockThemeBeta theme={theme}>
      <BlockWrapperBeta padding={{ top: 'xlarge', bottom: 'xlarge' }}>
        {scrollingText && scrollingText.length > 0 && (
          <ScrollingHeroClient scrollingText={scrollingText} theme={theme} />
        )}
      </BlockWrapperBeta>
    </BlockThemeBeta>
  )
}
