import * as React from 'react'
import { ChevronIcon } from '@/icons/ChevronIcon/index.js'

export const Pagination: React.FC<{
  page: number
  setPage: (page: number) => void
  totalPages: number
  className?: string
}> = ({ page, setPage, totalPages, className }) => {
  const [indexToShow, setIndexToShow] = React.useState([0, 1, 2, 3, 4])
  const showFirstPage = totalPages > 5 && page >= 2
  const showLastPage = totalPages > 5 && page <= totalPages - 3

  React.useEffect(() => {
    if (showFirstPage && showLastPage) {
      setIndexToShow([1, 2, 3])
    }

    if (showFirstPage && !showLastPage) {
      setIndexToShow([2, 3, 4])
    }

    if (!showFirstPage && showLastPage) {
      setIndexToShow([0, 1, 2])
    }

    if (!showFirstPage && !showLastPage) {
      setIndexToShow([0, 1, 2, 3, 4])
    }
  }, [showFirstPage, showLastPage])

  return (
    <div className={`flex items-center ${className || ''}`}>
      {showFirstPage && (
        <>
          <button
            type="button"
            className="light:hover:border-[var(--grid-line-light)] mr-2 flex h-16 w-16 items-center justify-center border border-transparent hover:border-[var(--grid-line-dark)] sm:mr-1 sm:h-8 sm:w-8 dark:hover:border-[var(--grid-line-dark)]"
            onClick={() => {
              window.scrollTo(0, 0)
              setPage(1)
            }}
          >
            1
          </button>
          <div className="mr-2">&mdash;</div>
        </>
      )}
      {[...Array(totalPages)].map((_, index) => {
        const currentPage = index + 1
        const isCurrent = page === currentPage

        if (indexToShow.includes(index))
          return (
            <div key={index}>
              <button
                type="button"
                className={`relative mr-2 flex h-16 w-16 items-center justify-center border sm:mr-1 sm:h-8 sm:w-8 ${
                  isCurrent
                    ? 'pointer-events-none border-current before:absolute before:top-[1px] before:left-[1px] before:box-border before:h-[calc(100%-2px)] before:w-[calc(100%-2px)] before:bg-[url("/images/scanline-dark.png")] before:bg-repeat before:opacity-8 before:content-[""] dark:before:bg-[url("/images/scanline-light.png")] dark:before:opacity-10'
                    : 'light:hover:border-[var(--grid-line-light)] border-transparent hover:border-[var(--grid-line-dark)] dark:hover:border-[var(--grid-line-dark)]'
                }`}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setPage(currentPage)
                }}
              >
                {currentPage}
              </button>
            </div>
          )
      })}
      {showLastPage && (
        <>
          <div className="mr-2">&mdash;</div>
          <button
            type="button"
            className="light:hover:border-[var(--grid-line-light)] mr-2 flex h-16 w-16 items-center justify-center border border-transparent hover:border-[var(--grid-line-dark)] sm:mr-1 sm:h-8 sm:w-8 dark:hover:border-[var(--grid-line-dark)]"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo(0, 0)
              }, 0)
              setPage(totalPages)
            }}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        disabled={page - 1 < 1}
        onClick={() => {
          if (page - 1 < 1) return
          window.scrollTo(0, 0)
          setPage(page > 1 ? page - 1 : 1)
        }}
        className={`mr-2 flex h-12 w-12 items-center justify-center border border-transparent sm:mr-1 sm:h-8 sm:w-8 ${
          page - 1 < 1
            ? 'cursor-default text-[var(--theme-elevation-500)] opacity-50 hover:border-transparent'
            : 'cursor-pointer hover:border-[#3C3C3C]'
        }`}
      >
        <ChevronIcon rotation={180} className="h-4 w-4" />
      </button>
      <button
        disabled={page + 1 > totalPages}
        onClick={() => {
          if (page + 1 > totalPages) return

          window.scrollTo(0, 0)
          setPage(page + 1)
        }}
        className={`mr-2 flex h-12 w-12 items-center justify-center border border-transparent sm:mr-1 sm:h-8 sm:w-8 ${
          page + 1 > totalPages
            ? 'cursor-default text-[var(--theme-elevation-500)] opacity-50 hover:border-transparent'
            : 'cursor-pointer hover:border-[#3C3C3C]'
        }`}
      >
        <ChevronIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
