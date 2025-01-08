import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes and handles conditional class names with deduplication.
 * Combines the power of clsx for conditional merging and tailwind-merge for resolving
 * Tailwind class conflicts.
 *
 * @param inputs - Class values that can be strings, objects for conditions, or arrays
 * @returns A merged and deduplicated className string
 * 
 * @example
 * cn('px-2 py-1', isActive && 'bg-blue-500', ['text-white', 'rounded-sm'])
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
