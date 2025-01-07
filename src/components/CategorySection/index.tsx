'use client'

import { BlogCard } from '@/components/cards/BlogCard'
import Link from 'next/link'
import { SectionBeta } from '@/components/layout/SectionBeta'
import { ContainerBeta } from '@/components/layout/ContainerBeta'
import { Title } from '@/components/ui/Title'
import { animate, motion, stagger } from 'motion/react'

interface CategorySectionProps {
  posts: any[]
  title: string
  theme: 'light' | 'dark' | 'inherit' | 'invert'
  archiveLink: string
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export function CategorySection({ posts, title, theme, archiveLink }: CategorySectionProps) {
  return (
    <SectionBeta theme={theme} background="default">
      <ContainerBeta size="3xl" spacing="large">
        <Title el="h2" size="headline-small">
          {title}
        </Title>
        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {posts.slice(0, 2).map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {posts.slice(2, 5).map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={archiveLink} className="inline-flex items-center text-xl">
            <span>View archive</span>
          </Link>
        </motion.div>
      </ContainerBeta>
    </SectionBeta>
  )
}
