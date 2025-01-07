import { ThemeBeta, SectionBeta } from '@/components/layout'
import Image from 'next/image'

export function AboutKillAverageSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="absolute inset-0">
          <Image
            src="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg"
            alt="Stuurmen office interior"
            fill
            quality={85}
            priority={false}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-8xl font-bold text-white uppercase">Kill off the Average</h2>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
