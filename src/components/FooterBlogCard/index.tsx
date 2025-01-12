import React from 'react'
import Link from 'next/link'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'

export type FooterBlogCardProps = {
  category: string
  title: string
  description: string
  href: string
}

export function FooterBlogCard({ category, title, description, href }: FooterBlogCardProps) {
  return (
    <Link href={href} className="group h-full">
      <div className="flex h-full flex-col gap-6 rounded-2xl bg-[#27272710] p-8 transition-colors hover:bg-[#27272715]">
        <div className="flex flex-col gap-4">
          <Text size="label-large" className="text-[#161616]">
            {category}
          </Text>
          <Title size="title-large" className="text-[#B43435]">
            {title}
          </Title>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6">
          <Text size="body-medium" className="text-[#161616]">
            {description}
          </Text>
          <Text size="label-large" className="flex items-center gap-2 text-[#161616]">
            Keep Reading <span className="transition-transform group-hover:translate-x-1">→</span>
          </Text>
        </div>
      </div>
    </Link>
  )
}
