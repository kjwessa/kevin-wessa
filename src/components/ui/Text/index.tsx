import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'

const textVariants = cva('text', {
  variants: {
    level: {
      p: '',
      span: '',
      div: '',
    },
    size: {
      // Body sizes
      'body-large': '[&]:text-body-large',
      'body-medium': '[&]:text-body-medium',
      'body-small': '[&]:text-body-small',

      // Label sizes
      'label-large': '[&]:text-label-large',
      'label-medium': '[&]:text-label-medium',
      'label-small': '[&]:text-label-small',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    textWrap: {
      normal: '', // Default browser behavior
      balance: 'text-balance', // Balance lines
      pretty: 'text-pretty', // Better widow/orphan handling
      nowrap: 'text-nowrap', // Prevent wrapping
    },
    leading: {
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    level: 'p',
    size: 'body-medium',
    textWrap: 'normal',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children?: React.ReactNode
  className?: string
  el?: 'p' | 'span' | 'div'
}

export function Text({
  level,
  size,
  weight,
  textWrap,
  leading,
  tracking,
  font,
  italic,
  children,
  className,
  el = 'p',
  ...props
}: TextProps) {
  const Component = el

  return (
    <Component
      className={cn(
        textVariants({
          level,
          size,
          weight,
          textWrap,
          leading,
          tracking,
          font,
          italic,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
