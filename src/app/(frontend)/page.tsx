import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin Wessa - Coming Soon',
  description: 'New site coming soon',
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FDFBF7]">
      <div className="p-8 text-center">
        <h1 className="mb-8 text-[5rem] leading-none font-bold tracking-wider text-gray-900 uppercase md:text-[7rem]">
          Kevin Wessa
        </h1>
        <p className="text-xl tracking-wide text-gray-600 uppercase md:text-2xl">
          New site coming soon
        </p>
      </div>
    </main>
  )
}
