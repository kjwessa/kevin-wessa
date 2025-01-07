import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { cn } from '@/utilities/cn'
import React from 'react'

type Props = {
  className?: string
} & TestimonialBlockProps

export const TestimonialBlock: React.FC<Props> = ({ className, testimonial }) => {
  if (!testimonial) return null

  const testimonialData = typeof testimonial === 'string' ? null : testimonial

  if (!testimonialData) return null

  return (
    <section className={cn('bg-white px-16 py-32 text-center text-stone-950', className)}>
      <div className="mx-auto max-w-4xl">
        <div>
          <h2 className="text-4xl font-bold uppercase">{testimonialData.callout}</h2>
          <div className="p-8 whitespace-pre-line">
            <RichText data={testimonialData.testimonial} enableGutter={false} />
          </div>
          <p className="text-base font-semibold">{testimonialData.author}</p>
          <p className="text-base">{testimonialData.title}</p>
        </div>
      </div>
    </section>
  )
}
