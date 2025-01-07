import { ThemeBeta, SectionBeta, LayoutBeta, StackBeta } from '@/components/layout'

export function AboutPursuitSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="absolute top-[-3.13rem] right-0 bottom-0 left-0 z-[-1] flex min-h-[80vh] flex-col justify-between bg-white bg-[linear-gradient(198.91deg,_rgb(255,_255,_255)_64.12%,_rgb(250,_246,_249)_72.26%,_rgb(251,_234,_248)_81.42%,_rgb(252,_213,_245)_89.56%,_rgb(254,_185,_241)_98.72%,_rgb(255,_173,_239)_101.78%)] p-9 text-[2.75rem] leading-none text-stone-950" />
        <LayoutBeta spacing="large">
          <StackBeta gap={16} className="relative">
            <div className="text-7xl">
              <h1 className="max-w-4xl">
                It's our pursuit to eradicate mediocrity from this world. And that makes 'becoming
                obsolete' our ultimate goal.
              </h1>
            </div>
            <div className="flex items-end justify-between text-[1.38rem] leading-7">
              <div>
                <p className="text-xl">
                  <strong className="text-neutral-400">Latest insight: </strong>
                  <em className="cursor-pointer italic">
                    Elevating brands: Strategies for market leadership
                  </em>
                </p>
              </div>
            </div>
          </StackBeta>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
