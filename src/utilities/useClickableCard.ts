/**
 * @fileoverview A custom React hook that makes a card element clickable while preserving 
 * nested link functionality. This allows for better UX where the entire card is clickable
 * but internal links still work independently.
 */

'use client'

import type { RefObject } from 'react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

/**
 * Return type for the useClickableCard hook.
 * Provides refs for both the card container and the link element.
 */
type UseClickableCardType<T extends HTMLElement> = {
  card: {
    ref: RefObject<T>
  }
  link: {
    ref: RefObject<HTMLAnchorElement>
  }
}

/**
 * Configuration options for the clickable card behavior
 * @property {boolean} external - Whether the link points to an external site
 * @property {boolean} newTab - Whether to open the link in a new tab
 * @property {boolean} scroll - Whether to scroll to top on navigation
 */
interface Props {
  external?: boolean
  newTab?: boolean
  scroll?: boolean
}

/**
 * A custom hook that enables card-like elements to be fully clickable while maintaining
 * proper behavior for nested interactive elements.
 * 
 * @param {Props} props - Configuration options for the clickable behavior
 * @returns {UseClickableCardType<T>} Refs for the card container and link element
 * 
 * @example
 * const { card, link } = useClickableCard({ external: false, newTab: true })
 * return (
 *   <div ref={card.ref}>
 *     <a ref={link.ref} href="/some-path">Click me</a>
 *   </div>
 * )
 */
function useClickableCard<T extends HTMLElement>({
  external = false,
  newTab = false,
  scroll = true,
}: Props): UseClickableCardType<T> {
  const router = useRouter()
  const card = useRef<T>(null) as RefObject<T>
  const link = useRef<HTMLAnchorElement>(null) as RefObject<HTMLAnchorElement>
  const timeDown = useRef<number>(0)
  const hasActiveParent = useRef<boolean>(false)
  const pressedButton = useRef<number>(0)

  /**
   * Handles the mousedown event on the card.
   * Records timing and checks if click originated on a nested link.
   */
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (e.target) {
        const target = e.target as HTMLElement
        pressedButton.current = e.button

        const timeNow = +new Date()
        const parent = target?.closest('a')

        timeDown.current = timeNow
        hasActiveParent.current = !!parent && parent !== link.current
      }
    },
    // Dependencies are handled by refs
    [],
  )

  /**
   * Handles the mouseup event on the card.
   * Triggers navigation if:
   * - Click duration is < 250ms (not a drag)
   * - Click didn't start on a nested link
   * - Left mouse button was used
   * - No modifier keys were pressed
   */
  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (link.current?.href) {
        const timeNow = +new Date()

        if (
          timeNow - timeDown.current < 250 && // Click duration check
          !hasActiveParent.current && // Not clicking nested link
          pressedButton.current === 0 && // Left click only
          !e.ctrlKey // No modifier key
        ) {
          e.preventDefault()
          external || newTab
            ? window.open(link.current.href, newTab ? '_blank' : '_self')
            : router.push(link.current.href, { scroll })
        }
      }
    },
    [external, newTab, router, scroll],
  )

  /**
   * Sets up event listeners for mouse interactions on component mount
   * and cleans them up on unmount.
   */
  useEffect(() => {
    const cardNode = card.current

    if (cardNode) {
      cardNode.addEventListener('mousedown', handleMouseDown)
      cardNode.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      if (cardNode) {
        cardNode.removeEventListener('mousedown', handleMouseDown)
        cardNode.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [handleMouseDown, handleMouseUp])

  return {
    card: {
      ref: card,
    },
    link: {
      ref: link,
    },
  }
}

export default useClickableCard
