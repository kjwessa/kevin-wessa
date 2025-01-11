import { cn } from '@/utilities/cn'
import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const titleVariants = cva('', {
  variants: {
    variant: {
      'headline-small': 'text-2xl font-light',
      'headline-medium': 'text-3xl font-light',
      'headline-large': 'text-4xl font-light',
    },
  },
  defaultVariants: {
    variant: 'headline-medium',
  },
})

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
}

export function Title({ as: Component = 'h2', className, variant, ...props }: TitleProps) {
  return <Component className={cn(titleVariants({ variant }), className)} {...props} />
}
