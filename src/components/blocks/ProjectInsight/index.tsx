import React from 'react'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { Title } from '@/components/ui/Title'

type Props = {
  insight: string
}

export const ProjectInsightBlock: React.FC<Props> = ({ insight }) => {
  return (
    <SectionBeta theme="inherit" background="default">
      <ContainerBeta size="3xl" spacing="huge">
        <div className="flex flex-col min-[900px]:flex-row">
          <div className="w-full min-[900px]:w-60">
            <div className="text-brand-gold mt-2 mb-6 uppercase min-[900px]:mb-0">Insight</div>
          </div>
          <div className="w-full min-[900px]:w-[66.737vw]">
            <Title size="headline-medium" className="leading-none">
              {insight}
            </Title>
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
