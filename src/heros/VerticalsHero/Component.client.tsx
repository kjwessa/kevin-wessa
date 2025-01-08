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
      className={`group relative flex h-screen flex-col px-8 ${
        !isLast ? 'border-r border-solid border-[#F5E2CA]' : ''
      }`}
      whileHover="hover"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.p
          className="self-stretch text-center text-[6rem] font-[var(--font-bebas-neue)] text-[#F5E2CA] uppercase"
          variants={{
            hover: {
              y: [0, -100, 0],
              transition: {
                duration: 1.2,
                ease: 'easeInOut',
              },
            },
          }}
        >
          {title}
        </motion.p>
        <p className="mt-4 self-stretch text-center text-xl text-[#F5E2CA]">{subtitle}</p>
      </div>
      <div className="flex flex-col items-center pb-24">
        <p className="self-stretch text-center text-base text-[#F5E2CA] opacity-80">
          {description}
        </p>
        <div className="mt-4 flex h-16 items-center justify-center self-stretch">
          {title === 'Brand' && (
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
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function VerticalsHeroClient() {
  return (
    <div className="relative col-span-4 flex h-screen flex-col items-center justify-center bg-[#B43435]">
      <div className="container mx-auto grid h-full grid-cols-4 items-center">
        <VerticalCard
          title="Brand"
          subtitle="Strategy & Identity"
          description="A tool to shape perceptions, craft meaningful stories, and build lasting connections with audiences."
        />
        <VerticalCard
          title="Design"
          subtitle="UX Designer"
          description="A tool to create experiences, guide journeys, and empathize with the needs of others."
        />
        <VerticalCard
          title="Code"
          subtitle="Full Stack Developer"
          description="A tool to give the order to the chaos, commit to the bigger picture, and git ship done."
        />
        <VerticalCard
          title="Build"
          subtitle="Company Leadership"
          description="A tool to transform ideas into ventures, navigate growth challenges, and scale meaningful businesses."
          isLast
        />
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-8 rounded-tl-2xl rounded-tr-2xl bg-[#F5E2CA]"></div>
    </div>
  )
}
