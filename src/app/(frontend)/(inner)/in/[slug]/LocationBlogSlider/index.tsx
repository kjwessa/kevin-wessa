'use client'

import { Post } from '@/payload-types'
import { BlogCard } from '@/components/cards/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import 'swiper/css'
import 'swiper/css/navigation'

interface LocationBlogSliderProps {
  posts: Post[]
  title?: string
}

export function LocationBlogSlider({ posts, title }: LocationBlogSliderProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  if (!posts?.length) return null

  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="huge">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Left Column - Text and Button */}
            <div className="mb-10 lg:mb-0 lg:w-[400px] lg:shrink-0">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Still here? </div>
                </div>
                <Title el="h2" size="headline-small" weight="medium" className="mt-3 mb-8 lg:mt-5">
                  Some bonus content from the team
                </Title>
                <div className="relative inline-flex items-center">
                  <CMSLink
                    type="custom"
                    url="/journal"
                    label="View all posts"
                    appearance="default"
                  />
                </div>
                {/* Navigation Buttons */}
                <div className="mt-8 flex gap-4">
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
            </div>

            {/* Right Column - Slider */}
            <div className="flex-1 overflow-hidden">
              <div className="relative h-full">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={1}
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
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                  className="h-full"
                >
                  {posts.map((post) => (
                    <SwiperSlide key={post.id} className="h-full">
                      <BlogCard post={post} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
