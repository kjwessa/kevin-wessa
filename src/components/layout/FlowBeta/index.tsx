import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const flowBetaVariants = cva(
  // Base styles - targets all direct children
  '[&>*]:first:mt-0 [&>*]:last:mb-0',
  {
    variants: {
      spacing: {
        // Default spacing between elements
        small: '[&>*+*]:mt-4',
        medium: '[&>*+*]:mt-6',
        large: '[&>*+*]:mt-12',
        // Custom spacing for specific elements
        custom: `
          [&>*+*]:mt-6
          [&>h2]:mt-24
          [&>h3]:mt-8
          [&>h4]:mt-8
          [&>blockquote]:mt-8
          [&>ul]:mt-6
          [&>ol]:mt-6
          [&>pre]:mt-8
          [&>figure]:mt-8
          [&>table]:mt-8
        `,
      },
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      spacing: 'custom',
      textAlign: 'left',
    },
  },
)

interface FlowBetaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flowBetaVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const FlowBeta = ({
  as: Component = 'div',
  spacing,
  textAlign,
  children,
  className,
  ...props
}: FlowBetaProps) => {
  return (
    <Component className={cn(flowBetaVariants({ spacing, textAlign }), className)} {...props}>
      {children}
    </Component>
  )
}
