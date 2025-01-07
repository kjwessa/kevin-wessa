import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

// Define the Brand type
type Brand = {
  id: string
  title: string
  snippet?: string
  logoLight?: {
    url: string
  }
  caseStudy?: {
    slug: string
    title: string
  }
}

// Hero Section Component
const HeroSection = () => (
  <div className="mb-6 min-[1250px]:mb-12 min-[1250px]:w-1/2 min-[1900px]:mb-14 min-[1900px]:w-1/2 md:mb-9 md:w-2/3">
    <h1 className="mb-5 text-7xl leading-none text-white min-[1250px]:mb-10 md:mb-8">Clients</h1>
    <p className="text-3xl leading-8 font-medium text-gray-300">
      We've partnered with forward-thinking, belief oriented companies across a variety of sectors.
    </p>
  </div>
)

// Client Grid Component
const ClientGrid = ({ brands }: { brands: Brand[] }) => (
  <div className="mt-14 md:mt-20">
    <ul className="grid grid-cols-1 gap-8 min-[1250px]:grid-cols-3 md:grid-cols-2">
      {brands.map((brand) => (
        <li key={brand.id} className="list-item py-8">
          <div className="flex flex-col items-start">
            {brand.logoLight && (
              <div className="bg-brand-dark-surface relative mb-6 h-[150px] w-[200px]">
                <Image
                  src={brand.logoLight.url}
                  alt={`${brand.title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <h2 className="mb-4 text-2xl text-white">{brand.title}</h2>
            {brand.snippet && <p className="mb-4 max-w-md text-gray-300">{brand.snippet}</p>}
            {brand.caseStudy && (
              <Link
                href={`/work/${brand.caseStudy.slug}`}
                className="relative inline-block min-w-max text-sm font-semibold text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                View Case Study
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // First get all projects to map to brands
  const projectsResponse = await payload.find({
    collection: 'projects',
    limit: 100,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Create a map of brand IDs to their case studies
  const brandCaseStudies = new Map(
    projectsResponse.docs
      .filter(
        (project) => project.slug && typeof project.brand === 'object' && 'id' in project.brand,
      )
      .map((project) => [
        (project.brand as { id: string }).id,
        {
          slug: project.slug as string,
          title: project.title as string,
        },
      ]),
  )

  const brandsResponse = await payload.find({
    collection: 'brands',
    limit: 100,
    where: {
      snippet: {
        exists: true,
      },
    },
  })

  const brands: Brand[] = brandsResponse.docs.map((doc) => ({
    id: doc.id,
    title: doc.title ?? 'Untitled Brand',
    snippet: doc.snippet as string,
    logoLight:
      doc.logoLight && typeof doc.logoLight === 'object' && 'url' in doc.logoLight
        ? { url: doc.logoLight.url as string }
        : undefined,
    caseStudy: brandCaseStudies.get(doc.id),
  }))

  return (
    <section className="bg-brand-dark-bg w-full overflow-hidden pt-32 pb-10 text-lg text-white min-[1250px]:pt-48 min-[1250px]:pb-20 min-[1900px]:pt-56 min-[1900px]:pb-20 md:pt-44 md:pb-16">
      <div className="m-6 min-[1250px]:mx-20 min-[1550px]:mx-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1900px]:max-w-(--breakpoint-2xl) min-[2048px]:mx-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:max-w-[160.00rem] min-[2940px]:mx-auto md:mx-10">
        <HeroSection />
        <ClientGrid brands={brands} />
      </div>
    </section>
  )
}
