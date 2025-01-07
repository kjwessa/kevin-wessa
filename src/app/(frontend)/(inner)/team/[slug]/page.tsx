import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { Team, Media } from '@/payload-types'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import type { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { TeamHero } from './TeamHero'
import { TeamHeroDetails } from './TeamHeroDetails'
import { TeamBio } from './TeamBio'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const teams = await payload.find({
    collection: 'team',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = teams.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function TeamPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = `/team/${slug}`
  const team = await queryPostBySlug({ slug })

  if (!team) return <PayloadRedirects url={url} />

  return (
    <>
      <PayloadRedirects disableNotFound url={url} />
      <TeamHero team={team} />
      <TeamHeroDetails team={team} />
      <TeamBio team={team} />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const team = await queryPostBySlug({ slug })

  if (!team) {
    return {
      title: 'Team Member Not Found',
      description: 'The requested team member could not be found.',
    }
  }

  return generateMeta({ doc: team })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  try {
    const result = await payload.find({
      collection: 'team',
      draft,
      limit: 1,
      overrideAccess: draft,
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
        ],
      },
    })
    if (result.docs[0]) {
      return result.docs[0]
    } else {
      return null
    }
  } catch (error) {
    return null
  }
})
