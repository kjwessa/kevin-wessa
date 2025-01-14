import type { StaticImageData } from 'next/image'
import React from 'react'
import { MediaGridBlock } from '@/payload-types'
import { Media } from '@/components/core/Media'
import { cn } from 'src/utilities/cn'

const getGridCols = (itemCount: number): string => {
  switch (itemCount) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-2'
    case 3:
      return 'grid-cols-3'
    case 4:
      return 'grid-cols-2 md:grid-cols-4'
    case 5:
    case 6:
      return 'grid-cols-2 md:grid-cols-3'
    default:
      return 'grid-cols-1 md:grid-cols-3'
  }
}

type Props = MediaGridBlock & {
  className?: string
  imgClassName?: string
  staticImage?: StaticImageData
}

export const MediaGrid: React.FC<Props> = ({ items, layout = 'grid', className, imgClassName }) => {
  if (!items?.length) return null

  const gridCols = getGridCols(items.length)
  const containerClasses =
    layout === 'grid'
      ? `grid ${gridCols} gap-4 md:gap-6`
      : 'columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6'

  return (
    <div className={cn('w-full', className)}>
      <div className={containerClasses}>
        {items.map((item, i) => {
          if (!item?.media) return null

          const aspectRatioClass =
            item.aspectRatio === 'auto' ? 'aspect-auto' : `aspect-[${item.aspectRatio}]`

          return (
            <div
              key={i}
              className={cn(
                'relative overflow-hidden',
                aspectRatioClass,
                layout === 'masonry' ? 'break-inside-avoid' : '',
              )}
            >
              <Media
                resource={item.media}
                imgClassName={cn('object-cover w-full h-full', imgClassName)}
                fill
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
