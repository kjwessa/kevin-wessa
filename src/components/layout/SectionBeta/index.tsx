import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Background types for semantic color application
 * @default 'default'
 */
type BackgroundType = 'default' | 'primary' | 'secondary' | 'accent'

/**
 * Theme types for controlling light/dark mode
 * @default 'inherit'
 */
type ThemeType = 'light' | 'dark' | 'inherit' | 'invert'

const sectionBetaVariants = cva('relative w-full transition-colors duration-200', {
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
    spacing: {
      none: 'py-[var(--container-spacing-none)]',
      tiny: 'py-[var(--container-spacing-tiny)] md:py-[var(--container-spacing-tiny-md)]',
      xsmall: 'py-[var(--container-spacing-xsmall)] md:py-[var(--container-spacing-xsmall-md)]',
      small: 'py-[var(--container-spacing-small)] md:py-[var(--container-spacing-small-md)]',
      medium: 'py-[var(--container-spacing-medium)] md:py-[var(--container-spacing-medium-md)]',
      large: 'py-[var(--container-spacing-large)] md:py-[var(--container-spacing-large-md)]',
      xlarge: 'py-[var(--container-spacing-xlarge)] md:py-[var(--container-spacing-xlarge-md)]',
      huge: 'py-[var(--container-spacing-huge)] md:py-[var(--container-spacing-huge-md)]',
    },
    spacingTop: {
      none: 'pt-[var(--container-spacing-none)]',
      tiny: 'pt-[var(--container-spacing-tiny)] md:pt-[var(--container-spacing-tiny-md)]',
      xsmall: 'pt-[var(--container-spacing-xsmall)] md:pt-[var(--container-spacing-xsmall-md)]',
      small: 'pt-[var(--container-spacing-small)] md:pt-[var(--container-spacing-small-md)]',
      medium: 'pt-[var(--container-spacing-medium)] md:pt-[var(--container-spacing-medium-md)]',
      large: 'pt-[var(--container-spacing-large)] md:pt-[var(--container-spacing-large-md)]',
      xlarge: 'pt-[var(--container-spacing-xlarge)] md:pt-[var(--container-spacing-xlarge-md)]',
      huge: 'pt-[var(--container-spacing-huge)] md:pt-[var(--container-spacing-huge-md)]',
    },
    spacingBottom: {
      none: 'pb-[var(--container-spacing-none)]',
      tiny: 'pb-[var(--container-spacing-tiny)] md:pb-[var(--container-spacing-tiny-md)]',
      xsmall: 'pb-[var(--container-spacing-xsmall)] md:pb-[var(--container-spacing-xsmall-md)]',
      small: 'pb-[var(--container-spacing-small)] md:pb-[var(--container-spacing-small-md)]',
      medium: 'pb-[var(--container-spacing-medium)] md:pb-[var(--container-spacing-medium-md)]',
      large: 'pb-[var(--container-spacing-large)] md:pb-[var(--container-spacing-large-md)]',
      xlarge: 'pb-[var(--container-spacing-xlarge)] md:pb-[var(--container-spacing-xlarge-md)]',
      huge: 'pb-[var(--container-spacing-huge)] md:pb-[var(--container-spacing-huge-md)]',
    },
  },
  defaultVariants: {
    theme: 'inherit',
    background: 'default',
    spacing: 'medium',
  },
})

type SectionVariantProps = VariantProps<typeof sectionBetaVariants>

type SectionBaseProps = {
  /** Optional element type to render as. Defaults to 'section' */
  as?: ElementType
  /** Content to be rendered within the section */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type SectionBetaProps = SectionBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof SectionBaseProps> &
  SectionVariantProps

export const SectionBeta = forwardRef<HTMLElement, SectionBetaProps>(
  (
    {
      as: Component = 'section',
      children,
      theme = 'inherit',
      background = 'default',
      spacing,
      spacingTop,
      spacingBottom,
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
        className={cn(
          sectionBetaVariants({
            theme,
            background,
            spacing,
            spacingTop,
            spacingBottom,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

SectionBeta.displayName = 'SectionBeta'
