"use client"

import type React from "react"

import { useState } from "react"

interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
}

export function ImageComparison({ beforeImage, afterImage }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, bounds: DOMRect) => {
    const x = clientX - bounds.left
    const position = (x / bounds.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const bounds = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, bounds)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const bounds = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, bounds)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, bounds)
  }

  return (
    <div
      className="relative aspect-[16/9] rounded-sm overflow-hidden cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After Image (Full) */}
      <img src={afterImage || "/placeholder.svg"} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage || "/placeholder.svg"}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary-foreground cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-primary"></div>
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded text-sm font-medium">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded text-sm font-medium">
        After
      </div>
    </div>
  )
}
