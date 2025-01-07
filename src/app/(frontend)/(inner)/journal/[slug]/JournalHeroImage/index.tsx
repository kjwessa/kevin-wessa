import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { Post } from '@root/payload-types'
import Image from 'next/image'

export function JournalHeroImage({ post }: { post: Post }) {
  return (
    <SectionBeta theme="dark">
      <ContainerBeta size="full" spacing="none">
        <div className="px-2">
          <div className="relative aspect-3/2 w-full">
            <Image
              src={typeof post.image === 'string' ? post.image : post.image?.url || ''}
              fill
              alt={
                typeof post.image === 'object'
                  ? post.image?.alt || ''
                  : 'Featured image for blog post'
              }
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  )
}
