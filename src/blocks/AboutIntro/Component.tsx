'use client'

import React from 'react'
import type { AboutIntroBlock } from '@/payload-types'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'
import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/CMSLink'

export const AboutIntro: React.FC<AboutIntroBlock> = ({
  bannerText,
  mainText,
  description,
  cta,
  gridItems,
}) => {
  return (
    <>
      {/* Banner Section */}
      <div className="bg-[#B43435]">
        <BlockContainerBeta size="large">
          <div className="flex items-center justify-between gap-28 py-6">
            <div className="prose prose-lg prose-invert flex-1">
              <RichText data={bannerText} preset="default" />
            </div>
            <div className="h-[34px] w-[34px] flex-none">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#F5E2CA]"
              >
                <path d="M1.77083 1.77083H32.2292V32.2292H1.77083V1.77083Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </BlockContainerBeta>
      </div>

      {/* Main Content */}
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

              {cta?.link && (
                <CMSLink
                  url={cta.link}
                  label={cta.text}
                  className="text-base-50 border-base-50 mt-10 inline-flex items-center gap-8 rounded-full border px-8 py-6 transition-colors hover:bg-white/10"
                >
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
                </CMSLink>
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
    </>
  )
}
