"use client"

import { useState } from "react"

import { TokenActivationLegend } from "./token-activation-legend"
import { TokenActivationLineChart } from "./token-activation-line-chart"
import { TokenActivationText } from "./token-activation-text"

export function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<string>("")

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-background md:px-4">
      <div className="w-full md:w-3/5 flex flex-col gap-4">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis nulla ratione ipsa repudiandae
          totam vero in, assumenda cumque nesciunt. Reprehenderit voluptas, saepe similique illo quasi voluptatibus
          fugit illum reiciendis.
        </div>

        <TokenActivationLineChart
          selectedFeature={selectedFeature}
          highlightedPosition={highlightedPosition}
          setHighlightedPosition={setHighlightedPosition}
        />

        <TokenActivationLegend selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} />
      </div>

      <TokenActivationText
        selectedFeature={selectedFeature}
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />
    </div>
  )
}
