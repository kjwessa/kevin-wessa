/**
 * @fileoverview Deep merge utility for objects with complex type handling.
 * Type checking is disabled due to dynamic key access and recursive nature of the merge.
 */
// @ts-nocheck

/**
 * Checks if a value is a plain object (not null, not an array, and typeof 'object')
 * @param {unknown} item - The value to check
 * @returns {boolean} True if the item is a plain object
 */
export function isObject(item: unknown): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Recursively merges two objects deeply, creating a new object without modifying the originals.
 * Objects are merged recursively, arrays and other types are replaced.
 * 
 * @template T - Type of the target object
 * @template R - Type of the source object
 * @param {T} target - Base object to merge into
 * @param {R} source - Object to merge from, its values take precedence
 * @returns {T & R} New object with merged properties
 * 
 * @example
 * const obj1 = { a: { b: 2 }, c: 3 };
 * const obj2 = { a: { d: 4 }, e: 5 };
 * deepMerge(obj1, obj2); // { a: { b: 2, d: 4 }, c: 3, e: 5 }
 */
export default function deepMerge<T extends object, R extends object>(target: T, source: R): T & R {
  const output = { ...target }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        // Recursively merge nested objects
        output[key] = !(key in target)
          ? source[key]
          : deepMerge(target[key], source[key])
      } else {
        // For non-objects, source value takes precedence
        output[key] = source[key]
      }
    })
  }

  return output as T & R
}
