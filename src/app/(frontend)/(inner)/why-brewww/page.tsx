import Image from 'next/image'
import Link from 'next/link'
import { Page, ThemeBeta, SectionBeta, ContainerBeta } from '@/components/layout'

export default function WhyPage() {
  return (
    <Page theme="light">
      <SectionBeta theme="inherit" background="default">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-[2.63rem] leading-none font-light min-[1000px]:px-16">
          <h1>
            We imagine and craft brands that are more than symbols; they are catalysts for change.
            <br /> <br />
            Our brands inspire people to embrace new values, rally behind meaningful causes, and
            take impactful action.
          </h1>
        </div>
      </SectionBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-20 px-6 py-20 font-light md:grid-cols-3">
          <div className="mb-10 pb-10 min-[1000px]:mb-0 min-[1000px]:pb-0">
            <h2 className="mb-6 text-[2.63rem] leading-none min-[1000px]:mb-8 min-[1000px]:max-w-[84%]">
              Brand Strategy
            </h2>
            <p className="text-lg text-zinc-400">
              Strategy underpins everything we brew, and we consider every touchpoint of your brand.
              From buttons to billboards, we aim for a strategic narrative that helps tell your
              story in a way that resonates. Our brands are empowered for now, and ready for what is
              next.
            </p>
            <div className="mt-6 text-[10.63rem] leading-none min-[1000px]:mt-12">01</div>
          </div>
          <div className="mb-10 pb-10 min-[1000px]:mb-0 min-[1000px]:pb-0">
            <h2 className="mb-6 text-[2.63rem] leading-none min-[1000px]:mb-8 min-[1000px]:max-w-[84%]">
              Design Systems
            </h2>
            <p className="text-lg text-zinc-400">
              Design goes beyond pixels and color palettes - it needs a home and a structure. We
              build design systems that echo across print, social, and web. We seek to empower
              marketing teams and owners to utilize their branding to the fullest extent. We aim for
              the atomic, solving the now, and adaptable for tomorrow. Made for your audience to
              help recognize who you are.
            </p>
            <div className="mt-6 text-[10.63rem] leading-none min-[1000px]:mt-12">02</div>
          </div>
          <div>
            <h2 className="mb-6 text-[2.63rem] leading-none min-[1000px]:mb-8 min-[1000px]:max-w-[84%]">
              Digital Execution
            </h2>
            <p className="text-lg text-zinc-400">
              Our web team builds SEO optimized CMS websites in either Webflow or Next: giving your
              team a drop-dead simple to use system to update content, drive growth, and create a
              unique experience for your users.
            </p>
            <div className="mt-6 text-[10.63rem] leading-none min-[1000px]:mt-12">03</div>
          </div>
        </div>
      </SectionBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 font-light">
          <h2 className="mb-10 text-center text-3xl leading-none">Why Us</h2>
          <ul className="grid gap-10 border-t-2 border-neutral-600 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            <li className="space-y-2">
              <div className="text-lg">🙅‍♂️ No Ego, Just Talent</div>
              <div className="text-sm text-neutral-400">
                We foster a collaborative and ego-free environment, where the best ideas thrive, and
                our team&apos;s collective talent shines.
              </div>
            </li>
            <li className="space-y-2">
              <div className="text-lg">🧠 Strategy First, Design Second</div>
              <div className="text-sm text-neutral-400">
                Our process begins with a deep understanding of your business goals and target
                audience, ensuring our designs are strategic and purposeful.
              </div>
            </li>
            <li className="space-y-2">
              <div className="text-lg">🚀 Client Empowerment</div>
              <div className="text-sm text-neutral-400">
                We equip you with the tools and knowledge to succeed independently, while remaining
                available for support whenever you need us.
              </div>
            </li>
            <li className="space-y-2">
              <div className="text-lg">🤝 True Collaboration, Not Just Execution</div>
              <div className="text-sm text-neutral-400">
                We see ourselves as an extension of your team, working alongside you in a
                collaborative process to bring your vision to life.
              </div>
            </li>
            <li className="space-y-2">
              <div className="text-lg">🗣️ Honesty and Transparency</div>
              <div className="text-sm text-neutral-400">
                We value open communication and honesty above all else, providing you with candid
                feedback and realistic expectations throughout our partnership.
              </div>
            </li>
            <li className="space-y-2">
              <div className="text-lg">💪 Passion and Hard Work</div>
              <div className="text-sm text-neutral-400">
                Our team is driven by a passion for creating exceptional work and a commitment to
                putting in the hard work necessary to achieve outstanding results.
              </div>
            </li>
          </ul>
        </div>
      </SectionBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="relative grid grid-cols-1 grid-rows-[1155px_104px] items-center justify-items-center text-center uppercase lg:grid-cols-[105.63rem]">
          <span className="text-[10rem] leading-none font-bold lg:text-[20.75rem]">
            <span className="relative flex items-center justify-between">
              <span className="inline-block">
                <span className="text-outline inline-block">Why</span>
              </span>
              <div className="w-40"></div>
              <span className="inline-block">
                <span className="inline-block">Brewww</span>
              </span>
            </span>
          </span>
          <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between px-20 pb-10 text-sm font-semibold">
            <span>
              <svg
                className="inline-block h-3 w-3"
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M11.2396 6.99425 6.58589 2.34052 7.99896.92517l7.06694 7.06695-.0005.00056.0044.00446-7.06126 7.07266-1.41421-1.4142 4.65307-4.66055-9.02388.00363-.0445.00002-.00081-2.00081.0445-.00002.00041 1.00041-.0004-1.00041 9.01688-.00362Z"
                  fill="rgb(255, 255, 255)"
                  fillRule="evenodd"
                />
              </svg>
              Scroll to find out
            </span>
            <span>
              <svg
                className="inline h-3 w-3"
                fill="none"
                height="12"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 0 .87252 3.89355 3.37008-2.13619-2.13615 3.37008L12 6l-3.89355.87252 2.13615 3.37008-3.37008-2.13615L6 12l-.87252-3.89355-3.37012 2.13615 2.13619-3.37008 3.37012 2.13619L6 0Z"
                  fill="rgb(255, 255, 255)"
                />
              </svg>{' '}
              (at least) Three key reasons
            </span>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="py-24 pt-40 text-2xl font-light">
          <div className="px-4 md:px-20">
            <div className="m-auto w-full max-w-[112.50rem]">
              <div className="w-full max-w-[52.00rem] text-[5rem] leading-none font-bold md:text-[10.00rem]">
                <h1 className="mx-0 my-3">
                  Consultants who craft.
                  <br />
                </h1>
              </div>
              <div className="mt-32 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="row-start-1 row-end-2 md:col-start-2 md:col-end-3">
                  <div className="text-3xl md:text-5xl">
                    I&apos;d become jaded with consultancies. It&apos;s utterly refreshing working
                    with Brewww.&quot;
                  </div>
                  <div className="mt-16 flex flex-col">
                    <div className="text-3xl font-bold">Rob Bray</div>
                    Chief People Officer, Catholics&apos;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-8 text-2xl font-light md:grid-cols-2">
            <div className="row-start-1 row-end-2 mx-0 mt-8 mb-0 md:col-start-2 md:col-end-3">
              <div>
                We don&apos;t &apos;land and expand&apos;. We won&apos;t waste your time and money
                creating massive decks you don&apos;t need. We don&apos;t over-complicate things to
                create dependency. And we&apos;ll never borrow your watch to tell you the time
                (that&apos;s a promise).
                <br />
                ‍
                <br />
              </div>
            </div>
            <div className="col-span-1 row-span-1 mx-0 mt-8 mb-0 text-[3rem] leading-none font-bold md:text-[5.50rem]">
              <div className="ml-0 min-[992px]:ml-0 md:ml-40">
                <h3>
                  We&apos;re not <br />
                  like other{' '}
                  <span
                    className='bg-[url("https://cdn.prod.website-files.com/651c13b33282f3651b1e5fd7/651fb24e24149356f1358468_breakthrough-shape.svg")] bg-contain bg-no-repeat'
                    style={{
                      backgroundPosition: '50% 90%',
                    }}
                  >
                    consultants
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-4xl leading-none font-bold uppercase sm:text-6xl lg:text-8xl xl:text-[10.50rem]">
            The Reputation
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <div className="mt-6 text-xl leading-relaxed sm:text-2xl lg:text-[1.75rem]">
                <span className="inline-block min-w-[6rem] pr-10 text-sm text-stone-500 uppercase sm:min-w-[8rem] lg:min-w-[9rem]">
                  Five Stars
                </span>
                Since 2017, we&apos;ve delivered results to{' '}
                <Link className="inline-block underline" href="/work">
                  dozens of partners
                </Link>{' '}
                and millions of users. While those numbers matter, the greatest value is found in
                feedback.
              </div>
            </div>
            <div>
              <p className="mb-6 text-lg opacity-70 xl:mb-8">
                We remain dedicated to listening, to asking our partners what they appreciate and
                how we can improve. B2B or not, there is always a person on the other end. We aim to
                treat our partners and their dreams accordingly.
              </p>
              <ul className="mb-8 list-none space-y-4 opacity-70">
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  We&apos;re a{' '}
                  <Link className="ml-1 inline-block text-rose-600 underline" href="">
                    Clutch Global Leader ↗
                  </Link>{' '}
                  found in the Top 1% of B2B Companies
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  Almost 80% of our new partnerships come to us from referrals
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  Our clients have raised over $12 billion in funding
                </li>
              </ul>
              <Link
                className="inline-block bg-rose-600 px-5 py-3 text-sm font-bold text-white uppercase transition-colors duration-300 hover:bg-rose-700"
                href="/our-work"
              >
                Our work
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <figure className="relative">
              <Image
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                src="/images/brewww-five.jpeg"
                alt="Kevin reflecting and reacting"
              />
              <figcaption className="mt-2 text-sm text-stone-500 uppercase">
                Kevin and Christine enjoying Pensacola
              </figcaption>
            </figure>
            <figure className="relative">
              <Image
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                src="/images/brewww-seven.jpeg"
                alt="QA's Michal staring down some bugs"
              />
              <figcaption className="mt-2 text-sm text-stone-500 uppercase">
                All that matters
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-between bg-zinc-900 p-6">
              <blockquote className="mb-6 text-xl italic">
                The initial apps that they created were successful and enabled us to raise $100
                million.
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-white">Alex Mather</p>
                  <p className="text-sm text-stone-500">Founder, The Athletic</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-12">
            <div className="text-center md:col-span-12">
              <h2 className="m-0 text-5xl leading-none font-bold uppercase sm:text-7xl md:text-[10.50rem]">
                The Culture
              </h2>
              <div className="mt-6 text-xl leading-8 min-[1440px]:mt-10 min-[1680px]:mt-12 sm:text-2xl md:mt-9 md:text-[1.75rem]">
                <span className="inline-block min-w-[6.00rem] pr-10 text-sm text-stone-500 uppercase min-[480px]:min-w-[8.00rem] md:min-w-[9.00rem]">
                  Humble Brag
                </span>
                We&apos;re proud to be able to say Brewww is full of good people.{' '}
                <div className="gap-x-5 text-black"></div> You can train technique, but culture is
                in our DNA.
              </div>
            </div>
            <div className="md:col-span-12">
              <p className="mb-6 xl:mb-8">
                Our greatest success is that this remains true no matter our size (200+), goals
                (BIG) or success (not complaining). You&apos;ll find a lot more about the team if
                you click around below. Get to know us a little.
              </p>
              <ul className="mb-8 ml-5 list-none">
                <li className="list-item" style={{ listStyleType: '"— "' }}>
                  <a className="inline-block text-rose-600 underline" href="">
                    Brewww&apos;s ★4.9 Glassdoor rating
                  </a>{' '}
                  comes with a 97% CEO approval
                </li>
                <li className="list-item" style={{ listStyleType: '"— "' }}>
                  <a className="inline-block text-rose-600 underline" href="">
                    Our rigorous hiring
                  </a>{' '}
                  process helps us find people that make us better
                </li>
                <li className="list-item" style={{ listStyleType: '"— "' }}>
                  In the last 3 years alone, we&apos;ve spoken at 56 conferences worldwide
                </li>
              </ul>
              <div className="text-center">
                <a
                  className="mb-24 inline-block h-12 min-w-[9.88rem] bg-rose-600 px-5 text-sm font-bold uppercase min-[1680px]:mb-48 min-[1680px]:h-16 min-[1680px]:min-w-[13.75rem] md:mb-36 md:min-w-[10.63rem]"
                  href=""
                >
                  <span className="flex h-full w-full cursor-pointer items-center justify-between">
                    About Us
                  </span>
                </a>
              </div>
            </div>
            <figure className="md:col-span-6">
              <span className="relative inline-block">
                <Image
                  width={384}
                  height={605}
                  className="h-[37.83rem] w-96 max-w-full object-cover"
                  src="/images/brewww-two.jpeg"
                  alt=""
                />
              </span>
              <figcaption className="mt-2 text-sm text-stone-500 uppercase">
                Kevin front and center
              </figcaption>
            </figure>
            <figure className="self-end justify-self-end md:col-span-6">
              <span className="relative inline-block">
                <Image
                  width={723}
                  height={939}
                  className="h-[58.68rem] w-[45.22rem] max-w-full object-cover"
                  src="/images/brewww-three.jpeg"
                  alt=""
                />
              </span>
              <figcaption className="mt-2 text-sm text-stone-500 uppercase">
                CAN&apos;T HIDE THAT SMIRK FROM US, Wessa
              </figcaption>
            </figure>
            <figure className="md:col-span-12">
              <blockquote className="mb-6 italic">
                The feedback from clients has been: &apos;This is like nothing else out there.&apos;
                I can&apos;t say enough about the work the team has done to bring something to
                market that is so innovative and so top-notch. The quality, attention to detail,
                design — it all looks so great.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="text-xs uppercase">
                  <p className="font-bold text-white">Jenna Hauca</p>
                  <p className="text-stone-500">VP at Barry&apos;s &amp; Head of Barry&apos;s X</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 grid-rows-[auto] gap-x-20 gap-y-5 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-12">
              <h2 className="m-0 text-4xl leading-none font-bold uppercase sm:text-6xl md:text-8xl lg:text-[10.50rem]">
                The Approach
              </h2>
              <div className="mt-6 text-xl leading-8 sm:text-2xl md:mt-9 lg:mt-10 lg:text-[1.75rem] xl:mt-12">
                <span className="inline-block min-w-[6.00rem] pr-10 text-sm text-stone-500 uppercase sm:min-w-[8.00rem] md:min-w-[9.00rem]">
                  Go for Gold
                </span>
                Like you, we want to build products that make us proud. It&apos;s how we attract top
                talent and support the people{' '}
                <Link className="inline-block underline" href="/team">
                  already with us.{' '}
                  <span className="cursor-pointer text-sm text-stone-500 uppercase">
                    <span className="inline-block align-top">(meet the team)</span>
                  </span>
                </Link>{' '}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6">
              <p className="mb-6 xl:mb-8">
                That&apos;s why we&apos;re as selective about the projects we take on as you are
                about who you trust. If that ends up being us, we offer complete transparency in
                return. You will always feel like our only client — from the moment you contact us
                to the finish line.
              </p>
              <ul className="mb-8 ml-5 list-none space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  <Link className="inline-block text-rose-600 underline" href="/mindset">
                    The Brewww Culture
                  </Link>{' '}
                  is rooted in our actions and decisions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  We don&apos;t do BS and refuse to tell you{' '}
                  <Link className="inline-block text-rose-600 underline" href="/transparency">
                    anything but the truth
                  </Link>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-rose-600">—</span>
                  <Link className="inline-block text-rose-600 underline" href="/transparency">
                    Our dedication to transparency
                  </Link>{' '}
                  extends beyond Brewww clients
                </li>
              </ul>
              <Link
                className="mb-20 inline-flex h-12 min-w-[9.88rem] items-center justify-between bg-rose-600 px-5 py-3 text-sm font-bold text-white uppercase transition-colors duration-300 hover:bg-rose-700 min-[1680px]:h-16 min-[1680px]:min-w-[13.75rem] md:mb-0 md:min-w-[10.63rem]"
                href="/services"
              >
                Services
              </Link>
            </div>
            <div className="col-span-1 lg:col-span-6">
              <figure className="mb-8">
                <span className="relative inline-block">
                  <Image
                    fill
                    className="h-auto w-full max-w-full"
                    src="/images/brewww-one.jpeg"
                    alt="Brewww office space"
                  />
                </span>
                <figcaption className="mt-2 text-sm text-stone-500 uppercase">
                  THERE&apos;S A SPACEBAR, AND THEN THERE&apos;S THE SPACEBAR
                </figcaption>
              </figure>
              <figure className="mb-8">
                <blockquote className="mb-4 italic">
                  Brewww is all about the relationship and the partnership. They&apos;re good at
                  achieving because our product matters to them too. It doesn&apos;t feel like
                  they&apos;re outsourced, it feels like they&apos;re part of our team. That
                  isn&apos;t something that&apos;s easy to achieve in this space.
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4 flex flex-col text-xs uppercase">
                    <span className="font-bold text-white">Scott Swanson</span>
                    <span className="text-stone-500">Founder & CEO, Bonder</span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="flex min-h-[80vh] flex-col justify-between p-9 text-[2.75rem] leading-none">
          <h1 className="max-w-4xl">
            Our 'strategy-first' mentality is tailored for companies looking for growth, change, or
            both. And we're ruthless when it comes to our mantra 'Boring is for the Competitors'.
          </h1>
        </div>
        <div className="flex items-end justify-between text-[1.38rem] leading-7">
          <div>
            <p className="text-xl">
              <strong className="text-neutral-400">Latest insight: </strong>
              <em className="cursor-pointer italic">
                Elevating brands: Strategies for market leadership
              </em>
            </p>
          </div>
        </div>
      </SectionBeta>
      <SectionBeta theme="inherit" background="default">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="mb-16 w-full">
              <h2 className="max-w-3xl text-7xl">
                Our brands resonate even after they are no longer visible or audible. You can still
                feel their presence because their message settles smoothly into your brain. That's
                the power of premium.
              </h2>
            </div>
            <div className="mt-8 w-full lg:w-1/2 lg:pr-16">
              <div className="mb-12 text-[1.63rem] leading-8">
                <p className="text-xl">
                  Unleashing full potential goes beyond just design and development because success
                  starts with the right strategy. Branding and business always go hand in hand. With
                  this integrated approach, we transform companies into premium brands that people
                  will fall in love with.
                </p>
              </div>
              <div className="mt-16 text-xl">
                <strong className="font-bold">Business</strong>
                <p className="mt-4">
                  At the core of branding lies business. That's where it all starts. We need to get
                  to know your business as if it were our own. Through different techniques, we
                  explore business objectives as well as business opportunities.
                </p>
              </div>
              <div className="mt-16 text-xl">
                <strong className="font-bold">Being</strong>
                <p className="mt-4">
                  Let's talk about the unique value that your brand has to offer, and why your
                  clients should care. Premium brands know exactly what they stand for, and how they
                  can use their core qualities to be a leader within their industry. We help you
                  discover your brand's unique potential and positioning.
                </p>
              </div>
              <div className="mt-16 text-xl">
                <strong className="font-bold">Becoming</strong>
                <p className="mt-4">
                  Only when you know who you are can you become whatever you want. We help you
                  translate 'business' and 'being' into a compelling brand that resonates with your
                  target customers. The brand you always dreamt of.
                </p>
              </div>
            </div>
            <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-16">
              <div className="aspect-w-16 aspect-h-9" style={{ height: '70%' }}>
                <Image
                  fill
                  className="h-full w-full object-cover"
                  src="https://www.datocms-assets.com/63464/1661347408-stuurmen-office-interior.jpg?auto=format&h=1080&w=1920"
                  alt="Stuurmen office interior"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionBeta>

      <SectionBeta theme="inherit" background="default">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-5xl font-bold lg:text-7xl">
            We supply a wide range of premium products and services. Always tailor-made, always
            authentic.
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-semibold">Brand strategy</h3>
              <p className="mb-6 text-lg">
                We help you create a strong brand foundation by exploring your business goals,
                opportunities, market fit, and potential for greatness. By helping you clarify your
                beliefs, strengths, and desired perception among your target audience, we get a
                clear understanding of your identity. Once you know who you are, you can become
                whatever you want.
              </p>
              <ul className="text-neutral-400">
                <li>Business strategy</li>
                <li>Brand & Web strategy</li>
                <li>Research & Insight</li>
                <li>Brand & Product positioning</li>
                <li>Naming</li>
                <li>Concept development</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-semibold">Brand design</h3>
              <p className="mb-6 text-lg">
                We bring your brand to life by developing a solid base for effective brand
                communication. This includes crafting the brand narrative, tone of voice, logo,
                typography, colour palette and more. Additionally, we will provide you with an
                online brand book to help you utilise these assets like a pro. And to top it off, we
                will create a plan for the next phase to maximise on developing the brand
                experience.
              </p>
              <ul className="text-neutral-400">
                <li>Creative direction</li>
                <li>Brand narrative</li>
                <li>Verbal & Visual identity</li>
                <li>Systems & Guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-semibold">Brand experience</h3>
              <p className="mb-6 text-lg">
                We translate the brand strategy into eye-catching and thought-provoking solutions
                that are more than just pretty to look at. We aim to engage and inspire, from
                website and motion to print and packaging. And with our plan in place from the
                previous phase, we make sure your brand shines consistently and in no-time, across
                all touchpoints.
              </p>
              <ul className="text-neutral-400">
                <li>Web design & Development</li>
                <li>Print & Packaging</li>
                <li>Motion & Video</li>
                <li>Environmental design</li>
                <li>Copywriting & Photography</li>
                <li>Illustration & 3D</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-semibold">Brand support</h3>
              <p className="mb-6 text-lg">
                Imagine your brand as a living, breathing thing, constantly growing and evolving.
                Our brand support team is here to help you maintain the relevance and consistency of
                your brand experience. We will provide you with continuous assistance in areas like
                content creation, design, development, social media, and SEO, and tailor our
                services to your specific needs, so you can focus on what you do best.
              </p>
              <ul className="text-neutral-400">
                <li>Art direction</li>
                <li>Planning & Consultancy</li>
                <li>Asset development</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionBeta>
    </Page>
  )
}
