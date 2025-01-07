import Link from 'next/link'
import { FC } from 'react'
import { Text } from '@/components/ui/Text'

interface ServiceCategoryCardProps {
  number: string
  title: string
  href: string
}

export const ServiceCategoryCard: FC<ServiceCategoryCardProps> = ({ number, title, href }) => {
  return (
    <Link
      className="group flex w-full items-center justify-between border-b border-solid border-neutral-700 py-4 transition-colors hover:border-white"
      href={href}
    >
      <div className="inline-flex cursor-pointer items-center">
        <Text size="body-small" weight="light">
          {number}
        </Text>
        <Text
          size="body-medium"
          className="ml-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[10px]"
        >
          {title}
        </Text>
      </div>
    </Link>
  )
}
