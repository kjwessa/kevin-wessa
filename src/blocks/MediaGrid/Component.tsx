import React from 'react'
import { MediaGridBlock } from '@/payload-types'
import { Media } from '@/components/Media'

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

export const MediaGrid: React.FC<MediaGridBlock> = ({ items, layout = 'grid' }) => {
  if (!items?.length) return null

  const gridCols = getGridCols(items.length)
  const containerClasses =
    layout === 'grid'
      ? `grid ${gridCols} gap-4 md:gap-6`
      : 'columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6'

  return (
    <div className="w-full">
      <div className={containerClasses}>
        {items.map((item, i) => {
          if (!item?.media) return null

          const aspectRatioClass =
            item.aspectRatio === 'auto' ? 'aspect-auto' : `aspect-[${item.aspectRatio}]`

          return (
            <div
              key={i}
              className={`relative overflow-hidden ${aspectRatioClass} ${
                layout === 'masonry' ? 'break-inside-avoid' : ''
              }`}
            >
              <Media resource={item.media} imgClassName="object-cover w-full h-full" fill />
            </div>
          )
        })}
      </div>
    </div>
  )
}
