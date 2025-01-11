import React from 'react'
import { Title } from '@/components/ui/Title'
import { FormBlock } from '@/blocks/Form/Component'
import type { Form } from '@payloadcms/plugin-form-builder/types'

type Props = {
  blockType: 'contactBlock'
  title: string
  form: Form
}

export const ContactBlock: React.FC<Props> = ({ title, form }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg p-8 md:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <Title size="display-small" el="h2" className="text-primary">
            {title}
          </Title>
        </div>
        <div>
          <FormBlock blockType="formBlock" enableIntro={false} form={form} />
        </div>
      </div>
    </div>
  )
}
