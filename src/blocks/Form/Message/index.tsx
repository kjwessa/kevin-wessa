import { RichText } from '@/components/core/RichText'
import React from 'react'

import { Width } from '@/blocks/Form/Width'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const Message: React.FC = ({ message }: { message: SerializedEditorState }) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  )
}
