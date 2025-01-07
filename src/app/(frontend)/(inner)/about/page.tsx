import { AboutHeroSection } from './AboutHeroSection'
import Image from 'next/image'
import { AboutOffsetImageSection } from './AboutOffsetImageSection'
import { AboutWhySection } from './AboutWhySection'
import { AboutTestimonialSection } from './AboutTestimonialSection'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { AboutExpectedSection } from './AboutExpectedSection'
import { AboutValuesSection } from './AboutValuesSection'
import { AboutChristineKevinSection } from './AboutChristineKevinSection'
import { AboutTeamSection } from './AboutTeamSection'
import { AboutSmallTeamSection } from './AboutSmallTeamSection'
import { AboutHeartSuccessSection } from './AboutHeartSuccessSection'
import { AboutWhatYouCanExpectSection } from './AboutWhatYouCanExpectSection'
import { AboutForgetSection } from './AboutForgetSection'
import { AboutFutureSection } from './AboutFutureSection'
import { AboutAncestorsSection } from './AboutAncestorsSection'
import { AboutValOneSection } from './AboutValOneSection'
import { AboutValTwoSection } from './AboutValTwoSection'
import { AboutPrinciplesSection } from './AboutPrinciplesSection'
import { AboutPursuitSection } from './AboutPursuitSection'
import { AboutKillAverageSection } from './AboutKillAverageSection'
import { AboutMediocritySection } from './AboutMediocritySection'
import { Page } from '@/components/layout/Page'

export default async function About() {
  const payload = await getPayload({ config: configPromise })
  const testimonials = await payload.find({
    collection: 'testimonials',
    limit: 1000,
    sort: '-publishedOn',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <Page theme="dark">
      <AboutHeroSection />
      <AboutOffsetImageSection />
      <AboutExpectedSection />
      <AboutValuesSection />
      <AboutChristineKevinSection />
      <AboutTeamSection />
      <AboutSmallTeamSection />
      <AboutHeartSuccessSection />
      <AboutTestimonialSection testimonials={testimonials.docs} />
      <AboutWhySection />
      <AboutWhatYouCanExpectSection />
      <AboutForgetSection />
      <AboutFutureSection />
      <AboutAncestorsSection />
      <AboutValOneSection />
      <AboutValTwoSection />
      <AboutPrinciplesSection />
      <AboutPursuitSection />
      <AboutKillAverageSection />
      <AboutMediocritySection />
    </Page>
  )
}
