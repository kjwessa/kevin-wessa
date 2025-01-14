'use client'

import React, { useRef } from 'react'
import { MediaSliderBlock } from '@/payload-types'
import { Media } from '@/components/core/Media'
import { cn } from 'src/utilities/cn'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'

type Props = MediaSliderBlock & {
  className?: string
}

export const MediaSliderClient: React.FC<Props> = ({ slides, settings, className }) => {
  const swiperRef = useRef<SwiperType | undefined>(undefined)
  const autoplay = settings?.autoplay ?? true
  const loop = settings?.loop ?? true
  const speed = settings?.speed ?? 500
  const variant = settings?.variant ?? 'centered'
  const aspectRatio = settings?.aspectRatio ?? '4/3'
  const gap = settings?.gap ?? 'medium'
  const slidesVisible = settings?.slidesVisible ?? '1.25'

  const getGapSize = (size: string): number => {
    switch (size) {
      case 'small':
        return 8
      case 'large':
        return 24
      case 'medium':
      default:
        return 16
    }
  }

  const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
      case '16/9':
        return 'aspect-video'
      case '1/1':
        return 'aspect-square'
      case '3/4':
        return 'aspect-[3/4]'
      case '4/3':
        return 'aspect-[4/3]'
      case '3/2':
        return 'aspect-[3/2]'
      default:
        return 'aspect-[4/3]'
    }
  }

  const variantStyles = {
    centered: {
      container: '-mx-[20vw] relative',
      swiper:
        '!overflow-visible px-[20vw] [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:transition-opacity [&_.swiper-slide-active]:opacity-100',
      slide: '',
      activeSlide: '',
    },
    grid: {
      container: 'w-full relative',
      swiper: '',
      slide: '',
      activeSlide: '',
    },
    contained: {
      container: 'max-w-7xl relative',
      swiper: '',
      slide: '',
      activeSlide: '',
    },
  }

  const currentStyles = variantStyles[variant]

  return (
    <section className={cn('relative mx-auto py-12', currentStyles.container, className)}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={getGapSize(gap)}
        slidesPerView={variant === 'centered' ? Number(slidesVisible) : 1}
        centeredSlides={variant === 'centered'}
        breakpoints={{
          640: { slidesPerView: variant === 'centered' ? Number(slidesVisible) : 2 },
          1024: { slidesPerView: variant === 'centered' ? Number(slidesVisible) : 3 },
        }}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        loop={loop}
        speed={speed}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className={cn('!overflow-visible', currentStyles.swiper)}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className={currentStyles.slide}>
            <div
              className={cn(
                'relative overflow-hidden rounded-sm',
                getAspectRatioClass(aspectRatio),
              )}
            >
              <Media
                resource={slide.media}
                fill
                imgClassName="object-cover"
                alt={slide.altText || ''}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons Container */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/75"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/75"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

export default MediaSliderClient
