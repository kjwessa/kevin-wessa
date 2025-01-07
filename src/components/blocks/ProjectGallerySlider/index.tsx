import { GallerySliderClient } from '@/components/GallerySlider/index.client'
import type { Media } from '@/payload-types'

export type ProjectGallerySliderBlock = {
  blockType: 'projectGallerySlider'
  blockName?: string
  images: Array<{
    image: Media | string
    alt: string
  }>
}

type Props = {
  block: ProjectGallerySliderBlock
}

export const ProjectGallerySlider: React.FC<Props> = ({ block }) => {
  if (!block?.images) {
    return null
  }

  const { images } = block

  const formattedImages = images
    .map((item) => {
      const imageUrl = typeof item.image === 'string' ? item.image : item.image?.url
      if (!imageUrl) return null
      return {
        src: imageUrl,
        alt: item.alt,
      }
    })
    .filter((item): item is { src: string; alt: string } => item !== null)

  return <GallerySliderClient images={formattedImages} />
}
