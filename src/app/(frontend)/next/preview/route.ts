import jwt from 'jsonwebtoken'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CollectionSlug } from 'payload'

const payloadToken = 'payload-token'

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
  const payload = await getPayload({ config: configPromise })
  const token = req.cookies.get(payloadToken)?.value
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')
  const collection = searchParams.get('collection') as CollectionSlug
  const slug = searchParams.get('slug')

  if (!path) {
    return new Response('No path provided', { status: 404 })
  }

  if (!collection) {
    return new Response('No collection provided', { status: 404 })
  }

  if (!slug) {
    return new Response('No slug provided', { status: 404 })
  }

  if (!token) {
    return new Response('Authentication required', { status: 401 })
  }

  if (!path.startsWith('/')) {
    return new Response('Invalid path format', { status: 400 })
  }

  let user
  try {
    user = jwt.verify(token, payload.secret)
  } catch (error) {
    return new Response('Invalid authentication token', { status: 403 })
  }

  if (!user) {
    const draft = await draftMode()
    draft.disable()
    return new Response('Invalid user credentials', { status: 403 })
  }

  try {
    const docs = await payload.find({
      collection,
      draft: true,
      limit: 1,
      pagination: false,
      depth: 0,
      select: {},
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!docs.docs.length) {
      return new Response('Document not found', { status: 404 })
    }

    const draft = await draftMode()
    draft.enable()

    return Response.redirect(new URL(path, req.url))
  } catch (error) {
    return new Response('Error fetching document', { status: 500 })
  }
}
