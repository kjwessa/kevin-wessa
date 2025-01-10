'use client'

import React, { useState, useEffect, useRef } from 'react'

type WordPair = {
  primary: {
    text: string
    color: 'accent' | 'base'
    underline: string
  }
  secondary: {
    text: string
    color: 'accent' | 'base'
    underline: string
  }
  tertiary: {
    text: string
    color: 'accent' | 'base'
    underline: string
  }
}

type AnimatedWordProps = {
  pair: WordPair
}

type AnimatedTextProps = {
  text: string
  isVisible: boolean
  isFlipped: boolean
  isSecondary?: boolean
  isSubtitle?: boolean
}

import wordPairs from './wordPairs.json'

const AnimatedWord: React.FC<AnimatedWordProps> = ({ pair }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const delay = Math.random() * 2000
    const timeout = setTimeout(() => setIsVisible(true), delay)

    const flipInterval = setInterval(
      () => {
        setIsFlipped((prev) => !prev)
      },
      Math.random() * 20000 + 15000,
    )

    return () => {
      clearInterval(flipInterval)
      clearTimeout(timeout)
    }
  }, [])

  const colorClass = pair.primary.color === 'accent' ? 'text-red-500' : 'text-prussian-medium'

  const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    isVisible,
    isFlipped,
    isSecondary = false,
    isSubtitle = false,
  }) => (
    <div
      className={`w-full text-center lowercase transition-all duration-1000 ${
        isVisible
          ? isFlipped
            ? 'translate-y-full opacity-20'
            : 'translate-y-0 opacity-100'
          : isSecondary
          ? '-translate-y-full opacity-0'
          : 'translate-y-full opacity-0'
      } ${isSubtitle ? 'text-[1.5vw]' : 'text-[3.5vw]'} tracking-tighter`}
      style={{ letterSpacing: '-3px' }}
      aria-hidden={!isVisible || isFlipped}
    >
      {text
        .toLowerCase()
        .split('')
        .map((char, charIndex) => (
          <span
            key={charIndex}
            className="inline-block transition-transform duration-500"
            style={{
              transitionDelay: `${charIndex * 30}ms`,
              transform: isVisible && !isFlipped ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
    </div>
  )

  return (
    <div className={`flex flex-col items-center ${colorClass} px-6 py-3`}>
      <div className="relative overflow-hidden" style={{ height: 'calc(3.5vw + 1.5vw + 1em)' }}>
        <AnimatedText text={pair.primary.text} isVisible={isVisible} isFlipped={isFlipped} />
        <AnimatedText
          text={pair.secondary.text}
          isVisible={isVisible}
          isFlipped={!isFlipped}
          isSecondary={true}
        />
        {pair.primary.underline && (
          <div className="mt-2">
            <AnimatedText
              text={pair.primary.underline}
              isVisible={isVisible}
              isFlipped={isFlipped}
              isSubtitle={true}
            />
            <AnimatedText
              text={pair.secondary.underline}
              isVisible={isVisible}
              isFlipped={!isFlipped}
              isSecondary={true}
              isSubtitle={true}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function AnimatedHero() {
  // Create rows with approximately 3 words each
  const rows = wordPairs.reduce<WordPair[][]>((acc, curr, index) => {
    const rowIndex = Math.floor(index / 3)
    if (!acc[rowIndex]) {
      acc[rowIndex] = []
    }
    acc[rowIndex].push(curr as WordPair)
    return acc
  }, [])

  return (
    <div className="bg-champagne-light flex min-h-screen flex-col justify-center px-4 pt-[50vh]">
      <div className="w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-8 flex justify-between font-light">
            {row.map((pair, index) => (
              <AnimatedWord key={index} pair={pair} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
