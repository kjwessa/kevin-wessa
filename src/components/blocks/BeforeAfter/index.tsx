import React from 'react'
import type { BeforeAfterSliderBlock as BeforeAfterSliderBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'
import { BeforeAfter } from '@/components/BeforeAfter'

export const BeforeAfterSliderBlock: React.FC<{ block: BeforeAfterSliderBlockProps }> = ({
  block,
}) => {
  const { beforeImage, afterImage, backgroundColor = 'bg-neutral-950' } = block

  const beforeImageUrl = typeof beforeImage === 'string' ? beforeImage : beforeImage?.url
  const afterImageUrl = typeof afterImage === 'string' ? afterImage : afterImage?.url
  const beforeImageAlt =
    typeof beforeImage === 'string' ? 'Before image' : (beforeImage as Media)?.alt || 'Before image'
  const afterImageAlt =
    typeof afterImage === 'string' ? 'After image' : (afterImage as Media)?.alt || 'After image'

  if (!beforeImageUrl || !afterImageUrl) return null

  return (
    <BeforeAfter
      beforeImage={beforeImageUrl}
      afterImage={afterImageUrl}
      beforeImageAlt={beforeImageAlt}
      afterImageAlt={afterImageAlt}
      backgroundColor={backgroundColor}
    />
  )
}
