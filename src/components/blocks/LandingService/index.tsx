import React from 'react'
import type { LandingServiceBlock as LandingServiceBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import { LandingServiceAccordion } from '@/components/LandingServiceAccordion'

type Props = {
  className?: string
} & LandingServiceBlockProps

export const LandingServiceBlock: React.FC<Props> = ({ services, className }) => {
  return (
    <section className={cn('bg-white py-24 text-sm text-zinc-800', className)} id="services">
      <div className="container mx-auto">
        <h2 className="mb-12 text-[12.75rem] font-medium leading-none text-black">Services</h2>
        <div className="flex flex-col">
          {services?.map((service) => {
            // Ensure we have all required data before rendering
            if (!service.id || !service.serviceName || !service.description || !service.mainImage || !service.hoverImage) {
              return null;
            }

            return (
              <LandingServiceAccordion
                key={service.id}
                id={service.id}
                serviceName={service.serviceName}
                description={service.description}
                tools={service.tools?.map(tool => tool.name) || []}
                image1={service.mainImage}
                image2={service.hoverImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}
