'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'

interface ProjectHeroImageSectionProps {
  imageSrc: string
  altText?: string
}

export const ProjectHeroImageSection = ({
  imageSrc,
  altText = 'Background',
}: ProjectHeroImageSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  })

  const containerScale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1])

  return (
    <SectionBeta
      theme="inherit"
      background="default"
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden"
    >
      <ContainerBeta size="full" spacing="none" className="h-full">
        <motion.div
          className="h-full w-full overflow-hidden rounded-md"
          style={{
            scale: containerScale,
            opacity: isLoaded ? 1 : 0,
          }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              scale: imageScale,
            }}
          >
            <Image
              src={imageSrc}
              alt={altText}
              priority
              fill
              className="rounded-md object-cover"
              style={{
                objectPosition: '50% 30%',
              }}
              onLoad={() => {
                setIsLoaded(true)
              }}
            />
          </motion.div>
        </motion.div>
      </ContainerBeta>
    </SectionBeta>
  )
}
