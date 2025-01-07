import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { Location } from '@/payload-types'

export const revalidateLocation: CollectionAfterChangeHook<Location> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/in/${doc.slug}`

      payload.logger.info(`Revalidating location at path: ${path}`)

      revalidatePath(path)
      revalidateTag('in-sitemap')
    }

    // If the location was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/in/${previousDoc.slug}`

      payload.logger.info(`Revalidating old location at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('in-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Location> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/in/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('in-sitemap')
  }

  return doc
} 