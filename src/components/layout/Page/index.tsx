import React, { forwardRef, ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Theme types for page-level theme control
 * @default 'dark'
 */
type ThemeType = 'light' | 'dark'

const pageVariants = cva('min-h-screen w-full', {
  variants: {
    theme: {
      light: '[data-theme="light"]',
      dark: '[data-theme="dark"]',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
})

type PageVariantProps = VariantProps<typeof pageVariants>

type PageBaseProps = {
  /** Optional element type to render as. Defaults to 'main' */
  as?: ElementType
  /** Content to be rendered within the page */
  children: React.ReactNode
  /** Optional className for custom styles */
  className?: string
}

export type PageProps = PageBaseProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof PageBaseProps> &
  PageVariantProps

export const Page = forwardRef<HTMLElement, PageProps>(
  ({ as: Component = 'main', children, theme = 'dark', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-theme={theme}
        suppressHydrationWarning
        className={cn(pageVariants({ theme }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Page.displayName = 'Page'
