'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

const blockContainerBetaVariants = cva('mx-auto px-4 md:px-6', {
  variants: {
    size: {
      small: 'max-w-4xl',
      medium: 'max-w-6xl',
      large: 'max-w-9xl',
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

interface BlockContainerBetaProps extends VariantProps<typeof blockContainerBetaVariants> {
  children: React.ReactNode
  className?: string
}

export const BlockContainerBeta: React.FC<BlockContainerBetaProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <div className={cn(blockContainerBetaVariants({ size }), className)} {...props}>
      {children}
    </div>
  )
}
