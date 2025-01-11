'use client'

import React from 'react'
import type { HeroProps, VerticalsHeroProps, AboutHeroProps, HomeHeroProps } from './types'
import { VerticalsHero } from './VerticalsHero/Component'
import { AboutHero } from './AboutHero/Component'
import { AnimatedHero } from './HomeHero/Component'
import { ScrollingHero } from './ScrollingHero/Component'

/**
 * RenderHero Component
 *
 * Renders a hero section from a Payload page field group.
 * Each hero type is rendered using its corresponding React component.
 *
 * @param props - Hero field group data from the page
 * @returns React element for the hero or null if invalid
 */
export const RenderHero: React.FC<HeroProps> = (props) => {
  if (props.blockType === 'verticals') {
    const { blockType, ...rest } = props as VerticalsHeroProps
    return <VerticalsHero {...rest} />
  }

  if (props.blockType === 'aboutHero') {
    const { blockType, ...rest } = props as AboutHeroProps
    return <AboutHero {...rest} />
  }

  if (props.blockType === 'homeHero') {
    return <AnimatedHero />
  }

  if (props.blockType === 'scrollingHero') {
    return <ScrollingHero {...props} />
  }

  return null
}
