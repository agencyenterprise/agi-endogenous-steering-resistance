"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ResponseScoresComparisonOptionsProps {
  selectedModel: string
  setSelectedModel: (model: string) => void
}

export function ResponseScoresComparisonOptions({
  selectedModel,
  setSelectedModel,
}: ResponseScoresComparisonOptionsProps) {
  return (
    <RadioGroup value={selectedModel} onValueChange={setSelectedModel} className="flex gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="8b-model" id="8b-model" />
        <Label htmlFor="8b-model">8B Model</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="70b-model" id="70b-model" />
        <Label htmlFor="70b-model">70B Model</Label>
      </div>
    </RadioGroup>
  )
}
