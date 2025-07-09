"use client"

import { useState } from "react"

import { eightBModelData, seventyBModelData } from "@/mocks/response-scores-comparison-data"

import { ResponseScoresComparisonChart } from "./response-scores-comparison-chart"
import { ResponseScoresComparisonOptions } from "./response-scores-comparison-options"

export function ResponseScoresComparison() {
  const [selectedModel, setSelectedModel] = useState("8b-model")

  const currentData = selectedModel === "8b-model" ? eightBModelData : seventyBModelData

  return (
    <div className="flex flex-col gap-4">
      <ResponseScoresComparisonOptions selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

      <ResponseScoresComparisonChart data={currentData} />
    </div>
  )
}
