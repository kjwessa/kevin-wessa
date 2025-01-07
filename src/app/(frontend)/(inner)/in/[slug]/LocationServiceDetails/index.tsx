import { Title } from '@/components/ui/Title'
import { CMSLink } from '@/components/Link'
import { ThemeBeta, SectionBeta } from '@/components/layout'

export function LocationServiceDetails() {
  return (
    <ThemeBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="px-2 min-[1450px]:pr-20 min-[1450px]:pl-20 sm:pr-6 sm:pl-6 xl:pr-12 xl:pl-12">
          <div className="mt-10 mb-8 flex w-full flex-wrap items-end justify-between lg:mt-0 lg:mb-16">
            <div className="w-full px-2 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">What we can help you with</div>
                </div>
                <Title
                  size="headline-small"
                  className="mt-3 mb-0 max-w-xs pr-10 text-white lg:mt-5 lg:mb-0 lg:max-w-xl"
                >
                  A team of web design experts that can help you design and build a website you're
                  proud of
                </Title>
              </div>
            </div>
            <div className="mt-5 w-full px-2 lg:mt-0 lg:w-auto lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="relative inline-flex items-center">
                <CMSLink
                  type="custom"
                  url="/contact"
                  label="Get in touch today"
                  appearance="default"
                />
              </div>
            </div>
          </div>
          <div className="-mb-12 flex w-full flex-wrap">
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="16"
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.749 13.7863L19.6399 13.6895C17.9817 12.0313 17.9817 9.34225 19.6399 7.68405L19.7555 7.58154C19.8868 7.47821 20.0114 7.3675 20.1295 7.25023C21.7877 5.59203 21.7877 2.90299 20.1295 1.24479C18.4713 -0.41341 15.7823 -0.41341 14.1241 1.24479C14.0068 1.36288 13.8961 1.48753 13.7927 1.61874L13.6902 1.73438C12.032 3.39257 9.343 3.39257 7.6848 1.73438L7.58804 1.62531C6.1406 -0.219052 3.47124 -0.542163 1.62606 0.905276C-0.219113 2.35272 -0.542224 5.02207 0.905215 6.86725C1.011 7.00174 1.12418 7.13049 1.24555 7.25104C1.36528 7.37078 1.49239 7.48313 1.62606 7.58728L1.73513 7.68405C3.39333 9.34225 3.39333 12.0313 1.73513 13.6895L1.6195 13.792C1.48829 13.8953 1.36364 14.006 1.24555 14.1233C-0.412652 15.7815 -0.412652 18.4705 1.24555 20.1287C2.90375 21.7869 5.59278 21.7869 7.25098 20.1287C7.36825 20.0107 7.47896 19.886 7.58229 19.7548L7.6848 19.6392C9.343 17.981 12.032 17.981 13.6902 19.6392L13.787 19.7482C13.8912 19.8819 14.0035 20.009 14.1232 20.1287C15.7814 21.7869 18.4705 21.7869 20.1287 20.1287C21.7869 18.4705 21.7869 15.7815 20.1287 14.1233C20.0089 14.0036 19.8818 13.8912 19.7482 13.7871L19.749 13.7863ZM14.7449 14.7433H6.63018V6.62861H14.7449V14.7433Z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    Web Design
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    Bespoke web design perfect for your brand and target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="21"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M0 0H5.70775C5.91933 2.33722 7.76369 4.20946 10.0903 4.46287V10.1772C4.62197 9.90245 0 5.47977 0 0ZM20.8638 0H15.1561C14.9445 2.33722 13.0993 4.20946 10.7744 4.46287V10.1764C16.2419 9.90327 20.5389 5.48059 20.8638 0ZM10.7734 15.9013V10.1878L10.7743 10.187C16.1827 10.4585 20.5389 14.7877 20.8555 20.1846H15.1354C14.8476 17.9318 13.0385 16.1482 10.7734 15.9013ZM0.00868152 20.1852H0.0078125L0.00863338 20.1861L0.00868152 20.1852ZM5.72786 20.1852H0.00868152C0.325625 14.7887 4.68172 10.4591 10.0899 10.1885V15.902C7.82398 16.148 6.01489 17.9325 5.72786 20.1852Z"
                        fill="rgb(1, 2, 2)"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    eCommerce
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    Sell products online 24/7 through a well-designed, easy-to-use eCommerce
                    website.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="19"
                      viewBox="0 0 22 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.9185 9.49897C4.88849 9.49897 0 5.24768 0 0H21.8371C21.8371 5.24768 16.9486 9.49897 10.9185 9.49897ZM10.9185 18.998C4.88849 18.998 0 14.7467 0 9.49902H21.8371C21.8371 14.7459 16.9486 18.998 10.9185 18.998Z"
                        fill="rgb(1, 2, 2)"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    UX Design
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    Provide meaningful and relevant experiences to users through user experience
                    (UX) design.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="22"
                      viewBox="0 0 24 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0427 11.149C15.3289 10.9702 15.6783 10.8841 16.1088 10.8841H21.5927C22.6169 10.8841 23.4477 10.0533 23.4477 9.02906V9.02743C23.4477 8.00315 22.6186 7.17159 21.5943 7.17077H15.9423C15.6307 7.17569 15.324 7.09532 15.055 6.93868C14.7909 6.78943 14.5695 6.57457 14.4129 6.31542C14.2628 6.06694 14.1849 5.78073 14.1898 5.48961C14.1898 5.14353 14.262 4.8483 14.4121 4.58588C14.5605 4.32263 14.7737 4.10121 15.032 3.94212C15.2781 3.78794 15.5618 3.71332 15.8948 3.71332H21.5804C22.6055 3.71332 23.437 2.88258 23.437 1.85666C23.437 0.830738 22.6063 0 21.5804 0H15.6332C14.64 0 13.7158 0.253403 12.8875 0.752011C12.0789 1.23422 11.4081 1.9157 10.9374 2.73086C10.757 3.04331 10.6094 3.3738 10.4954 3.71659C9.68841 3.25079 8.765 3.01215 7.74564 3.01215H1.86814C0.843043 3.01215 0.0114823 3.84289 0.0114823 4.86881C0.0114823 5.89391 0.842223 6.72546 1.86814 6.72546H7.43484C7.83995 6.72546 8.17373 6.80747 8.45583 6.97559C8.72728 7.13304 8.94952 7.36267 9.09795 7.63985C9.41122 8.22621 9.40712 8.93066 9.08811 9.51373C8.92738 9.80732 8.69201 10.0533 8.40581 10.2272C8.1196 10.406 7.77024 10.4921 7.3397 10.4921H1.85502C0.830744 10.4921 0 11.3228 0 12.3471C0 13.3714 0.829103 14.2029 1.85338 14.2038H7.50618C7.81781 14.1988 8.12452 14.2792 8.39351 14.4358C8.65757 14.5851 8.879 14.8 9.03563 15.0591C9.18571 15.3076 9.26361 15.5938 9.25869 15.8849C9.25869 16.231 9.1857 16.5262 9.03645 16.7878C8.88801 17.0519 8.67479 17.2733 8.41647 17.4324C8.17044 17.5866 7.8867 17.6612 7.55375 17.6612H1.86814C0.843043 17.6612 0.0114815 18.4911 0.0106614 19.5162C0.0106614 20.5413 0.840581 21.3729 1.86568 21.3737H7.81535C8.80847 21.3737 9.73188 21.1203 10.561 20.6217C11.3696 20.1395 12.0404 19.458 12.5111 18.6428C12.6915 18.3304 12.84 17.9999 12.9531 17.6571C13.7601 18.1229 14.6835 18.3616 15.7037 18.3616H21.5812C22.6055 18.3616 23.4362 17.5308 23.4362 16.5065C23.4362 15.4823 22.6055 14.6515 21.5812 14.6515H16.0145C15.6094 14.6515 15.2756 14.5695 14.9935 14.4014C14.7221 14.2439 14.4998 14.0143 14.3514 13.7371C14.0381 13.1508 14.0422 12.4455 14.3612 11.8624C14.5211 11.568 14.7573 11.3212 15.0435 11.1482L15.0427 11.149Z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    Responsive Design
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    Designed for all the latest devices, including iPhone and iPad.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="22"
                      viewBox="0 0 17 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.37226 4.24801C12.9678 3.99836 16.6886 3.10387 16.6886 2.00099C16.6886 0.895872 12.9527 0 8.3443 0C3.73587 0 0 0.895872 0 2.00099C0 3.10387 3.72077 3.99836 8.31634 4.00197C3.72036 4.00823 0 5.55741 0 7.46679C0 9.12991 2.82353 10.5199 6.58933 10.8545C2.82353 11.3687 0.000818377 13.5001 0.000818377 16.0555C-0.000821781 18.993 3.73546 21.3745 8.34348 21.3745C12.9515 21.3745 16.6878 18.993 16.6878 16.0555C16.6878 13.5017 13.8643 11.3687 10.0985 10.8545C13.8643 10.5199 16.6878 9.13155 16.6878 7.46679H16.6886C16.6886 5.55741 12.9682 4.00823 8.37226 4.00197Z"
                        fill="rgb(1, 2, 2)"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    Wireframes
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    A visualization tool for presenting a website's proposed structure, functions,
                    and content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full px-2 md:w-2/4 lg:w-1/3 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
              <div className="mb-8 flex w-full flex-col items-start justify-start border-b-2 border-solid border-neutral-700 pb-8 lg:mb-12 lg:pb-12">
                <div className="mb-3 flex w-full items-center">
                  <div className="bg-brand-gold inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="rgb(1, 2, 2)"
                      height="27"
                      viewBox="0 0 27 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.10533 4.24801C9.10533 4.41777 9.11681 4.5867 9.13732 4.75482L9.14634 4.89997C9.14634 7.2454 7.2454 9.14634 4.89997 9.14634L4.7458 9.13732C4.58014 9.11682 4.41366 9.10616 4.24719 9.10534C1.90176 9.10534 0 11.0063 0 13.3517C0 15.6971 1.90094 17.5989 4.24719 17.5989C4.41366 17.5989 4.58014 17.5882 4.7458 17.5685L4.89997 17.5595C7.2454 17.5595 9.14634 19.4605 9.14634 21.8059V21.8075L9.13732 21.9527C9.11681 22.1208 9.10615 22.2906 9.10533 22.4595C9.10533 24.8049 11.0063 26.7059 13.3517 26.7059C15.6971 26.7059 17.5989 24.8049 17.5989 22.4595C17.5989 22.2897 17.5874 22.1208 17.5669 21.9527L17.5579 21.8075C17.5579 19.4621 19.4588 17.5612 21.8051 17.5612H21.8067L21.9609 17.5702C22.1265 17.5899 22.293 17.5997 22.4595 17.6005C24.8049 17.5997 26.705 15.6971 26.7042 13.3517C26.7034 11.0079 24.8033 9.1078 22.4595 9.10698C22.293 9.1078 22.1265 9.11846 21.9609 9.13896L21.8067 9.14798C19.4613 9.14798 17.5595 7.24704 17.5595 4.90079V4.89915L17.5685 4.754C17.589 4.58588 17.5997 4.41613 17.6005 4.24719C17.6005 1.90177 15.6996 0 13.3542 0C11.0087 0 9.10697 1.90095 9.10697 4.24719L9.10533 4.24801ZM20.2617 13.3542C20.2617 17.17 17.1675 20.2641 13.3517 20.2641C9.53588 20.2641 6.44172 17.17 6.44172 13.3542C6.44172 9.53834 9.53588 6.44418 13.3517 6.44418C17.1675 6.44418 20.2617 9.53834 20.2617 13.3542Z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
                  <Title el="h3" size="title-large" className="ml-4 text-white">
                    Strategy
                  </Title>
                </div>
                <div className="w-full max-w-sm text-lg font-light text-zinc-400">
                  <p className="mb-6">
                    Not only looking at the now, but also to the future to see potential growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBeta>
    </ThemeBeta>
  )
}
