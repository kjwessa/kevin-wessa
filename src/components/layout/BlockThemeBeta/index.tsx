'use client'

import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Theme types for block-specific theming
 * @default 'inherit'
 */
type BlockThemeType = 'light' | 'dark' | 'inherit' | 'invert'

/**
 * Background types for semantic color application
 * @default 'default'
 */
type BackgroundType = 'default' | 'primary' | 'secondary' | 'accent'

const blockThemeBetaVariants = cva('relative w-full transition-colors duration-200', {
  variants: {
    theme: {
      light: '[data-theme="light"]',
      dark: '[data-theme="dark"]',
      inherit: '',
      invert: '[data-theme-invert]',
    },
    background: {
      default: 'bg-background text-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground',
    },
  },
  defaultVariants: {
    theme: 'light',
    background: 'default',
  },
})

type BlockThemeVariantProps = VariantProps<typeof blockThemeBetaVariants>

type BlockThemeBaseProps = {
  /** Optional element type to render as. Defaults to 'div' */
  as?: ElementType
  /** Content to be rendered within the theme context */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type BlockThemeBetaProps = BlockThemeBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof BlockThemeBaseProps> &
  BlockThemeVariantProps

export const BlockThemeBeta = forwardRef<HTMLElement, BlockThemeBetaProps>(
  (
    {
      as: Component = 'div',
      theme = 'inherit',
      background = 'default',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(blockThemeBetaVariants({ theme, background }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

BlockThemeBeta.displayName = 'BlockThemeBeta'
