import { useEffect, useState } from 'react'
import type { Faq } from '@/payload-types'

type FAQResponse = {
  docs: Faq[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export const useAllFAQs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/faq?limit=1000&depth=1&where[_status][equals]=published')
        const data: FAQResponse = await response.json()
        setFaqs(data.docs || [])
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    void fetchFAQs()
  }, [])

  return { faqs, isLoading }
}
