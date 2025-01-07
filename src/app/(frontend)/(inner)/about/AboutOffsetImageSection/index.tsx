import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, StackBeta, LayoutBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { RichText } from '@/components/RichText'

export function AboutOffsetImageSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        {/* Image Section */}
        <div className="grid grid-cols-[minmax(5vw,1fr)_minmax(auto,1440px)_minmax(5vw,1fr)]">
          <div className="relative col-span-2 col-start-1 pt-4 pr-24 pb-12">
            <div className="relative -mt-36 h-[75vh] overflow-hidden">
              <Image
                src="https://bucket.brewww.studio/brewww/media/marybielskiandkevinwessa-6.jpg"
                width={1000}
                height={1000}
                alt="Intro Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <LayoutBeta spacing="xlarge">
          <div className="grid grid-cols-6">
            <StackBeta align="start" gap={8} className="col-start-2 col-end-6">
              <Title
                el="h2"
                size="title-small"
                weight="bold"
                tracking="normal"
                className="uppercase"
              >
                + Crafted with purpose
              </Title>
              <RichText enableGutter={false} preset="default" className="text-xl">
                <p>
                  Envisioned in 2012, formalized in 2017, we are newly founded and really grounded
                  here in Pensacola, FL. Our team is small, agile, and really selective about the
                  clients we take on.{' '}
                  <strong>
                    Our name alludes to an artisanal approach that avoids the instant and focuses on
                    the lasting.
                  </strong>
                </p>
              </RichText>
              <CMSLink type="custom" url="/services" appearance="link" label="View Capabilities" />
            </StackBeta>
          </div>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
