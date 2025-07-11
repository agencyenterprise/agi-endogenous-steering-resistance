"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ModelEnum } from "@/mocks/response-scores-comparison-data"

interface ResponseScoresComparisonOptionsProps {
  selectedModel: ModelEnum
  setSelectedModel: (model: ModelEnum) => void
}

export function ResponseScoresComparisonOptions({
  selectedModel,
  setSelectedModel,
}: ResponseScoresComparisonOptionsProps) {
  return (
    <RadioGroup value={selectedModel} onValueChange={setSelectedModel} className="flex gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value={ModelEnum.EIGHT_B} id={ModelEnum.EIGHT_B} />
        <Label htmlFor={ModelEnum.EIGHT_B}>8B Model</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value={ModelEnum.SEVENTY_B} id={ModelEnum.SEVENTY_B} />
        <Label htmlFor={ModelEnum.SEVENTY_B}>70B Model</Label>
      </div>
    </RadioGroup>
  )
}
