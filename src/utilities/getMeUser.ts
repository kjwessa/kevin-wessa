/**
 * @fileoverview Utility for retrieving the currently authenticated user's information.
 * Handles authentication token management and conditional redirects based on user state.
 */

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { User } from '../payload-types'
import { getClientSideURL } from './getURL'

/**
 * Arguments for the getMeUser function
 */
interface GetMeUserArgs {
  /** URL to redirect to if no user is authenticated */
  nullUserRedirect?: string
  /** URL to redirect to if a valid user is found */
  validUserRedirect?: string
}

/**
 * Response type for the getMeUser function
 */
interface GetMeUserResponse {
  /** JWT authentication token */
  token: string
  /** Authenticated user data */
  user: User
}

/**
 * Retrieves the currently authenticated user's information using the JWT token
 * stored in cookies. Can optionally redirect based on authentication state.
 * 
 * @param {GetMeUserArgs} [args] - Optional configuration for redirect behavior
 * @param {string} [args.nullUserRedirect] - Redirect path for unauthenticated users
 * @param {string} [args.validUserRedirect] - Redirect path for authenticated users
 * @returns {Promise<GetMeUserResponse>} User data and authentication token
 * @throws {RedirectError} When redirect conditions are met
 * 
 * @example
 * Get user without redirects
 * const { user, token } = await getMeUser()
 * 
 * Redirect unauthenticated users to login
 * const { user } = await getMeUser({ nullUserRedirect: '/login' })
 * 
 * Redirect authenticated users to dashboard
 * const { user } = await getMeUser({ validUserRedirect: '/dashboard' })
 */
export const getMeUser = async (args?: GetMeUserArgs): Promise<GetMeUserResponse> => {
  const { nullUserRedirect, validUserRedirect } = args || {}
  
  // Get authentication token from cookies
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  // Fetch user data from API
  const meUserReq = await fetch(`${getClientSideURL()}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  const { user }: { user: User } = await meUserReq.json()

  // Handle redirects based on authentication state
  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect)
  }

  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  return {
    token: token!, // Token is guaranteed to exist if we reach this point
    user,
  }
}
