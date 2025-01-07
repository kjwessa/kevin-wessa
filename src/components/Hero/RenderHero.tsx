import React from 'react'
import type { HeroProps } from './types'
import { LandingHero } from './LandingHero'
import { LocationHero } from './LocationHero'
import { ProjectHero } from './ProjectHero'
import { ServiceHero } from './ServiceHero'
import { ContactHero } from './ContactHero'

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

  if (blockType === 'landingHero') {
    const heroProps = rest as Omit<Extract<HeroProps, { blockType: 'landingHero' }>, 'blockType'>
    // Return null if any required field is missing
    if (
      !heroProps.heroTitle ||
      !heroProps.locationText ||
      !heroProps.descriptionText ||
      !heroProps.image
    ) {
      return null
    }

    return <LandingHero {...heroProps} />
  }

  if (blockType === 'locationHero') {
    const heroProps = rest as Omit<Extract<HeroProps, { blockType: 'locationHero' }>, 'blockType'>
    return <LocationHero {...heroProps} />
  }

  if (blockType === 'projectHero') {
    const heroProps = rest as Omit<Extract<HeroProps, { blockType: 'projectHero' }>, 'blockType'>
    return <ProjectHero {...heroProps} />
  }

  if (blockType === 'serviceHero') {
    const heroProps = rest as Omit<Extract<HeroProps, { blockType: 'serviceHero' }>, 'blockType'>
    // Return null if any required field is missing
    if (!heroProps.mainTitle) {
      return null
    }
    return <ServiceHero {...heroProps} />
  }

  if (blockType === 'contactHero') {
    const heroProps = rest as Omit<Extract<HeroProps, { blockType: 'contactHero' }>, 'blockType'>
    if (!heroProps.videoUrl) {
      return null
    }
    return <ContactHero {...heroProps} />
  }

  return null
}
