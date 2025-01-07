import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { LandingFooterBlock as LandingFooterBlockProps } from '@/payload-types'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
} & LandingFooterBlockProps

export const LandingFooterBlock: React.FC<Props> = ({
  className,
  mainLinks,
  socialLinks,
  consultationText,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className={cn('border-t-2 border-solid border-t-black/[0.1] bg-white', className)} id="contact">
      <div className="px-4 pt-4 pb-0">
        <div className="flex flex-col gap-48">
          <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-x-4 gap-y-12">
            <div className="col-start-1 col-end-4 row-start-1 row-end-2">
              <Image
                src="https://bucket.brewww.studio/brewww/media/brewww_logo_logotype_full_gold.svg"
                alt="Brewww Logo"
                width={200}
                height={20}
              />
            </div>
            <div className="col-end-7 row-start-1 row-end-2 flex flex-col items-start justify-start text-blue-700">
              {mainLinks?.map((link, index) => (
                <Link key={index} className="inline-block max-w-full" href={link.href}>
                  <div className="cursor-pointer text-5xl font-medium text-black">{link.text}</div>
                  <div className="h-0 w-full cursor-pointer bg-black" />
                </Link>
              ))}
            </div>
            <div className="col-start-10 col-end-13 row-start-1 row-end-2 flex flex-col gap-2">
              <div className="text-black">Social</div>
              <div className="text-blue-700">
                {socialLinks?.map((link, index) => (
                  <Link
                    key={index}
                    className="flex max-w-full items-center justify-between px-0 py-2 transition-all duration-300 hover:bg-black hover:px-4"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cursor-pointer text-black blur-[0px] transition-colors duration-300 hover:text-white">
                      {link.platform}
                    </div>
                    <Image
                      className="inline-block h-4 w-4 max-w-full cursor-pointer align-middle blur-[0px] transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                      src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d73da8c64d61796ed2fcd3_Link%20Arrow%20Black.svg"
                      alt="Arrow"
                      width={4}
                      height={4}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start">
            <div className="col-span-8 col-start-3 row-start-1 row-end-2 flex flex-col gap-2 justify-self-start">
              <div className="text-black">{consultationText}</div>
              <Link
                className="group inline-block max-w-full overflow-hidden text-blue-700 opacity-80 transition-opacity duration-300 hover:opacity-100"
                href={ctaLink}
              >
                <div className="cursor-pointer text-[12.75rem] leading-none font-medium text-black">
                  {ctaText}
                </div>
                <div className="h-1 w-full origin-left scale-x-[0.1] cursor-pointer bg-black transition-[transform] duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 py-4">
          <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-4">
            <a
              className="col-start-1 row-start-1 row-end-2 inline-block max-w-full justify-self-start overflow-hidden text-blue-700"
              href=""
            >
              <div className="cursor-pointer text-black">More Template</div>
              <div className="h-0 w-full cursor-pointer bg-black" />
            </a>
            <div className="col-start-4 col-end-8 row-start-1 row-end-2 flex gap-8 text-blue-700">
              <a className="inline-block max-w-full overflow-hidden" href="">
                <div className="cursor-pointer text-black">Webflow</div>
                <div className="h-0 w-full cursor-pointer bg-black" />
              </a>
            </div>
            <div className="col-end-13 row-start-1 row-end-2 justify-self-end text-black">
              2024
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
