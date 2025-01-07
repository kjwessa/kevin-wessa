import { Project } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '../../ui/Title'
import { Text } from '../../ui/Text'

export type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative w-full">
      <Link href={`/work/${project.slug}`} className="relative flex flex-col items-start">
        <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
          <div className="relative w-full overflow-hidden rounded-lg bg-zinc-800 text-black">
            <div className="relative w-full overflow-hidden">
              <div className="w-full">
                <div className="relative w-full overflow-hidden pb-[75%]">
                  <Image
                    src={
                      typeof project.image === 'string'
                        ? project.image
                        : project.image?.sizes?.full?.url || project.image?.url || ''
                    }
                    alt={
                      (typeof project.image === 'object' && project.image?.alt) ||
                      project.title ||
                      ''
                    }
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={85}
                    loading="lazy"
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
          <Text level="p" size="label-large" className="flex items-center font-light">
            <span>2023</span>
            <span className="mx-3">/</span>
            <span>{project.title}</span>
          </Text>
        </div>

        <Title el="h3" size="title-medium" className="max-w-2xl leading-none">
          {project.snippet}
        </Title>
      </Link>
    </div>
  )
}
