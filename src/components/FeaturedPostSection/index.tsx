'use client'

import { Post } from '@/payload-types'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/utilities/cn'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'

import 'swiper/css'
import 'swiper/css/navigation'

import { FeaturedPostCard } from '@/components/cards/FeaturedPostCard'

export function FeaturedPostSection({ postsFeatured }: { postsFeatured: Post[] }) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  // Filter to only show 4 featured posts
  const featuredPosts = postsFeatured.filter((post) => post.featured).slice(0, 4)

  return (
    <SectionBeta theme="inherit" color="default">
      <ContainerBeta size="full" spacing="large">
        <div className="mb-10 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <Title el="h1" size="display-small">
              Journal
            </Title>
            <Text size="body-large" color="white/80">
              News and insights on all things design by Brewww
            </Text>
          </div>
          <div className="mt-6 flex gap-4 md:mt-0">
            <button
              ref={navigationPrevRef}
              disabled={isBeginning}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all',
                isBeginning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white/20',
              )}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              ref={navigationNextRef}
              disabled={isEnd}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all',
                isEnd ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white/20',
              )}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </ContainerBeta>
      <div className="relative overflow-visible">
        <ContainerBeta size="full" spacing="none">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.75}
            initialSlide={0}
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
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.75,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.75,
                spaceBetween: 32,
              },
            }}
            className="!overflow-visible px-6 md:px-10"
          >
            {featuredPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <FeaturedPostCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerBeta>
      </div>
    </SectionBeta>
  )
}
