import { Post } from '@/payload-types'
import { Media } from '@/payload-types'
import { Category } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link className="group block h-full" href={`/journal/${post.slug}`}>
      <div className="relative h-0 w-full overflow-hidden rounded-md pb-[66%]">
        {post.image && (
          <Image
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={
              typeof post.image === 'string'
                ? post.image
                : post.image?.sizes?.full?.url || post.image?.url || ''
            }
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
            loading="lazy"
          />
        )}
      </div>
      <div className="mt-4">
        <Text level="p" size="label-medium" className="mb-2 flex flex-row items-center uppercase">
          <span>{(post.categories[0] as Category)?.title || 'Uncategorized'}</span>
          <span className="ml-2">/ min read</span>
        </Text>
        <Title el="h3" size="title-medium" className="leading-none">
          {post.title}
        </Title>
      </div>
    </Link>
  )
}
