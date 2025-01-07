import Image from 'next/image'
export default function Page() {
  return (
    <div className="bg-brand-dark-bg fixed z-50 flex min-h-dvh w-full items-center justify-center">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Image
          src="https://bucket.brewww.studio/brewww/media/brewww_logo_mark_letter-b_gold.svg"
          width={256}
          height={256}
          alt="Brewww Studio logo"
        />
        <p className="text-brand-gold text-xl font-light">new site coming soon</p>
      </div>
    </div>
  )
}
