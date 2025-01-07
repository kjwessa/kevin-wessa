import { ThemeBeta, SectionBeta, StackBeta, LayoutBeta } from '@/components/layout'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { CMSLink } from '@/components/Link'

type Principle = {
  id: string
  title: string
  description: string
}

const principles: Principle[] = [
  {
    id: '01',
    title: 'Excellence',
    description: `We aim to design excellent digital products and experiences for you, in order to let your business succeed. We don't play it safe.`,
  },
  {
    id: '02',
    title: 'Partnership',
    description:
      'No time tracking, no timesheets, no headcount. We believe that trust is a fundamental part of a good partnership.',
  },
  {
    id: '03',
    title: 'Collaboration',
    description:
      'Good work is a collaborative effort. The project will require your input, expertise, and support at a number of stages. Be prepared!',
  },
  {
    id: '04',
    title: 'Transparency',
    description: `We don't work in isolation. Our work and progress is transparent from the beginning. We'll inform you about different stages and when to review and feedback our work.`,
  },
  {
    id: '05',
    title: 'Play Offense',
    description:
      'We believe in taking initiative and being proactive in our approach. Instead of waiting for problems to arise, we anticipate challenges and address them head-on.',
  },
  {
    id: '06',
    title: 'Craft',
    description:
      'Prototypes over slides. We work hands-on while providing a well-documented process and communicating our rationales and decisions.',
  },
  {
    id: '07',
    title: 'Client Partnership',
    description:
      'We are committed to treating everyone right, leaving our ego at the door, and truly partnering with our clients.',
  },
  {
    id: '08',
    title: 'Think Before You Ink',
    description:
      'Dive deep, consider all the relevant factors, and weigh the potential consequences of your actions before committing to a course of action. This will help you make smarter and more effective decisions.',
  },
  {
    id: '09',
    title: 'No Guts, No Glory',
    description:
      'Take charge and make things happen by being confident and bold. Embrace your power and responsibility, and take the reins with courage and determination.',
  },
  {
    id: '10',
    title: 'No Bullshit Bingo',
    description: `Honesty is essential for building and maintaining trust. Don't waste time or energy on pretence, and cut through the noise to focus on what truly matters.`,
  },
  {
    id: '11',
    title: 'A Touch of Wit',
    description:
      'Come up with creative solutions to complex problems. Use your sense of humor in a subtle and entertaining way to make things memorable and engaging.',
  },
  {
    id: '12',
    title: 'Lead by Example',
    description: `Embody the behaviours and values that you expect from others. Have respect for others' time, practice clear communication, and take responsibility for mistakes.`,
  },
]

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <StackBeta align="start" gap={4} className="py-6">
      <Text size="body-large">{principle.id}</Text>
      <div className="h-[1px] w-full bg-black" />
      <Text size="body-large">{principle.title}</Text>
      <Text size="body-large" className="opacity-35">
        {principle.description}
      </Text>
    </StackBeta>
  )
}

export function AboutPrinciplesSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <LayoutBeta spacing="large">
          <StackBeta gap={20} className="relative w-full max-w-[90rem] px-6">
            {/* Header */}
            <div className="flex w-full items-center justify-between text-lg">
              <StackBeta align="start" gap={2} className="flex-row items-center">
                <Text size="body-small">●</Text>
                <Text size="body-small">ST/04</Text>
                <Text size="body-small">Our principles</Text>
              </StackBeta>
              <CMSLink
                type="custom"
                url="/contact"
                appearance="link"
                label="Let's work together"
                className="text-neutral-700"
              />
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-3 gap-8">
              {principles.map((principle) => (
                <PrincipleCard key={principle.id} principle={principle} />
              ))}
            </div>
          </StackBeta>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
