import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CategoryBreadcrumbs } from '@/components/CategoryBreadcrumbs'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { FeaturedPostSection } from '@/components/FeaturedPostSection'
import { SuspendedCategorySection } from '@/components/CategorySection/suspended'
import { Page } from '@/components/layout/Page'

export const revalidate = 21600 // 6 hours

export default async function BlogPage() {
  try {
    const payload = await getPayload({ config: configPromise })
    const [posts, categories] = await Promise.all([
      payload.find({
        collection: 'posts',
        limit: 100,
        sort: '-publishedOn',
        where: {
          _status: {
            equals: 'published',
          },
        },
        depth: 1,
      }),
      payload.find({
        collection: 'categories',
        limit: 1000,
        sort: '-publishedOn',
      }),
    ])

    // Get posts for each category
    const latestPosts = posts.docs.slice(0, 5)
    const newsAndCulturePosts = posts.docs
      .filter((post) =>
        post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'News & Culture'),
      )
      .slice(0, 5)
    const brandingPosts = posts.docs
      .filter((post) =>
        post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'Branding'),
      )
      .slice(0, 5)
    const webDesignPosts = posts.docs
      .filter((post) =>
        post.categories?.some((cat) => typeof cat !== 'string' && cat.title === 'Web Design'),
      )
      .slice(0, 5)

    return (
      <Page theme="dark">
        <CategoryBreadcrumbs
          categories={categories.docs}
          posts={posts.docs}
          totalPostCount={posts.totalDocs}
        />

        <SectionBeta theme="inherit" background="default">
          <ContainerBeta size="3xl" spacing="large">
            <FeaturedPostSection postsFeatured={posts.docs} />
          </ContainerBeta>
        </SectionBeta>

        <SuspendedCategorySection
          posts={latestPosts}
          title="Latest Posts"
          theme="invert"
          archiveLink="/category/archive"
        />

        <SuspendedCategorySection
          posts={newsAndCulturePosts}
          title="News and Culture"
          theme="inherit"
          archiveLink="/category/news-culture"
        />

        <SuspendedCategorySection
          posts={brandingPosts}
          title="Branding"
          theme="invert"
          archiveLink="/category/branding"
        />

        <SuspendedCategorySection
          posts={webDesignPosts}
          title="Web Design"
          theme="inherit"
          archiveLink="/category/web-design"
        />
      </Page>
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
