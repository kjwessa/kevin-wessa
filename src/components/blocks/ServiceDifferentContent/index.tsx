import React from 'react'
import { RichText } from '@/components/RichText'
import type { ServiceDifferentContent as ServiceDifferentContentType } from '@/payload-types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

export const ServiceDifferentContent: React.FC<ServiceDifferentContentType> = ({
  title,
  content,
}) => {
  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta size="3xl">
        <div className="mb-9">
          <h2 className="mb-3 text-[3.13rem] leading-none font-medium">{title}</h2>
        </div>
        <div className="columns-1 gap-8 text-lg min-[690px]:columns-2">
          <RichText data={content} />
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
