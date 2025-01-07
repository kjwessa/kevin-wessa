import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import type { FormBlockType } from '@/blocks/Form/Component'

import { FormBlock } from '@/blocks/Form/Component'

type BlockComponents = {
  formBlock: typeof FormBlock
}

type Block = { blockType: 'formBlock' } & FormBlockType

const blockComponents: BlockComponents = {
  formBlock: FormBlock,
}

export const RenderBlocks: React.FC<{
  blocks?: unknown[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          if (block && typeof block === 'object' && 'blockType' in block) {
            const { blockType } = block as { blockType: string }

            if (blockType && blockType in blockComponents) {
              const Block = blockComponents[blockType as keyof BlockComponents]

              if (Block) {
                return (
                  <div className="my-16" key={index}>
                    <Block {...(block as Block)} />
                  </div>
                )
              }
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
