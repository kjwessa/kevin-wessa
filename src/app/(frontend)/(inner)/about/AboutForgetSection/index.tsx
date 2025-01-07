import { ThemeBeta, SectionBeta, StackBeta, LayoutBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { RichText } from '@/components/RichText'

export function AboutForgetSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <LayoutBeta spacing="large">
          <div className="border-b-2 border-solid border-black">
            <StackBeta gap={8} className="flex-row justify-between">
              <div className="basis-[47%]">
                <StackBeta align="center" gap={8} className="text-center">
                  <Title el="h3" size="display-small" leading="none">
                    Let's not forget about people.
                  </Title>
                  <RichText enableGutter={false} preset="default" className="text-xl">
                    <p>
                      We know how to design and build for the web, how to talk about lead-gen and
                      build for conversions and so on. But we also understand something just as
                      vital – we're not creating for robots, but people.
                    </p>
                    <p>
                      We bring a human-centered approach to our work by bringing through elements of
                      delight and humanity.
                    </p>
                    <p>
                      Nothing makes us happier than when we can partner with our clients to bring
                      more beauty into the world.
                    </p>
                  </RichText>
                </StackBeta>
              </div>
              <div className="basis-[47%]">
                <div className="relative flex w-full items-center justify-center">
                  <div
                    className="relative flex h-full max-h-[31.25rem] min-h-[31.25rem] w-full max-w-[31.25rem]"
                    style={{
                      cursor:
                        'url("https://grainandmortar.com/wp-content/themes/gm/_assets/img/cursor-arrow.svg") 0 0, default',
                    }}
                  ></div>
                </div>
              </div>
            </StackBeta>
          </div>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
