'use client'

import React, { ElementType, useRef, useCallback, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const scrollTrackBetaVariants = cva('relative flex w-full overflow-x-auto overflow-y-hidden', {
  variants: {
    snap: {
      none: '',
      start: 'snap-x snap-mandatory snap-start scroll-p-6',
      center: 'snap-x snap-mandatory snap-center scroll-p-6',
      proximity: 'snap-x snap-proximity snap-center scroll-p-6',
    },
    gap: {
      none: 'gap-0',
      small: 'gap-4',
      medium: 'gap-6',
      large: 'gap-8',
      xlarge: 'gap-12',
    },
    itemWidth: {
      auto: '[&>*]:w-auto',
      full: '[&>*]:w-full',
      half: '[&>*]:w-[calc(50%-theme(spacing.4))] md:[&>*]:w-[calc(50%-theme(spacing.6))]',
      third: '[&>*]:w-[calc(85%-theme(spacing.4))] md:[&>*]:w-[calc(33.333%-theme(spacing.6))]',
      fourth: '[&>*]:w-[calc(70%-theme(spacing.4))] md:[&>*]:w-[calc(25%-theme(spacing.6))]',
    },
    padding: {
      none: 'px-0',
      small: 'px-4',
      medium: 'px-6',
      large: 'px-8',
    },
  },
  defaultVariants: {
    snap: 'proximity',
    gap: 'medium',
    itemWidth: 'auto',
    padding: 'medium',
  },
})

interface ScrollTrackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollTrackBetaVariants> {
  as?: ElementType
  children: React.ReactNode
  showButtons?: boolean
  showScrollbar?: boolean
  showProgress?: boolean
  fadeEdges?: boolean
  dragToScroll?: boolean
}

export const ScrollTrackBeta = ({
  as: Component = 'div',
  snap,
  gap,
  itemWidth,
  padding,
  showButtons = false,
  showScrollbar = false,
  showProgress = false,
  fadeEdges = false,
  dragToScroll = true,
  children,
  className,
  ...props
}: ScrollTrackProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Handle scroll position detection
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100
    setScrollProgress(progress)

    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1) // -1 for rounding
  }, [])

  // Initialize and cleanup scroll detection
  useEffect(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    handleScroll() // Initial check
    scrollEl.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      scrollEl.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  // Programmatic scrolling
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const scrollAmount = container.clientWidth * (direction === 'left' ? -0.75 : 0.75)
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scroll('left')
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scroll('right')
      }
    },
    [scroll],
  )

  // Mouse/Touch drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragToScroll || !scrollRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return

    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mouseleave', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseUp)
    }
  }, [isDragging])

  const buttonClasses = cn(
    'absolute top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10',
    'items-center justify-center rounded-full bg-white/90 shadow-lg',
    'hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-opacity duration-200',
  )

  return (
    <div
      className="relative"
      role="region"
      aria-label="Scrollable content"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {showButtons && (
        <>
          <button
            onClick={() => scroll('left')}
            className={cn(buttonClasses, 'left-0 -translate-x-1/2')}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={cn(buttonClasses, 'right-0 translate-x-1/2')}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {fadeEdges && (
        <>
          <div
            className={cn(
              'from-background pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r to-transparent',
              !canScrollLeft && 'opacity-0',
            )}
          />
          <div
            className={cn(
              'from-background pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l to-transparent',
              !canScrollRight && 'opacity-0',
            )}
          />
        </>
      )}

      {showProgress && (
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
          <div
            className="bg-primary h-full transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      <Component
        ref={scrollRef}
        className={cn(
          scrollTrackBetaVariants({ snap, gap, itemWidth, padding }),
          !showScrollbar && 'scrollbar-none',
          isDragging && 'cursor-grabbing',
          !isDragging && dragToScroll && 'cursor-grab',
          className,
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        {...props}
      >
        {children}
      </Component>
    </div>
  )
}
