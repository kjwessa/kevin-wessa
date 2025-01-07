// Next Imports
import React from 'react'
import { notFound } from 'next/navigation'

// Payload Imports
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Location } from '@/payload-types'
import type { Media } from '@/payload-types'

// Components
import { LocationWorkSlider } from './LocationWorkSlider'
import { LocationLogoSlider } from './LocationLogoSlider'
import { LocationTechSlider } from './LocationTechSlider'
import { LocationHeroText } from './LocationHeroText'
import { LocationHeroImage } from './LocationHeroImage'
import { LocationImageLeft } from './LocationImageLeft'
import { LocationImageRight } from './LocationImageRight'
import { LocationHeroDetails } from './LocationHeroDetails'
import { LocationServiceDetails } from './LocationServiceDetails'
import { LocationFAQ } from './LocationFAQ'
import { LocationBlogSlider } from './LocationBlogSlider'
import { Page } from '@/components/layout'
import { RenderHero } from '@/components/Hero/RenderHero'
import { LocationHero } from '@/components/Hero/LocationHero'
import { RenderBlocks } from '@/components/RenderBlocks'
import { PayloadRedirects } from '@/components/PayloadRedirects'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const locations = await payload.find({
    collection: 'locations',
    limit: 1000,
    overrideAccess: false,
  })
  return (
    locations.docs?.map((location) => ({
      slug: location.slug,
    })) || []
  )
}

async function getPageData({ slug }: { slug: string }) {
  const payload = await getPayload({ config: configPromise })
  const location = await payload.find({
    collection: 'locations',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!location?.docs?.[0]) {
    notFound()
  }

  const [faqs, technologies, workItems, brands, posts] = await Promise.all([
    payload.find({
      collection: 'faq',
      limit: 100,
    }),
    payload.find({
      collection: 'technologies',
      limit: 100,
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'projects',
      limit: 6,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'brands',
      limit: 100,
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'posts',
      limit: 6,
      sort: '-publishedOn',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
  ])

  return {
    location: location.docs[0],
    faqs: faqs.docs,
    technologies: technologies.docs || [],
    workItems: workItems.docs || [],
    brands: brands.docs || [],
    posts: posts.docs || [],
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function LocationPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise

  const { technologies, location, faqs, workItems, brands, posts } = await getPageData({
    slug,
  })

  if (!location) {
    notFound()
  }

  return (
    <Page theme="dark">
      <PayloadRedirects disableNotFound url={`/in/${slug}`} />
      {location.hero?.[0] && (
        <RenderHero
          blockType="locationHero"
          layout={location.hero[0].layout}
          label={location.hero[0].label}
          description={location.hero[0].description}
          locationData={{
            city: location.locationCity,
            state: location.locationState,
          }}
        />
      )}
      <RenderBlocks blocks={location.layout || []} />
      <LocationHeroImage image={location.image as Media} />
      <LocationHeroDetails />
      <LocationImageLeft />
      <LocationImageRight />
      <LocationLogoSlider brands={brands} />
      <LocationServiceDetails />
      <LocationTechSlider technologies={technologies} />
      <LocationFAQ faqs={faqs} />
      <LocationWorkSlider workItems={workItems} />
      <LocationBlogSlider posts={posts} />
    </Page>
  )
}
