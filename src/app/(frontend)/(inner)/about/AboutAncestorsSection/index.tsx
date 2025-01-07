import { ThemeBeta, SectionBeta, LayoutBeta, StackBeta } from '@/components/layout'
import Image from 'next/image'

export function AboutAncestorsSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <LayoutBeta spacing="large">
          <StackBeta gap={10}>
            {/* Header Grid */}
            <div className="relative grid h-auto auto-rows-[minmax(0px,_1fr)] grid-cols-[146px_146px_146px_146px_146px_146px_146px_146px] grid-rows-[21.13rem] justify-start gap-8">
              <div
                className="relative flex h-min w-full content-center items-center justify-center gap-[0.63rem] self-start justify-self-start text-lg"
                style={{ gridColumnEnd: 'span 3' }}
              >
                <div className="relative flex h-min grow content-center items-center justify-start gap-[0.38rem]">
                  <div className="flex h-auto w-auto flex-col justify-start font-medium"></div>
                  <div className="flex h-auto w-auto flex-col justify-start">
                    <p>ST/01</p>
                  </div>
                </div>
                <div className="relative flex h-min grow content-center items-center justify-start">
                  <div className="flex h-auto w-auto flex-col justify-start">
                    <p>How it started</p>
                  </div>
                </div>
              </div>
              <div
                className="relative flex h-full w-full flex-col content-start items-start justify-center self-start justify-self-start text-[3.50rem] leading-none"
                style={{ gridColumnEnd: 'span 5' }}
              >
                <div
                  className="flex h-auto w-full flex-col justify-start"
                  style={{ wordBreak: 'break-word' }}
                >
                  <h2>
                    Like our ancestors in days of old, we're building our own tribe of passionate
                    visionaries unafraid of sharing their ideas and culture with the world.
                  </h2>
                </div>
              </div>
            </div>

            {/* Images and Content Grid */}
            <div className="relative grid h-min w-full auto-rows-min grid-cols-[repeat(8,minmax(1px,1fr))] grid-rows-[repeat(1,min-content)] justify-center gap-8">
              <div
                className="relative flex h-min w-full content-center items-center justify-start self-start justify-self-start min-[810px]:items-start min-[810px]:pt-0 min-[810px]:pr-8 min-[810px]:pb-0 min-[810px]:pl-0"
                style={{ gridColumnEnd: 'span 3', gridRowStart: '1' }}
              >
                <div
                  className="relative h-96 rounded-xl min-[810px]:h-72"
                  style={{ flexGrow: '0.7' }}
                >
                  <div className="rounded-xl">
                    <Image
                      className="h-96 w-80 rounded-xl object-cover"
                      src="https://framerusercontent.com/images/h4avZwD33gi1xDttcLVC1zjWvBA.jpg"
                      fill
                      alt="Placeholder"
                    />
                  </div>
                </div>
              </div>
              <div
                className="relative col-start-auto flex h-auto w-full flex-col content-start items-start justify-start gap-10 self-start justify-self-start min-[810px]:col-start-auto"
                style={{ gridColumnEnd: 'span 5', gridRowStart: '1' }}
              >
                <div className="relative w-full rounded-xl">
                  <div className="rounded-xl">
                    <Image
                      className="h-96 w-full rounded-xl object-cover"
                      src="https://framerusercontent.com/images/mg9Dkmv1bZMO6mM2tX4EUwkcR7A.jpg"
                      fill
                      alt="Placeholder"
                    />
                  </div>
                </div>
                <div className="flex h-min w-full flex-col content-start items-start justify-center gap-6 text-lg">
                  <div
                    className="flex h-auto w-full flex-col justify-start"
                    style={{ wordBreak: 'break-word' }}
                  >
                    <p>More than a studio, we're your long-term ally.</p>
                  </div>
                  <div
                    className="flex h-auto w-full flex-col justify-start"
                    style={{ wordBreak: 'break-word' }}
                  >
                    <p>
                      <span className="text-neutral-400">
                        We specialize in human-centered design where technology serves humanity, not
                        the other way around. This not only elevates your brand but also solves
                        real-world problems.{' '}
                      </span>
                      <br />
                      <br />
                      <span className="text-neutral-400">
                        We see ourselves as your long-term partner – working closely with you for
                        true collaboration, from initial concept to final product. This way, we're
                        invested in your success.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StackBeta>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
