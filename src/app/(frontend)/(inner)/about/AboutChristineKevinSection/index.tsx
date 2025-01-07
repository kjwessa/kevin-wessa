import Image from 'next/image'
import { ThemeBeta, SectionBeta, LayoutBeta } from '@/components/layout'

export function AboutChristineKevinSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="grid grid-cols-[minmax(5vw,1fr)_minmax(auto,1440px)_minmax(5vw,1fr)]">
          <div className="col-span-2 col-start-1">
            <div className="flex h-full pr-28">
              <Image
                src="/5f53f60a0033860407ff3718_ThebyWessa2020-6960.jpg"
                width={1000}
                height={1000}
                alt="Theby Wessa 2020"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: '50% 50%',
                }}
              />
            </div>
          </div>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
