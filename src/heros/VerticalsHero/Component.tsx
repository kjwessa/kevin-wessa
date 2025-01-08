import { VerticalsHeroClient } from './Component.client'
import type { HeroProps } from '../types'

type Props = Omit<Extract<HeroProps, { blockType: 'verticals' }>, 'blockType'>

export function VerticalsHero({ verticals }: Props) {
  const cards = [
    {
      title: verticals.firstVertical.firstTitle,
      subtitle: verticals.firstVertical.firstSubtitle,
      description: verticals.firstVertical.firstDescription,
    },
    {
      title: verticals.secondVertical.secondTitle,
      subtitle: verticals.secondVertical.secondSubtitle,
      description: verticals.secondVertical.secondDescription,
    },
    {
      title: verticals.thirdVertical.thirdTitle,
      subtitle: verticals.thirdVertical.thirdSubtitle,
      description: verticals.thirdVertical.thirdDescription,
    },
    {
      title: verticals.fourthVertical.fourthTitle,
      subtitle: verticals.fourthVertical.fourthSubtitle,
      description: verticals.fourthVertical.fourthDescription,
    },
  ]

  return <VerticalsHeroClient cards={cards} />
}
