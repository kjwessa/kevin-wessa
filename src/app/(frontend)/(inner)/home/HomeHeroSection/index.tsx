'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'

const StarSVG = React.memo(({ isPulsing }: { isPulsing: boolean }) => (
  <motion.svg
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0.5 }}
    animate={
      isPulsing
        ? {
            opacity: [0.5, 0.2, 0.5],
          }
        : undefined
    }
    transition={
      isPulsing
        ? {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        : undefined
    }
  >
    <circle cx="2" cy="2" r="1" fill="white" />
  </motion.svg>
))

StarSVG.displayName = 'StarSVG'

function ClientStars() {
  const [stars, setStars] = useState<React.ReactElement[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      isPulsing: i % 4 === 0,
    })).map(({ id, top, left, isPulsing }) => (
      <motion.div
        key={id}
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: id * 0.01 }}
        style={{ top, left }}
      >
        <StarSVG isPulsing={isPulsing} />
      </motion.div>
    ))

    setStars(newStars)
  }, [])

  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{stars}</div>
}

export function HomeHeroSection() {
  const heroMessageRef = useRef<HTMLHeadingElement>(null)

  const blurVariants = {
    animate: {
      rotate: [-15, 15],
      scale: [0.9, 1.1],
      opacity: [0.7, 0.9],
    },
  }

  const blurTransition = (delay: number = 0) => ({
    rotate: {
      duration: 15,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
    scale: {
      duration: 12,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
    opacity: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
    delay,
  })

  const getRandomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }

  return (
    <section
      className="from-brand-dark-bg to-brand-dark-surface relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-linear-to-b text-zinc-50"
      id="hero"
    >
      <ClientStars />
      <div className="relative z-10 container mx-auto px-4 py-4">
        <h1
          ref={heroMessageRef}
          className="text-display-medium mx-auto mb-6 max-w-5xl text-center leading-[0.9] font-bold tracking-tighter"
          id="hero-message"
        >
          <span className="opacity-30"></span>
          <span>we craft brands beyond tomorrow.</span>
        </h1>
        <p className="text-body-medium mx-auto mt-6 max-w-3xl text-center opacity-70 md:text-2xl">
          Brewww is the talent, tools, and deliverables to move you from today's reality to
          tomorrow's potential.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 transform bg-white/35" />
            <div className="absolute top-0 left-1/2 h-1/2 w-px -translate-x-1/2 transform bg-white" />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 -mb-[100px] -ml-[100px] h-[45vh] w-[80vw] origin-center bg-[#ff6231] blur-[150px]"
        id="hero-blur-red"
        variants={blurVariants}
        animate="animate"
        transition={blurTransition(0)}
      />
      <motion.div
        className="absolute bottom-0 left-[20%] -mb-[0px] -ml-[0px] h-[40vh] w-[85vw] origin-center bg-[#ffb931] blur-[180px]"
        id="hero-blur-gold"
        variants={blurVariants}
        animate="animate"
        transition={blurTransition(0.3)}
      />
      <motion.div
        className="absolute right-[20%] bottom-0 -mr-[0px] -mb-[0px] h-[40vh] w-[90vw] origin-center bg-[#14c7ff] blur-[200px]"
        id="hero-blur-sky"
        variants={blurVariants}
        animate="animate"
        transition={blurTransition(0.6)}
      />
      <motion.div
        className="absolute right-0 bottom-0 -mr-[100px] -mb-[100px] h-[45vh] w-[95vw] origin-center bg-[#1061ff] blur-[220px]"
        id="hero-blur-blue"
        variants={blurVariants}
        animate="animate"
        transition={blurTransition(0.9)}
      />

      <div className="absolute bottom-0 left-1/2 z-0 h-[125%] w-[250%] -translate-x-1/2 translate-y-[90%] overflow-hidden rounded-[50%]">
        <div
          className="bg-brand-dark-bg relative h-full w-full"
          style={{
            boxShadow: 'inset 0 0 50px 20px rgba(255, 255, 255, 0.25)',
          }}
          id="arc"
        ></div>
      </div>
    </section>
  )
}
