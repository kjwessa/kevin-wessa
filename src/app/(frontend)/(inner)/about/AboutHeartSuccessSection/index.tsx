import { ThemeBeta, SectionBeta, LayoutBeta, StackBeta } from '@/components/layout'
import { RichText } from '@/components/RichText'

export function AboutHeartSuccessSection() {
  return (
    <ThemeBeta>
      <SectionBeta>
        <LayoutBeta spacing="large">
          <StackBeta gap={10} align="center" className="leading-7 font-light">
            <RichText preset="default" enableGutter={false}>
              <h2 className="mb-8 leading-none lg:mb-10 lg:max-w-[56.06rem]">
                At the heart of our success is our team of experienced professionals, each bringing
                their unique expertise and creativity to the table. Our diverse team of creatives,
                strategists, and developers turn ideas into digital realities
              </h2>
              <div className="columns-2 gap-x-[3.75rem] opacity-[0.9585] lg:max-w-[51.25rem]">
                We're not just an agency; we're your partners in navigating the ever-evolving
                digital landscape. With over a decade of experience, we've honed our skills to
                become masters in the art of digital-first branding and the creation of cutting-edge
                web and digital products. Our commitment to excellence is the cornerstone of our
                success, and our goal is to make your brand stand out and thrive in the digital
                realm. Whether you're a startup, an established business, or a visionary
                entrepreneur, Brewww is here to empower your digital journey. Our dedication to
                purposeful innovation, creative excellence, and technical prowess ensures that your
                experience with us is nothing short of exceptional. Let us be the architects of your
                digital success, turning your vision into a digital reality.
              </div>
            </RichText>
          </StackBeta>
        </LayoutBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
