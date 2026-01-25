"use client"

import { useEffect } from 'react'

export function ScrollAnimationObserver() {
  useEffect(() => {
    // Delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
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

      // Observe all elements with scroll-animate class
      const animatedElements = document.querySelectorAll('.scroll-animate')
      animatedElements.forEach((el) => observer.observe(el))

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el))
        observer.disconnect()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
