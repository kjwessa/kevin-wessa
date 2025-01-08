import React from 'react'
import { BioBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import { cn } from 'src/utilities/cn'

type Props = BioBlock & {
  className?: string
}

export const Bio: React.FC<Props> = ({ title, content, media, className }) => {
  return (
    <section className={cn('relative container mx-auto', className)}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {/* Left Column - Title */}
        <div className="md:col-span-1">
          <div className="space-y-0">
            <h2 className="text-xl font-medium tracking-tight">{title.primary}</h2>
            <h3 className="text-primary text-xl font-bold tracking-tight">{title.secondary}</h3>
          </div>
        </div>

        {/* Middle Column - Content */}
        <div className="md:col-span-1">
          <div className="prose prose-sm prose-zinc dark:prose-invert">
            <RichText data={content} />
          </div>
        </div>

        {/* Right Column - Media */}
        <div className="md:col-span-1">
          <div className="relative">
            {/* Vertical Text */}
            {media.verticalText && (
              <div className="absolute top-0 -right-12 hidden h-full md:block">
                <div className="sticky top-8">
                  <p className="vertical-text text-muted-foreground/60 text-xs font-light tracking-widest uppercase">
                    {media.verticalText}
                  </p>
                </div>
              </div>
            )}

            {/* Images */}
            <div className="relative h-[500px]">
              {media.avatar && (
                <div className="absolute top-0 left-0 w-48 rotate-[-4deg] transform">
                  <div className="relative aspect-square">
                    <Media resource={media.avatar} fill imgClassName="object-contain" />
                  </div>
                </div>
              )}
              {media.secondaryImage && (
                <div className="absolute top-64 left-4 w-48 rotate-[2deg] transform">
                  <div className="relative aspect-[4/3]">
                    <Media
                      resource={media.secondaryImage}
                      fill
                      imgClassName="object-cover rounded-sm shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
