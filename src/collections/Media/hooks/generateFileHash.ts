import type { CollectionBeforeChangeHook } from 'payload'
import type { Media } from '@/payload-types'
import crypto from 'crypto'

export const generateFileHash: CollectionBeforeChangeHook<Media> = async ({
  data,
  req,
}) => {
  if (req.file) {
    const fileBuffer = new Uint8Array(req.file.data)
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex')
    
    // Check if file with this hash already exists
    const existingFile = await req.payload.find({
      collection: 'media',
      where: {
        'fileHash': {
          equals: hash
        }
      }
    })

    if (existingFile.docs.length > 0) {
      req.payload.logger.error('Duplicate file upload attempted')
      // TODO: Add proper error handling in the UI to show a more user-friendly message
      throw new Error('This file has already been uploaded.')
    }

    req.payload.logger.info(`Generated hash for file: ${hash}`)
    
    return {
      ...data,
      fileHash: hash
    }
  }
  return data
}
