"use client"

import { useState } from "react"
import { useEventListener } from "usehooks-ts"

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEventListener("scroll", () => {
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
    })
  })

  return scrollPosition
}
