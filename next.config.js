import { withPayload } from '@payloadcms/next/withPayload'
import { withSentryConfig } from '@sentry/nextjs'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  serverExternalPackages: ['pg'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        protocol: 'https',
        hostname: 'bucket.kevinwessa.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  redirects,
}

const config = withPayload(nextConfig)

// Sentry configuration
const sentryConfig = withSentryConfig(config, {
  org: 'brewww-studio',
  project: 'kwessa-payload',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  sourcemaps: {
    assets: '.next/static/**/*',
    deleteSourcemapsAfterUpload: true,
  },
})

export default sentryConfig
