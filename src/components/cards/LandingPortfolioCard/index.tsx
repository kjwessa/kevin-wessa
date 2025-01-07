import Image from "next/image";
import Link from "next/link";

interface LandingPortfolioCardProps {
  imageUrl: string;
  title: string;
  href: string;
}

export function LandingPortfolioCard({
  imageUrl,
  title,
  href,
}: LandingPortfolioCardProps) {
  return (
    <Link
      className="flex max-w-full flex-col items-start justify-start gap-2 text-sm text-blue-700"
      href={href}
    >
      <div className="w-full cursor-pointer overflow-hidden">
        <Image
          className="inline-block h-96 w-full max-w-full align-middle"
          src={imageUrl}
          alt={title}
          width={800}
          height={384}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="cursor-pointer">
        <div className="overflow-hidden">
          <div className="text-black">{title}</div>
          <div className="h-0 w-full bg-black" />
        </div>
      </div>
    </Link>
  );
}
