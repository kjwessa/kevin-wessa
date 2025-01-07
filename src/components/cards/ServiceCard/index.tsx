'use client'

import React, { useContext } from 'react'
import { Service, Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimationControls } from 'motion/react'

// Create a context for managing card opacity
const ServiceCardContext = React.createContext<{
  updateOtherCards: (hoveredIndex: number, progress: number) => void
  registerCard: (index: number, setOpacity: (opacity: number) => void) => void
}>({
  updateOtherCards: () => {},
  registerCard: () => {},
})

export function ServiceCardProvider({ children }: { children: React.ReactNode }) {
  const cardSetters = React.useRef<Map<number, (opacity: number) => void>>(new Map())

  const updateOtherCards = (hoveredIndex: number, progress: number) => {
    cardSetters.current.forEach((setOpacity, index) => {
      if (index !== hoveredIndex) {
        const opacity = Math.max(0.3, 1 - 0.7 * progress * (1 - index / cardSetters.current.size))
        setOpacity(opacity)
      }
    })
  }

  const registerCard = (index: number, setOpacity: (opacity: number) => void) => {
    cardSetters.current.set(index, setOpacity)
  }

  return (
    <ServiceCardContext.Provider value={{ updateOtherCards, registerCard }}>
      {children}
    </ServiceCardContext.Provider>
  )
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const controls = useAnimationControls()
  const [opacity, setOpacity] = React.useState(1)
  const [isHovered, setIsHovered] = React.useState(false)
  const { updateOtherCards, registerCard } = useContext(ServiceCardContext)

  React.useEffect(() => {
    registerCard(index, setOpacity)
  }, [index, registerCard])

  const handleHoverStart = async () => {
    setIsHovered(true)
    controls.start({
      width: '180px',
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96], // power2.out
      },
    })

    let progress = 0
    const interval = setInterval(() => {
      progress = Math.min(1, progress + 0.1)
      updateOtherCards(index, progress)
      if (progress >= 1) clearInterval(interval)
    }, 50)
  }

  const handleHoverEnd = async () => {
    setIsHovered(false)
    controls.start({
      width: '0px',
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96], // power2.in
      },
    })

    let progress = 1
    const interval = setInterval(() => {
      progress = Math.max(0, progress - 0.2)
      updateOtherCards(index, progress)
      if (progress <= 0) clearInterval(interval)
    }, 30)
  }

  return (
    <motion.div
      style={{ opacity }}
      className="service-card w-full border-b-2 border-solid border-neutral-700"
    >
      <Link
        href={`/services/${service.slug}`}
        className="flex w-full items-center py-4 lg:pt-6 lg:pb-6"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          animate={controls}
          initial={{ width: 0 }}
          className="service-card-image inline-flex h-16 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 min-[1800px]:h-40 md:h-28 lg:h-36"
        >
          {service.image && (
            <Image
              src={(service.image as Media)?.url || ''}
              alt={service.title}
              width={180}
              height={160}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
        <motion.div
          className="service-card-text text-display-medium ml-3 inline-flex leading-none text-white"
          animate={{ x: isHovered ? '8%' : '0%' }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <div>{service.title}</div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
