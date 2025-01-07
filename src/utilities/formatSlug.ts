/**
 * @fileoverview Utility functions for generating and managing URL-friendly slugs.
 * Provides functionality for string-to-slug conversion and Payload CMS field hooks.
 */

import type { FieldHook } from 'payload'

/**
 * Internal helper function to format a string into a URL-friendly slug.
 * 
 * @param {string} val - The string to convert into a slug
 * @returns {string} URL-friendly slug
 * @internal
 */
const format = (val: string): string =>
  val
    .replace(/ /g, '-')      // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars (except hyphens)
    .replace(/-+/g, '-')     // Replace multiple hyphens with single hyphen
    .toLowerCase()           // Convert to lowercase

/**
 * Formats a string into a URL-friendly slug.
 * 
 * @param {string} val - The string to convert into a slug
 * @returns {string} URL-friendly slug
 * 
 * @example
 * formatSlug("Hello World!")  // Returns "hello-world"
 * formatSlug("My Article Title 123")  // Returns "my-article-title-123"
 * formatSlug("Special@#$Characters")  // Returns "specialcharacters"
 */
export const formatSlug = (val: string): string =>
  format(val)

/**
 * Creates a Payload CMS field hook that automatically generates a slug from another field.
 * This hook is typically used with text fields to create URL-friendly slugs for content.
 * 
 * @param {string} fallback - The name of the field to use as source for generating the slug
 * @returns {FieldHook} A Payload CMS field hook function
 * 
 * @example
 * // In your Payload CMS collection config:
 * fields: [
 *   {
 *     name: 'title',
 *     type: 'text',
 *   },
 *   {
 *     name: 'slug',
 *     type: 'text',
 *     hooks: {
 *       beforeValidate: [formatSlugHook('title')]
 *     }
 *   }
 * ]
 */
export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    // Handle direct string values
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    // Auto-generate slug on creation or when missing
    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]
      
      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }

export default formatSlugHook
