import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

import { Page } from '@/components/layout/Page'
import { JournalHero } from './JournalHero'

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

    return (
      <Page theme="dark">
        <JournalHero />
      </Page>
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
