import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const deckBetaVariants = cva('relative', {
  variants: {
    offset: {
      tight: '[&>*+*]:-translate-y-[4px] [&>*+*]:-translate-x-[2px]',
      medium: '[&>*+*]:-translate-y-[8px] [&>*+*]:-translate-x-[4px]',
      loose: '[&>*+*]:-translate-y-[16px] [&>*+*]:-translate-x-[8px]',
    },
    limit: {
      2: '[&>*:nth-child(n+3)]:hidden',
      3: '[&>*:nth-child(n+4)]:hidden',
      4: '[&>*:nth-child(n+5)]:hidden',
      5: '[&>*:nth-child(n+6)]:hidden',
    },
    hover: {
      true: '[&>*]:hover:translate-x-4 [&>*]:hover:translate-y-4 [&>*]:hover:rotate-2',
      false: '',
    },
    direction: {
      forward: '[&>*+*]:-translate-y-[var(--offset-y)] [&>*+*]:-translate-x-[var(--offset-x)]',
      reverse: '[&>*+*]:translate-y-[var(--offset-y)] [&>*+*]:translate-x-[var(--offset-x)]',
    },
  },
  defaultVariants: {
    offset: 'medium',
    limit: 3,
    hover: true,
    direction: 'forward',
  },
})

interface DeckBetaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof deckBetaVariants> {
  as?: ElementType
  children: React.ReactNode
}

export const DeckBeta = ({
  as: Component = 'div',
  offset,
  limit,
  hover,
  direction,
  children,
  className,
  style,
  ...props
}: DeckBetaProps) => {
  // Convert React children to array to get count
  const childrenArray = React.Children.toArray(children)
  const childCount = childrenArray.length

  return (
    <Component
      className={cn(
        // Base styles
        'relative',
        // Make children absolute and add transition
        '[&>*]:absolute [&>*]:top-0 [&>*]:left-0',
        '[&>*]:transition-all [&>*]:duration-300',
        // Add shadow to each card
        '[&>*]:shadow-lg',
        // Ensure first child is positioned normally
        '[&>:first-child]:translate-x-0 [&>:first-child]:translate-y-0',
        // Apply variants
        deckBetaVariants({ offset, limit, hover, direction }),
        className,
      )}
      style={{
        // Set height to first child's height
        height: 'var(--deck-height)',
        // Custom properties for offset calculations
        '--offset-x': offset === 'tight' ? '2px' : offset === 'loose' ? '8px' : '4px',
        '--offset-y': offset === 'tight' ? '4px' : offset === 'loose' ? '16px' : '8px',
        ...style,
      }}
      {...props}
    >
      {/* Only show up to limit */}
      {childrenArray.slice(0, limit ?? 0)}
    </Component>
  )
}
