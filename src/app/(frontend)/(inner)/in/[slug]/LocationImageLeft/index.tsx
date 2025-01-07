import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function LocationImageLeft() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div className="relative mb-10 inline-flex w-full px-2 lg:mb-0 lg:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="relative w-full pb-[100%] md:pb-[56.25%] lg:h-full lg:pb-0">
                <div className="absolute right-0 bottom-0 z-20 h-14 w-32 rounded-tl-3xl text-neutral-950 lg:h-20">
                  <svg
                    className="absolute top-[0.13rem] right-0 h-10 w-10 lg:h-12 lg:w-12"
                    fill="rgb(14, 15, 17)"
                    version="1.1"
                    viewBox="0 0 100 100"
                    x="0"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" fill="rgb(14, 15, 17)" />
                  </svg>
                  <svg
                    className="absolute bottom-0 left-[0.13rem] h-10 w-10 lg:h-12 lg:w-12"
                    fill="rgb(14, 15, 17)"
                    version="1.1"
                    viewBox="0 0 100 100"
                    x="0"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" fill="rgb(14, 15, 17)" />
                  </svg>
                </div>
                <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-zinc-900">
                  <Image
                    className="absolute top-0 left-0 h-full w-full max-w-full object-cover"
                    src="/bg-contact.1200.jpg"
                    alt="Contact"
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
                    <div className="ml-2 font-light text-white">We're the real sh*t</div>
                  </div>
                  <h2 className="mt-3 mb-0 text-[2.50rem] leading-none text-white lg:mt-5 lg:mb-0">
                    We know it's hard for brands to setup an online experience, and budgets can be
                    tight.
                  </h2>
                </div>
                <div className="mt-8 w-full text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    We like to help new brands grow and work in a long-term relationship.
                  </p>
                  <p className="mb-6">
                    We also have experience designing, building, testing, and launching websites for
                    large global organisations. We can be an extension of your in-house marketing
                    team. Take advantage of our expert team to be your complete digital arm.
                  </p>
                </div>
                <div className="mt-8 flex w-full flex-wrap">
                  <div className="mb-3.5 w-full">
                    <div className="flex">
                      <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          height="16"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 font-light text-white">Here since 2010</div>
                    </div>
                  </div>
                  <div className="mb-3.5 w-full">
                    <div className="flex">
                      <div className="bg-brand-gold mt-0 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          height="16"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M447.9 142.5l-23.2 22L181 395.3l-22 20.8-22-20.8L23.2 287.6 0 265.6l44-46.5 23.2 22L159 328l221.7-210 23.2-22 44 46.5z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 font-light text-white">Next JS Verified Partner</div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 inline-flex items-center">
                  <CMSLink
                    type="custom"
                    url="/contact"
                    label="Schedule a call with our team"
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
