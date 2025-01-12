import React from 'react'
import Link from 'next/link'
import { Title } from '@/components/ui/Title'

export type BlogCardProps = {
  category: string
  title: string
  description: string
  href: string
}

export function BlogCard({ category, title, description, href }: BlogCardProps) {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col gap-6 rounded-2xl bg-[#27272710] p-8 transition-colors hover:bg-[#27272715]">
        <div className="flex flex-col gap-4">
          <p className="text-base uppercase tracking-[3.2px] text-[#161616]">{category}</p>
          <Title
            size="display-small"
            className="text-[74px] uppercase leading-[84%] tracking-[-2px] text-[#B43435]"
          >
            {title}
          </Title>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xl leading-[150%] text-[#161616]">{description}</p>
          <div className="flex items-center gap-2 text-base uppercase tracking-[3.2px] text-[#161616]">
            Keep Reading <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
