import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const containerBetaVariants = cva('mx-auto w-full px-4 md:px-6 lg:px-8', {
  variants: {
    size: {
      small: 'max-w-[var(--breakpoint-sm)]',
      medium: 'max-w-[var(--breakpoint-md)]',
      large: 'max-w-[var(--breakpoint-lg)]',
      xl: 'max-w-[var(--breakpoint-xl)]',
      '2xl': 'max-w-[var(--breakpoint-2xl)]',
      '3xl': 'max-w-[var(--breakpoint-3xl)]',
      full: 'max-w-full',
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
    size: '3xl',
    spacing: 'medium',
  },
})

interface ContainerBetaProps
  extends React.HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof containerBetaVariants>, 'spacing'> {
  as?: ElementType
  spacing?: VariantProps<typeof containerBetaVariants>['spacing']
  children: React.ReactNode
}

export const ContainerBeta = ({
  as: Component = 'div',
  size,
  spacing,
  spacingTop,
  spacingBottom,
  children,
  className,
  ...props
}: ContainerBetaProps) => {
  return (
    <Component
      className={cn(
        containerBetaVariants({
          size,
          spacing,
          // Only apply individual spacing if provided
          spacingTop: spacingTop,
          spacingBottom: spacingBottom,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
