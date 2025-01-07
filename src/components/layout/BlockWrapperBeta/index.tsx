'use client'
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@root/utilities/cn'

export type PaddingProps = {
  top?: 'large' | 'small' | 'hero'
  bottom?: 'large' | 'small'
}

const blockWrapperBetaVariants = cva('relative', {
  variants: {
    theme: {
      dark: 'bg-base-1000',
      light: 'bg-base-0',
    },
    background: {
      gradientUp:
        '[&[data-theme="dark"]]:bg-gradient-to-t [&[data-theme="dark"]]:from-base-1000 [&[data-theme="dark"]]:to-transparent [&[data-theme="light"]]:bg-gradient-to-t [&[data-theme="light"]]:from-base-0 [&[data-theme="light"]]:to-transparent',
      gradientDown:
        '[&[data-theme="dark"]]:bg-gradient-to-b [&[data-theme="dark"]]:from-base-1000 [&[data-theme="dark"]]:to-transparent [&[data-theme="light"]]:bg-gradient-to-b [&[data-theme="light"]]:from-base-0 [&[data-theme="light"]]:to-transparent',
      transparent: 'bg-transparent',
    },
    paddingTop: {
      hero: 'pt-[calc(2rem+var(--page-padding-top))]',
      large: 'pt-32 md:pt-20',
      small: 'pt-16 md:pt-10',
    },
    paddingBottom: {
      large: 'pb-32 md:pb-20',
      small: 'pb-16 md:pb-10',
    },
    hideBackground: {
      true: 'bg-transparent',
    },
    setPadding: {
      true: '',
      false: 'p-0',
    },
  },
  defaultVariants: {
    theme: 'light',
    setPadding: true,
  },
})

type BlockWrapperBetaProps = VariantProps<typeof blockWrapperBetaVariants> & {
  className?: string
  children: React.ReactNode
  padding?: PaddingProps
  background?: 'gradientUp' | 'gradientDown' | 'transparent'
} & React.HTMLAttributes<HTMLDivElement>

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
          theme,
          background,
          paddingTop: padding?.top,
          paddingBottom: padding?.bottom,
          hideBackground,
          setPadding,
        }),
        className,
      )}
      {...rest}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      {children}
    </div>
  )
}
