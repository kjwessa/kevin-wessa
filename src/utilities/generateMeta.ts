import type { Metadata } from 'next'

import type { Page } from '../payload-types'

import { siteConfig } from '@/config/site'
import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

export const generateMeta = async (args: { doc: Partial<Page> }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${getServerSideURL()}`

  const title = doc?.meta?.title
    ? siteConfig.meta.seo.titleTemplate.replace('%s', doc.meta.title)
    : siteConfig.meta.seo.defaultTitle

  return {
    description: doc?.meta?.description || siteConfig.meta.seo.defaultDescription,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || siteConfig.meta.seo.defaultDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
