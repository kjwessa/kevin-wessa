import { Category, Post } from '@/payload-types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import Link from 'next/link'

type Props = {
  categories: Category[]
  posts: Post[]
  totalPostCount: number
  currentCategorySlug?: string
}

const CategoryFilter = ({
  title,
  count,
  slug,
  isActive = false,
}: {
  title: string
  count: number
  slug?: string
  isActive?: boolean
}) => {
  return (
    <Link
      className={`inline-flex items-end transition-colors duration-300 ease-in-out hover:text-white ${
        isActive ? 'text-white' : 'text-neutral-400'
      }`}
      href={slug || '#'}
    >
      <div className={`text-label-large cursor-pointer leading-none lowercase`}>{title}</div>
      <div className="text-label-small ml-1 cursor-pointer lg:mb-2">{count}</div>
    </Link>
  )
}

export function CategoryBreadcrumbs({
  categories,
  posts,
  totalPostCount,
  currentCategorySlug,
}: Props) {
  const categoryCounts = categories.reduce(
    (acc, category) => {
      acc[category.id] = posts.filter((post) =>
        post.categories?.some((cat) => {
          if (typeof cat === 'string') {
            return cat === category.id
          }
          return (cat as Category).id === category.id
        }),
      ).length
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <SectionBeta theme="inherit" color="default">
      <ContainerBeta size="3xl" spacing="small" spacingTop="large">
        <ul className="flex list-none flex-row flex-wrap gap-6">
          <li className="mb-2">
            <CategoryFilter
              title="Explore All"
              count={totalPostCount}
              isActive={!currentCategorySlug}
              slug="/journal"
            />
          </li>
          {categories.map((category) => (
            <li key={category.id} className="mb-2 gap-6">
              <CategoryFilter
                title={category.title || 'Untitled Category'}
                count={categoryCounts[category.id] || 0}
                isActive={category.slug === currentCategorySlug}
                slug={`/journal/category/${category.slug}`}
              />
            </li>
          ))}
        </ul>
      </ContainerBeta>
    </SectionBeta>
  )
}
