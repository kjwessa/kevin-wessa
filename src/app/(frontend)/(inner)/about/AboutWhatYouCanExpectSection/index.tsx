import Image from 'next/image'
import { ThemeBeta, SectionBeta } from '@/components/layout'
import { CMSLink } from '@/components/Link'

export function AboutWhatYouCanExpectSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <article className="grid grid-cols-[103.906px_103.906px_103.906px_103.906px_103.906px_103.906px_103.906px_103.922px_103.906px_103.906px_103.906px_103.906px] grid-rows-[192px_auto_auto_auto_auto_76px] gap-x-10 gap-y-6 py-20">
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: 'span 8',
            }}
          >
            <p>
              <span className="inline-block pr-9 text-sm text-stone-500 uppercase">Hello!</span>
              We're Brewww, a studio that builds brands and digital experiences worth remembering.
              Since 2017, we've partnered with clients like The Merry Beggars, IES National, and
              Pietra Fitness to turn ambitious ideas into reality
              <a className="inline-block underline" href="">
                and more.
                <span className="cursor-pointer text-sm text-stone-500 uppercase">
                  <span className="inline-block align-top">(our work)</span>
                </span>
              </a>
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: 'span 5',
            }}
          >
            <p>
              We keep things straightforward here. Take on exciting challenges. Push creative
              boundaries. Build things that last. Every strategy we develop, every pixel we place,
              and every line of code we write is crafted with tomorrow in mind.
            </p>
          </div>
          <div
            className="col-start-9"
            style={{
              gridColumnEnd: 'span 2',
            }}
          >
            <figure>
              <span className="relative inline-block h-36 w-60 overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/images/brewww-eight.jpeg"
                  alt="Kevin Wessa"
                  width={440}
                  height={248}
                />
              </span>
              <div className="text-sm text-stone-500 uppercase">
                <span className="text-white">Kevin Wessa,</span> Founder and CEO of Brewww
              </div>
            </figure>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: 'span 8',
            }}
          >
            <p>
              Our best work happens when we truly collaborate with our clients. No egos, no
              unnecessary complexity—just clear thinking and purposeful design that moves businesses
              forward. <span className="text-brand-gold">We want to do top work.</span> Got
              something big you want to build? Or maybe you need help shaping that vision? Either
              way, we're all in. (let's talk)
              <a className="inline-block underline" href="">
                stands behind.
                <span className="cursor-pointer text-sm text-stone-500 uppercase">
                  <span className="inline-block align-top">
                    (Here's why{' '}
                    <svg
                      className="inline-block h-3 w-3 rotate-90"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                        fill="rgb(102, 102, 102)"
                        fillRule="evenodd"
                      />
                    </svg>
                    )
                  </span>
                </span>
              </a>{' '}
              That's been our approach since day one. While we've grown stronger and sharper, our
              drive to craft something exceptional hasn't changed.
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: 'span 8',
            }}
          >
            <p>
              We are{' '}
              <a className="inline-block underline" href="">
                curious individuals
                <span className="cursor-pointer text-sm text-stone-500 uppercase">
                  <span className="inline-block align-top">
                    (Meet us{' '}
                    <svg
                      className="inline-block h-3 w-3 rotate-90"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                        fill="rgb(102, 102, 102)"
                        fillRule="evenodd"
                      />
                    </svg>
                    )
                  </span>
                </span>
              </a>{' '}
              Got something big you want to build? Or maybe you need help shaping that vision?
              Either way, we're all in.
            </p>
          </div>
          <div
            className="col-start-3 text-4xl"
            style={{
              gridColumnEnd: 'span 8',
            }}
          >
            <p>
              That's been our approach since day one. While we've grown stronger and sharper, our
              drive to craft something exceptional hasn't changed.
            </p>
          </div>
          <div
            className="col-start-3 text-sm font-bold uppercase"
            style={{
              gridColumnEnd: 'span 8',
            }}
          >
            <div className="grid grid-flow-col grid-cols-[220px_220px] grid-rows-[3.75rem] justify-start gap-10">
              <CMSLink type="custom" url="/team" label="Meet the team" appearance="default" />
              <CMSLink
                type="custom"
                url="/what-to-expect"
                label="What you can expect"
                appearance="secondary"
              />
            </div>
          </div>
        </article>
      </SectionBeta>
    </ThemeBeta>
  )
}
