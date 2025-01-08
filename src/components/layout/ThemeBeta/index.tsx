import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Theme types for controlling light/dark mode
 * @default 'inherit'
 */
type ThemeType = 'light' | 'dark' | 'inherit' | 'invert'

/**
 * Background types for semantic color application
 * @default 'default'
 */
type BackgroundType = 'default' | 'primary' | 'secondary' | 'accent'

const themeBetaVariants = cva('relative w-full transition-colors duration-200', {
  variants: {
    theme: {
      light: '[data-theme="light"]',
      dark: '[data-theme="dark"]',
      inherit: '',
      invert: '[data-theme-invert]',
    },
    background: {
      default: 'bg-background text-foreground',
      primary: 'bg-card text-card-foreground',
      secondary: 'bg-muted text-muted-foreground',
      accent: 'bg-accent text-accent-foreground',
    },
  },
  defaultVariants: {
    theme: 'inherit',
    background: 'default',
  },
})

type ThemeVariantProps = VariantProps<typeof themeBetaVariants>

type ThemeBaseProps = {
  /** Optional element type to render as. Defaults to 'div' */
  as?: ElementType
  /** Content to be rendered within the theme context */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type ThemeBetaProps = ThemeBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof ThemeBaseProps> &
  ThemeVariantProps

export const ThemeBeta = forwardRef<HTMLElement, ThemeBetaProps>(
  (
    {
      as: Component = 'div',
      children,
      theme = 'inherit',
      background = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        data-theme={theme === 'light' || theme === 'dark' ? theme : undefined}
        data-theme-invert={theme === 'invert' || undefined}
        className={cn(themeBetaVariants({ theme, background }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

ThemeBeta.displayName = 'ThemeBeta'
