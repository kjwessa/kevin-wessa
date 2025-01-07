import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Faq } from '@/payload-types'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { RichText } from '@/components/RichText'

export default async function FAQPage() {
  const payload = await getPayload({ config: configPromise })
  const faqs = await payload.find({
    collection: 'faq',
    limit: 1000,
  })

  return (
    <>
      <section className="bg-brand-dark-bg w-full py-32 text-black lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <div className="flex flex-col items-start">
                  <h2 className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">Anything else?</div>
                  </h2>
                  <h2 className="mt-5 max-w-lg text-5xl text-white">
                    The answers to your questions.
                  </h2>
                  <div className="relative mt-8 inline-flex items-center">
                    <div className="absolute top-0 right-0 z-20 flex h-9 w-9 items-center justify-center">
                      <div className="relative overflow-hidden">
                        <div>
                          <svg
                            className="h-3 w-3"
                            fill="rgb(1, 2, 2)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(1, 2, 2)"
                            />
                          </svg>
                        </div>
                        <div className="absolute top-0 left-0">
                          <svg
                            className="h-3 w-3"
                            fill="rgb(1, 2, 2)"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                              fill="rgb(1, 2, 2)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <Accordion type="single" collapsible className="w-full">
                {faqs.docs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    trigger={faq.title}
                    triggerVariant="heading"
                    content={faq.answer && <RichText data={faq.answer} />}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
