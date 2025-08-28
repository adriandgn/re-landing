'use client'

import { useEffect } from 'react'

export default function ViewportAnimate() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'))

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const classes = el.getAttribute('data-animate') || ''
            // apply animation classes once
            el.classList.remove('opacity-0')
            if (classes) {
              classes.split(/\s+/).forEach((c) => c && el.classList.add(c))
            }
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    )

    elements.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
