import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function LocationImageRight() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="flex w-full flex-col lg:flex-row-reverse lg:justify-between">
            <div className="relative mb-10 inline-flex w-full px-2 lg:mb-0 lg:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="relative w-full pb-[100%] md:pb-[56.25%] lg:h-full lg:pb-0">
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-zinc-900">
                  <Image
                    className="absolute top-0 left-0 h-full w-full max-w-full object-cover"
                    src="/bg-services.1200.jpg"
                    alt="Services"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex w-full items-center px-2 lg:min-h-[35.00rem] lg:w-2/4 lg:justify-center lg:pt-20 lg:pr-3 lg:pb-20 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="w-full lg:max-w-xl">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">
                      We approach every project with a clear vision.
                    </div>
                  </div>
                  <h2 className="mt-3 mb-0 text-[2.50rem] leading-none text-white lg:mt-5 lg:mb-0">
                    We like to remove the 'waffle' and design beautiful, easy to use websites that
                    are functional.
                  </h2>
                </div>
                <div className="mt-8 w-full text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    We don't <em className="italic">just</em> build pretty websites. Here at Brewww,
                    we understand all aspects of a successful site, from design through web
                    development and testing, to SEO and Hosting. We tailor our service to the client
                    and the project requirements.
                  </p>
                </div>
                <div className="relative mt-8 inline-flex items-center">
                  <CMSLink
                    type="custom"
                    url="/contact"
                    label="Start a project today"
                    appearance="default"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
