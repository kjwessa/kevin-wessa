import React from 'react'
import type { LocationHeroProps } from '../types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { Title } from '@/components/ui/Title'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { RichText } from '@/components/RichText'

export const LocationHero: React.FC<Omit<LocationHeroProps, 'blockType'>> = ({
  layout,
  label,
  description,
  locationData,
}) => {
  const title = `A Web Design Studio in ${locationData.city}, ${locationData.state}.`

  const contentWidth = layout === 'splitWide' ? 'lg:w-[56.25%]' : 'lg:w-1/2'
  const descriptionWidth = layout === 'splitWide' ? 'lg:w-[43.75%]' : 'lg:w-1/2'

  return (
    <SectionBeta theme="inherit" background="default">
      <ContainerBeta size={layout === 'full' ? 'full' : '3xl'} spacing="large" spacingTop="huge">
        <div className="flex w-full flex-wrap justify-between">
          <div className={`w-full px-2 ${contentWidth} lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4`}>
            <div className="flex flex-col items-start">
              {label?.enabled && label.text && (
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light">{label.text}</div>
                </div>
              )}
              <Title el="h1" size="headline-large" className="mt-3 mb-0 lg:mt-5 lg:mb-0 lg:pr-20">
                {title}
              </Title>
            </div>
          </div>
          <div
            className={`mt-5 w-full px-2 text-lg font-light text-zinc-400 lg:mt-10 ${descriptionWidth} lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4`}
          >
            <RichText data={description} className="w-full space-y-10" />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
