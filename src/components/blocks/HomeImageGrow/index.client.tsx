'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { SectionBeta } from '@/components/layout/SectionBeta'
import type { HomeImageGrowProps } from '@/blocks/HomeImageGrow/types'

export const HomeImageGrowClient: React.FC<HomeImageGrowProps> = ({ image }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <SectionBeta
      ref={sectionRef}
      theme="inherit"
      background="default"
      className="relative h-[80vh] w-full overflow-hidden text-white"
    >
      <ContainerBeta
        size="full"
        spacing="none"
        className="h-full w-full overflow-hidden rounded-3xl"
      >
        <motion.div className="h-full w-full overflow-hidden" style={{ scale }}>
          <motion.div
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              scale: imageScale,
            }}
          >
            <Image
              src={image?.url || '/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg'}
              alt={image?.alt || 'Background'}
              fill
              className="object-cover"
              style={{
                objectPosition: '50% 30%',
              }}
            />
          </motion.div>
        </motion.div>
      </ContainerBeta>
    </SectionBeta>
  )
}

export default HomeImageGrowClient
