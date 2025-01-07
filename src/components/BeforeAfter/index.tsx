import { BeforeAfterClient } from './index.client'

interface BeforeAfterProps {
  beforeImage?: string
  afterImage?: string
  beforeImageAlt?: string
  afterImageAlt?: string
  backgroundColor?: string
}

export function BeforeAfter({
  beforeImage = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/iET-before.jpg?w=1200&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1655978745&s=8b81e680576f59e16cff40eb5432db70',
  afterImage = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/iET-after.jpg?w=1200&q=95&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1655978742&s=163e92db516a40aba6e7dd4ada22202d',
  beforeImageAlt = 'Before',
  afterImageAlt = 'After',
  backgroundColor = 'bg-neutral-950',
}: BeforeAfterProps) {
  return (
    <BeforeAfterClient
      beforeImage={beforeImage}
      afterImage={afterImage}
      beforeImageAlt={beforeImageAlt}
      afterImageAlt={afterImageAlt}
      backgroundColor={backgroundColor}
    />
  )
}
