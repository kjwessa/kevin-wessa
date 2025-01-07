import type { Media } from '@/payload-types'

export type HomeImageGrowProps = {
  image?: Media | null
}

export type HomeImageGrowBlock = {
  blockType: 'home-image-grow'
} & HomeImageGrowProps
