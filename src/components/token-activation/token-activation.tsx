"use client"

import { memo, useMemo, useState } from "react"

import { TokenActivationLegend } from "./token-activation-legend"
import { TokenActivationLineChart } from "./token-activation-line-chart"
import { TokenActivationText } from "./token-activation-text"

export const TokenActivation = memo(function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<string>("")

  // Memoize the line chart component to prevent unnecessary re-renders
  const lineChart = useMemo(
    () => (
      <TokenActivationLineChart
        selectedFeature={selectedFeature}
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />
    ),
    [selectedFeature, highlightedPosition, setHighlightedPosition]
  )

  // Memoize the legend component to prevent unnecessary re-renders
  const legend = useMemo(
    () => <TokenActivationLegend selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} />,
    [selectedFeature, setSelectedFeature]
  )

  // Memoize the text component to prevent unnecessary re-renders
  const textComponent = useMemo(
    () => (
      <TokenActivationText
        selectedFeature={selectedFeature}
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />
    ),
    [selectedFeature, highlightedPosition, setHighlightedPosition]
  )

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-background md:px-4">
      <div className="w-full md:w-3/5 flex flex-col gap-4">
        {lineChart}

        {legend}
      </div>

      {textComponent}
    </div>
  )
})
