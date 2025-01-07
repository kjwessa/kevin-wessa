/**
 * @fileoverview Utility functions for retrieving and caching Payload CMS documents.
 * Provides both direct and cached access to collection documents using Next.js caching.
 */

import type { Config } from 'src/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

/** Type representing valid collection names from the Payload config */
type Collection = keyof Config['collections']

/**
 * Retrieves a document from a Payload CMS collection by its slug.
 * 
 * @param {Collection} collection - The name of the collection to query
 * @param {string} slug - The unique slug identifier of the document
 * @param {number} [depth=0] - Depth of relationship fields to populate
 * @returns {Promise<Document | undefined>} The found document or undefined
 * 
 * @example
 * const post = await getDocument('posts', 'my-blog-post')
 * const pageWithRelations = await getDocument('pages', 'about', 2)
 */
async function getDocument(collection: Collection, slug: string, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const page = await payload.find({
    collection,
    depth,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return page.docs[0]
}

/**
 * Creates a cached version of getDocument using Next.js unstable_cache.
 * The cache is automatically invalidated when the document is updated.
 * 
 * @param {Collection} collection - The name of the collection to query
 * @param {string} slug - The unique slug identifier of the document
 * @returns {Promise<Document | undefined>} Cached document or undefined
 * 
 * @example
 * Create a cached getter for a specific document
 * const getCachedPost = getCachedDocument('posts', 'my-blog-post')
 * 
 * Use the cached getter (subsequent calls will use cache)
 * const post = await getCachedPost()
 */
export const getCachedDocument = (collection: Collection, slug: string) =>
  unstable_cache(
    async () => getDocument(collection, slug),
    [collection, slug],
    {
      tags: [`${collection}_${slug}`],
    }
  )
