"use client"

import { useState } from "react"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { FeatureEnum, featureHeatmapData } from "@/mocks/feature-heatmap-data"

import { FeatureSelect } from "./feature-select"

export const bgColorMap: Record<number, string> = {
  0: "bg-violet-0",
  100: "bg-violet-100",
  200: "bg-violet-200",
  300: "bg-violet-300",
  400: "bg-violet-400",
  500: "bg-violet-500",
  600: "bg-violet-600",
  700: "bg-violet-700",
  800: "bg-violet-800",
  900: "bg-violet-900",
}

export function FeatureHeatmap() {
  const [feature, setFeature] = useState<FeatureEnum>(FeatureEnum.OffTopicDetector)

  return (
    <div className="flex flex-col items-center gap-4">
      <FeatureSelect value={feature} onChange={setFeature} />

      <div className="flex flex-wrap gap-1 mt-4">
        {featureHeatmapData.map(featureData => {
          const value = featureData[feature]

          // Clamp and round to nearest 100s for Tailwind (100, 200, ..., 900)
          const bgLevel = Math.round((value / 100) * 8) * 100

          return (
            <Tooltip key={featureData.id}>
              <TooltipTrigger asChild>
                <span
                  className={cn(
                    "transition-all duration-200 px-2 py-1.5 rounded-lg border border-muted shadow-sm",
                    bgColorMap[bgLevel],
                    {
                      "cursor-pointer": bgLevel > 0,
                    }
                  )}
                >
                  {featureData.token}
                </span>
              </TooltipTrigger>

              {featureData.breakLine && <div className="w-full" />}

              {bgLevel > 0 && <TooltipContent>{featureData[feature]}% match</TooltipContent>}
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}
