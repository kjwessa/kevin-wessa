'use client'

import React from 'react'
import type { AboutIntroBlock } from '@/payload-types'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'
import { RichText } from '@/components/RichText'
import Link from 'next/link'

export const AboutIntro: React.FC<AboutIntroBlock> = ({
  mainText,
  description,
  cta,
  gridItems,
}) => {
  return (
    <BlockWrapperBeta className="bg-primary-500">
      <BlockContainerBeta size="large">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left Column */}
          <div className="flex-1">
            <div className="prose prose-xl prose-invert">
              <RichText data={mainText} preset="default" />
            </div>

            <div className="prose prose-lg prose-invert mt-10">
              <p>{description}</p>
            </div>

            {cta && (
              <Link
                href={cta.link}
                className="text-base-50 border-base-50 mt-10 inline-flex items-center gap-8 rounded-full border px-8 py-6 transition-colors hover:bg-white/10"
              >
                <span>{cta.text}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-50"
                >
                  <path
                    d="M6 12h12M13 7l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-1">
              {gridItems?.map((item, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-white/10 p-4"
                >
                  {/* We'll need to implement proper icon handling later */}
                  <span className="text-base-50">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlockContainerBeta>
    </BlockWrapperBeta>
  )
}
