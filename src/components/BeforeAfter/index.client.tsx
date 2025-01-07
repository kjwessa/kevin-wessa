'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/utilities/cn'

interface BeforeAfterClientProps {
  beforeImage: string
  afterImage: string
  beforeImageAlt: string
  afterImageAlt: string
  backgroundColor: string
}

export const BeforeAfterClient: React.FC<BeforeAfterClientProps> = ({
  beforeImage,
  afterImage,
  beforeImageAlt,
  afterImageAlt,
  backgroundColor,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const mouseX = e.clientX - containerRect.left
      const newPosition = (mouseX / containerWidth) * 100
      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (containerRef.current && e.touches[0]) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const touchX = e.touches[0].clientX - containerRect.left
      const newPosition = (touchX / containerWidth) * 100
      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }
  }, [])

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove])

  const handleTouchEnd = useCallback(() => {
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }, [handleTouchMove])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [handleMouseMove, handleMouseUp],
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    },
    [handleTouchMove, handleTouchEnd],
  )

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <section
      className={`${backgroundColor} px-2 text-black min-[1450px]:px-20 min-[1800px]:px-40 min-[2100px]:px-60 sm:px-6 xl:px-12`}
    >
      <div className="flex w-full flex-wrap">
        <div className="w-full px-2 lg:px-3 xl:px-4">
          <div
            ref={containerRef}
            className={cn(
              'relative h-[52.63rem] overflow-hidden rounded-3xl',
              isLoading && 'animate-pulse bg-neutral-800',
            )}
          >
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={afterImage}
                  alt={afterImageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  onLoadingComplete={() => setIsLoading(false)}
                  priority
                />
              </div>
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={beforeImage}
                  alt={beforeImageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8L22 12L18 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8L2 12L6 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-50 flex w-full justify-between p-4 text-sm text-white">
              <div className="rounded-full bg-zinc-900/80 px-2 py-1 backdrop-blur-sm">Before</div>
              <div className="rounded-full bg-zinc-900/80 px-2 py-1 backdrop-blur-sm">After</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
