'use client'

import { motion } from 'motion/react'

type VerticalCardProps = {
  title: string
  subtitle: string
  description: string
  isLast?: boolean
}

function VerticalCard({ title, subtitle, description, isLast }: VerticalCardProps) {
  return (
    <motion.div
      className={`group relative grid h-screen cursor-pointer grid-rows-[1fr_auto] px-8 ${
        !isLast ? 'border-opacity-30 border-r border-solid border-[#F5E2CA]' : ''
      }`}
      whileHover="hover"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative h-[8rem] w-full overflow-hidden"
          animate="initial"
          whileHover="hover"
        >
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[6rem] leading-none font-[var(--font-bebas-neue)] text-[#F5E2CA] uppercase"
            initial={{ y: 0 }}
            variants={{
              initial: {
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
              hover: {
                y: '-100%',
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            {title}
          </motion.span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[6rem] leading-none font-[var(--font-bebas-neue)] text-[#F5E2CA] uppercase"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={{
              initial: {
                y: '100%',
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
              hover: {
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            {title}
          </motion.span>
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center gap-2 pb-32">
        <p className="self-stretch text-center text-xl text-[#F5E2CA]">{subtitle}</p>
        <p className="self-stretch text-center text-base text-[#F5E2CA] opacity-80">
          {description}
        </p>
        <motion.div
          className="absolute -bottom-16 flex h-16 w-full items-center justify-center opacity-0"
          variants={{
            hover: {
              opacity: 1,
              y: -64,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6016 17.0023H23.4016M23.4016 17.0023L17.8016 11.4023M23.4016 17.0023L17.8016 22.6023"
              stroke="#FDEFDD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 33C25.8365 33 33 25.8365 33 17C33 8.16344 25.8365 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8365 8.16344 33 17 33Z"
              stroke="#FDEFDD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

type VerticalsHeroClientProps = {
  cards: VerticalCardProps[]
}

export function VerticalsHeroClient({ cards }: VerticalsHeroClientProps) {
  return (
    <div className="relative col-span-4 flex h-screen flex-col items-center justify-center bg-[#B43435]">
      <div className="container mx-auto grid h-full grid-cols-4 items-center">
        {cards.map((card, index) => (
          <VerticalCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            isLast={index === cards.length - 1}
          />
        ))}
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-8 rounded-tl-2xl rounded-tr-2xl bg-[#F5E2CA]"></div>
    </div>
  )
}
