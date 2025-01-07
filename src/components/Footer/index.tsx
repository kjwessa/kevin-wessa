import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import BrewwwMark from '/images/brand/brewww-mark-white.png'

interface FooterLinkProps {
  url: string
  label: string
  badge?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ url, label, badge }) => (
  <CMSLink
    type="custom"
    url={url}
    label={label}
    appearance="link"
    className="relative inline-block min-w-max text-neutral-400 opacity-70 hover:opacity-100"
  />
)

export default async function Footer() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({ slug: 'footer' })
  const getCurrentYear = (): number => {
    return new Date().getFullYear()
  }
  return (
    <footer className="border-brand-gold bg-brand-dark-bg w-full border-b-4 p-10 text-black">
      <div className="relative w-full overflow-hidden rounded-lg bg-zinc-900 pt-3 pb-16 lg:pt-16 lg:pb-10">
        <div className="absolute top-0 left-0 z-30 bg-neutral-950 pr-5 pb-5">
          <div className="absolute top-0 left-0 z-20 w-full">
            <div className="w-full bg-zinc-900 pb-[100%]" />
          </div>
          <div className="absolute right-0 bottom-0 z-20 w-full bg-zinc-900">
            <div className="w-full bg-neutral-950 pb-[100%]" />
          </div>
          <div className="absolute bottom-0 left-0 z-20 w-full">
            <div className="w-full bg-zinc-900 pb-[100%]" />
          </div>
          <div>
            <div className="flex flex-col items-start">
              <CMSLink
                type="custom"
                url="https://facebook.com/brewwwstudio"
                appearance="link"
                className="bg-brand-gold inline-flex h-8 w-8 items-center justify-center rounded-full"
                label=""
              />
              <CMSLink
                type="custom"
                url="https://instagram.com/brewwwstudio"
                appearance="link"
                className="bg-brand-gold mt-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full"
                label=""
              />
              <CMSLink
                type="custom"
                url="https://twitter.com/brewwwstudio"
                appearance="link"
                className="bg-brand-gold mt-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full"
                label=""
              />
              <CMSLink
                type="custom"
                url="https://linkedin.com/company/brewwwstudio"
                appearance="link"
                className="bg-brand-gold mt-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full"
                label=""
              />
            </div>
          </div>
        </div>

        <div className="relative mb-10 ml-20 flex w-full justify-between pt-4 md:mb-16 md:ml-28 md:pt-8 lg:mb-20 lg:ml-28 lg:pt-0 xl:ml-40">
          <div className="mb-10 flex w-full flex-col flex-wrap md:mb-24 md:flex-row lg:mb-0 lg:w-[43.75%] lg:flex-col lg:items-start lg:justify-start lg:pl-0 xl:w-[37.5%]">
            <h2 className="mb-5 max-w-[14.00rem] pr-10 text-[2.50rem] leading-none text-white min-[2100px]:max-w-sm lg:max-w-xs xl:h-auto">
              We can help you <br /> with that...
            </h2>
            <div className="flex flex-col items-start md:mt-1 md:flex-row md:items-center lg:mt-0 lg:flex-col lg:items-start xl:w-full xl:flex-row xl:items-center">
              <div className="relative inline-flex items-center">
                <CMSLink
                  type="custom"
                  url="/contact"
                  label="Start a project"
                  appearance="default"
                />
              </div>
            </div>
          </div>
          <div className="w-2/4 md:w-1/4 lg:w-1/4 xl:w-72">
            <div className="mb-3 font-light text-zinc-100">Learn</div>
            <ul className="list-none text-neutral-400">
              <li className="flex items-center">
                <FooterLink url="/about" label="About" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/why-brewww" label="Why Brewww" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/testimonials" label="Testimonials" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/faq" label="FAQ" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/journal" label="Journal" />
              </li>
            </ul>
          </div>
          <div className="w-2/4 md:w-1/4 lg:w-1/4 xl:w-72">
            <div className="mb-3 font-light text-zinc-100">Explore</div>
            <ul className="list-none">
              <li className="mt-1 flex items-center">
                <FooterLink url="/work" label="Work" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/services" label="Services" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/play" label="Playground" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/contact" label="Contact" />
              </li>
              <li className="mt-1 flex items-center">
                <FooterLink url="/clients" label="Clients" />
              </li>
            </ul>
          </div>
          <div className="w-full max-w-xs min-[1450px]:max-w-md min-[1800px]:max-w-lg md:mt-0 lg:mt-20 xl:max-w-sm">
            <div className="flex flex-col items-start">
              <div className="mb-3 font-light text-white">Get in touch</div>

              <CMSLink
                type="custom"
                url="tel:01942894596"
                appearance="link"
                className="relative mb-1 inline-flex min-w-max items-center text-zinc-400 opacity-70 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:opacity-100 hover:after:w-full"
                label="800-BREW-YOU"
              />
              <CMSLink
                type="custom"
                url="mailto:hello@brewww.studio"
                appearance="link"
                className="relative inline-flex min-w-max items-center text-zinc-400 opacity-70 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:opacity-100 hover:after:w-full"
                label="hello@brewww.studio"
              />

              <div className="mt-6 mb-1 flex text-zinc-400 lg:mb-2">
                <div className="ml-4 w-full font-light">
                  <p className="mb-6">
                    Brewww
                    <br />
                    1234 Euclid Avenue
                    <br />
                    Cleveland, OH
                    <br />
                    44115
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 hidden w-full justify-center text-[8.5rem] leading-none font-light text-white lg:mb-5 lg:flex">
          <div className="text-center">
            <span className="-mt-11 -mr-3 inline-block align-middle">
              <Image
                src="https://bucket.brewww.studio/brewww/media/brewww_logo_mark_letter-b_white.svg"
                alt="Brewww Mark"
                width={115}
                height={115}
                className="inline-block"
              />
            </span>
            rands beyond tomorrow
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between px-6 lg:pr-20 lg:pl-20 xl:pr-24 xl:pl-24">
          <div className="inline-flex items-center">
            <Image
              src="https://bucket.brewww.studio/brewww/media/brewww_logo_logotype_full_white.svg"
              alt="Brewww Logo"
              width={75}
              height={75}
              className="-mt-2"
            />
            <div className="inline-flex w-auto items-center text-sm text-zinc-400 lg:mr-0 lg:ml-5">
              &copy; Brewww, LLC {getCurrentYear()}
              <div className="mx-2 flex items-center">/</div>
              All Rights Reserved
            </div>
          </div>
          <div className="inline-flex w-auto text-sm text-zinc-400">
            Design. Develop. Deliver.
            <div className="mx-2">/</div>
            <CMSLink
              type="custom"
              url="/privacy-policy"
              appearance="link"
              className="xl:relative xl:inline-block"
              label="Privacy Policy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
