import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function ServicesHero() {
  return (
    <ThemeBeta>
      <SectionBeta theme="dark" color="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="mb-3 flex flex-wrap justify-between md:mb-5 lg:mb-0">
            <div className="w-full px-2 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-3 inline-flex w-auto items-center justify-between">
                <div className="ml-2 text-lg font-light text-white">Services</div>
                <div className="ml-4 text-sm font-semibold">
                  <svg
                    className="mr-2 inline-block h-3 w-3"
                    fill="none"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6 0 .87252 3.89355 3.37008-2.13619-2.13615 3.37012L12 6l-3.89355.87252 2.13615 3.37008-3.37008-2.13615L6 12l-.87252-3.89355-3.37012 2.13615 2.13619-3.37008L0 6l3.89355-.87252-2.13619-3.37012 3.37012 2.13619L6 0Z"
                      fill="rgb(255, 255, 255)"
                    />
                  </svg>
                  7 Services available
                </div>
              </div>
              <div className="max-w-6xl">
                <Title el="h1" size="display-small">
                  The talent, tools, and deliverables to spark action for your brand.
                </Title>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap pt-20 text-[2.50rem] leading-none text-white md:justify-end">
            <div className="px-2 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="w-full max-w-xl pr-10 font-light lg:max-w-2xl lg:pr-0 lg:pl-10">
                <Text el="p" size="body-large" className="mb-3">
                  We bring our passion for good design to brave brands and deliver something you can
                  shout about.
                </Text>
                <div className="mt-8 text-sm font-semibold opacity-75">↓ Scroll to learn how</div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
