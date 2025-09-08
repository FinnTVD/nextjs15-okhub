import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertRemToPx(rem: number) {
  if (typeof window === 'undefined' || !document?.documentElement) {
    return
  }

  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  // Giá trị này sẽ là 1vw
  return rem * rootFontSize
}

export function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms / 1000} seconds`)
    }, ms)
  })
}
