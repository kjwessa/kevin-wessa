'use client'

import { CMSLink } from '@/components/Link'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { FormBlock } from '@/components/blocks/Form'
import { RichText } from '@/components/RichText'
import type { Form } from '@payloadcms/plugin-form-builder/types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

type Props = {
  form: Form
  description?: SerializedEditorState
  showPlanner?: boolean
  planner?: {
    type?: 'custom' | 'reference'
    url?: string
    label?: string
    appearance?: 'default'
    newTab?: boolean
  }
  showEmail?: boolean
  email?: {
    label?: string
    email?: string
  }
}

export function ContactFormSection({
  form,
  description,
  showPlanner = true,
  planner = {
    type: 'custom',
    url: '/project-planner',
    label: 'Go to Project Planner',
    appearance: 'default',
  },
  showEmail = true,
  email = {
    label: 'Hate contact forms?',
    email: 'hello@brewww.studio',
  },
}: Props) {
  return (
    <SectionBeta theme="dark" background="default">
      <ContainerBeta spacing="medium" size="3xl">
        <div className="flex w-full flex-wrap justify-between lg:-mt-4">
          <div className="order-1 mb-10 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            {description && (
              <div className="mb-5 w-full pr-5 text-lg font-light text-zinc-400 lg:max-w-sm lg:pr-0">
                <RichText className="text-body-medium mb-6" data={description} />
              </div>
            )}
            {showPlanner && planner && <CMSLink {...planner} />}
            {showEmail && email && (
              <div className="text-label-large mt-6 flex w-full flex-col xl:flex-row">
                <div className="font-light text-zinc-400">{email.label}</div>
                <a
                  className="text-white xl:relative xl:mr-0 xl:ml-4 xl:inline-block"
                  href={`mailto:${email.email}`}
                >
                  {email.email}
                </a>
              </div>
            )}
          </div>
          <div className="order-2 mb-10 w-full px-2 lg:mb-0 lg:w-[62.5%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <FormBlock form={form} enableIntro={false} />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
