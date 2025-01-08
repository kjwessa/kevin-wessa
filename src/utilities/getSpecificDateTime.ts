/**
 * @fileoverview Utility for formatting dates into a specific MM/DD/YYYY HH:MM AM/PM format.
 * Provides consistent date and time formatting with leading zeros and 12-hour clock.
 */

/**
 * Formats a timestamp into a specific date-time string format.
 * If no timestamp is provided, uses the current date and time.
 * 
 * @param {Date} timestamp - The date to format (optional, defaults to now)
 * @returns {string} Formatted date-time string in "MM/DD/YYYY HH:MM AM/PM" format
 * 
 * @example
 * const now = new Date()
 * getSpecificDateTime(now)
 * // Returns "03/15/2024 2:30 PM"
 * 
 * const specific = new Date('2024-12-25T09:00:00')
 * getSpecificDateTime(specific)
 * // Returns "12/25/2024 9:00 AM"
 */
export const getSpecificDateTime = (timestamp: Date): string => {
  // Initialize with current time, override if timestamp provided
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)

  // Extract date components
  const months = date.getMonth()        // 0-based month
  const days = date.getDate()           // 1-based day
  const hours = date.getHours()         // 24-hour format
  const minutes = date.getMinutes()
  // const seconds = date.getSeconds()  // Uncomment if seconds needed

  // Format components with leading zeros where needed
  const MM = months + 1 < 10 ? `0${months + 1}` : months + 1  // Add 1 to convert 0-based month
  const DD = days < 10 ? `0${days}` : days
  const YYYY = date.getFullYear()
  
  // Convert to 12-hour clock format
  const AMPM = hours < 12 ? 'AM' : 'PM'
  const HH = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours  // Convert 0 to 12, and 13-23 to 1-11
  const MinMin = minutes < 10 ? `0${minutes}` : minutes
  // const SS = seconds < 10 ? `0${seconds}` : seconds  // Uncomment if seconds needed

  // Combine formatted components
  return `${MM}/${DD}/${YYYY} ${HH}:${MinMin} ${AMPM}`
}
