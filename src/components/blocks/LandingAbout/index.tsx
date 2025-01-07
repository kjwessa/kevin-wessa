import React from 'react'
import { Title } from '@/components/ui/Title'
import { RichText } from '@/components/RichText'
import type { LandingAboutBlock as LandingAboutBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
} & LandingAboutBlockProps

export const LandingAboutBlock: React.FC<Props> = ({ title, content, className }) => {
  return (
    <section
      className={cn('flex flex-col gap-24 bg-white py-24 text-sm text-black', className)}
      id="about"
    >
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <Title
          el="h2"
          size="display-small"
          weight="medium"
          leading="tight"
          className="col-span-1 mb-8"
        >
          {title}
        </Title>
        <RichText
          data={content}
          preset="default"
          className="prose prose-lg prose-zinc col-span-12 max-w-none indent-[calc(25%_-_4px)] text-5xl font-medium"
        />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <RichText
          data={content}
          preset="default"
          className="prose prose-lg prose-zinc col-span-5 col-start-7 max-w-none text-base font-normal"
        />
      </div>
    </section>
  )
}
