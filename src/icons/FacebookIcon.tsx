import React from 'react'
import type { IconProps } from './types'

export const FacebookIcon: React.FC<IconProps> = ({
  className = '',
  width = 12,
  height = 24,
  color = '#27272A',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.1646 10.6667H10.6646V7.2C10.6646 5.92533 11.5246 5.33333 12.7246 5.33333H16.1646V0H10.6646C6.39797 0 3.4313 3.2 3.4313 7.2V10.6667H0.164551V16H3.4313V32H10.6646V16H15.0379L16.1646 10.6667Z"
        fill={color}
      />
    </svg>
  )
}
