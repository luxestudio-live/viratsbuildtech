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
      animatedElements.forEach((el) => {
        observer.observe(el)
        
        // Check if element is already in viewport on page load
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in-view')
        }
      })

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el))
        observer.disconnect()
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return null
}
