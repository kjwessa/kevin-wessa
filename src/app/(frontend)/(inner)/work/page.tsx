import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ProjectCard } from '@/components/cards/ProjectCard'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'
import { Page, ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export default async function WorkPage() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    limit: 1000,
    sort: '-updatedAt',
    where: {
      _status: { equals: 'published' },
    },
  })

  const projectsOld = await payload.find({
    collection: 'projects',
    limit: 1000,
    sort: 'title',
    where: {
      _status: { equals: 'published' },
    },
  })
  const testimonials = await payload.find({
    collection: 'testimonials',
    limit: 1000,
    sort: '-updatedAt',
  })

  return (
    <Page theme="dark">
      <ThemeBeta>
        <SectionBeta theme="inherit" background="default">
          <ContainerBeta size="3xl" spacing="huge">
            <div className="relative w-full lg:w-[93.75%]">
              <h1 className="mb-2 inline-flex w-auto items-center lg:absolute lg:top-[0.75rem] lg:left-[1.00rem] lg:mb-0">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="ml-2 font-light text-white">Our Work</div>
              </h1>
              <ul className="flex list-none flex-wrap">
                <li className="mr-4 list-item lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer indent-48 text-[3.25rem] leading-none text-white lowercase">
                      Explore all
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm text-neutral-400 lg:mb-2">
                      38
                    </div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Fashion
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">7</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Fitness & Sport
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">2</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Education
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">3</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Health
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">5</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Property
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">8</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Corporate
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">6</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Food & Drink
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">6</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Agency
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">7</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      eCommerce
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">16</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">B2B</div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">22</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">B2C</div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">12</div>
                  </Link>
                </li>
                <li className="mr-4 list-item text-neutral-400 lg:mr-10">
                  <Link className="inline-flex items-end" href="">
                    <div className="cursor-pointer text-[3.25rem] leading-none lowercase">
                      Archive
                    </div>
                    <div className="mb-1 ml-1 cursor-pointer text-sm lg:mb-2">17</div>
                  </Link>
                </li>
              </ul>
            </div>
          </ContainerBeta>
        </SectionBeta>

        <SectionBeta theme="inherit" background="default">
          <ContainerBeta size="3xl" spacing="huge">
            <div className="grid grid-cols-1 gap-8 px-2 md:grid-cols-2 lg:px-3 xl:px-4">
              {projects.docs.map((project, index) => {
                const isTestimonial = index === 1
                const isContactUs = index === 7

                return (
                  <div key={project.id} className="mb-16 lg:mb-28">
                    {isTestimonial && (
                      <div className="mb-20 hidden w-full justify-center lg:flex">
                        <div className="relative max-w-xl min-[2100px]:max-w-3xl">
                          <svg
                            className="absolute top-0 left-0 h-6 w-6 text-white"
                            fill="rgb(255, 255, 255)"
                            viewBox="0 0 17 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"
                              fill="rgb(255, 255, 255)"
                            />
                          </svg>
                          <h2 className="mb-5 indent-20 text-4xl text-white">
                            {testimonials.docs[0].callout}
                          </h2>
                          <div className="flex items-end">
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-lime-300 text-2xl lg:h-12 lg:w-12">
                              <div className="mt-0">O</div>
                            </div>
                            <div className="mr-0 ml-2 lg:mr-0 lg:ml-3">
                              <div className="text-white">{testimonials.docs[0].author}</div>
                              {/* <div className="text-sm font-light text-zinc-400">
                                  {typeof testimonials.docs[0].brand === 'object' &&
                                  testimonials.docs[0].brand?.title
                                    ? testimonials.docs[0].brand.title
                                    : typeof testimonials.docs[0].brand === 'string'
                                      ? testimonials.docs[0].brand
                                      : null}
                                </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {isContactUs && (
                      <div className="mb-16 flex w-full flex-col items-center text-center lg:mb-28">
                        <h2 className="text-5xl text-white lg:mb-3">You're still here?!</h2>
                        <div className="mb-5 w-full text-lg font-light text-zinc-400">
                          <p className="mb-6">You must really like us...</p>
                        </div>
                        <div className="relative inline-flex items-center">
                          <CMSLink
                            appearance="default"
                            url="/contact"
                            label="Contact us"
                            className="inline-flex items-center"
                          />
                        </div>
                      </div>
                    )}
                    <ProjectCard project={project} />
                  </div>
                )
              })}
            </div>
          </ContainerBeta>
        </SectionBeta>
      </ThemeBeta>
    </Page>
  )
}
