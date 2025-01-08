'use client'

import React from 'react'
import type { HeroProps } from './types'
import { VerticalsHero } from './VerticalsHero/Component'

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
  const { blockType, ...rest } = props

  if (blockType === 'verticals') {
    return <VerticalsHero {...rest} />
  }

  return null
}
