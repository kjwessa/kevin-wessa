'use client'

import React from 'react'

export const GridGuide = ({ gap = 2, columnColor = 'blue', opacity = 3, maxWidth = '1600px' }) => {
  if (
    process.env.NODE_ENV !== 'development' ||
    process.env.NEXT_PUBLIC_SHOW_GRID_GUIDE !== 'true'
  ) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 mx-auto" style={{ maxWidth }}>
      <div className="h-full bg-transparent">
        <div
          className={`grid h-full grid-cols-12 gap-${gap}`}
          style={{ backgroundColor: `rgba(255, 0, 0, ${opacity / 100})` }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="relative h-full">
              <div
                className={`absolute inset-0 bg-${columnColor}-500`}
                style={{ opacity: opacity / 100 }}
              />
              <div
                className={`absolute right-0 bottom-4 left-0 flex justify-center text-${columnColor}-500 font-bold`}
                style={{ opacity: 0.8 }}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
