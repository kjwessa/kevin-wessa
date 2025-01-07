import { ServiceCategoryCard } from '@/components/cards/ServiceCategoryCard'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

interface ServicesPillarSectionProps {
  title: string
  tagline: string
  overview: string
  services: Array<{
    number: string
    title: string
    href: string
  }>
}

export function ServicesPillarSection({
  title,
  tagline,
  overview,
  services,
}: ServicesPillarSectionProps) {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="border-t border-gray-700 lg:mb-16"></div>
          <div className="text-display-large mb-5 flex w-full flex-wrap leading-none text-white lg:mb-20">
            <div className="w-full px-2 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="w-full">
                <Title el="h2" size="display-large">
                  {title}
                </Title>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-between text-white">
            <div className="mb-5 w-full px-2 text-[2.50rem] leading-none lg:mb-0 lg:w-[43.75%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <Text size="body-large" className="pr-10 lg:pr-0">
                {tagline}
              </Text>
              <Text size="body-small" className="mt-10 pr-10 lg:pr-0">
                {overview}
              </Text>
            </div>
            <div className="mb-5 w-full px-2 min-[2100px]:w-[43.75%] lg:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              {services.map((service) => (
                <ServiceCategoryCard
                  key={service.title}
                  number={service.number}
                  title={service.title}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
