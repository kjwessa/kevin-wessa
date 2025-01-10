'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

export type PaddingProps = {
  top?: 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  bottom?: 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
}

const blockWrapperBetaVariants = cva('relative', {
  variants: {
    theme: {
      dark: 'bg-base-1000',
      light: 'bg-base-0',
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
    },
    background: {
      gradientUp:
        '[&[data-theme="dark"]]:bg-gradient-to-t [&[data-theme="dark"]]:from-base-1000 [&[data-theme="dark"]]:to-transparent [&[data-theme="light"]]:bg-gradient-to-t [&[data-theme="light"]]:from-base-0 [&[data-theme="light"]]:to-transparent',
      gradientDown:
        '[&[data-theme="dark"]]:bg-gradient-to-b [&[data-theme="dark"]]:from-base-1000 [&[data-theme="dark"]]:to-transparent [&[data-theme="light"]]:bg-gradient-to-b [&[data-theme="light"]]:from-base-0 [&[data-theme="light"]]:to-transparent',
      transparent: 'bg-transparent',
    },
    paddingTop: {
      none: 'pt-0',
      xsmall: 'pt-4 md:pt-6',
      small: 'pt-8 md:pt-12',
      medium: 'pt-16 md:pt-20',
      large: 'pt-24 md:pt-32',
      xlarge: 'pt-32 md:pt-40',
    },
    paddingBottom: {
      none: 'pb-0',
      xsmall: 'pb-4 md:pb-6',
      small: 'pb-8 md:pb-12',
      medium: 'pb-16 md:pb-20',
      large: 'pb-24 md:pb-32',
      xlarge: 'pb-32 md:pb-40',
    },
  },
  defaultVariants: {
    paddingTop: 'medium',
    paddingBottom: 'medium',
  },
})

interface BlockWrapperBetaProps extends VariantProps<typeof blockWrapperBetaVariants> {
  className?: string
  children: React.ReactNode
  padding?: PaddingProps
  setPadding?: boolean
  background?: 'gradientUp' | 'gradientDown' | 'transparent'
  hideBackground?: boolean
}

export const BlockWrapperBeta: React.FC<BlockWrapperBetaProps> = ({
  className,
  children,
  theme,
  padding,
  setPadding = true,
  hideBackground,
  background,
  ...rest
}) => {
  return (
    <div
      className={cn(
        blockWrapperBetaVariants({
          theme: hideBackground ? undefined : theme,
          background,
          paddingTop: setPadding ? padding?.top : 'none',
          paddingBottom: setPadding ? padding?.bottom : 'none',
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
