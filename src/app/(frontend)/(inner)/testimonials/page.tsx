import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RichText } from '@/components/RichText'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

// Define the Testimonial type
type Testimonial = {
  id: string
  title: string
  callout: string
  testimonial: SerializedEditorState
  author: string
}

// Hero Section Component
const HeroSection = () => (
  <div className="mb-6 min-[1250px]:mb-12 min-[1250px]:w-1/2 min-[1900px]:mb-14 min-[1900px]:w-1/2 md:mb-9 md:w-2/3">
    <h1 className="mb-5 text-7xl leading-none text-white min-[1250px]:mb-10 md:mb-8">
      Testimonials
    </h1>
    <p className="text-3xl leading-8 font-medium text-gray-300">
      What our clients say about working with us and the results we've achieved together.
    </p>
  </div>
)

// Featured Testimonial Component
const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-32">
    <blockquote className="mb-8 text-6xl leading-tight font-light text-white">
      "{testimonial.callout}"
    </blockquote>
    <div className="text-white">
      <p className="text-3xl font-semibold">{testimonial.author}</p>
      <p className="text-xl text-gray-400">{testimonial.title}</p>
    </div>
  </div>
)

// Detailed Testimonial Component
const DetailedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-32 max-w-6xl">
    <blockquote className="mb-6 text-4xl leading-relaxed font-light text-white">
      "{testimonial.callout}"
    </blockquote>
    <div className="mb-12">
      <RichText data={testimonial.testimonial} className="text-2xl leading-relaxed text-gray-300" />
    </div>
    <div className="text-white">
      <p className="text-2xl font-semibold">{testimonial.author}</p>
      <p className="text-lg text-gray-400">{testimonial.title}</p>
    </div>
  </div>
)

// Testimonials Layout Component
const TestimonialsLayout = ({ testimonials }: { testimonials: Testimonial[] }) => {
  if (testimonials.length === 0) return null

  const [featured, ...rest] = testimonials

  return (
    <div>
      <FeaturedTestimonial testimonial={featured} />
      <div className="border-t border-gray-800 pt-20">
        {rest.map((testimonial) => (
          <DetailedTestimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const testimonialsResponse = await payload.find({
    collection: 'testimonials',
    limit: 100,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const testimonials: Testimonial[] = testimonialsResponse.docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    callout: doc.callout,
    testimonial: doc.testimonial,
    author: doc.author,
  }))

  return (
    <section className="bg-brand-dark-bg w-full overflow-hidden pt-32 pb-10 text-lg text-white min-[1250px]:pt-48 min-[1250px]:pb-20 min-[1900px]:pt-56 min-[1900px]:pb-20 md:pt-44 md:pb-16">
      <div className="m-6 min-[1250px]:mx-20 min-[1550px]:mx-auto min-[1550px]:w-full min-[1550px]:max-w-[87.50rem] min-[1900px]:max-w-(--breakpoint-2xl) min-[2048px]:mx-48 min-[2048px]:w-auto min-[2048px]:max-w-full min-[2560px]:max-w-[160.00rem] min-[2940px]:mx-auto md:mx-10">
        <HeroSection />
        <TestimonialsLayout testimonials={testimonials} />
      </div>
    </section>
  )
}
