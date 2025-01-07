import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { ThemeBeta, SectionBeta, Page } from '@/components/layout'

export const revalidate = 21600 // 6 hours

export default async function LocationPage() {
  const payload = await getPayload({ config: configPromise })
  const locations = await payload.find({
    collection: 'locations',
    limit: 1000,
    sort: '-createdAt',
  })

  return (
    <Page theme="dark">
      <ThemeBeta>
        <SectionBeta theme="inherit" background="default">
          <div className="container mx-auto px-4 py-16">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our National Locations</h1>
              <p className="mx-auto max-w-2xl text-lg">
                Discover our presence and services across different locations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {locations.docs.map((location) => {
                const locationWithFields = location as typeof location & {
                  locationCity: string
                  locationState: string
                }

                return (
                  <Link
                    key={location.id}
                    href={`/in/${location.slug}`}
                    className="group transform overflow-hidden rounded-2xl bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      {location.image ? (
                        <Image
                          src={(location.image as Media)?.url || ''}
                          alt={location.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                          <svg
                            className="h-16 w-16 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9 7h6M9 11h6M9 15h6"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h2 className="mb-2 text-xl font-semibold text-gray-900">{location.title}</h2>
                      {(locationWithFields.locationCity || locationWithFields.locationState) && (
                        <div className="mb-4 flex items-center text-sm text-gray-600">
                          <svg
                            className="mr-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <p className="line-clamp-1">
                            {[locationWithFields.locationCity, locationWithFields.locationState]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center font-medium text-blue-600">
                        <span>Explore Location</span>
                        <svg
                          className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </SectionBeta>
      </ThemeBeta>
    </Page>
  )
}
