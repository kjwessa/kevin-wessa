import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Page } from '@/payload-types'
import { siteConfig } from '@/config/site'

const generateTitle: GenerateTitle<Page> = ({ doc }: { doc: any }) => {
  return doc?.title
    ? siteConfig.meta.seo.titleTemplate.replace('%s', doc.title)
    : siteConfig.meta.seo.defaultTitle
}

const generateURL: GenerateURL<Page> = ({ doc }: { doc: any }) => {
  if (!doc?.slug) return siteConfig.meta.brand.domain

  // Add the /blog prefix for posts
  if (doc.collection === 'posts') {
    return `${siteConfig.meta.brand.domain}/journal/${doc.slug}`
  }

  return `${siteConfig.meta.brand.domain}/${doc.slug}`
}

export const seo = seoPlugin({
  generateTitle,
  generateURL,
  uploadsCollection: 'media',
})
