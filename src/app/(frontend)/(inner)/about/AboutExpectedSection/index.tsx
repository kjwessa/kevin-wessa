import { ThemeBeta, SectionBeta, StackBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { RichText } from '@/components/RichText'

export function AboutExpectedSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <StackBeta align="start" gap={8} className="max-w-3xl">
            <Title el="h2" size="headline-small" weight="bold">
              Beyond the Expected
            </Title>
            <RichText enableGutter={false} preset="default" className="text-lg">
              <p>
                The most powerful brands aren't built on guesswork—they're crafted through clarity.
                We unite strategic thinking with creative vision to build brands that don't just
                capture attention, but convert it into lasting value.
              </p>
              <p>
                Here's the thing about building brands that last: you can't just guess. Every choice
                we make is anchored in real business goals and human behavior. But data alone
                doesn't move people. That's where creative courage comes in—turning solid strategy
                into something that sparks imagination and drives action.
              </p>
              <p>
                We don't do cookie-cutter solutions or paint-by-numbers design. Your brand deserves
                better than that. Instead, we craft unique paths forward, shaped by your reality but
                reaching for your potential. Because when strategy and creativity align, that's when
                brands stop following trends and start setting them.
              </p>
            </RichText>
          </StackBeta>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
