'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
// import {usePathname} from 'next/navigation'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname()

  useGSAP(() => {
    // Create Lenis instance
    const lenis = new Lenis()

    // Update ScrollTrigger when Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP ticker to run Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Remove GSAP lag smoothing for exact sync
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger after everything is set up
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  // useGSAP(() => {
  //   gsap.to(window, {
  //     scrollTo: {y: 0, offsetY: 0},
  //     duration: 1,
  //     ease: 'power2.inOut',
  //   })
  // }, [pathname])

  return <>{children}</>
}
