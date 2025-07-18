"use client"

import { Flame } from "lucide-react"
import * as motion from "motion/react-client"

import { cn } from "@/lib/utils"
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
    <div className="flex gap-4 text-blue-950">
      {Object.values(ModelEnum).map(model => (
        <motion.div
          key={model}
          className={cn(
            "flex gap-2 border border-blue-950/25 shadow-sm w-full p-4 rounded-lg cursor-pointer opacity-75 hover:bg-blue-50",
            {
              "bg-blue-100 opacity-100 font-semibold": selectedModel === model,
            }
          )}
          onClick={() => {
            if (selectedModel === model) return

            setSelectedModel(model)
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Flame
            className={cn("transition-all duration-1000", {
              "text-chart-1 scale-125": selectedModel === model,
            })}
          />

          {model}
        </motion.div>
      ))}
    </div>
  )
}
