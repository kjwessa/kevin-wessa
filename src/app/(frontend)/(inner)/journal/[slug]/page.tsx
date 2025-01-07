// Next Imports
import React from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

// Payload Imports
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

// Components
import { generateMeta } from '@/utilities/generateMeta'
import { CategoryBreadcrumbs } from '@/components/CategoryBreadcrumbs'
import { JournalHero } from './JournalHero'
import { JournalHeroImage } from './JournalHeroImage'
import { JournalContent } from './JournalContent'

export async function generateStaticParams() {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    return []
  }
  
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = `/journal/${slug}`
  const payload = await getPayload({ config: configPromise })

  const [post, categories, posts] = await Promise.all([
    queryPostBySlug({ slug }),
    payload.find({
      collection: 'categories',
      limit: 1000,
      sort: '-publishedOn',
    }),
    payload.find({
      collection: 'posts',
      limit: 1000,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
  ])

  if (!post) return <PayloadRedirects url={url} />

  return (
    <div>
      <PayloadRedirects disableNotFound url={url} />
      <CategoryBreadcrumbs
        categories={categories.docs}
        posts={posts.docs}
        totalPostCount={posts.totalDocs}
      />
      <JournalHero post={post} />
      <JournalHeroImage post={post} />
      <JournalContent post={post} />
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
}
