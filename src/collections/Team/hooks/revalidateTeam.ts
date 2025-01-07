import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { Team } from '@/payload-types'

export const revalidateTeam: CollectionAfterChangeHook<Team> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/team/${doc.slug}`

      payload.logger.info(`Revalidating team member at path: ${path}`)

      revalidatePath(path)
      revalidateTag('team-sitemap')
    }

    // If the team member was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/team/${previousDoc.slug}`

      payload.logger.info(`Revalidating old team member at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('team-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Team> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/team/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('team-sitemap')
  }

  return doc
}
