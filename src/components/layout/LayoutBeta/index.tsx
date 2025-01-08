import { cn } from '@root/utilities/cn'

import { cva } from 'class-variance-authority'

interface LayoutBetaProps {
  children: React.ReactNode
  spacing?: 'none' | 'small' | 'medium' | 'large' | 'xlarge'
  className?: string
}

const layoutVariants = cva('relative', {
  variants: {
    spacing: {
      none: 'py-0',
      small: 'py-8',
      medium: 'py-16',
      large: 'py-24',
      xlarge: 'py-32',
    },
  },
  defaultVariants: {
    spacing: 'medium',
  },
})

export const LayoutBeta = ({ children, spacing, className }: LayoutBetaProps) => {
  return (
    <div
      className={cn(
        // Base three-column layout with Webflow-style grid
        'grid grid-cols-[minmax(5vw,1fr)_minmax(auto,1440px)_minmax(5vw,1fr)]',
        // Default children to middle column
        '[&>*]:col-start-2',
        layoutVariants({ spacing }),
        className,
      )}
    >
      {children}
    </div>
  )
}
