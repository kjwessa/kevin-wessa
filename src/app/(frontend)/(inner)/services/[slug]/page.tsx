// Next Imports
import React, { cache } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import { Page } from '@/components/layout/Page'

// Payload Imports
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Service } from '@/payload-types'

// Components
import { generateMeta } from '@/utilities/generateMeta'
import { RenderHero } from '@/components/Hero/RenderHero'
import { RenderBlocks } from '@/components/RenderBlocks'

export const revalidate = 3600

export async function generateStaticParams() {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    return []
  }

  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = services.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ServicePage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = `/services/${slug}`
  const service = await queryServiceBySlug({ slug })

  if (!service) return <PayloadRedirects url={url} />

  return (
    <Page theme="dark">
      <PayloadRedirects disableNotFound url={url} />
      {service.hero?.[0] && (
        <RenderHero
          blockType="serviceHero"
          service={service}
          mainTitle={service.hero[0].mainTitle}
        />
      )}
      {service.layout && <RenderBlocks blocks={service.layout} />}

      <section className="bg-brand-dark-bg relative pt-20 pb-20 text-white">
        <div className="m-auto mb-16 w-[92%] max-w-[77.75rem] text-center uppercase">
          <div>
            <h2 className="inline-block text-lg min-[671px]:pl-6">
              Looking for a Cleveland Next JS agency?
            </h2>

            <h2 className="text-[8rem] leading-none font-bold min-[1025px]:mt-16 lg:mt-10">
              <span className="text-[7rem] leading-none">
                We understand you and the space you play in
              </span>
            </h2>

            <p className="text-[1.38rem] leading-7 min-[1025px]:mt-12 lg:mt-8">
              <a
                className="relative inline-block overflow-hidden rounded-full bg-white text-lg text-neutral-900"
                href="https://www.fhoke.com/contact/"
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Contact Us
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>{' '}
              <a
                className="relative inline-block overflow-hidden rounded-full bg-zinc-800 text-lg min-[1025px]:mt-9 lg:mt-8"
                href="https://calendly.com/fhoke/15-minute-chat"
              >
                <span className="relative cursor-pointer min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8">
                  Book A Call
                  <span className="absolute top-full left-0 w-full rounded-tl-full rounded-tr-full bg-neutral-900 min-[1025px]:pt-5 min-[1025px]:pr-8 min-[1025px]:pb-5 min-[1025px]:pl-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <div className="overflow-hidden">
          <div className="flex w-[120vw] md:w-[168vw] lg:w-[132vw]">
            <div className="flex w-[120vw] md:w-[168vw] lg:w-[132vw]">
              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>

              <div className="flex w-[96vw] items-center justify-center px-8 md:w-96 lg:w-96">
                {'                                                                 '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const service = await queryServiceBySlug({ slug })

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return generateMeta({ doc: service })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }): Promise<Service | null> => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
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
})
