import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer as FooterType } from '@/payload-types'
import { FooterClient } from './Component.client'
import type { NavItem } from '@/types/navigation'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType
  const navItems = (footerData?.navItems || []) as NavItem[]

  return <FooterClient navItems={navItems} />
}
