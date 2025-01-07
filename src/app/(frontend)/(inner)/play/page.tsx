import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { PlayHero } from './PlayHero'

type Project = {
  id: string
  slug: string | null | undefined
  title: string | null | undefined
  tagline?: string | null | undefined
  category?: string | { name: string } | null | undefined
  publishedOn?: string | null | undefined
  image?: string | { url: string } | null | undefined
}

export default async function PlayPage() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'play',
    limit: 1000,
    sort: '-publishedOn',
  })

  return (
    <>
      <PlayHero />
      <section className="bg-brand-dark-bg">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-[82.50rem] text-xl text-neutral-800 min-[480px]:max-w-[84.38rem] min-[720px]:max-w-[86.88rem] min-[720px]:pr-12 min-[720px]:pl-12 min-[1080px]:max-w-[89.38rem] min-[1080px]:pr-16 min-[1080px]:pl-16">
            <h1 className="mt-28 mb-1 text-[2.88rem] leading-none font-light text-white">
              Brewww Playground
            </h1>
            <p className="mb-24 max-w-[67.50rem] text-[2.88rem] leading-none text-neutral-500">
              A playground where the artisans at Brewww share internal projects that they are
              playing around with. From the ridiculous to the somewhat useful, we hone skillsets
              through imagination and fun.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-bg py-16">
        <div className="container mx-auto">
          <div className="w-full px-6 text-lg text-white md:px-10">
            <div className="mb-12">
              <div className="-ml-0 flex max-w-[18ch] items-center text-[4.25rem] leading-none">
                <span className="mr-2 text-[2rem]">●</span>
                Play
              </div>
              <div className="mt-6 mb-4 h-0.5 bg-zinc-900" />
              <div className="mb-4 text-xs uppercase">Selected Projects</div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.docs.map((project) => (
                <ProjectCard key={project.id} project={project as Project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col overflow-hidden rounded-lg">
    <Link href={`/play/${project.slug}`} className="block">
      <div className="overflow-hidden">
        <div className="relative aspect-video w-full">
          <Image
            src={typeof project.image === 'string' ? project.image : project.image?.url || ''}
            alt={project.title || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        {project.tagline && <p className="mt-2 text-neutral-400">{project.tagline}</p>}
        <div className="mt-3 flex items-center text-sm text-neutral-500">
          <span>
            {project.publishedOn ? new Date(project.publishedOn).toLocaleDateString() : 'No date'}
          </span>
          {project.category && (
            <>
              <span className="mx-2">•</span>
              <span>
                {typeof project.category === 'string' ? project.category : project.category?.name}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  </div>
)
