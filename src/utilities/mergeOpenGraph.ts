/**
 * @fileoverview Utility for managing OpenGraph metadata with default values.
 * Provides functionality to merge custom OpenGraph data with default settings for Brewww Studio.
 */

import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

/**
 * Default OpenGraph metadata configuration.
 * Provides baseline social media sharing metadata for Brewww Studio website.
 */
const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'A marketing studio for the modern age.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Kevin Wessa',
  title: 'Kevin Wessa',
}

/**
 * Merges custom OpenGraph metadata with Kevin Wessa default values.
 * Custom values override defaults, except for images which are handled specially.
 *
 * @param {Metadata['openGraph']} [og] - Custom OpenGraph metadata to merge
 * @returns {Metadata['openGraph']} Merged OpenGraph metadata
 *
 * @example
 * Basic usage with defaults
 * const metadata = mergeOpenGraph()
 *
 * Override specific values
 * const metadata = mergeOpenGraph({
 *   title: 'Kevin Wessa - Services',
 *   description: 'Explore our marketing services'
 * })
 *
 * Custom images
 * const metadata = mergeOpenGraph({
 *   images: [{ url: '/custom-campaign.jpg' }]
 * })
 */
export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph, // Start with default values
    ...og, // Override with custom values
    images: og?.images ? og.images : defaultOpenGraph.images, // Special handling for images
  }
}
