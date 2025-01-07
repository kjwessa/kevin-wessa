/**
 * @fileoverview Utility for converting dates into human-readable relative time expressions.
 * Formats dates into natural language descriptions like "today", "2 weeks ago", etc.
 */

/**
 * Converts a date into a human-readable relative time expression.
 * Provides increasingly broader time units (days → weeks → months → years)
 * as the time difference grows larger.
 * 
 * @param {Date} incomingDate - The date to convert to relative time
 * @returns {string} Human-readable relative time expression
 * 
 * @example
 * const date = new Date()
 * getRelativeDate(date) // Returns "today"
 * 
 * const yesterday = new Date(Date.now() - 86400000)
 * getRelativeDate(yesterday) // Returns "yesterday"
 * 
 * const lastWeek = new Date(Date.now() - 7 * 86400000)
 * getRelativeDate(lastWeek) // Returns "last week"
 */
function getRelativeDate(incomingDate: Date): string {
  // Convert incoming date and get current date for comparison
  const date = new Date(incomingDate)
  const currentDate = new Date()

  // Calculate time differences in various units
  const diff = Math.floor(
    (currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24) // Convert to days
  )
  const diffInWeeks = Math.floor(diff / 7)
  const diffInMonths = Math.floor(diff / 30)
  const diffInYears = Math.floor(diff / 365)

  // Handle today and yesterday specially
  if (diff === 0) {
    return 'today'
  }

  if (diff === 1) {
    return 'yesterday'
  }

  // Recent dates (within a week)
  if (diff < 7 && diff > 1) {
    return `${diff} days ago`
  }

  // Recent weeks (within a month)
  if (diffInWeeks === 1) {
    return 'last week'
  }

  if (diffInWeeks > 1 && diffInWeeks <= 4) {
    return `${diffInWeeks} weeks ago`
  }

  // Recent months (within a year)
  if (diffInMonths === 1) {
    return 'last month'
  }

  if (diffInMonths > 1 && diffInMonths <= 12) {
    return `${diffInMonths} months ago`
  }

  // Past years
  if (diffInYears === 1) {
    return 'last year'
  }

  if (diffInYears > 1) {
    return `${diffInYears} years ago`
  }

  // Fallback for any edge cases
  return `on ${date.toLocaleDateString()}`
}

export default getRelativeDate
