'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/cn'
import { RichText } from '@/components/core/RichText'

const accordionVariants = cva(
  'flex w-full items-center justify-between py-4 text-left transition-all cursor-pointer text-[var(--color-foreground)]',
  {
    variants: {
      variant: {
        default: 'text-base font-medium',
        heading: 'text-xl font-semibold',
        large: 'text-2xl font-bold',
      },
      size: {
        default: 'gap-4',
        sm: 'gap-2 py-2',
        lg: 'gap-6 py-6',
      },
      iconVariant: {
        chevron: '[&[data-state=open]>svg]:rotate-180',
        plus: '[&[data-state=open]>svg]:hidden [&[data-state=open]>.minus]:block',
      },
      layout: {
        default: '',
        table: 'border-t border-[var(--color-border)] first:border-t-0',
        tabbed:
          'px-4 border border-[var(--color-border)] rounded-lg mb-2 bg-[var(--color-card)] hover:bg-[var(--color-accent)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      iconVariant: 'chevron',
      layout: 'default',
    },
    compoundVariants: [
      {
        layout: 'tabbed',
        class: '[&[data-state=open]]:bg-[var(--color-accent)]',
      },
    ],
  },
)

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionVariants> {}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant, size, iconVariant, layout, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionVariants({ variant, size, iconVariant, layout }), className)}
      {...props}
    >
      {children}
      {iconVariant === 'plus' ? (
        <>
          <Plus className="h-4 w-4 shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200" />
          <Minus className="minus hidden h-4 w-4 shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200" />
        </>
      ) : (
        <ChevronDown className="h-4 w-4 shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    layout?: VariantProps<typeof accordionVariants>['layout']
  }
>(({ className, children, layout, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-[var(--color-muted-foreground)] transition-all',
      layout === 'tabbed' && 'px-4',
      className,
    )}
    {...props}
  >
    <div
      className={cn('pt-0 pb-4', layout === 'tabbed' && 'border-t border-[var(--color-border)]')}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

type BaseAccordionItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
  'children' | 'content'
>

interface AccordionItemProps extends BaseAccordionItemProps {
  trigger: React.ReactNode | string
  triggerVariant?: VariantProps<typeof accordionVariants>['variant']
  triggerSize?: VariantProps<typeof accordionVariants>['size']
  iconVariant?: VariantProps<typeof accordionVariants>['iconVariant']
  layout?: VariantProps<typeof accordionVariants>['layout']
  content?: React.ReactNode
  richText?: boolean
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(
  (
    {
      className,
      trigger,
      content,
      triggerVariant,
      triggerSize,
      iconVariant,
      layout,
      richText = false,
      ...props
    },
    ref,
  ) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        'transition-colors',
        layout !== 'tabbed' && 'border-b border-[var(--color-border)]',
        className,
      )}
      {...props}
    >
      <AccordionTrigger
        variant={triggerVariant}
        size={triggerSize}
        iconVariant={iconVariant}
        layout={layout}
      >
        {trigger}
      </AccordionTrigger>
      <AccordionContent layout={layout}>
        {richText && typeof content === 'string' ? (
          <div className="prose prose-gray dark:prose-invert">
            <RichText content={content} />
          </div>
        ) : (
          content
        )}
      </AccordionContent>
    </AccordionPrimitive.Item>
  ),
)
AccordionItem.displayName = 'AccordionItem'

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} className={cn('w-full', className)} {...props} />
))
Accordion.displayName = AccordionPrimitive.Root.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
