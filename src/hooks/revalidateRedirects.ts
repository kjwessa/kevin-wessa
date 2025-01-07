import type { CollectionAfterChangeHook } from "payload";
import { revalidateTag } from "next/cache";

/**
 * A Payload CMS after-change hook that revalidates the "redirects" cache tag
 * This ensures that any changes to redirects are immediately reflected in the Next.js application
 * 
 * @param doc - The document that was changed
 * @param payload - The Payload CMS instance
 * @returns The unchanged document
 */
export const revalidateRedirects: CollectionAfterChangeHook = ({
  doc,
  req: { payload },
}) => {
  // Log that we're revalidating redirects for debugging purposes
  payload.logger.info(`Revalidating redirects`);

  // Tell Next.js to revalidate any data cached with the "redirects" tag
  // This will trigger a regeneration of any pages that depend on redirect data
  revalidateTag("redirects");

  // Return the document unchanged, as this hook only handles cache invalidation
  return doc;
};
