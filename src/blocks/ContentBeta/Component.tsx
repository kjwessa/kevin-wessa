import { cn } from 'src/utilities/cn'
import React from 'react'
import { RichText } from '@/components/RichText'
import type { ContentBetaBlock } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { CMSLink } from '../../components/CMSLink'

type RichTextProps = React.ComponentProps<typeof RichText>

export const ContentBeta: React.FC<ContentBetaBlock> = (props) => {
  const { columns, layout = 'grid', center } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  if (layout === 'centered' && center) {
    return (
      <section className="container mx-auto py-24">
        <div className="grid grid-cols-12 gap-4">
          <RichText
            data={center.richText as RichTextProps['data']}
            preset="default"
            className={cn('prose prose-lg col-span-12 max-w-none text-center', {
              'text-primary': center.highlight?.enabled && center.highlight.color === 'primary',
              'text-secondary': center.highlight?.enabled && center.highlight.color === 'secondary',
            })}
          />
        </div>
      </section>
    )
  }

  return (
    <div className="container my-16">
      <div
        className={cn('grid gap-x-16 gap-y-8', {
          'grid-cols-4 lg:grid-cols-12': layout === 'grid',
          'grid-cols-1 lg:grid-cols-2': layout === 'split',
        })}
      >
        {columns?.map((col, index) => {
          const { enableLink, link, richText, size, highlight } = col

          return (
            <div
              className={cn({
                [`col-span-4 lg:col-span-${colsSpanClasses[size!]}`]: layout === 'grid',
                'md:col-span-2': size !== 'full' && layout === 'grid',
                'col-span-1': layout === 'split',
              })}
              key={index}
            >
              {richText && (
                <RichText
                  data={richText as RichTextProps['data']}
                  preset="default"
                  className={cn('prose prose-lg max-w-none', {
                    'text-primary': highlight?.enabled && highlight.color === 'primary',
                    'text-secondary': highlight?.enabled && highlight.color === 'secondary',
                  })}
                />
              )}
              {enableLink && link && <CMSLink {...link} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
