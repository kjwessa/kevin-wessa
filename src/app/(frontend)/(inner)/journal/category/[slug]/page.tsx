import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { BlogCard } from '@/components/cards/BlogCard'
import { CategoryBreadcrumbs } from '@/components/CategoryBreadcrumbs'
import { Category } from '@/payload-types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

export const revalidate = 3600

export async function generateStaticParams() {
  // Only generate static params in production on Vercel
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    return []
  }

  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    select: {
      slug: true,
    },
  })

  return categories.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CategoryPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  // Get the current category
  const categoryResponse = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })
  const currentCategory = categoryResponse.docs[0]

  // Get all posts (for category counts)
  const allPosts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
  })

  // Get filtered posts (for display)
  const filteredPosts = await payload.find({
    collection: 'posts',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      categories: {
        contains: currentCategory.id,
      },
    },
  })

  // Get all categories for the navigation
  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    sort: '-publishedOn',
  })

  return (
    <>
      <CategoryBreadcrumbs
        categories={categories.docs}
        posts={allPosts.docs}
        totalPostCount={allPosts.totalDocs}
        currentCategorySlug={slug}
      />

      <SectionBeta theme="dark" color="default">
        <ContainerBeta size="3xl" spacing="large">
          <div className="relative grid auto-rows-auto grid-cols-3 gap-x-8 gap-y-24">
            {filteredPosts.docs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </ContainerBeta>
      </SectionBeta>
    </>
  )
}
