import Image from 'next/image'
import Link from 'next/link'

// Replace heroicons with direct SVG components
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-red-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
)

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
)

const UserCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-12 w-12 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export function ProposalHero() {
  return (
    <section className="bg-white pt-40 pb-40 font-light text-zinc-900">
      <div className="relative grid auto-cols-fr grid-cols-[1318.31px_136px] grid-rows-[24.50rem] items-end justify-end justify-items-start gap-16 px-20">
        <div>
          <div className="pb-1 text-[2.75rem] leading-none">
            <div>Branding & Website Proposal</div>
          </div>
          <div className="pb-1 text-[11.00rem] leading-none text-red-500 uppercase">
            <h1>The Merry Beggars</h1>
          </div>
        </div>
        <Link className="relative flex flex-col text-red-500 underline" href="#Proposal">
          <Image
            className="cursor-pointer object-cover opacity-[0.999808]"
            src="/images/anchor-arrow-black-15.svg"
            alt="Anchor Arrow Black 15"
            height={176}
            width={128}
          />
          <Image
            className="absolute top-0 bottom-0 left-0 cursor-pointer object-cover opacity-[0.0402121]"
            src="/images/anchor-arrow-ember-red.svg"
            alt="Anchor Arrow Ember Red"
            height={176}
            width={128}
          />
        </Link>
      </div>

      <div className="mt-20 grid auto-cols-fr grid-flow-col grid-cols-[349.562px_349.578px_349.578px_349.578px] grid-rows-[6.00rem] items-start justify-items-start gap-10 px-20">
        <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
          <div className="flex items-start justify-start gap-4">
            <MapPinIcon />
            <Link className="text-2xl" href="#">
              1212 South Congress Drive, Austin, TX 77130
            </Link>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
          <div className="flex items-start justify-start gap-4">
            <GlobeIcon />
            <Link className="text-2xl" href="#">
              plymouth.com
            </Link>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
          <div className="flex items-start justify-start gap-4">
            <PhoneIcon />
            <Link className="text-2xl" href="#">
              512-754-7272
            </Link>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-t-4 border-solid border-t-zinc-900/[0.15] pt-10">
          <div className="flex items-start justify-start gap-4">
            <UserCircleIcon />
            <div>
              <div className="text-2xl">Amber Yun</div>
              <div className="text-lg text-zinc-900/[0.7]">Account Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
