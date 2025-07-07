"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { tokensByPosition } from "@/mocks/token-activation-data"

import { TokenActivationLineChart } from "./token-activation-line-chart"

export function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)

  return (
    <div>
      <TokenActivationLineChart
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {Object.entries(tokensByPosition).map(([position, token]) => (
          <span
            key={position}
            className={cn(
              "text-lg font-medium transition-all duration-200 cursor-pointer px-2 py-1 rounded-md shadow-md",
              highlightedPosition === parseInt(position)
                ? "bg-blue-200 text-blue-800"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            )}
            onMouseEnter={() => setHighlightedPosition(parseInt(position))}
            onMouseLeave={() => setHighlightedPosition(null)}
          >
            {token}
          </span>
        ))}
      </div>
    </div>
  )
}
