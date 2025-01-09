'use client'

import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Theme types for block-specific theming
 * @default 'light'
 */
type BlockThemeType = 'light' | 'dark' | 'primary' | 'secondary'

/**
 * Overlay types for adding overlays to blocks
 * @default 'none'
 */
type OverlayType = 'none' | 'light' | 'medium' | 'dark'

const blockThemeBetaVariants = cva('relative w-full transition-colors duration-200', {
  variants: {
    theme: {
      light: 'bg-base-0 text-base-1000',
      dark: 'bg-base-1000 text-base-0',
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-500 text-white',
    },
    overlay: {
      none: '',
      light: 'before:absolute before:inset-0 before:bg-current/10 before:pointer-events-none',
      medium: 'before:absolute before:inset-0 before:bg-current/20 before:pointer-events-none',
      dark: 'before:absolute before:inset-0 before:bg-current/40 before:pointer-events-none',
    },
    glass: {
      true: 'backdrop-blur-sm bg-current/10',
    },
  },
  defaultVariants: {
    theme: 'light',
    overlay: 'none',
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
      children,
      theme = 'light',
      overlay = 'none',
      glass,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(blockThemeBetaVariants({ theme, overlay, glass }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

BlockThemeBeta.displayName = 'BlockThemeBeta'
