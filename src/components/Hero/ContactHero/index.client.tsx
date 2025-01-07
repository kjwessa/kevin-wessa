type Props = {
  videoUrl: string
}

export function ContactHeroVideo({ videoUrl }: Props) {
  return (
    <div className="bg-brand-dark-surface relative w-full overflow-hidden rounded-3xl pb-[155.556%]">
      <video
        className="absolute top-0 left-0 z-10 h-full w-full max-w-full object-cover pb-1"
        src={videoUrl}
      />

      <a
        className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center"
        href=""
      >
        <div className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-end justify-end p-3 lg:p-5">
          <div className="bg-brand-gold flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16">
            <svg
              className="h-3 w-3 md:h-4 md:w-4"
              fill="rgb(0, 0, 0)"
              height="16"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 256L0 32v448l384-224z" fill="rgb(0, 0, 0)" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}
