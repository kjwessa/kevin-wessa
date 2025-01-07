'use client'

import { Testimonial } from '@root/payload-types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef } from 'react'
import { ThemeBeta, SectionBeta } from '@/components/layout'

export function AboutTestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="relative m-auto max-w-[72.50rem] overflow-hidden bg-zinc-100 px-5 pt-8 pb-10 text-[1.38rem] leading-7 font-light lg:pt-16 lg:pb-24">
          <div className="mb-16 overflow-hidden border-t-2 border-solid border-t-black/[0.3] pt-3.5 text-sm uppercase">
            <div className="relative pl-4">
              <svg
                className="absolute top-0 left-0 h-3.5 w-3"
                fill="rgb(0, 0, 0)"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M496.398.001C495.423 280.462 276.399 509.551 0 526.59v2.027c266.073 16.404 478.978 229.308 495.385 495.382h2.027C514.455 747.605 743.541 528.58 1024 527.604 733.062 526.591 497.409 290.936 496.398.001z"
                  fill="rgb(0, 0, 0)"
                />
              </svg>
              CLIENT REVIEWS
            </div>
          </div>
          <div className="rounded-2xl bg-gray-200 px-8 pt-8 pb-6 text-neutral-900 opacity-[0.9437] lg:pt-12 lg:pr-16 lg:pb-12 lg:pl-16">
            <div className="overflow-hidden">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                onBeforeInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = prevRef.current
                  // @ts-ignore
                  swiper.params.navigation.nextEl = nextRef.current
                }}
                className="!overflow-visible"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-full w-full items-start overflow-hidden">
                      <div className="h-auto w-full">
                        <blockquote className="text-[3.88rem] leading-none">
                          "{testimonial.callout}"
                        </blockquote>
                        <div className="mt-6 text-xl lg:mt-8">{testimonial.author},</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-16 flex gap-4">
              <button
                ref={prevRef}
                className="flex h-12 w-12 cursor-pointer items-start rounded-full bg-neutral-900 px-1.5 py-1"
              >
                <svg
                  className="m-auto h-3.5 w-3.5"
                  fill="rgb(255, 255, 255)"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m149.96 547.433 335.788 335.788-57.264 57.264L-.001 512.001 428.484 83.516l57.264 57.264-325.67 325.672h863.921v80.983h-874.04z"
                    fill="rgb(255, 255, 255)"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="flex h-12 w-12 rotate-180 cursor-pointer items-start rounded-full bg-neutral-900 px-1.5 py-1"
              >
                <svg
                  className="m-auto h-3.5 w-3.5"
                  fill="rgb(255, 255, 255)"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m149.96 547.433 335.788 335.788-57.264 57.264L-.001 512.001 428.484 83.516l57.264 57.264-325.67 325.672h863.921v80.983h-874.04z"
                    fill="rgb(255, 255, 255)"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-7 flex gap-6 text-2xl lg:mt-12">
            <Image
              className="h-auto w-28 max-w-full lg:w-28"
              src="https://showandtell.agency/stars.svg"
              width={100}
              height={100}
              alt="Stars"
            />
            <span>
              Rated 4.6 Stars on{' '}
              <a className="underline" href="https://clutch.co/profile/">
                Clutch ›
              </a>
            </span>
          </div>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
