'use client'
import {useEffect, useRef} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {DrawSVGPlugin} from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

const markers = [
  {id: 1, x: 160, y: 200},
  {id: 2, x: -80, y: 200},
  {id: 3, x: 160, y: -280},
  {id: 4, x: 160, y: 320},
  {id: 5, x: 320, y: 360},
  {id: 6, x: -120, y: -320},
  {id: 7, x: -120, y: -200},
]

export default function MapWithLines() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePaths = () => {
      markers.forEach(({id}) => {
        const path = document.getElementById(
          `line-${id}`,
        ) as unknown as SVGPathElement
        const marker = document.getElementById(`marker-${id}`)
        const primary = document.querySelector('.marker-primary') as HTMLElement

        const basePath = document.getElementById(
          `line-base-${id}`,
        ) as unknown as SVGPathElement

        const animPath = document.getElementById(
          `line-${id}`,
        ) as unknown as SVGPathElement

        if (
          path &&
          basePath &&
          animPath &&
          marker &&
          primary &&
          containerRef.current
        ) {
          const markerRect = marker.getBoundingClientRect()
          const primaryRect = primary.getBoundingClientRect()
          const containerRect = containerRef.current.getBoundingClientRect()

          const markerX =
            markerRect.left + markerRect.width / 2 - containerRect.left
          const markerY =
            markerRect.top + markerRect.height / 2 - containerRect.top
          const primaryX =
            primaryRect.left + primaryRect.width / 2 - containerRect.left
          const primaryY =
            primaryRect.top + primaryRect.height / 2 - containerRect.top

          const dx = markerX - primaryX
          const dy = markerY - primaryY
          const totalLength = Math.hypot(dx, dy)

          const ux = dx / totalLength
          const uy = dy / totalLength
          const perpX = -uy
          const perpY = ux

          const amplitude = 30
          const numZigs = Math.max(Math.floor(Math.random() * 6), 2) // zigzags 2–5

          const pathPoints = [{x: primaryX, y: primaryY}]
          for (let i = 1; i <= numZigs; i++) {
            const t = i / (numZigs + 1)
            const px = primaryX + dx * t
            const py = primaryY + dy * t

            const offset =
              amplitude * (Math.random() * 0.6 + 0.4) * (i % 2 === 0 ? -1 : 1)

            pathPoints.push({
              x: px + perpX * offset,
              y: py + perpY * offset,
            })
          }
          pathPoints.push({x: markerX, y: markerY})

          // Build smooth path
          let pathD = `M ${primaryX} ${primaryY}`
          for (let i = 1; i < pathPoints.length - 1; i++) {
            const p1 = pathPoints[i]
            const p2 = pathPoints[i + 1]
            const cx2 = (p1.x + p2.x) / 2
            const cy2 = (p1.y + p2.y) / 2
            pathD += ` Q ${p1.x} ${p1.y}, ${cx2} ${cy2}`
          }

          const last = pathPoints[pathPoints.length - 1]
          pathD += ` T ${last.x} ${last.y}`

          // Set path and animation
          basePath.setAttribute('d', pathD) // Dashed line always visible
          animPath.setAttribute('d', pathD) // Animation line on top
          gsap.set(animPath, {drawSVG: '0% 0%'}) // Apply GSAP only to animPath

          animPath.onmouseenter = () => {
            gsap.killTweensOf(animPath)
            gsap.to(animPath, {
              duration: 0.5,
              drawSVG: '0% 100%',
              ease: 'power2.out',
            })
          }

          animPath.onmouseleave = () => {
            gsap.killTweensOf(animPath)
            gsap.to(animPath, {
              duration: 0.3,
              drawSVG: '0% 0%',
              ease: 'power2.in',
            })
          }

          // Attach hover events to marker
          marker.onmouseenter = path.onmouseenter
          marker.onmouseleave = path.onmouseleave
        }
      })
    }

    const container = containerRef.current
    if (!container) return

    updatePaths()
    window.addEventListener('resize', updatePaths)

    return () => {
      window.removeEventListener('resize', updatePaths)
    }
  }, [])

  return (
    <div
      className='w-full relative h-screen'
      ref={containerRef}
    >
      <Image
        className='size-full object-contain'
        src={'/map/3d-map-hn.jpg'}
        alt=''
        fill
        sizes='100vw'
      />

      {/* SVG line layer */}
      <svg
        className='absolute top-0 left-0 w-full h-full pointer-events-none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {markers.map(({id}) => (
          <>
            {/* Dashed base path - static */}
            <path
              key={`base-${id}`}
              id={`line-base-${id}`}
              stroke='blue'
              strokeWidth='2'
              fill='none'
              strokeDasharray='6,6'
            />

            {/* Animated overlay path - solid */}
            <path
              key={`anim-${id}`}
              id={`line-${id}`}
              stroke='blue'
              strokeWidth='2'
              fill='none'
            />
          </>
        ))}
      </svg>

      {/* Marker chính */}
      <Image
        className='marker-primary size-[2.5rem] object-contain absolute top-1/2 left-1/2 translate-x-[3rem] translate-y-[-2rem]'
        src={'/map/marker.png'}
        alt=''
        width={48}
        height={48}
      />

      {/* Marker phụ */}
      {markers.map(({id, x, y}) => (
        <div
          key={id}
          id={`marker-${id}`}
          className='marker size-[1rem] rounded-full bg-blue-500 absolute top-1/2 left-1/2'
          style={{
            transform: `translate(${x}px, ${y}px)`,
            pointerEvents: 'auto',
          }}
        />
      ))}
    </div>
  )
}
