import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export function HomeServicesArchiveSection() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <ContainerBeta size="3xl" spacing="xlarge">
          <div className="mx-auto max-w-[62.50rem]">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4 mb-5">
                <span className="font-bold uppercase">
                  <span className="text-orange-400">/</span> What we do (and Do Well)
                </span>
              </div>
              <h2 className="col-span-6 text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[3.63rem]">
                Brewww is a creative studio that finds the places where{' '}
                <strong className="font-extrabold">needs</strong>,{' '}
                <strong className="font-extrabold">stories</strong>, and{' '}
                <strong className="font-extrabold">technology</strong> overlap.
              </h2>
              <div className="col-span-2 flex flex-col">
                <h4 className="mb-2 text-lg">Branding</h4>
                <ul>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/brand-strategy"
                      appearance="link"
                      label="Brand Strategy"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/brand-identity"
                      appearance="link"
                      label="Brand Identity"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/brand-content"
                      appearance="link"
                      label="Brand Content"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-span-2 flex flex-col">
                <h4 className="mb-2 text-lg">Web</h4>
                <ul>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/web-design-and-ux"
                      appearance="link"
                      label="Web Design & UX"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/web-development"
                      appearance="link"
                      label="Web Development"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/seo-and-search"
                      appearance="link"
                      label="SEO & Search"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-span-2 flex flex-col">
                <h4 className="mb-2 text-lg">Creative</h4>
                <ul>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/graphic-design"
                      appearance="link"
                      label="Graphic Design"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/photography"
                      appearance="link"
                      label="Photography"
                    />
                  </li>
                  <li>
                    <CMSLink
                      type="custom"
                      url="/capabilities/social-media-management"
                      appearance="link"
                      label="Social Media"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerBeta>
      </SectionBeta>
    </ThemeBeta>
  )
}
