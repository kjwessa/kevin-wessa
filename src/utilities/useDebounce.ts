import { useState, useEffect } from 'react'

/**
 * A custom hook that delays updating a value until a specified delay has passed
 * since the last change. Useful for reducing API calls or expensive operations
 * that shouldn't happen on every keystroke or value change.
 * 
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds before updating the value (default: 200ms)
 * @returns The debounced value that updates only after the delay has passed
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearch = useDebounce(searchTerm, 500)
 */
export function useDebounce<T>(value: T, delay = 200): T {
  // Store the debounced value in state
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Create a timer that will update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clean up the timer if the value changes before the delay has passed
    // This prevents the debounced value from updating with stale data
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Re-run effect if value or delay changes

  return debouncedValue
}
