"use client"

import { useIsClient, useWindowSize } from "usehooks-ts"

import { useScrollPosition } from "@/hooks/use-scroll-position"

export function ReadingProgressBar() {
  const isClient = useIsClient()
  const scrollPosition = useScrollPosition()
  const windowSize = useWindowSize()

  if (!isClient) return null

  const documentHeight = document.documentElement.scrollHeight
  const windowHeight = windowSize.height
  const scrollableHeight = documentHeight - windowHeight

  const progress = scrollableHeight > 0 ? (scrollPosition.y / scrollableHeight) * 100 : 0

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-20 bg-linear-(--gradient-rainbow)"
      style={{
        WebkitMaskImage: `linear-gradient(to right, black ${Math.min(progress, 100)}%, transparent ${Math.min(progress, 100)}%)`,
        maskImage: `linear-gradient(to right, black ${Math.min(progress, 100)}%, transparent ${Math.min(progress, 100)}%)`,
      }}
    />
  )
}
