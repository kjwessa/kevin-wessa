'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type GalleryImage = {
  src: string
  alt: string
}

type GallerySliderClientProps = {
  images: GalleryImage[]
}

export function GallerySliderClient({ images }: GallerySliderClientProps) {
  return (
    <section className="bg-neutral-950 px-2 text-black min-[1450px]:pr-20 min-[1450px]:pl-20 sm:pr-6 sm:pl-6 xl:pr-12 xl:pl-12">
      <div className="w-full px-2 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
        <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 py-10 min-[1450px]:pt-24 min-[1450px]:pb-24 lg:pt-16 lg:pb-16">
          <div>
            <div className="relative m-auto w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                loop
                slidesPerView={1.2}
                centeredSlides
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                className="!pb-16"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={image.src}>
                    <div className="relative w-full overflow-hidden pt-[44.75rem]">
                      <Image
                        className="h-auto w-full max-w-full"
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prev !text-white"></div>
              <div className="swiper-button-next !text-white"></div>
              <div className="swiper-pagination !bottom-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
