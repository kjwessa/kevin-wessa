import { Title } from '@/components/ui/Title'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function LocationHeroDetails() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="2xl">
          <div className="flex w-full flex-wrap justify-between">
            <div className="relative mb-10 w-full px-2 lg:mb-0 lg:w-[56.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="flex flex-col items-start">
                <div className="inline-flex w-auto items-center lg:absolute lg:top-[1.75rem] lg:left-[1.00rem]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Web Design</div>
                </div>
                <Title
                  size="headline-medium"
                  className="mt-3 mb-5 indent-48 text-white lg:mt-5 lg:mb-0"
                >
                  Are you a startup brand, well established company, in the US or worldwide? It
                  doesn't matter. We work with a range of clients.
                </Title>
                <div className="relative mt-3 mb-0 inline-flex items-center lg:mt-5 lg:mb-0">
                  <CMSLink type="custom" url="/about" label="About Brewww" appearance="default" />
                </div>
              </div>
            </div>
            <div className="w-full px-2 lg:w-1/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-5 text-sm font-light text-neutral-400">
                Our Website Capabilities
              </div>
              <div className="w-full">
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Web Design</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">eCommerce</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">UX Design</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Responsive Design</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Wireframes</div>
                  </div>
                </div>
                <div className="mb-3 w-full">
                  <div className="flex">
                    <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full text-neutral-950">
                      <svg
                        className="h-3 w-3"
                        fill="rgb(14, 15, 17)"
                        height="16"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                          fill="rgb(14, 15, 17)"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 font-light text-white">Strategy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
