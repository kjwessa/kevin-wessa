'use client'

import type { Page, Project, Location, Service } from '@root/payload-types'

import { MediaBlock } from '@/components/blocks/MediaBlock/index'
import { BannerBlock } from '@/components/blocks/Banner/index'
import { CallToActionBlock } from '@/components/blocks/CallToAction/index'
import { LandingAboutBlock } from '@/components/blocks/LandingAbout/index'
import { LandingWorkBlock } from '@/blocks/LandingWork/Component'
import { LandingFooterBlock } from '@/components/blocks/LandingFooter/index'
import { LandingServiceBlock } from '@/components/blocks/LandingService/index'
import { LandingImageBlock } from '@/components/blocks/LandingImage/index'
import { FormBlock } from '@/components/blocks/Form/index'
import { BeforeAfterSliderBlock } from '@/components/blocks/BeforeAfter/index'
import { TestimonialBlock } from '@/components/blocks/Testimonial/index'
import { FAQBlock } from '@/components/blocks/FAQ/index'
import { ProjectImageComponent } from '@/components/blocks/ProjectImage/index'
import { ProjectSplitContent } from '@/components/blocks/ProjectSplitContent'
import { ProjectInsightBlock } from '@/components/blocks/ProjectInsight'
import { ServiceSplitContent } from '@/components/blocks/ServiceSplitContent'
import { ServiceDifferentContent } from '@/components/blocks/ServiceDifferentContent'
import { ServiceIntroContent } from '@/components/blocks/ServiceIntroContent'
import { LocationIntroContent } from '@/components/blocks/LocationIntroContent'
import { HomeImageGrow } from '@/components/blocks/HomeImageGrow'
import { ContactFormSection } from '@/components/blocks/ContactFormSection'
import { toKebabCase } from '@/utilities/toKebabCase'
import React, { Fragment } from 'react'
import { ProjectGallerySlider } from '../blocks/ProjectGallerySlider'
import { ServiceTextCallout } from '@/components/blocks/ServiceTextCallout'

type BlockType = NonNullable<
  Page['layout'] | Project['layout'] | Location['layout'] | Service['layout']
>[number]

const blockComponents = {
  mediaBlock: MediaBlock,
  bannerBlock: BannerBlock,
  ctaBlock: CallToActionBlock,
  landingAbout: LandingAboutBlock,
  landingWork: LandingWorkBlock,
  landingFooter: LandingFooterBlock,
  landingService: LandingServiceBlock,
  landingImage: LandingImageBlock,
  form: FormBlock,
  beforeAfterSlider: BeforeAfterSliderBlock,
  testimonial: TestimonialBlock,
  faqBlock: FAQBlock,
  projectImage: ProjectImageComponent,
  projectSplitContent: ProjectSplitContent,
  projectInsight: ProjectInsightBlock,
  contentBasic: ({ blockName, ...rest }) => <div {...rest} />, // Simple wrapper for content basic blocks
  projectGallerySlider: ProjectGallerySlider,
  serviceSplitContent: ServiceSplitContent,
  serviceTextCallout: ServiceTextCallout,
  serviceDifferentContent: ServiceDifferentContent,
  serviceIntroContent: ServiceIntroContent,
  locationIntroContent: LocationIntroContent,
  'home-image-grow': HomeImageGrow,
  contactFormSection: ContactFormSection,
} as const

type Props = {
  blocks: BlockType[]
  customId?: string | null
  disableGrid?: boolean
  disableGutter?: boolean
  disableOuterSpacing?: boolean
  layout?: 'page' | 'post'
}

export const RenderBlocks: React.FC<Props> = (props) => {
  const { blocks, customId, disableGrid, disableGutter, disableOuterSpacing, layout } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <div id={customId ?? undefined}>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Block
                  id={blockName ? toKebabCase(blockName) : undefined}
                  key={index}
                  {...block}
                  disableGrid={disableGrid}
                  disableGutter={disableGutter}
                />
              )
            }
          }
          return null
        })}
      </div>
    )
  }

  return null
}
