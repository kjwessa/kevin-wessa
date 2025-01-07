/**
 * @fileoverview Utility functions for retrieving and caching Payload CMS global data.
 * Provides both direct and cached access to global configurations using Next.js caching.
 */

import type { Config } from 'src/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

/** Type representing valid global configuration names from the Payload config */
type Global = keyof Config['globals']

/**
 * Retrieves a global configuration from Payload CMS by its slug.
 * 
 * @param {Global} slug - The identifier of the global configuration
 * @param {number} [depth=0] - Depth of relationship fields to populate
 * @returns {Promise<GlobalConfig>} The global configuration data
 * 
 * @example
 * const mainMenu = await getGlobal('mainMenu')
 * const siteSettings = await getGlobal('siteSettings', 2)
 */
async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

/**
 * Creates a cached version of getGlobal using Next.js unstable_cache.
 * The cache is automatically invalidated when the global configuration is updated.
 * 
 * @param {Global} slug - The identifier of the global configuration
 * @param {number} [depth=0] - Depth of relationship fields to populate
 * @returns {Promise<GlobalConfig>} Cached global configuration
 * 
 * @example
 * Create a cached getter for site navigation
 * const getCachedNav = getCachedGlobal('mainMenu')
 * 
 * Use the cached getter (subsequent calls will use cache)
 * const mainMenu = await getCachedNav()
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(
    async () => getGlobal(slug, depth),
    [slug],
    {
      tags: [`global_${slug}`],
    }
  )
