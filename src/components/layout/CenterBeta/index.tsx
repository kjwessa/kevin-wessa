import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const centerBetaVariants = cva('mx-auto', {
  variants: {
    // How to determine the width
    measure: {
      none: 'w-full', // Full width of parent
      content: 'w-fit', // Width of content
      character: 'max-w-[60ch]', // Optimal reading length
      narrow: 'max-w-[45ch]', // Compact reading length
      wide: 'max-w-[75ch]', // Extended reading length
    },
    // Text alignment within the centered box
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    // Minimum padding on either side
    gutters: {
      none: 'px-0',
      small: 'px-4',
      medium: 'px-6',
      large: 'px-8',
    },
    // Vertical spacing - useful for sections
    spacing: {
      none: 'py-0',
      small: 'py-4',
      medium: 'py-8',
      large: 'py-12',
      xlarge: 'py-16',
    },
  },
  defaultVariants: {
    measure: 'none',
    align: 'left',
    gutters: 'none',
    spacing: 'none',
  },
})

interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerBetaVariants> {
  as?: ElementType
  andText?: boolean // Also center the text within
  intrinsic?: boolean // Use intrinsic sizing instead of full width
  children: React.ReactNode
}

export const Center = ({
  as: Component = 'div',
  measure,
  align,
  gutters,
  spacing,
  andText = false, // If true, centers text too
  intrinsic = false, // If true, uses intrinsic width
  children,
  className,
  ...props
}: CenterProps) => {
  return (
    <Component
      className={cn(
        centerBetaVariants({
          measure: intrinsic ? 'content' : measure,
          align: andText ? 'center' : align,
          gutters,
          spacing,
        }),
        // For flex/grid children that need true centering
        'justify-self-center',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Shorthand components for common centering patterns
export const TextCenter = ({ children, measure = 'character', ...props }: CenterProps) => (
  <Center measure={measure} andText {...props}>
    {children}
  </Center>
)

export const ContentCenter = ({
  children,
  align = 'left',
  gutters = 'medium',
  ...props
}: CenterProps) => (
  <Center measure="content" align={align} gutters={gutters} {...props}>
    {children}
  </Center>
)
