import { SectionBeta } from '@/components/layout/SectionBeta'
import { Title } from '@/components/ui/Title'
import { ContactHeroProps } from '../types'
import { ContactHeroVideo } from './index.client'
import { CMSLink } from '@/components/Link'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

type Props = Omit<ContactHeroProps, 'blockType'>

export function ContactHero({
  title = 'Exhale. Help is here.',
  subtitle = 'Contact',
  titleLink = {
    type: 'custom',
    url: '',
    appearance: 'default',
  },
  showVideo = false,
  videoUrl,
}: Props) {
  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta spacing="huge" size="3xl">
        <div>
          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div className={`relative mb-10 lg:mb-0 ${showVideo ? 'lg:w-3/4' : 'w-full'}`}>
              <div className="relative w-full">
                <h1 className="mb-3 inline-flex items-center lg:absolute lg:top-[1.00rem] lg:left-0">
                  <div className="h-1.5 w-1.5 rounded-full" />
                  <div className="ml-2 font-light">{subtitle}</div>
                </h1>
                <div className="flex items-start">
                  <Title el="h2" size="display-large" className="indent-48 leading-none">
                    Exhale. Help is <br className="indent-48" />
                    here
                    <CMSLink
                      {...titleLink}
                      className="bg-brand-gold relative inline-block h-8 w-8 rounded-full align-middle text-black"
                    >
                      <svg
                        className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 384 512"
                      >
                        <path
                          d="M344 416h8V160h-16v228.7L53.7 106.3l-5.7-5.6L36.7 112l5.7 5.7L324.7 400H96v16h248z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </CMSLink>
                  </Title>
                </div>
              </div>
            </div>

            {showVideo && videoUrl && (
              <div className="w-full lg:w-64">
                <ContactHeroVideo videoUrl={videoUrl} />
              </div>
            )}
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
