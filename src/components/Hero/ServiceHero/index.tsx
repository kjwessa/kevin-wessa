import React from 'react'
import Image from 'next/image'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import type { ServiceHeroProps } from '../types'
import type { Media } from '@root/payload-types'

export const ServiceHero: React.FC<Omit<ServiceHeroProps, 'blockType'>> = ({
  service,
  mainTitle,
}) => {
  const image = service.image as Media | null
  if (!image?.url) return null

  return (
    <SectionBeta background="default" className="bg-white py-24 text-black">
      <ContainerBeta size="full">
        <div className="flex w-full items-end px-16 pt-44 text-center">
          <div className="flex w-full flex-wrap justify-center">
            <h1 className="flex flex-col justify-center text-[5.13rem] leading-none">
              <div className="table pr-1">
                <div>
                  <h1>{mainTitle}</h1>
                </div>
              </div>
            </h1>
          </div>
        </div>

        <div className="relative flex h-0 w-full items-end pb-[66%]">
          <Image
            src={image.url}
            alt={image.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
