import { GallerySliderClient } from './index.client'

export function GallerySlider() {
  const images = [
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11.2-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939072&s=6f6247c65cf05a054fc81b79250655c3',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11.1-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939070&s=fd3a9391a4e405fb7c12a53fa9258392',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/11-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939068&s=625421548bb762f8c8eff067987afa30',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.3-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939066&s=3146f2ef76ffbc18ba63d5022d37c5ec',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.2-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939063&s=0c49ca88f6f333baf95f2b3e39adead6',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09.1-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939061&s=8068951daf2819f732fad8127f58d05f',
      alt: 'iET Billboard',
    },
    {
      src: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/iET/09-copy.jpg?w=320&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1621939059&s=ce8281da9130414e34b25497975d04d7',
      alt: 'iET Billboard',
    },
  ]

  return <GallerySliderClient images={images} />
}
