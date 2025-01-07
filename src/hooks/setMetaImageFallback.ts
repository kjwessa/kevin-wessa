import type { CollectionBeforeChangeHook } from "payload";

export const setMetaImageFallback: CollectionBeforeChangeHook = ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    if (!data.meta?.image && data.image) {
      data.meta = {
        ...data.meta,
        image: data.image,
      }
    }
  }
  return data
} 