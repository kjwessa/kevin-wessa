import { s3Storage } from '@payloadcms/storage-s3'

export const storage = s3Storage({
  collections: {
    media: {
      prefix: 'media',
      disablePayloadAccessControl: true,
      generateFileURL: (file: {
        filename: string
        prefix?: string
        size?: { name: string; width?: number; height?: number }
      }) => {
        return `${process.env.CLOUDFLARE_PUBLIC_URL}/${file.filename}`
      },
    },
  },
  bucket: `${process.env.CLOUDFLARE_BUCKET}`,
  config: {
    credentials: {
      accessKeyId: `${process.env.CLOUDFLARE_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.CLOUDFLARE_SECRET_ACCESS_KEY}`,
    },
    region: 'auto',
    endpoint: `${process.env.CLOUDFLARE_ENDPOINT}`,
    forcePathStyle: true,
  },
})
