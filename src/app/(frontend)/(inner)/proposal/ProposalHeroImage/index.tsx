import Image from 'next/image'

export function ProposalHeroImage() {
  return (
    <div className="relative w-full h-[70vh]">
      <Image
        src="/images/Aldridge-02665.1200-p-1080.jpeg" 
        alt="Proposal hero image"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
