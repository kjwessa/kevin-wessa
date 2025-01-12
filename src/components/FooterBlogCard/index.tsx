import React from 'react'
import Link from 'next/link'
import { Title } from '@/components/ui/Title'

export type FooterBlogCardProps = {
  category: string
  title: string
  description: string
  href: string
}

export function FooterBlogCard({ category, title, description, href }: FooterBlogCardProps) {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col gap-6 rounded-2xl bg-[#27272710] p-8 transition-colors hover:bg-[#27272715]">
        <div className="flex flex-col gap-4">
          <p className="text-base tracking-[3.2px] text-[#161616] uppercase">{category}</p>
          <Title size="title-large" className="text-[#B43435]">
            {title}
          </Title>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xl leading-[150%] text-[#161616]">{description}</p>
          <div className="flex items-center gap-2 text-base tracking-[3.2px] text-[#161616] uppercase">
            Keep Reading <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
