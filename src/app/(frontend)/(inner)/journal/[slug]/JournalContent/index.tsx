import { RichText } from '@/components/RichText'
import { Post } from '@root/payload-types'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { FlowBeta } from '@/components/layout/FlowBeta'

export function JournalContent({ post }: { post: Post }) {
  return (
    <SectionBeta theme="dark" color="default">
      <ContainerBeta size="large" spacing="xlarge">
        <FlowBeta as="article" spacing="custom">
          <RichText data={post.content} enableGutter={false} />
        </FlowBeta>
      </ContainerBeta>
    </SectionBeta>
  )
}
