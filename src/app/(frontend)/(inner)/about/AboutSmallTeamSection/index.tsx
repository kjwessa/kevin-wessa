import { ThemeBeta, SectionBeta, LayoutBeta, StackBeta } from '@/components/layout'

export function AboutSmallTeamSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <LayoutBeta spacing="large">
          <div className="border-t-2 border-solid border-t-neutral-100/[0.23] text-[1.38rem] leading-7 font-light">
            <StackBeta gap={8}>
              <div className="float-left mt-1 mr-5 text-sm lg:mt-3 lg:mr-8 lg:min-w-[7.50rem]">
                BREWWW
              </div>
              <h2 className="text-[5.00rem] leading-none">
                We're a small team that solves big problems. By blending sharp strategy with
                fearless creativity, we build brands that don't just look different—they act
                different.
              </h2>
            </StackBeta>
          </div>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
