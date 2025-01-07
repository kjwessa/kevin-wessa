import Image from 'next/image'
import { SectionBeta } from '@/components/layout/SectionBeta'

export function AboutValuesSection() {
  return (
    <SectionBeta theme="inherit" background="default">
      <div className="relative grid auto-cols-fr grid-cols-6 grid-rows-[auto_auto_auto_auto_auto_auto] gap-4 py-36">
        <div className="col-start-3 col-end-6 row-start-1 row-end-2 flex h-full w-full flex-col items-end justify-start font-bold uppercase">
          <div className="pb-5">+ Our Values</div>
        </div>
        <div
          className="z-10 col-span-3 col-start-4 row-start-4 flex h-full w-full flex-col items-center justify-center self-stretch text-[2.63rem] leading-none"
          style={{
            justifySelf: 'stretch',
          }}
        >
          <h2 className="min-/images/brewww-eight.jpeg-[0vw] mb-8">
            We are committed to treating everyone right, leaving our ego at the door, and truly
            partnering with our clients.
          </h2>
        </div>
        <div className="relative col-span-5 col-start-1 row-start-2 row-end-6 h-[75vh] self-stretch overflow-hidden">
          <Image
            src="/5f0ce068d8b392674335dbfe_DSC04489.1920.jpg"
            width={1000}
            height={1000}
            alt="Partner Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </SectionBeta>
  )
}
