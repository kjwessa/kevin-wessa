export async function GET() {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    'https://brewww.studio'

  const robotsTxt = `# *
User-agent: *
Disallow: /admin/*

# Host
Host: ${SITE_URL}

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 