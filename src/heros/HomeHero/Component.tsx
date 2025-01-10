import React from 'react'
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'
import { AnimatedHeroClient } from './Component.client'
import { WordPair } from './types'
import wordPairs from './wordPairs.json'

export function AnimatedHero() {
  return (
    <BlockThemeBeta theme="light">
      <AnimatedHeroClient wordPairs={wordPairs as WordPair[]} />
    </BlockThemeBeta>
  )
}
