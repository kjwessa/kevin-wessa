import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

// GridItem Component
const gridItemBetaVariants = cva('', {
  variants: {
    colSpan: {
      auto: 'col-auto',
      full: 'col-span-full',
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
    },
    colStart: {
      auto: 'col-start-auto',
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
    },
    rowSpan: {
      auto: 'row-auto',
      full: 'row-span-full',
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
    },
    rowStart: {
      auto: 'row-start-auto',
      1: 'row-start-1',
      2: 'row-start-2',
      3: 'row-start-3',
      4: 'row-start-4',
      5: 'row-start-5',
      6: 'row-start-6',
    },
    align: {
      auto: 'self-auto',
      start: 'self-start',
      center: 'self-center',
      end: 'self-end',
      stretch: 'self-stretch',
    },
  },
  defaultVariants: {
    colSpan: 'auto',
    rowSpan: 'auto',
    align: 'auto',
  },
})

interface GridItemBetaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemBetaVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const GridItemBeta = ({
  as: Component = 'div',
  colSpan,
  colStart,
  rowSpan,
  rowStart,
  align,
  children,
  className,
  ...props
}: GridItemBetaProps) => {
  return (
    <Component
      className={cn(
        gridItemBetaVariants({
          colSpan,
          colStart,
          rowSpan,
          rowStart,
          align,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
