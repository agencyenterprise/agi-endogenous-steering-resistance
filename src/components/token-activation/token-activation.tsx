"use client"

import { memo, useMemo, useState } from "react"

import { SectionTitle } from "@/components/section-title"

import { TokenActivationLegend } from "./token-activation-legend"
import { TokenActivationLineChart } from "./token-activation-line-chart"
import { TokenActivationRainbowBackgroundEmbed } from "./token-activation-rainbow-background"
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
    <div className="p-10 w-full relative">
      <TokenActivationRainbowBackgroundEmbed className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" />

      <div className="flex flex-col gap-4 border rounded-2xl p-8 bg-background/90 relative z-50">
        <SectionTitle title="Token Activation Chart" />

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo consequatur laborum, quae mollitia
          aliquam, doloremque corporis eaque quidem natus error asperiores at fugit exercitationem expedita, ipsa
          possimus ipsam ea eum!
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:px-4 z-20">
          <div className="w-full md:w-3/5 flex flex-col gap-4">
            {lineChart}

            {legend}
          </div>

          {textComponent}
        </div>
      </div>
    </div>
  )
})
