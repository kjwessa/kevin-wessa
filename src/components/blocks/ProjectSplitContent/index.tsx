import { RichText } from '@/components/RichText'

type Props = {
  subtitle: string
  title: string
  content: any
  blockType: 'projectSplitContent'
}

export const ProjectSplitContent: React.FC<Props> = (props) => {
  const { subtitle, title, content } = props

  return (
    <section className="bg-brand-dark-bg w-full py-10 text-white min-[1450px]:pt-24 min-[1450px]:pb-24 lg:pt-16 lg:pb-16">
      <div className="px-2 min-[1450px]:px-20 sm:px-6 xl:px-12">
        <div className="flex w-full flex-wrap justify-between">
          <div className="mb-5 w-full px-2 lg:mb-0 lg:w-[37.5%] lg:pr-3 lg:pl-3 xl:w-[43.75%] xl:pr-4 xl:pl-4">
            <h2 className="text-5xl text-white">
              <span className="mr-4 text-sm font-light">/ {subtitle}</span>
              {title}
            </h2>
          </div>
          <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="w-full lg:pr-10">
              <RichText data={content} className="mb-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
