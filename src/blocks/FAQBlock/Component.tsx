import React from 'react'
import { Title } from '@/components/ui/Title'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { useAllFAQs } from './hooks/useAllFAQs'
import { RichText } from '@/components/RichText'

type Props = {
  blockType: 'faqBlock'
  title: string
}

export const FAQBlock: React.FC<Props> = ({ title }) => {
  const { faqs, isLoading } = useAllFAQs()

  if (isLoading) {
    return <div>Loading FAQs...</div>
  }

  return (
    <div className="space-y-8">
      <Title size="display-small" el="h2" className="text-center">
        {title}
      </Title>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs?.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              trigger={faq.title}
              content={<RichText data={faq.answer} />}
              triggerVariant="heading"
            />
          ))}
        </Accordion>
      </div>
    </div>
  )
}
