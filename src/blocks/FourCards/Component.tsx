'use client'

import React from 'react'
import type { FourCardsBlock } from '@/payload-types'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'

export const FourCards: React.FC<FourCardsBlock> = ({ cards }) => {
  return (
    <BlockWrapperBeta className="rounded-2xl bg-[#B43435]">
      <BlockContainerBeta size="large">
        <div className="flex flex-col lg:flex-row">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col border-[#F5E2CA] px-8 py-[43px] lg:border-l lg:first:border-l-0"
            >
              {/* Number */}
              <div className="mb-[321px] text-[86px] leading-none font-light text-[#F5E2CA]">
                {card.number}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[62px] leading-none font-light text-[#F5E2CA]">{card.title}</h3>
                <p className="text-[38px] leading-[1.5] font-light text-[#F5E2CA]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BlockContainerBeta>
    </BlockWrapperBeta>
  )
}
