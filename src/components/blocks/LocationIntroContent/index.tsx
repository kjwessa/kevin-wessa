import React from 'react'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { RichText } from '@/components/RichText'
import type { LocationIntroContentBlock } from '@/payload-types'

type Props = LocationIntroContentBlock

export const LocationIntroContent: React.FC<Props> = ({ eyebrow, title, content }) => {
  return (
    <SectionBeta>
      <ContainerBeta>
        <div className="max-w-3xl">
          <div className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase">
            {eyebrow}
          </div>
          <h2 className="mb-8 text-4xl font-bold">{title}</h2>
          <div className="prose prose-lg">
            <RichText data={content} />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
