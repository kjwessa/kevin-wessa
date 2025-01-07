import { Faq } from '@/payload-types'
import { Title } from '@/components/ui/Title'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { RichText } from '@/components/RichText'

export function LocationFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="huge">
          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <div className="flex flex-col items-start">
                  <h2 className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="ml-2 font-light text-white">Anything else?</div>
                  </h2>
                  <Title el="h2" size="headline-small" weight="medium" className="mt-5">
                    The answers to your questions.
                  </Title>
                  <div className="relative mt-8 inline-flex items-center">
                    <CMSLink type="custom" url="/faq" label="View all FAQs" appearance="default" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
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
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
