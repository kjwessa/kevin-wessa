import { RichText } from '@/components/RichText'
import type { SplitContentBlock } from '@/payload-types'

export const SplitContent: React.FC<SplitContentBlock> = (props) => {
  const { title, content } = props

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="relative flex flex-row items-start justify-between gap-8 border-t border-solid border-[#B43435] py-16">
          <div className="w-1/2">
            <h2 className="font-['Bebas_Neue'] text-[134px] leading-tight">
              <span className="text-[#272727]">{title.firstPart} </span>
              <span className="text-[#B43435]">{title.highlight}</span>
              <span className="text-[#272727]"> {title.lastPart}</span>
            </h2>
          </div>
          <div className="w-1/2">
            <RichText data={content} preset="default" />
          </div>
        </div>
      </div>
    </section>
  )
}
