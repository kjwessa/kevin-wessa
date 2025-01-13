/** @type {import('next').NextConfig} */
const config = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ]
  },
}

export default config

// TODO do I need to add any other config here? Did I create this?
