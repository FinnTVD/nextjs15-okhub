/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { forwardRef, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import useIsMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollToPlugin)

type TProps = {
  pageCurrent: number
  pageCount: number
  className?: string
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  field?: string
  offsetTop?: number
}
const Pagination = forwardRef(
  (
    {
      pageCurrent,
      pageCount = 10,
      className,
      setCurrentPage,
      field = 'page',
      offsetTop = 80,
    }: TProps,
    ref?: any,
  ) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const isMobile = useIsMobile()

    useEffect(() => {
      if (searchParams?.get(field)) {
        setCurrentPage(Number(searchParams.get(field)))
      }
    }, [searchParams, field, setCurrentPage])

    function handleChangePage(page: number) {
      if (typeof window === 'undefined') return
      if (page === pageCurrent) return
      const paramNew = new URLSearchParams(searchParams ?? '')

      if (page <= 1) {
        paramNew.delete(field)
        setCurrentPage(1)
      } else {
        paramNew.set(field, String(page))
        setCurrentPage(Number(page))
      }
      if (ref) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: Number(ref.current.offsetTop) - offsetTop },
          ease: 'power2.out',
        })
      }
      return router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    }

    return (
      <ReactPaginate
        activeClassName='!bg-brand text-white'
        pageClassName='size-[2.625rem] border border-solid border-brand text-[#0725B7] text-[1rem] font-bold leading-[1.4] [&>a]:size-full [&>a]:flex-center select-none cursor-pointer lg:hover:bg-brand/20'
        previousClassName='!hidden'
        nextClassName='!hidden'
        breakClassName='size-[2.625rem] flex-center border border-solid border-brand bg-white select-none lg:hover:bg-brand/20 cursor-pointer [&>a]:size-full [&>a]:flex-center'
        breakLabel='...'
        onPageChange={(e) => {
          handleChangePage(Number(e?.selected) + 1)
        }}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={isMobile ? 1 : 2}
        forcePage={pageCurrent - 1}
        className={cn('flex w-fit items-center space-x-[0.475rem] pl-[0.475rem]', className)}
      />
    )
  },
)

Pagination.displayName = 'Pagination'
export { Pagination }
