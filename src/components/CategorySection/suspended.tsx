'use client'

import { Suspense } from 'react'
import { CategorySection } from '.'
import { CategorySectionSkeleton } from './loading'
import { Post } from '@/payload-types'

interface SuspendedCategorySectionProps {
  posts: Post[]
  title: string
  theme: 'light' | 'dark' | 'inherit' | 'invert'
  archiveLink: string
}

export function SuspendedCategorySection(props: SuspendedCategorySectionProps) {
  return (
    <Suspense fallback={<CategorySectionSkeleton />}>
      <CategorySection {...props} />
    </Suspense>
  )
}
