import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import Link from 'next/link'
import Image from 'next/image'

export function HomeResultsSection() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" color="default">
        <ContainerBeta size="large" spacing="large">
          <div className="relative grid h-[40.63rem] auto-cols-fr grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[minmax(auto,.25fr)_auto_auto_auto_auto_auto_minmax(auto,.25fr)] gap-4">
            <div className="relative z-10 col-start-1 col-end-6 row-start-1 row-end-4 self-center">
              <div className="overflow-hidden text-[3.63rem] leading-none">
                <h2 className="min-h-[0vw]">
                  We focus on results. It's that <strong className="font-extrabold">simple</strong>.
                </h2>
              </div>
              <div className="my-8 pr-28">
                Our goal is not just to make pretty websites. Our goal is to find creative solutions
                to complex problems and deliver engaging products with real results.
              </div>
              <div className="overflow-hidden font-bold">
                <Link className="relative mb-1 inline-block max-w-full" href="/capabilities">
                  <div className="uppercase" id="div-5">
                    View Capabilities
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 w-1/5 bg-white" />
                </Link>
              </div>
            </div>
            <div className="col-start-4 col-end-11 row-start-1 grid h-[37.50rem] w-full auto-cols-fr grid-cols-[.25fr_1fr_1fr_1fr_1fr_1fr_1fr_.25fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto] overflow-hidden">
              <div className="relative col-start-1 col-end-9 row-start-1 h-[37.50rem] w-full">
                <Image
                  alt="Broken glass light"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="/5efa9cb3a8fd7ff9d3b48a92_broken-glass-light.1920.jpg"
                />
              </div>
              <div className="col-start-1 col-end-2 row-start-1 row-end-5 w-16" />
              <div className="col-start-8 col-end-9 row-start-5 w-16" />
            </div>
            <div className="z-10 col-start-6 col-end-12 row-start-1 row-end-4 grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-4">
              <div className="col-start-1 col-end-3 row-start-1 row-end-2 self-end justify-self-end">
                Joseph House
                <br />‍
              </div>
              <div className="col-start-1 col-end-3 row-start-2 row-end-3 min-h-[0vw] self-center justify-self-end text-[8.38rem] leading-none font-bold">
                760%
                <br />‍
              </div>
              <div className="col-start-2 col-end-3 row-start-3 row-end-4 pl-5">
                increase in online donations through their new website.
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
