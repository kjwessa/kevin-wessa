'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
interface ImageCardProps {
  src: string
  alt: string
  style: React.CSSProperties
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, style }) => {
  return (
    <div className="absolute origin-center" style={style}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="h-full w-full rounded-3xl object-cover"
      />
    </div>
  )
}

export function PlayHero() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1440 // Base width for scale 1
      setScale(Math.min(window.innerWidth / baseWidth, 1))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = [
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-200.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142745&s=babedcc3fa45f9af1a08b9a9062682f7',
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Chillout-Area/Shape-April-2022-HR-163.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142276&s=623a91582904eeaaa558600540e49349',
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-198.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142740&s=b277c4ce6152387dcd4771b708003cf7',
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/People-in-Studio/Shape-April-2022-HR-208.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143487&s=19b949fe09dfe3e0161a0a345a83f057',
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/MadeByShape-Studio/Shape-2018-LR-169_200119_175819.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1604326504&s=bf17266e2762cabc752c1a107cfd715b',
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-200.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142745&s=babedcc3fa45f9af1a08b9a9062682f7',
  ]

  const totalImages = 30 // Increased number of images
  const trackRadius = 1800 * scale
  const imageSize = 300 * scale // Reduced image size to fit more images
  const imageAngle = (2 * Math.PI) / totalImages

  // Create an array with repeated images to match totalImages
  const extendedImages = Array(totalImages)
    .fill(null)
    .map((_, index) => images[index % images.length])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="relative inset-0 flex flex-col items-center justify-center">
        <h1
          className="z-10 mb-20 text-center text-7xl font-bold text-white"
          style={{ fontSize: `${7 * scale}rem` }}
        >
          Play is a part
          <br />
          of our process.
        </h1>
        <div
          className="relative"
          style={{
            height: `${trackRadius * 2}px`,
            width: `${trackRadius * 2}px`,
          }}
        >
          <div className="animate-rotate absolute inset-0">
            {extendedImages.map((src, index) => {
              const angle = index * imageAngle - Math.PI / 2 // Start from top
              const x = Math.cos(angle) * trackRadius
              const y = Math.sin(angle) * trackRadius
              const rotation = angle + Math.PI / 2 // Rotate image to face outward

              return (
                <ImageCard
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${rotation}rad) scale(${scale})`,
                    left: '50%',
                    top: '50%',
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    marginLeft: `-${imageSize / 2}px`,
                    marginTop: `-${imageSize / 2}px`,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-rotate {
          animation: rotate 240s linear infinite;
        }
      `}</style>
    </div>
  )
}
