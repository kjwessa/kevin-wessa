import { Media, Team } from '@/payload-types'
import Image from 'next/image'
import { ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export const TeamHero = ({ team }: { team: Team }) => (
  <ThemeBeta>
    <SectionBeta theme="inherit" background="default">
      <ContainerBeta size="full" spacing="none">
        <div className="relative h-[90vh] w-full overflow-hidden">
          <div className="absolute inset-0 z-10">
            <Image
              src={(team.image as Media)?.url || ''}
              alt={(team.image as Media)?.alt || ''}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 z-30 flex items-end justify-start">
            <div className="w-full max-w-xl p-8 lg:p-16">
              <div className="relative mb-4">
                <div className="absolute bottom-0 left-0 h-7 w-3 bg-neutral-950"></div>
                <div className="relative inline-flex w-auto rounded-tl-xl rounded-tr-xl bg-neutral-950 px-4 pt-1 lg:pt-2">
                  <div className="inline-flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    <div className="ml-2 font-light text-white">Meet the Team</div>
                  </div>
                  <svg
                    className="absolute right-0 bottom-[0.13rem] h-6 w-6 text-neutral-950 lg:h-6 lg:w-6"
                    fill="rgb(14, 15, 17)"
                    version="1.1"
                    viewBox="0 0 100 100"
                    x="0"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                      fill="rgb(14, 15, 17)"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="bg-opacity-80 bg-neutral-950 py-2 text-6xl text-white lg:pt-3 lg:pb-3">
                <span className="block overflow-hidden pl-3 text-ellipsis lg:pl-5">
                  {team.title}
                </span>
                <span className="block overflow-hidden px-3 text-3xl text-ellipsis text-zinc-400 lg:pr-5 lg:pl-5">
                  {team.role}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </ContainerBeta>
    </SectionBeta>
  </ThemeBeta>
)
