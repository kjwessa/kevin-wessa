'use client'
// React Imports
import React from 'react'
import type { Page } from '@/payload-types'
// Utilities
import { toKebabCase } from '@root/utilities/toKebabCase'

import type { FormBlockType } from '@/blocks/Form/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SplitContent } from '@/blocks/SplitContent/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { ContentBeta } from '@/blocks/ContentBeta/Component'
import { MediaGrid } from '@/blocks/MediaGrid/Component'
import { Bio } from '@/blocks/Bio/Component'
import { MediaSlider } from '@/blocks/MediaSlider/Component'
import { CalloutText } from '@/blocks/CalloutText/Component'

type BlockType = NonNullable<Page['layout']>[number]

const blockComponents = {
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  splitContent: SplitContent,
  content: ContentBlock,
  contentBeta: ContentBeta,
  mediaGrid: MediaGrid,
  bioBlock: Bio,
  mediaSlider: MediaSlider,
  calloutText: CalloutText,
} as const

type Props = {
  blocks: BlockType[]
  customId?: string | null
  disableGrid?: boolean
  disableGutter?: boolean
  disableOuterSpacing?: boolean
  layout?: 'page' | 'post'
}

export const RenderBlocks: React.FC<Props> = (props) => {
  const { blocks, customId, disableGrid, disableGutter, disableOuterSpacing, layout } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <div id={customId ?? undefined}>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <Block
                  key={index}
                  {...(block as any)}
                  id={blockName ? toKebabCase(blockName) : undefined}
                />
              )
            }
          }
          return null
        })}
      </div>
    )
  }

  return null
}
