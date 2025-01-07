'use client'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@root/utilities/cn'

const blockSpacingBetaVariants = cva('', {
  variants: {
    top: {
      true: 'mt-[var(--block-spacing)]',
    },
    bottom: {
      true: 'mb-[var(--block-spacing)]',
    },
  },
  defaultVariants: {
    top: true,
    bottom: true,
  },
})

type BlockSpacingBetaProps = VariantProps<typeof blockSpacingBetaVariants> & {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const BlockSpacingBeta: React.FC<BlockSpacingBetaProps> = ({
  bottom = true,
  children,
  className,
  style,
  top = true,
}) => {
  return (
    <div
      className={cn(
        blockSpacingBetaVariants({
          top,
          bottom,
        }),
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
