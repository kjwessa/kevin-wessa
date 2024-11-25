"use client"
import React, { useState, useEffect, useRef } from 'react';
import wordPairs from './wordPairs.json';

const AnimatedWord = ({ pair }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const delay = Math.random() * 2000;
    setTimeout(() => setIsVisible(true), delay);

    const flipInterval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, Math.random() * 20000 + 15000);

    return () => {
      clearInterval(flipInterval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const colorClass = pair.color === 'accent' ? 'text-red-500' : 'text-prussian-medium';

  const AnimatedText = ({ text, isVisible, isFlipped, isSecondary = false, isSubtitle = false }) => (
    <div
      className={`w-full text-center transition-all duration-1000 lowercase ${
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
      {text.toLowerCase().split('').map((char, charIndex) => (
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
  );

  return (
    <div className={`flex flex-col items-center ${colorClass} px-6 py-3`}>
      <div className="relative overflow-hidden" style={{ height: 'calc(3.5vw + 1.5vw + 1em)' }}>
        <AnimatedText text={pair.primary} isVisible={isVisible} isFlipped={isFlipped} />
        <AnimatedText text={pair.secondary} isVisible={isVisible} isFlipped={!isFlipped} isSecondary={true} />
        {pair.underline && (
          <div className="mt-2">
            <AnimatedText 
              text={pair.underline.primary} 
              isVisible={isVisible} 
              isFlipped={isFlipped} 
              isSubtitle={true}
            />
            <AnimatedText 
              text={pair.underline.secondary} 
              isVisible={isVisible} 
              isFlipped={!isFlipped} 
              isSecondary={true} 
              isSubtitle={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export function AnimatedHero() {
  // Create rows with approximately 3 words each
  const rows = wordPairs.reduce((acc, curr, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-champagne-light flex flex-col justify-center px-4 pt-[50vh]">
      <div className="w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between font-light mb-8">
            {row.map((pair, index) => (
              <AnimatedWord key={index} pair={pair} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}