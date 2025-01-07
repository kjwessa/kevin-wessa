import React from 'react'
import { HomeImageGrowClient } from './index.client'
import type { HomeImageGrowProps } from '@/blocks/HomeImageGrow/types'

export const HomeImageGrow: React.FC<HomeImageGrowProps> = (props) => {
  return <HomeImageGrowClient {...props} />
}

export default HomeImageGrow
