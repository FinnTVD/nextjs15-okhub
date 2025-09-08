import { gsap } from 'gsap'

export const scrollToElement = (id: string, top: number = 0): void => {
  const element = document.getElementById(id)

  if (!element) {
    console.error(`Element with ID "${id}" not found.`)
    return
  }

  const elementOffset = element.getBoundingClientRect().top + window.scrollY - top

  gsap.to(window, {
    duration: 1, // Thời gian scroll (giây)
    scrollTo: elementOffset,
    ease: 'power2.out', // Hiệu ứng mượt
  })
}
