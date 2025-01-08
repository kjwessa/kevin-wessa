/**
 * @fileoverview Utilities for determining the application's base URL in different environments.
 * Handles URL generation for both server-side and client-side contexts with fallbacks.
 */

import canUseDOM from './canUseDOM'

/**
 * Determines the application's base URL for server-side operations.
 * Prioritizes environment variables and falls back to localhost for development.
 * 
 * Priority order:
 * 1. NEXT_PUBLIC_SERVER_URL environment variable
 * 2. Vercel production URL (if deployed)
 * 3. localhost:3000 (development fallback)
 * 
 * @returns {string} The server-side base URL
 * 
 * @example
 * const serverURL = getServerSideURL()
 * // Returns "https://your-domain.com" in production
 * // Returns "http://localhost:3000" in development
 */
export const getServerSideURL = (): string => {
  // Check for explicitly configured server URL
  let url = process.env.NEXT_PUBLIC_SERVER_URL

  // Use Vercel production URL if available
  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  // Fall back to localhost for development
  if (!url) {
    url = 'http://localhost:3000'
  }

  return url
}

/**
 * Determines the application's base URL for client-side operations.
 * Adapts to the current environment and handles both browser and server contexts.
 * 
 * Priority order:
 * 1. Current window location (if in browser)
 * 2. Vercel production URL (if deployed)
 * 3. NEXT_PUBLIC_SERVER_URL environment variable
 * 
 * @returns {string} The client-side base URL
 * 
 * @example
 * const clientURL = getClientSideURL()
 * // In browser: Returns current origin (e.g., "https://your-domain.com")
 * // In SSR: Returns configured URL from environment
 */
export const getClientSideURL = (): string => {
  // Use current window location if in browser
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  // Use Vercel production URL if available (for SSR)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  // Fall back to configured server URL or empty string
  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}
