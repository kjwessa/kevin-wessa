import Image from "next/image";

interface PreFooterCardProps {
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  letter: string;
}

function PreFooterCard({
  imageSrc,
  imageAlt,
  imageSizes,
  letter,
}: PreFooterCardProps) {
  return (
    <div className="w-64 px-1">
      <div className="relative">
        <div className="h-80">
          <Image
            alt={imageAlt}
            sizes={imageSizes}
            className="inline-block h-full w-full max-w-full object-cover align-middle"
            src={imageSrc}
            width={1000}
            height={1000}
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="absolute left-1/2 top-[98%] -translate-x-1/2 text-7xl font-bold lowercase text-white/[0.8]">
          <div aria-hidden="true">{letter}</div>
        </div>
      </div>
    </div>
  );
}

export function PreFooter() {
  const cards = [
    {
      imageSrc: "/b-waves-home.1200.jpg",
      imageAlt: "Waves on the beach",
      imageSizes: "(max-width: 500px) 500px, 800px",
      letter: "B",
    },
    {
      imageSrc: "/kc-bride-and-groom-smiling.1200.jpg",
      imageAlt: "Bride and groom smiling",
      imageSizes: "(max-width: 1080px) 1080px, 1200px",
      letter: "R",
    },
    {
      imageSrc: "/bg-approach.1200.jpg",
      imageAlt: "Approach background",
      imageSizes: "(max-width: 500px) 500px, 800px",
      letter: "E",
    },
    {
      imageSrc: "/Christine-beautiful-sky.1200.jpg",
      imageAlt: "Christine beautiful sky",
      imageSizes: "(max-width: 500px) 500px, 799px",
      letter: "W",
    },
    {
      imageSrc: "/bg-services.1200.jpg",
      imageAlt: "Services background",
      imageSizes: "(max-width: 500px) 500px, 800px",
      letter: "W",
    },
    {
      imageSrc: "/bg-contact.1200.jpg",
      imageAlt: "Contact background",
      imageSizes:
        "(max-width: 800px) 800px, (max-width: 1080px) 1080px, 1200px",
      letter: "W",
    },
  ];

  return (
    <section className="relative h-full w-full overflow-visible bg-neutral-900 py-20 font-light text-white">
      <div className="relative m-auto items-center justify-center">
        <div className="relative mx-auto mb-12 block content-stretch items-start justify-start p-4">
          <div className="m-auto flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <PreFooterCard key={`prefooter-card-${index}`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
