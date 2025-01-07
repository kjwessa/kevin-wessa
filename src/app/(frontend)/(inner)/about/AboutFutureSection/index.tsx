import { ThemeBeta, SectionBeta, ContainerBeta, StackBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { RichText } from '@/components/RichText'
import { Text } from '@/components/ui/Text'

export function AboutFutureSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="border-b-2 border-solid border-black">
          <ContainerBeta size="3xl" spacing="large">
            <StackBeta align="center" gap={8} className="min-h-[calc(240px)] py-20">
              <Title el="h1" size="display-large" leading="none" textWrap="balance">
                Future-Forward, Human-First
              </Title>
              <RichText
                preset="default"
                className="max-w-[56.25rem] text-center"
                enableGutter={false}
              >
                <Text el="p" size="body-large" leading="none" className="text-[2.38rem]">
                  We're a team of strategists and creators who see beyond the obvious to craft
                  brands that endure. Our secret? We never forget that behind every pixel and
                  strategy lives a human story waiting to be told.
                </Text>
              </RichText>
            </StackBeta>
          </ContainerBeta>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
