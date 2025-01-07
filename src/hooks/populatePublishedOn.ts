import type { CollectionBeforeChangeHook } from "payload";

/**
 * A hook that automatically sets the publishedOn date for collection documents
 * if it hasn't been explicitly set during creation or update operations.
 * 
 * @param data - The document data being processed
 * @param operation - The current operation being performed ('create' or 'update')
 * @param req - The request object containing the incoming data
 * @returns The modified document data with publishedOn date if needed
 */
export const populatePublishedOn: CollectionBeforeChangeHook = ({
  data,
  operation,
  req,
}) => {
  // Only run this hook for create or update operations
  if (operation === "create" || operation === "update") {
    // Check if request contains data and publishedOn is not already set
    if (req.data && !req.data.publishedOn) {
      // Get current timestamp
      const now = new Date();
      
      // Return modified data with publishedOn field
      return {
        ...data,
        publishedOn: now,
      };
    }
  }

  // Return unmodified data if conditions aren't met
  return data;
};
