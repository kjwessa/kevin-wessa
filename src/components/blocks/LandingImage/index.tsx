import type { LandingImageBlock as LandingImageBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

export const LandingImageBlock: React.FC<{ block: LandingImageBlockProps }> = ({ block }) => {
  const { image, alt } = block

  if (!image || !alt) return null

  const imageUrl = typeof image === 'string' ? image : image?.url

  if (!imageUrl) return null

  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
