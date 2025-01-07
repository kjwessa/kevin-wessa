import React from 'react'
import Link from 'next/link'
import type { LandingWorkBlock as LandingWorkBlockProps } from '@/payload-types'
import { LandingPortfolioCard } from '@/components/cards/LandingPortfolioCard'
import { Media } from '@/payload-types'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
} & LandingWorkBlockProps

export const LandingWorkBlock: React.FC<Props> = ({
  className,
  date,
  sectionTitle,
  description,
  viewAllText,
  viewAllLink,
  projects,
}) => {
  return (
    <section className={cn('bg-white py-24', className)}>
      <div className="container mx-auto">
        <div className="mb-16 flex flex-wrap items-end justify-between">
          <div className="flex flex-col">
            <div className="mb-4 text-sm font-light text-black">/ {date}</div>
            <h2 className="text-5xl font-medium text-black">{sectionTitle}</h2>
          </div>
          <div className="flex items-center">
            <p className="max-w-md text-lg font-light text-black">{description}</p>
            <Link
              href={viewAllLink}
              className="ml-8 inline-flex items-center text-sm font-light text-black hover:text-blue-700"
            >
              {viewAllText}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects?.map((project) => {
            const projectData = typeof project === 'string' ? null : project
            if (!projectData) return null

            const image = projectData.image as Media
            if (!image?.url) return null

            return (
              <LandingPortfolioCard
                key={projectData.id}
                imageUrl={image.url}
                title={projectData.title}
                href={projectData.projectLink || `/work/${projectData.slug}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
