import { ProjectCard } from '@/components/cards/ProjectCard'
import { Project } from '@/payload-types'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { CMSLink } from '@/components/Link'

export async function ProjectGridSection({ projects }: { projects: Project[] }) {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" color="default">
        <ContainerBeta size="full" spacing="large">
          <div className="flex flex-wrap">
            <div className="w-full px-2 md:mt-20 md:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-16 w-full lg:mb-28">
                {projects[0] && <ProjectCard project={projects[0]} />}
              </div>
              <div className="mb-16 w-full lg:mb-28">
                {projects[1] && <ProjectCard project={projects[1]} />}
              </div>
              <div className="hidden w-full lg:flex">
                <div className="mb-10 flex w-full justify-center text-center">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-headline-small mb-5 leading-none">
                      Like what <br />
                      you see?
                    </h2>
                    <CMSLink type="custom" url="/contact" appearance="default" label="Contact us" />

                    <a className="flex w-full" href="">
                      <div className="relative w-full cursor-pointer overflow-hidden pt-14">
                        <picture className="absolute top-0 left-0 h-full w-full">
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                            type="image/webp"
                          />

                          <img
                            className="mt-3 h-auto w-full max-w-full"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                            alt="Google Reviews Badge"
                          />
                        </picture>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-2 md:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-16 hidden w-full justify-center lg:mb-20 lg:flex">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light">Our Work</div>
                  </div>
                  <Title el="h2" size="headline-medium">
                    A few projects to explore
                  </Title>
                </div>
              </div>
              <div className="mb-16 w-full lg:mb-28">
                {projects[2] && <ProjectCard project={projects[2]} />}
              </div>
              <div className="mb-16 w-full lg:mb-28">
                {projects[3] && <ProjectCard project={projects[3]} />}
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
