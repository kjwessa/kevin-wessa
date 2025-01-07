import React from 'react'
import Image from 'next/image'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { RichText } from '@/components/RichText'
import type { Media } from '@/payload-types'

type Props = {
  title?: string
  content: any
  image: Media
  blockType: 'serviceSplitContent'
}

export const ServiceSplitContent: React.FC<Props> = (props) => {
  const { title, content, image } = props

  if (!image?.url) return null

  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta size="3xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2">
            {title && <h2 className="mb-6 text-3xl font-bold lg:text-4xl">{title}</h2>}
            <RichText data={content} className="prose prose-lg prose-invert" />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
            <Image
              src={image.url}
              alt={image.alt || ''}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
