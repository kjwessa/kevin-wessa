/**
 * @fileoverview Utility functions and configurations for date and time formatting.
 * Provides standardized date formatting options using Intl.DateTimeFormat.
 */

/**
 * Full month names in English for custom formatting or display
 */
export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/**
 * Abbreviated month names in English for compact displays
 */
export const monthNamesAbbr = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

/**
 * Configuration options for different date/time format patterns.
 * Uses Intl.DateTimeFormatOptions for standardized, locale-aware formatting.
 */
const formatOptions: { [key: string]: Intl.DateTimeFormatOptions } = {
  /** Format: "January 1, 2024" */
  longDateStamp: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  /** Format: "Jan 1, 2024" */
  shortDateStamp: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  /** Format: "01/01/2024" */
  numericDate: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  /** Format: "January 1, 2024 at 2:30 PM EDT" */
  dateAndTime: {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
  /** Format: "2:30 PM" */
  timeOnly: {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }
};

/**
 * Arguments for the formatDate function
 */
interface FormatDateArgs {
  /** Input date as Date object or date string */
  date: string | Date;
  /** Format option from predefined formats (defaults to "longDateStamp") */
  format?: keyof typeof formatOptions;
  /** Optional timezone (e.g., 'America/New_York') */
  timeZone?: string;
}

/**
 * Formats a date according to the specified format pattern using Intl.DateTimeFormat
 * for standardized, locale-aware formatting.
 * 
 * @param {FormatDateArgs} args - The formatting configuration
 * @param {string | Date} args.date - The date to format
 * @param {keyof typeof formatOptions} [args.format="longDateStamp"] - The desired format pattern
 * @param {string} [args.timeZone] - Optional timezone for formatting
 * @returns {string} Formatted date string
 * @throws {Error} When the input date is invalid
 * 
 * @example
 * formatDate({ date: new Date() })
 * // Returns "March 14, 2024"
 * 
 * formatDate({ date: new Date(), format: "numericDate" })
 * // Returns "03/14/2024"
 * 
 * formatDate({ 
 *   date: new Date(), 
 *   format: "dateAndTime", 
 *   timeZone: "America/New_York" 
 * })
 * // Returns "March 14, 2024 at 2:30 PM EDT"
 */
export function formatDate({ 
  date, 
  format = "longDateStamp", 
  timeZone 
}: FormatDateArgs): string {
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date');
    }

    const options = {
      ...formatOptions[format],
      ...(timeZone ? { timeZone } : {})
    };

    return new Intl.DateTimeFormat("en-US", options).format(dateObj);
  } catch (e) {
    console.error("Error formatting date:", e);
    return String(date);
  }
}

/**
 * Pads single-digit numbers with a leading zero.
 * 
 * @param {number} num - Number to pad
 * @returns {string} Number padded with leading zero if less than 10
 * 
 * @example
 * padNumber(5)  // Returns "05"
 * padNumber(10) // Returns "10"
 */
export function padNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
