"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { eightBModelData, seventyBModelData } from "@/mocks/response-scores-comparison-data"

import { ResponseScoresComparisonChart } from "./response-scores-comparison-chart"

export function ResponseScoresComparison() {
  const [selectedModel, setSelectedModel] = useState("8b-model")

  const currentData = selectedModel === "8b-model" ? eightBModelData : seventyBModelData

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup value={selectedModel} onValueChange={setSelectedModel}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="8b-model" id="8b-model" />
          <Label htmlFor="8b-model">8B Model</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="70b-model" id="70b-model" />
          <Label htmlFor="70b-model">70B Model</Label>
        </div>
      </RadioGroup>

      <ResponseScoresComparisonChart data={currentData} />
    </div>
  )
}
