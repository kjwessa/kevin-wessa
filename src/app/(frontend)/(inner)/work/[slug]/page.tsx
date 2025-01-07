import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { RichText } from '@/components/RichText/index'
import { notFound } from 'next/navigation'
import { Project, Brand, Industry } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { draftMode } from 'next/headers'
import { Page, ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { RenderHero } from '@/components/Hero/RenderHero'
import { RenderBlocks } from '@/components/RenderBlocks'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = projects.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ProjectPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = `/work/${slug}`
  const project = await queryPostBySlug({ slug })

  if (!project) return <PayloadRedirects url={url} />

  return (
    <Page theme="dark">
      <PayloadRedirects disableNotFound url={url} />
      {project.hero?.[0] && <RenderHero blockType="projectHero" project={project} />}
      <RenderBlocks blocks={project.layout || []} />

      <section className="bg-zinc-950 py-16">
        <h1 className="text-center text-[7rem] leading-none font-bold text-white uppercase">
          Original Audio Entertainment for the Whole Family
        </h1>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-[1fr_3fr] gap-5">
            <div className="col-start-1">
              <div>
                <h4 className="text-xs font-bold text-stone-500 uppercase">
                  <span>Quick Links</span>
                </h4>

                <ul className="space-y-4">
                  <li>
                    <Link
                      className="text-brand-gold after:bg-brand-gold hover:text-brand-gold hover:after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
                      href="#what-we-did"
                    >
                      What we did
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-brand-gold after:bg-brand-gold hover:text-brand-gold hover:after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
                      href="#highlights"
                    >
                      Highlights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-brand-gold after:bg-brand-gold hover:text-brand-gold hover:after:bg-brand-gold relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[100px] after:transition-all after:duration-300 hover:after:w-full"
                      href="#key-insights"
                    >
                      Key insights
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-start-2">
              <span className="text-sm text-stone-500 uppercase">
                <sub>#AUDIOENTERTAINER</sub>
              </span>
              <div className="text-[1.75rem] leading-[2.5rem] text-white">
                Ready to elevate its digital presence, The Merry Beggars turned to Brewww for help
                with consolidating their full range of audio entertainment into a single platform.
                Today, it's the go-to destination for original stories and top-shelf audio
                productions, captivating millions of listeners worldwide and earning multiple
                industry accolades.
              </div>
              <div className="mt-8 leading-8">
                After a thorough partner selection process, Brewww was chosen to help The Merry
                Beggars become a leader in the audio entertainment industry. We developed a
                comprehensive digital platform that replaced several fragmented services, becoming
                the sole practical access point to The Merry Beggars' world of storytelling. We've
                since tackled multiple projects together, with our partnership continuing to
                flourish.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-end">
            <div className="mb-5 w-full max-w-[30.98rem]">
              <div className="relative h-72">
                <Image
                  src="/images/audio-one.jpg"
                  alt="Audio production studio equipment"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="w-full max-w-[47.09rem] self-start">
              <div className="relative h-[47.09rem]">
                <Image
                  src="/images/audio-two.jpg"
                  alt="Voice actor recording in studio"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-row">
            <div className="w-1/2 pr-8">
              <div className="relative h-full">
                <Image
                  src="/images/audio-three.jpg"
                  alt="Audio production studio setup"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h1 className="mb-16 text-[6rem] leading-none font-bold text-white uppercase">
                What we did
              </h1>
              <div className="mt-8 text-[1.75rem] leading-8 text-white">
                <span className="mr-4 text-sm text-stone-500 uppercase">
                  <sub>#AUDIOENTERTAINER</sub>
                </span>
                Brewww supported The Merry Beggars with a fully self-empowered team across design,
                web development, backend development and QA. We continue working closely with The
                Merry Beggars' product management to this day.
              </div>
              <div className="mt-16">
                <p className="mb-8">
                  <span>
                    — Web and backend development for The Merry Beggars platform
                    <br />
                    — Design and development of features used by all The Merry Beggars digital
                    products
                    <br />
                    — Cross-departmental collaboration
                    <br />— Ongoing support and post-launch optimization
                  </span>
                </p>

                <h4 className="mt-12 text-xs font-bold text-stone-500 uppercase">Links</h4>

                <p className="mt-4">
                  <a className="text-red-700 underline" href="#">
                    <span className="cursor-pointer">Website</span>
                  </a>
                  <br />
                  <a className="text-red-700 underline" href="#">
                    <span className="cursor-pointer">Mobile app</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-zinc-950">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee-reverse flex items-center">
            <span className="mx-4 text-[45.00rem] leading-none font-bold text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] leading-none font-bold text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
          <div className="animate-marquee-reverse flex items-center" aria-hidden="true">
            <span className="mx-4 text-[45.00rem] leading-none font-bold text-neutral-400">
              HIGHLIGHTS
            </span>
            <span className="mx-4 text-[45.00rem] leading-none font-bold text-neutral-400">
              &nbsp;&nbsp;&nbsp;&nbsp;HIGHLIGHTS
            </span>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950">
        <div className="container mx-auto px-4">
          <ul className="grid list-none grid-cols-[630.922px_374.844px_481.234px] grid-rows-[19.75rem] gap-5 text-neutral-400">
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] leading-none font-bold text-white">150K+</h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Active app users in a few months post-release
                </span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] leading-none font-bold text-white">47</h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">Countries using app</span>
              </div>
            </li>
            <li className="list-item">
              <div>
                <h3 className="text-[11.75rem] leading-none font-bold text-white">2x</h3>
                <span className="text-[1.38rem] leading-7 text-zinc-500">
                  Winner of eMobility Excellence
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-start gap-24">
            <div className="w-3/5 pt-48">
              <div className="relative">
                <Image
                  className="h-auto w-full max-w-full object-cover"
                  src="/images/audio-five.jpg"
                  alt="Audio Image Five"
                  width={820}
                  height={1088}
                />
              </div>
            </div>
            <div className="w-2/5">
              <div>
                <Image
                  className="h-auto w-4/5 max-w-full object-contain"
                  src="/images/audio-four.jpg"
                  alt="Audio Image Four"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <h3 className="mr-4 text-9xl font-bold whitespace-nowrap text-stone-500 uppercase">
                Key Insights
              </h3>
              <svg
                className="text-brand-gold max-w-full"
                fill="none"
                height="20"
                width="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-8 flex-1">
              <p className="my-4">
                <Link className="text-brand-gold underline" href="">
                  01. All-in-one native mobile app
                </Link>
                <br />
                <Link className="text-brand-gold underline" href="">
                  02. Matching TMB Audio quality
                </Link>
                <br />
                <Link className="text-brand-gold underline" href="">
                  03. Cross-team collaboration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pb-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="-rotate-90 transform text-[35rem] font-bold text-white uppercase opacity-10">
                01
              </div>
            </div>
            <div>
              <h1 className="mb-8 text-[6rem] leading-none font-bold text-white uppercase">
                All-in-one audio platform
              </h1>
              <h3 className="text-[1.75rem] leading-8 font-semibold text-white">
                Creating the ultimate entertainment experience
              </h3>
              <p className="mt-4">
                To make The Merry Beggars platform the ultimate audio entertainment destination, we
                first focused on user experience and content curation — to understand how to better
                engage and delight our listeners. We developed a range of features across the
                platform, including personalized recommendations, seamless playlist creation,
                podcast subscriptions, interactive storytelling experiences, community forums for
                fans, and exclusive behind-the-scenes content from our original productions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-20 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/images/audio-six.jpg"
                alt="Audio Image Six"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/images/audio-six.jpg"
                alt="Audio Image Six"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-32 text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-start-6 col-end-11">
              <h3 className="mb-8 text-[1.75rem] leading-8 font-semibold text-white">
                <b className="font-bold">Cross-team collaboration</b>
              </h3>
              <p>
                Our cross-team collaboration is a key strength that allows us to deliver
                high-quality audio productions efficiently. We have a dedicated team of writers,
                voice actors, sound designers, and producers who work together seamlessly to bring
                each production to life. This collaborative approach ensures that our shows are not
                only engaging but also consistent in quality and style. allows for faster
                development of new shows while maintaining our commitment to excellence. At any
                given time, we may have multiple teams working on various projects, from podcasts to
                audio dramas. Our writers, voice actors, sound designers, and producers collaborate
                seamlessly, often co-leading their respective productions from concept to final
                release. This structure enables us to consistently deliver engaging and innovative
                audio entertainment to our listeners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 pt-20 text-neutral-400">
        <div className="relative container mx-auto px-0" style={{ aspectRatio: '3/2' }}>
          <Image
            src={'/images/audio-seven.jpg'}
            alt="Audio platform showcase"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </Page>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  })

  return result.docs?.[0] || null
})
