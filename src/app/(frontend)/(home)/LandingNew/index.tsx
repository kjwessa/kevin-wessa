// Core dependencies
import Image from 'next/image'
import Link from 'next/link'

// Local components
import { LandingPortfolioCard } from '@/components/cards/LandingPortfolioCard'
import { LandingServiceAccordion } from '@/components/LandingServiceAccordion'
import { LandingFooter } from '../LandingFooter'

export function LandingNew() {
  return (
    <div className="min-h-full text-sm text-zinc-800">
      <section className="absolute top-0 right-0 left-0 z-10" id="header">
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-[auto] border-b-2 border-solid border-b-white/[0.15]">
          <div className="flex items-center justify-between border-r-2 border-solid border-r-white/[0.15] p-4">
            <Image
              className="inline-block h-6 w-auto max-w-full align-middle"
              src="https://bucket.brewww.studio/brewww/media/brewww_logo_logotype_full_gold.svg"
              alt="Brewww Logo"
              width={200}
              height={40}
              priority
            />
            <div className="text-white">2024</div>
          </div>
          <div className="flex items-center justify-between p-4 text-blue-700">
            <div className="flex items-center gap-4">
              <Link className="group inline-block max-w-full overflow-hidden" href="#about">
                <div className="relative cursor-pointer text-white">
                  About
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
              <Link className="group inline-block max-w-full overflow-hidden" href="#work">
                <div className="relative cursor-pointer text-white">
                  Work
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
              <Link className="group inline-block max-w-full overflow-hidden" href="#services">
                <div className="relative cursor-pointer text-white">
                  Services
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
            </div>
            <Link className="group inline-block max-w-full overflow-hidden" href="#contact">
              <div className="relative cursor-pointer text-white">
                Contact
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-24 bg-white py-24 text-sm text-black" id="about">
        <div className="container mx-auto grid grid-cols-12 gap-4">
          <h2 className="col-span-1">Meet Brewww Studio</h2>
          <p className="col-span-12 indent-[calc(25%_-_4px)] text-5xl font-medium">
            In a world obsessed with the next big thing, we're focused on crafting the next right
            thing. Our studio exists to transform bold visions into enduring brand realities.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-4">
          <p className="col-span-5 col-start-7 text-base font-normal">
            But it's not just about creating visually appealing designs. We believe in the power of
            strategic marketing to help businesses reach their goals. Our team of marketing experts
            will collaborate with you to develop tailored strategies that effectively communicate
            your unique value proposition, engage your audience, and drive conversions
            <br />
            <br />
            We take pride in delivering exceptional results that go beyond aesthetics, helping you
            achieve sustainable growth and business success
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-4 pb-48 text-black" id="work">
        <div className="mb-16">
          <div className="flex flex-col gap-8">
            <div className="border-b-2 border-solid border-b-black/[0.1] pb-3">
              <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start gap-4">
                <h2 className="col-start-1 row-start-1 row-end-2 text-[12.75rem] leading-none font-medium text-black">
                  Work
                </h2>
                <div className="col-start-7 col-end-9 row-start-1 row-end-2 self-end text-black">
                  <div>(2014-2024)</div>
                </div>
                <a
                  className="col-start-11 col-end-13 row-start-1 row-end-2 inline-block max-w-full self-end justify-self-end overflow-hidden text-blue-700"
                  href=""
                >
                  <div className="cursor-pointer text-black">View All</div>
                  <div className="h-0 w-full cursor-pointer bg-black" />
                </a>
              </div>
            </div>
            <div className="grid w-full auto-cols-fr grid-cols-12 grid-rows-[auto] content-start text-5xl font-medium text-black">
              <div className="col-span-6 row-start-1 row-end-2">
                We help brands grow and tell their stories to the world
              </div>
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-[auto] gap-x-4 gap-y-16">
          <LandingPortfolioCard
            href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
            imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
            title="Jimmy Wood Portfolio"
          />
          <LandingPortfolioCard
            href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
            imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
            title="Jimmy Wood Portfolio"
          />
          <LandingPortfolioCard
            href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
            imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
            title="Jimmy Wood Portfolio"
          />
          <LandingPortfolioCard
            href="https://luminous-template.webflow.io/work/jimmy-wood-portfolio"
            imageUrl="https://cdn.prod.website-files.com/66d183e958b40be346c82415/66e6841d1167498ba9dda4af_Group%20379.webp"
            title="Jimmy Wood Portfolio"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-4 pb-48 text-sm text-zinc-800" id="services">
        <div className="flex flex-col items-stretch justify-start gap-4">
          <h2 className="text-[12.75rem] leading-none font-medium text-black">Services</h2>
          <section className="flex-col">
            <LandingServiceAccordion
              id="01"
              serviceName="Branding"
              description="Our Visual Identity service is designed to help creative agencies establish a strong and unique brand identity. We work closely with our clients to understand vision and values, and then create a visual identity reflects their personality and resonates with their target"
              tools={['Illustrative Style', 'Mascot', 'Key Visual', 'Retail or digital strategy']}
              image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
              image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
            />
            <LandingServiceAccordion
              id="02"
              serviceName="Web"
              description="The strategy service of our creative studio is designed to help businesses develop and innovative strategies to achieve their goals. Our team of experts collaborates closely with clients to understand their unique needs and challenges conducting thorough market research and analysis to identify opportunities and potential obstacles"
              tools={['Illustrative Style', 'Mascot', 'Key Visual', 'Retail or digital strategy']}
              image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
              image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
            />
            <LandingServiceAccordion
              id="03"
              serviceName="Content"
              description="We partner with founders who have a strong brand foundation and are ready to take the next steps to grow their ventures at speed. Working with the relevant performance marketing specialists, our acceleration framework is designed to scale businesses with new consumers without compromising in brand promises and positioning. We understand that effective communication is the key to success in today's fast-paced and competitive market. That's why our team of experts is here to provide you with comprehensive strategies and solutions that will elevate your brand's messaging and engage your customers in meaningful ways"
              tools={['Illustrative Style', 'Mascot', 'Key Visual', 'Retail or digital strategy']}
              image1="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535dc1fd2d48a94cf9b0_S1.webp"
              image2="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66e6535db2aa17f270c06316_S2.webp"
            />
          </section>
        </div>
      </section>

      <section className="flex w-full flex-wrap items-start justify-center overflow-hidden">
        <div className="relative h-[59.33rem] w-full">
          <Image
            src="https://cdn.prod.website-files.com/66cdf161f4a7beffc3fd8b80/66d7195fe42755fefbae5362_Section%20Image%201.webp"
            alt="Section Image 1"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
      <LandingFooter />
    </div>
  )
}
