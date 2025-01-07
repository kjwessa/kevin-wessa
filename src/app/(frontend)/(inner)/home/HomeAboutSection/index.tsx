import { Title } from '@/components/ui/Title'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function HomeAboutSection() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="huge">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-12 py-16 sm:py-24 md:py-32">
              <div className="col-span-9 col-start-1">
                <Title size="headline-large">
                  From fast-growing startups to experienced companies, we deliver functional design,
                  high-quality code and well-thought strategy to increase your odds of success in
                  the digital world.
                </Title>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
