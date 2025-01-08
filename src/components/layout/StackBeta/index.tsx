import { cn } from '@root/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { ElementType } from 'react'

const stackBetaVariants = cva('flex flex-col', {
  variants: {
    align: {
      start: 'items-start text-left',
      center: 'items-center text-center',
      end: 'items-end text-right',
      stretch: 'items-stretch',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
      16: 'gap-16',
      20: 'gap-20',
    },
  },
  defaultVariants: {
    gap: 4,
    align: 'stretch',
  },
})

interface StackBetaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackBetaVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const StackBeta = ({
  as: Component = 'div',
  gap,
  align,
  children,
  className,
  ...props
}: StackBetaProps) => {
  return (
    <Component className={cn(stackBetaVariants({ gap, align }), className)} {...props}>
      {children}
    </Component>
  )
}
