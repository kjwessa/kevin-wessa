import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Page, Post } from '@/payload-types'

const generateTitle: GenerateTitle<Page | Post> = ({ doc }: { doc: any }) => {
  return doc?.title ? `${doc.title} | Brewww Studio` : 'Brewww Studio '
}

const generateURL: GenerateURL<Page | Post> = ({ doc }: { doc: any }) => {
  if (!doc?.slug) return process.env.NEXT_PUBLIC_SERVER_URL!

  // Add the /blog prefix for posts
  if (doc.collection === 'posts') {
    return `${process.env.NEXT_PUBLIC_SERVER_URL!}/journal/${doc.slug}`
  }

  return `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
}

export const seo = seoPlugin({
  generateTitle,
  generateURL,
  uploadsCollection: 'media',
})
