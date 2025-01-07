import Link from 'next/link'
import Image from 'next/image'

export function ServiceCardTall({
  title,
  description,
  href,
  mainImage: image,
}: {
  title: string
  description: string
  href: string
  mainImage: {
    url: string
    alt: string
  }
}) {
  return (
    <li className="relative list-item">
      <span className="absolute top-0 left-0 z-2 w-full text-lg text-white uppercase min-[1025px]:p-8">
        <Link href={href}>Projects</Link>
      </span>

      <Link className="w-full overflow-hidden" href={href}>
        <div className="relative aspect-[916/1100] w-full">
          <Image
            className="h-auto w-full"
            src={image.url}
            alt={image.alt || `${title} header image`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>

      <div className="flex justify-between min-[1025px]:mt-5">
        <div className="grow">
          <h5>
            <Link className="inline-block" href={href}>
              {title}
            </Link>
          </h5>

          <p className="opacity-50">{description}</p>
        </div>

        <div className="ml-5 text-lg uppercase">
          <Link
            className="relative inline-block overflow-hidden rounded-full bg-gray-200 px-4 py-1.5 text-center transition-colors hover:bg-gray-300"
            href={href}
          >
            View
          </Link>
        </div>
      </div>
    </li>
  )
}
