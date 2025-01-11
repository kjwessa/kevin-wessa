'use client'

import React, { useState, useEffect, useRef } from 'react'
import { WordPair } from './types'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'

type AnimatedWordProps = {
  pair: WordPair
}

type AnimatedTextProps = {
  text: string
  isVisible: boolean
  isFlipped: boolean
  isSecondary?: boolean
  isSubtitle?: boolean
  color: 'foreground' | 'primary'
}

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

  const getColorClass = (color: 'foreground' | 'primary') => {
    return `text-${color}`
  }

  const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    isVisible,
    isFlipped,
    isSecondary = false,
    isSubtitle = false,
    color,
  }) => (
    <div
      className={`transition-all duration-1000 ${getColorClass(color)} ${
        isVisible
          ? isFlipped
            ? 'translate-y-full opacity-20'
            : 'translate-y-0 opacity-100'
          : isSecondary
          ? '-translate-y-full opacity-0'
          : 'translate-y-full opacity-0'
      }`}
      aria-hidden={!isVisible || isFlipped}
    >
      {isSubtitle ? (
        <Text size="body-medium" className="tracking-tighter uppercase opacity-80">
          {text.split('').map((char, charIndex) => (
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
        </Text>
      ) : (
        <Title el="h3" size="display-small" className="font-condensed tracking-tighter">
          {text.split('').map((char, charIndex) => (
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
        </Title>
      )}
    </div>
  )

  return (
    <div className="relative">
      <span className="placeholder box-border inline text-left opacity-0">
        <Title el="h3" size="display-small" className="font-condensed tracking-tighter">
          {pair.primary.text}
        </Title>
      </span>
      <div className="absolute top-0 left-0 w-full">
        <div className="relative">
          <AnimatedText
            text={pair.primary.text}
            isVisible={isVisible}
            isFlipped={isFlipped}
            color={pair.primary.color}
          />
          <div className="absolute top-0 left-0 w-full">
            <AnimatedText
              text={pair.secondary.text}
              isVisible={isVisible}
              isFlipped={!isFlipped}
              isSecondary={true}
              color={pair.secondary.color}
            />
          </div>
        </div>
        {pair.primary.underline && (
          <div className="mt-[-2px]">
            <div className="relative">
              <AnimatedText
                text={pair.primary.underline}
                isVisible={isVisible}
                isFlipped={isFlipped}
                isSubtitle={true}
                color={pair.primary.color}
              />
              <div className="absolute top-0 left-0 w-full">
                <AnimatedText
                  text={pair.secondary.underline}
                  isVisible={isVisible}
                  isFlipped={!isFlipped}
                  isSecondary={true}
                  isSubtitle={true}
                  color={pair.secondary.color}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function AnimatedHeroClient({ wordPairs }: { wordPairs: WordPair[] }) {
  const rows = wordPairs.reduce<WordPair[][]>((acc, curr, index) => {
    const rowIndex = Math.floor(index / 3)
    if (!acc[rowIndex]) {
      acc[rowIndex] = []
    }
    acc[rowIndex].push(curr as WordPair)
    return acc
  }, [])

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 pt-[50vh]">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="mb-8 flex h-[140px] items-center justify-between overflow-x-hidden font-light whitespace-nowrap"
        >
          {row.map((pair, index) => (
            <AnimatedWord key={index} pair={pair} />
          ))}
        </div>
      ))}
    </div>
  )
}
