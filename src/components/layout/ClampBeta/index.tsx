import React, { ElementType } from 'react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const clampBetaVariants = cva('block overflow-hidden', {
  variants: {
    lines: {
      1: 'text-ellipsis whitespace-nowrap', // Single line
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
    gradient: {
      true: 'relative after:absolute after:bottom-0 after:right-0 after:h-[1.5em] after:w-full after:bg-gradient-to-t from-white to-transparent dark:from-gray-900',
      false: '',
    },
  },
  defaultVariants: {
    lines: 3,
    gradient: false,
  },
})

interface ClampBetaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof clampBetaVariants>, 'gradient'> {
  as?: ElementType
  gradient?: boolean
  children: React.ReactNode
  expandable?: boolean
  onExpand?: () => void
}

export const ClampBeta = ({
  as: Component = 'div',
  lines = 3,
  gradient = false,
  expandable = false,
  onExpand,
  children,
  className,
  ...props
}: ClampBetaProps) => {
  // Don't show gradient if content is expandable
  const showGradient = gradient && !expandable

  return (
    <>
      <Component
        className={cn(clampBetaVariants({ lines, gradient: showGradient }), className)}
        {...props}
      >
        {children}
      </Component>

      {expandable && (
        <button
          type="button"
          onClick={onExpand}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          Read more
        </button>
      )}
    </>
  )
}
