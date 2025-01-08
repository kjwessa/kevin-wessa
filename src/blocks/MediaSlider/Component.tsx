import React from 'react'
import { MediaSliderBlock } from '@/payload-types'
import dynamic from 'next/dynamic'

const MediaSliderClient = dynamic<MediaSliderBlock & { className?: string }>(
  () => import('./Component.client').then((mod) => mod.default),
  { ssr: false },
)

type Props = MediaSliderBlock & {
  className?: string
}

export const MediaSlider: React.FC<Props> = (props) => {
  return <MediaSliderClient {...props} />
}
