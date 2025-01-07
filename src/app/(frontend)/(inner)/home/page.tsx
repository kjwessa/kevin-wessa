import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ImageGrow } from './ImageGrow/index'
import { HomeHeroSection } from './HomeHeroSection/index'
import { ProjectGridSection } from './ProjectGridSection/index'
import { BlogGridSection } from './BlogGridSection/index'
import { HomeServicesSection } from './HomeServicesSection/index'
import { HomeAboutSection } from './HomeAboutSection'
import { HomeImpactSection } from './HomeImpactSection'
import { HomeResultsSection } from './HomeResultsSection'
import { HomeServicesArchiveSection } from './HomeServicesArchiveSection'
import { Page } from '@/components/layout/Page'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const [posts, projects, services] = await Promise.all([
    payload.find({
      collection: 'posts',
      limit: 4,
      sort: '-publishedOn',
      where: {
        and: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            featured: {
              equals: true,
            },
          },
        ],
      },
    }),
    payload.find({
      collection: 'projects',
      limit: 4,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'services',
      limit: 1000,
    }),
  ])

  return (
    <Page theme="dark">
      <HomeHeroSection />
      <HomeAboutSection />
      <ProjectGridSection projects={projects.docs} />
      <ImageGrow />
      <HomeServicesSection services={services.docs} />
      <BlogGridSection posts={posts.docs} />
      <HomeImpactSection />
      <HomeResultsSection />
      <HomeServicesArchiveSection />
    </Page>
  )
}
