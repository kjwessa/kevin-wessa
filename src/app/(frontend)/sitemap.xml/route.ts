import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

interface SitemapField {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const getAllSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://www.kevinwessa.com'

    const dateFallback = new Date().toISOString()

    // Important static pages that should always be in sitemap
    const staticPages: SitemapField[] = [
      {
        loc: SITE_URL,
        lastmod: dateFallback,
        changefreq: 'daily',
        priority: 1.0,
      },
    ]

    // Fetch all content types in parallel
    const [pages, posts] = await Promise.all([
      payload.find({
        collection: 'pages',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          and: [
            {
              _status: {
                equals: 'published',
              },
            },
            {
              'advanced.excludeFromSitemap': {
                equals: false,
              },
            },
          ],
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
      payload.find({
        collection: 'posts',
        overrideAccess: false,
        draft: false,
        depth: 0,
        limit: 1000,
        pagination: false,
        where: {
          and: [
            {
              _status: {
                equals: 'published',
              },
            },
            {
              'advanced.excludeFromSitemap': {
                equals: false,
              },
            },
          ],
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ])

    // Transform pages
    const pagesSitemap: SitemapField[] = pages.docs
      ? pages.docs
          .filter((page) => Boolean(page?.slug))
          .map((page) => ({
            loc: page?.slug === 'home' ? SITE_URL : `${SITE_URL}/${page?.slug}`,
            lastmod: page.updatedAt || dateFallback,
            changefreq: 'daily',
            priority: page?.slug === 'home' ? 1.0 : 0.7,
          }))
      : []

    // Transform posts
    const postsSitemap: SitemapField[] = posts.docs
      ? posts.docs
          .filter((post) => Boolean(post?.slug))
          .map((post) => ({
            loc: `${SITE_URL}/journal/${post?.slug}`,
            lastmod: post.updatedAt || dateFallback,
            changefreq: 'weekly',
            priority: 0.6,
          }))
      : []

    // Combine all sitemaps, filtering out any duplicates
    const allUrls = [...staticPages, ...pagesSitemap, ...postsSitemap]
    const uniqueUrls = Array.from(new Map(allUrls.map((item) => [item.loc, item])).values())

    return uniqueUrls
  },
  ['sitemap'],
  {
    tags: ['sitemap', 'pages-sitemap', 'posts-sitemap'],
    revalidate: 3600, // Revalidate every hour
  },
)

export async function GET() {
  const sitemap = await getAllSitemap()

  // Create the XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`,
    )
    .join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600',
    },
  })
}
