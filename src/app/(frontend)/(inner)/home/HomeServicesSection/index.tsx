import { ServiceCard } from '@/components/cards/ServiceCard'
import { Service } from '@/payload-types'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { CMSLink } from '@/components/Link'

export function HomeServicesSection({ services }: { services: Service[] }) {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" color="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="w-full rounded-xl bg-zinc-900 py-20 text-black">
            <div className="bg-zinc-900 px-2">
              <div className="mb-10 flex w-full flex-wrap justify-between lg:mb-20">
                <div className="mb-2 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">Our Expertise</div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap lg:w-[68.75%]">
                  <div className="mb-5 w-full px-2 text-5xl text-white lg:mb-0 lg:w-[56.25%] lg:pr-3 lg:pl-3 xl:w-[62.5%] xl:pr-4 xl:pl-4">
                    <h2 className="max-w-xl indent-32 min-[2100px]:max-w-2xl">
                      How we take your business to the next level
                    </h2>
                  </div>
                  <div className="w-full px-2 sm:w-[62.5%] lg:w-[43.75%] lg:pr-3 lg:pl-3 xl:w-[37.5%] xl:pr-4 xl:pl-4">
                    <div className="mb-5 w-full text-lg font-light text-zinc-400">
                      <p className="mb-6">
                        We are a digital marketing agency with expertise, and we're on a mission to
                        help you take the next step in your business.
                      </p>
                    </div>
                    <CMSLink
                      type="custom"
                      url="/services"
                      label="See all services"
                      appearance="default"
                      className="bg-brand-gold hover:bg-brand-gold/90 text-black"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap justify-between">
                <div className="order-1 mt-12 flex h-auto w-full px-2 lg:w-[31.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
                  <div className="sticky w-full self-end">
                    <a
                      className="relative inline-flex w-auto items-center rounded-full py-1.5 pr-8 pl-1.5"
                      href=""
                    >
                      <div className="absolute top-0 left-0 z-0 h-full w-full cursor-pointer rounded-full bg-neutral-950" />
                      <div className="relative mr-3 flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="rgb(255, 255, 255)"
                          height="16"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M384 256L0 32v448l384-224z" fill="rgb(255, 255, 255)" />
                        </svg>

                        <picture>
                          <source
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                            type="image/webp"
                          />

                          <img
                            className="absolute top-0 left-0 z-0 h-full w-full max-w-full object-cover"
                            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
                            alt="Shape"
                          />
                        </picture>
                      </div>
                      <div className="cursor-pointer">
                        <div className="text-white">Hear from Andy</div>
                        <div className="font-light text-zinc-400">Co-founder of Shape</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="order-2 w-full px-2 lg:w-[68.75%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
                  {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
