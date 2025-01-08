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

  return (
    <section className={cn('relative container mx-auto py-12', className)}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        loop={loop}
        speed={speed}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        className="!overflow-visible"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
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
