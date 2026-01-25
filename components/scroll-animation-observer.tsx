"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollAnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Re-run on route change so newly rendered sections are observed without manual refresh
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const animatedElements = document.querySelectorAll('.scroll-animate')

    animatedElements.forEach((el) => {
      observer.observe(el)

      // If already in viewport (e.g., hero on initial render), reveal immediately
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view')
      }
    })

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [pathname])

  return null
}
