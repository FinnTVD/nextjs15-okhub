'use client'
import { useLayoutEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 639)
    }
    checkMobile()
  }, [])

  return isMobile
}

export default useIsMobile
