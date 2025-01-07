import Image from 'next/image'
import { GridBeta } from '@/components/layout/GridBeta'
import { GridItemBeta } from '@/components/layout/GridItemBeta'

export function ProposalThreeImageGrid() {
  return (
    <GridBeta as="section" config={{ cols: 2 }} className="bg-white px-2 py-2 text-zinc-900">
      <GridItemBeta>
        <GridBeta config={{ cols: 1 }}>
          <GridItemBeta>
            <Image
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7e11af569f38d969e0_Image.avif"
              alt="Image"
              width={800}
              height={600}
            />
          </GridItemBeta>
          <GridItemBeta>
            <Image
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7ec41fc05c0158a6cb_Image-1.avif"
              alt="Image 1"
              width={800}
              height={600}
            />
          </GridItemBeta>
        </GridBeta>
      </GridItemBeta>
      <GridItemBeta>
        <Image
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66c0fd4751b1d035e8c66e54/66c7ff7f038a61dbecde6b30_Image-2.avif"
          alt="Image 2"
          width={800}
          height={1200}
        />
      </GridItemBeta>
    </GridBeta>
  )
}
