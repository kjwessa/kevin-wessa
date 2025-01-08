/**
 * @fileoverview Utility for generating preview URLs for Payload CMS collections.
 * Handles path generation and parameter encoding for the Next.js preview mode.
 */

import { PayloadRequest, CollectionSlug } from 'payload'

/**
 * Maps collection slugs to their corresponding URL prefixes
 * - posts: Prefixed with '/posts'
 * - pages: No prefix (empty string) as they're at root level
 * - locations: Prefixed with '/in'
 */
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/journal',
  pages: '',
}

/**
 * Parameters required for generating a preview path
 */
type Props = {
  /** The collection type (e.g., 'posts' or 'pages') */
  collection: keyof typeof collectionPrefixMap
  /** The slug of the content item */
  slug: string
  /** Payload request object containing protocol and host information */
  req: PayloadRequest
}

/**
 * Generates a preview URL for Payload CMS content items
 *
 * This utility function creates a preview URL that includes:
 * 1. The correct protocol (http/https) based on environment
 * 2. The host from the request
 * 3. The collection-specific path prefix
 * 4. URL parameters for preview functionality
 *
 * @param collection - The collection type (e.g., 'posts' or 'pages')
 * @param slug - The slug of the content item
 * @param req - Payload request object for protocol and host information
 *
 * @returns A fully qualified preview URL
 *
 * @example
 * generatePreviewPath({
 *   collection: 'posts',
 *   slug: 'my-blog-post',
 *   req: payloadRequest
 * })
 * // Returns "https://example.com/next/preview?slug=my-blog-post&collection=posts&path=/posts/my-blog-post"
 */
export const generatePreviewPath = ({ collection, slug, req }: Props) => {
  // Combine collection prefix with slug to create the full path
  const path = `${collectionPrefixMap[collection]}/${slug}`

  // Prepare parameters for the preview URL
  const params = {
    slug,
    collection,
    path,
  }

  // Create and populate URLSearchParams for safe URL encoding
  const encodedParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  // Determine protocol based on environment
  const isProduction =
    process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  const protocol = isProduction ? 'https:' : req.protocol

  // Construct the complete preview URL
  const url = `${protocol}//${req.host}/next/preview?${encodedParams.toString()}`

  return url
}
