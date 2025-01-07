import { ThemeBeta, SectionBeta } from '@/components/layout'

export function AboutValTwoSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="container mx-auto">
          <div className="flex h-min w-full flex-row content-start items-start justify-start gap-6 overflow-hidden py-20 text-xs text-gray-900 min-[810px]:flex-col">
            <div
              className="flex h-min w-0 content-center items-center justify-start overflow-hidden text-lg min-[810px]:w-full"
              style={{
                flexGrow: '2',
              }}
            >
              <div className="flex h-auto w-auto flex-col justify-start">
                <p className="leading-relaxed">02</p>
              </div>
            </div>
            <div
              className="flex h-min w-0 flex-col content-start items-start justify-start overflow-hidden text-[5.50rem] leading-normal min-[810px]:w-full"
              style={{
                flexGrow: '10',
              }}
            >
              <div className="flex h-min w-full flex-wrap content-center items-center justify-start overflow-hidden">
                <h1 className="leading-relaxed">
                  Cultivating an environment where
                  <span className="inline-block rotate-15 transform rounded-full bg-black px-3 py-1 leading-relaxed text-white">
                    empathy
                  </span>
                  and understanding thrive.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
