import React from 'react'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { RichText } from '@/components/RichText'
import type { ServiceIntroContentBlock } from '@/payload-types'

export const ServiceIntroContent: React.FC<ServiceIntroContentBlock> = ({
  eyebrow,
  title,
  content,
}) => {
  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta size="3xl">
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-lg tracking-wide uppercase">{eyebrow}</span>
          </div>
          <div className="mb-8">
            <h2 className="text-[3.13rem] leading-none font-medium">{title}</h2>
          </div>
          <div className="text-lg">
            <RichText data={content} />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
