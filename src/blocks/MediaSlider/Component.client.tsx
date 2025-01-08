'use client'

import React from 'react'
import { MediaSliderBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from 'src/utilities/cn'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

type Props = MediaSliderBlock & {
  className?: string
}

export const MediaSliderClient: React.FC<Props> = ({ slides, settings, className }) => {
  const autoplay = settings?.autoplay ?? true
  const loop = settings?.loop ?? true
  const speed = settings?.speed ?? 500
  const variant = settings?.variant ?? 'centered'
  const aspectRatio = settings?.aspectRatio ?? '4/3'
  const gap = settings?.gap ?? 'medium'

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
      default:
        return 'aspect-[4/3]'
    }
  }

  const variantStyles = {
    centered: {
      container: '-mx-[20vw]',
      swiper: '!overflow-visible px-[20vw]',
      slide: 'opacity-50 transition-opacity',
      activeSlide: 'opacity-100',
    },
    grid: {
      container: 'w-full',
      swiper: '',
      slide: '',
      activeSlide: '',
    },
    contained: {
      container: 'max-w-7xl',
      swiper: '',
      slide: '',
      activeSlide: '',
    },
  }

  const currentStyles = variantStyles[variant]

  return (
    <section className={cn('relative mx-auto py-12', currentStyles.container, className)}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={getGapSize(gap)}
        slidesPerView={variant === 'centered' ? 1.5 : 1}
        centeredSlides={variant === 'centered'}
        breakpoints={{
          640: { slidesPerView: variant === 'centered' ? 1.5 : 2 },
          1024: { slidesPerView: variant === 'centered' ? 1.5 : 3 },
        }}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        loop={loop}
        speed={speed}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        className={cn('!overflow-visible', currentStyles.swiper)}
        onSlideChange={(swiper) => {
          if (variant === 'centered') {
            document.querySelectorAll('.swiper-slide').forEach((slide) => {
              slide.classList.remove('opacity-100')
              slide.classList.add('opacity-50')
            })
            const activeSlide = document.querySelector('.swiper-slide-active')
            if (activeSlide) {
              activeSlide.classList.remove('opacity-50')
              activeSlide.classList.add('opacity-100')
            }
          }
        }}
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

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-foreground after:!text-lg" />
        <div className="swiper-button-next !text-foreground after:!text-lg" />
      </Swiper>
    </section>
  )
}

export default MediaSliderClient
