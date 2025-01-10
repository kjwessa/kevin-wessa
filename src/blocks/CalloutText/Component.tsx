'use client'

import React from 'react'
import { type CalloutTextBlock } from './config'
import { BlockWrapperBeta } from '@/components/layout/BlockWrapperBeta'
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'
import { RichText } from '@/components/RichText'

export const CalloutText: React.FC<CalloutTextBlock> = ({ text, attribution }) => {
  return (
    <BlockWrapperBeta paddingTop="large" paddingBottom="large">
      <BlockContainerBeta size="medium">
        <div className="flex flex-col items-center gap-10">
          <div className="prose prose-xl text-center">
            <RichText content={text} />
          </div>

          {attribution && (
            <div className="flex items-center gap-8">
              <span className="text-base-500">{attribution}</span>
              <div className="h-[76px] w-[76px]">
                <svg
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-500 h-full w-full"
                >
                  <path
                    d="M38 0L49.0459 26.9541L76 38L49.0459 49.0459L38 76L26.9541 49.0459L0 38L26.9541 26.9541L38 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-base-500">{attribution}</span>
            </div>
          )}
        </div>
      </BlockContainerBeta>
    </BlockWrapperBeta>
  )
}
