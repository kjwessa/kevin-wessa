import { Post, Category } from '@root/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg">
      <Link href={`/journal/${post.slug}`}>
        <div className="relative aspect-[16/9]">
          <Image
            src={
              typeof post.image === 'string'
                ? post.image
                : post.image?.sizes?.full?.url || post.image?.url || ''
            }
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="absolute inset-x-8 bottom-8 text-white">
          <p className="mb-3 text-sm font-medium tracking-wider uppercase">
            {(post.categories[0] as Category)?.title || 'Uncategorized'}
          </p>
          <h2 className="mb-0 text-3xl leading-tight font-bold">{post.title}</h2>
        </div>
      </Link>
    </div>
  )
}
