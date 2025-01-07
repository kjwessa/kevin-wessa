'use client'

import { ProjectCard } from '@/components/cards/ProjectCard'
import { Title } from '@/components/ui/Title'
import { Project } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { cn } from '@/utilities/cn'

interface LocationWorkSliderProps {
  workItems: Project[]
}

export function LocationWorkSlider({ workItems }: LocationWorkSliderProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="full" spacing="xlarge">
          <div className="mb-10 flex w-full flex-wrap items-end justify-between px-2">
            <div className="px-2 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full" />
                  <div className="ml-2 font-light">Our Work</div>
                </div>
                <Title
                  el="h2"
                  size="headline-small"
                  className="mt-3 mb-0 text-white lg:mt-5 lg:mb-0"
                >
                  Our favourite Web design Projects
                </Title>
              </div>
            </div>
            <div className="mt-3 w-full px-2 lg:mt-0 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="relative inline-flex items-center">
                <CMSLink type="custom" url="/work" label="View our work" appearance="default" />
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current
              }}
              className="px-2 sm:px-6 xl:px-12"
            >
              {workItems.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button
                ref={navigationPrevRef}
                className="bg-brand-dark-surface hover:bg-brand-dark-surface/80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/50 transition-all hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                ref={navigationNextRef}
                className="bg-brand-dark-surface hover:bg-brand-dark-surface/80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/50 transition-all hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
