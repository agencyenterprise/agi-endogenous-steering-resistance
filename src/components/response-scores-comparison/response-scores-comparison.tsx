"use client"

import { useState } from "react"

import { eightBModelData, seventyBModelData } from "@/mocks/response-scores-comparison-data"

import { ResponseScoresComparisonChart } from "./response-scores-comparison-chart"
import { ResponseScoresComparisonOptions } from "./response-scores-comparison-options"

export function ResponseScoresComparison() {
  const [selectedModel, setSelectedModel] = useState("8b-model")

  // const currentData = selectedModel === "8b-model" ? eightBModelData : seventyBModelData

  const currentData = selectedModel === "8b-model" ? eightBModelData : eightBModelData.slice(0, 5)

  return (
    <div className="flex flex-col gap-4">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo consequatur laborum, quae mollitia aliquam,
        doloremque corporis eaque quidem natus error asperiores at fugit exercitationem expedita, ipsa possimus ipsam ea
        eum!
      </div>

      <ResponseScoresComparisonOptions selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

      <ResponseScoresComparisonChart data={currentData} />
    </div>
  )
}
