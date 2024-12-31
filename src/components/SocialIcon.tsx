import React, { ReactElement } from 'react'

type SocialIconProps = {
  name: string
  url: string
  svg: ReactElement
}

export function SocialIcon({ name, url, svg }: SocialIconProps) {
  return (
    <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  )
}
