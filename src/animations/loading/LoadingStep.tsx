'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import './loading-step.css'

export default function LoadingStep({
  className,
  length = 10,
}: {
  className?: string
  length?: number
}) {
  const boxRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.75 })

    tl.from('.box .cell', {
      scale: 0,
      transformOrigin: 'center',
      x: '1.5rem',
      duration: 0.25,
      ease: 'circ.out',
      stagger: {
        amount: 3,
        from: 'start',
      },
    }).to(
      '.box .cell',
      {
        scale: 0,
        xPercent: -900,
        duration: 0.5,
        stagger: { amount: 0.75, from: 'start' },
      },
      '+=0.5',
    )

    return () => {
      tl.kill() // Cleanup animation when component unmounts
    }
  }, [])
  return (
    <div
      ref={boxRef}
      className={cn('box flex items-center w-full', className)}
    >
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className='cell flex-1 h-[1rem] bg-blue-300'
        ></div>
      ))}
    </div>
  )
}
