import React from 'react'
import type { ProjectHeroProps } from '../types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { RichText } from '@/components/RichText'
import { ProjectHeroImageSection } from './index.client'
import { CMSLink } from '@/components/Link'

export const ProjectHero: React.FC<Omit<ProjectHeroProps, 'blockType'>> = ({ project }) => {
  if (!project) return null

  const imageUrl = project.image
    ? typeof project.image === 'string'
      ? project.image
      : (project.image?.url ?? '')
    : ''

  if (!imageUrl) return null

  const hero = project.hero?.[0]

  return (
    <>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="huge" spacingBottom="none">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <Text size="label-large" weight="light" className="text-zinc-400">
                {project.title}
              </Text>
            </div>
            <Title el="h1" size="display-medium" className="mt-3">
              {project.snippet}
            </Title>
          </div>
        </ContainerBeta>
      </SectionBeta>
      <ProjectHeroImageSection
        imageSrc={imageUrl}
        altText={
          typeof project.image === 'string' ? project.title : (project.image?.alt ?? project.title)
        }
      />
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="huge">
          <div className="min-[900px]:flex">
            <div className="text-brand-gold w-full uppercase min-[900px]:w-60">
              <div className="mt-2 mb-6 min-[900px]:mb-0 min-[900px]:pr-8">Challenge</div>
            </div>
            <div className="w-full min-[900px]:w-[59.098vw]">
              <Title el="h2" size="headline-large" className="mb-12">
                {hero?.challengeTitle}
              </Title>
              <div className="w-full font-light">
                <RichText data={hero?.challengeContent} />
              </div>
              <div className="mt-12 text-lg min-[900px]:mt-10">
                <div className="mb-10 min-[900px]:mb-12">
                  <div className="mb-1 font-bold min-[900px]:mr-8 min-[900px]:inline">
                    Services Provided
                  </div>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                    {project.services && project.services.length > 0 ? (
                      project.services.map((service) => (
                        <CMSLink
                          key={typeof service === 'string' ? service : service.title}
                          type="custom"
                          url={`/services/${
                            typeof service === 'string'
                              ? service.toLowerCase().replace(/\s+/g, '-')
                              : service.title.toLowerCase().replace(/\s+/g, '-')
                          }`}
                          label={typeof service === 'string' ? service : service.title}
                          appearance="link"
                          className="font-light"
                        />
                      ))
                    ) : (
                      <p className="font-light text-zinc-400">No services specified</p>
                    )}
                  </div>
                </div>
                <div className="mb-6 min-[900px]:mb-0">
                  <div className="mb-1 font-bold min-[900px]:mr-8 min-[900px]:inline">Industry</div>
                  {typeof project.brand !== 'string' && project.brand?.industry && (
                    <p className="font-light">
                      {typeof project.brand.industry === 'string'
                        ? 'Loading...'
                        : project.brand.industry.title}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </>
  )
}
