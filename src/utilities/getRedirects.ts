/**
 * @fileoverview Utility functions for retrieving and caching URL redirects from Payload CMS.
 * Provides both direct and cached access to redirect configurations with Next.js caching.
 */

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

/**
 * Retrieves all URL redirects from the Payload CMS redirects collection.
 * Returns all redirects without pagination for complete redirect mapping.
 * 
 * @param {number} [depth=1] - Depth of relationship fields to populate
 * @returns {Promise<Redirect[]>} Array of redirect configurations
 * 
 * @example
 * const redirects = await getRedirects()
 * 
 * Get redirects with related data
 * const redirectsWithRelations = await getRedirects(2)
 */
export async function getRedirects(depth = 1) {
  const payload = await getPayload({ config: configPromise })

  const { docs: redirects } = await payload.find({
    collection: 'redirects',
    depth,
    limit: 0,        // No limit to get all redirects
    pagination: false // Disable pagination
  })

  return redirects
}

/**
 * Creates a cached version of getRedirects using Next.js unstable_cache.
 * Caches all redirects together to optimize performance and reduce database queries.
 * The cache is automatically invalidated when any redirect is updated.
 * 
 * @returns {Promise<Redirect[]>} Cached array of redirect configurations
 * 
 * @example
 * Get all cached redirects
 * const redirects = await getCachedRedirects()
 * 
 * Use in middleware or routing logic
 * const redirects = await getCachedRedirects()
 * const redirect = redirects.find(r => r.from === currentPath)
 */
export const getCachedRedirects = () =>
  unstable_cache(
    async () => getRedirects(),
    ['redirects'],
    {
      tags: ['redirects'],
    }
  )
