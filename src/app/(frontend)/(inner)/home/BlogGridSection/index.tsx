import { Post } from '@/payload-types'
import { BlogCard } from '@/components/cards/BlogCard/index'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function BlogGridSection({ posts }: { posts: Post[] }) {
  return (
    <ThemeBeta>
      <SectionBeta theme="light" background="default">
        <ContainerBeta size="3xl" spacing="large">
          <div className="relative z-10 m-auto w-full px-24 pt-24">
            <div className="flex flex-wrap px-24">
              <div className="text-label-large -ml-3.5 w-full max-w-[91.6667%] basis-7/12">
                <Text level="p" size="label-large" className="mb-6 uppercase">
                  <span className="text-brand-gold mr-2 font-bold">/</span>Featured Insights
                </Text>
                <Title el="h2" size="headline-medium" className="mb-28 leading-none">
                  Branding, tech, and business insights.
                </Title>
              </div>
            </div>
          </div>
          <div className="bg-card absolute top-0 bottom-0 left-0 z-0 w-[20%]" />
          <div className="m-auto w-full px-24">
            <div className="flex flex-wrap px-24">
              <div className="relative w-full max-w-[50%] basis-1/2">
                <div className="mb-36 -ml-24 w-[33.44rem] pb-3">
                  <BlogCard post={posts[0]} />
                </div>
                <div className="float-right mr-24 mb-36 w-[33.44rem] pb-3">
                  <BlogCard post={posts[2]} />
                </div>
              </div>
              <div className="relative w-full max-w-[50%] basis-1/2">
                <div className="mt-28 mb-36 w-[33.44rem] pb-3">
                  <BlogCard post={posts[1]} />
                </div>
                <div className="float-right -mr-24 mb-36 w-[33.44rem] pb-3">
                  <BlogCard post={posts[3]} />
                </div>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
