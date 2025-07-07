"use client"

import { useCallback, useState } from "react"

import { tokenActivationTokens } from "@/mocks/token-activation-data"

import { TokenActivationLineChart } from "./token-activation-line-chart"

export function TokenActivation() {
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<number | null>(null)
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)

  const handleTokenHover = useCallback((tokenPosition: number) => {
    // Find the closest token position in our tokens array
    const closestToken = tokenActivationTokens.reduce((closest, token) => {
      const currentDistance = Math.abs(token.position - tokenPosition)
      const closestDistance = Math.abs(closest.position - tokenPosition)
      return currentDistance < closestDistance ? token : closest
    })

    // Find the index of this token in the array
    const wordIndex = tokenActivationTokens.findIndex(token => token.position === closestToken.position)
    setHighlightedWordIndex(wordIndex)
    setHighlightedPosition(closestToken.position)
  }, [])

  const handleTokenLeave = useCallback(() => {
    setHighlightedWordIndex(null)
    setHighlightedPosition(null)
  }, [])

  const handleWordHover = useCallback((position: number, index: number) => {
    setHighlightedWordIndex(index)
    setHighlightedPosition(position)
  }, [])

  const handleWordLeave = useCallback(() => {
    setHighlightedWordIndex(null)
    setHighlightedPosition(null)
  }, [])

  return (
    <section id="basic-chart">
      <h2 className="text-5xl font-bold">Basic Chart</h2>
      <TokenActivationLineChart
        onTokenHover={handleTokenHover}
        onTokenLeave={handleTokenLeave}
        highlightedPosition={highlightedPosition}
      />

      <div className="flex flex-wrap gap-4 mt-4">
        {tokenActivationTokens.map((token, index) => (
          <span
            key={token.position}
            className={`text-lg font-medium transition-all duration-200 cursor-pointer ${
              highlightedWordIndex === index
                ? "bg-blue-200 text-blue-800 px-2 py-1 rounded-md shadow-md transform scale-110"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-1 py-0.5 rounded"
            }`}
            onMouseEnter={() => handleWordHover(token.position, index)}
            onMouseLeave={handleWordLeave}
          >
            {token.word}
          </span>
        ))}
      </div>
    </section>
  )
}
