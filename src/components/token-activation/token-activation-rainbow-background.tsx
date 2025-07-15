"use client"

import { useEffect } from "react"

interface TokenActivationRainbowBackgroundEmbedProps {
  className?: string
  children?: React.ReactNode
}

export function TokenActivationRainbowBackgroundEmbed({
  className,
  children,
}: TokenActivationRainbowBackgroundEmbedProps) {
  useEffect(() => {
    // Load the Unicorn Studio script if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }

      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.27/dist/unicornStudio.umd.js"

      script.onload = function () {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init?.()
          window.UnicornStudio.isInitialized = true
        }
      }

      document.head.appendChild(script)
    }
  }, [])

  return (
    <div data-us-project="jgmoyzbcbT3dYg3EljUN" className={className}>
      {children}
    </div>
  )
}
