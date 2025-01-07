import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

export type ProjectImageBlock = {
  blockType: 'projectImage'
  blockName?: string
  layout: 'split' | 'full' | 'asymmetrical'
  images: {
    image: Media & { url: string }
    alt?: string
    caption?: string
    aspectRatio?: string
    width?: number
    height?: number
  }[]
  backgroundColor?: 'light' | 'dark'
}

export const ProjectImageComponent: React.FC<ProjectImageBlock> = ({
  layout,
  images,
  backgroundColor = 'light',
}) => {
  if (!images?.length) return null

  const getImageUrl = (img: ProjectImageBlock['images'][0]) => {
    if (!img?.image?.url) return ''
    return img.image.url
  }

  return (
    <SectionBeta background={backgroundColor === 'dark' ? 'primary' : 'default'}>
      <ContainerBeta>
        {layout === 'split' && images.length >= 2 && (
          <div className="-mx-2 flex flex-wrap md:mx-4">
            {images.slice(0, 2).map((img, i) => (
              <figure key={i} className="mb-4 w-full px-2 md:mb-0 md:w-1/2 md:px-4">
                <div
                  className="relative w-full overflow-hidden rounded-3xl"
                  style={{
                    paddingTop: img.aspectRatio || '100%',
                  }}
                >
                  <Image src={getImageUrl(img)} alt={img.alt || ''} fill className="object-cover" />
                </div>
                {img.caption && (
                  <figcaption className="text-muted-foreground mt-2 text-sm uppercase">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {layout === 'full' && images.length > 0 && (
          <figure className="w-full px-2 md:px-4">
            <div
              className="relative w-full overflow-hidden rounded-3xl"
              style={{
                paddingTop: images[0].aspectRatio || '66%',
              }}
            >
              <Image
                src={getImageUrl(images[0])}
                alt={images[0].alt || ''}
                fill
                className="object-cover"
              />
            </div>
            {images[0].caption && (
              <figcaption className="text-muted-foreground mt-2 text-sm uppercase">
                {images[0].caption}
              </figcaption>
            )}
          </figure>
        )}

        {layout === 'asymmetrical' && images.length >= 2 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-12">
            <figure className="md:col-span-6">
              <div className="relative inline-block">
                <Image
                  width={images[0].width || 384}
                  height={images[0].height || 605}
                  src={getImageUrl(images[0])}
                  alt={images[0].alt || ''}
                  className="h-[37.83rem] w-96 max-w-full object-cover"
                />
              </div>
              {images[0].caption && (
                <figcaption className="text-muted-foreground mt-2 text-sm uppercase">
                  {images[0].caption}
                </figcaption>
              )}
            </figure>

            <figure className="self-end justify-self-end md:col-span-6">
              <div className="relative inline-block">
                <Image
                  width={images[1].width || 723}
                  height={images[1].height || 939}
                  src={getImageUrl(images[1])}
                  alt={images[1].alt || ''}
                  className="h-[58.68rem] w-[45.22rem] max-w-full object-cover"
                />
              </div>
              {images[1].caption && (
                <figcaption className="text-muted-foreground mt-2 text-sm uppercase">
                  {images[1].caption}
                </figcaption>
              )}
            </figure>
          </div>
        )}
      </ContainerBeta>
    </SectionBeta>
  )
}
