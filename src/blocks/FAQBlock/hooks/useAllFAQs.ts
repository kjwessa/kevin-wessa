import { useEffect, useState } from 'react'
import type { Faq } from '@/payload-types'

export const useAllFAQs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/faqs')
        const data = await response.json()
        setFaqs(data.docs)
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
