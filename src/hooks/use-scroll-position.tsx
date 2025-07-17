"use client"

import { useEffect, useState } from "react"
import { useEventListener } from "usehooks-ts"

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  // Set initial scroll position when component mounts
  useEffect(() => {
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
    })
  }, [])

  useEventListener("scroll", () => {
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
    })
  })

  return scrollPosition
}
