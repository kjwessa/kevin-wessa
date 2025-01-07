import React from 'react'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

type Props = {
  title: string
  subtext: string
  blockType: 'serviceTextCallout'
}

export const ServiceTextCallout: React.FC<Props> = (props) => {
  const { title, subtext } = props

  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta size="3xl">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-[5.63rem] leading-none font-medium">{title}</h2>
          <p className="-mt-3 mb-9 text-xs opacity-70">{subtext}</p>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
