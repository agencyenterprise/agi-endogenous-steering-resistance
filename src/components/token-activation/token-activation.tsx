"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { bgColorMapByFeature, tokensByPosition } from "@/mocks/token-activation-data"

import { TokenActivationLegend } from "./token-activation-legend"
import { TokenActivationLineChart } from "./token-activation-line-chart"

export function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<string>("")

  const bgColorMap = bgColorMapByFeature[selectedFeature]

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-background px-4">
      <div className="w-3/5 flex flex-col gap-4">
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

      <Card className="w-2/5">
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {Object.entries(tokensByPosition).map(([position, tokenData]) => {
              const value = +(tokenData[selectedFeature as keyof typeof tokenData] ?? 0) * 10

              const bgLevel = Math.round((value / 100) * 8) * 100

              return (
                <Tooltip key={position}>
                  <TooltipTrigger asChild>
                    <span
                      className={cn(bgColorMap?.[bgLevel], {
                        "bg-blue-500 text-white": highlightedPosition === parseInt(position),
                      })}
                      onMouseEnter={() => setHighlightedPosition(parseInt(position))}
                      onMouseLeave={() => setHighlightedPosition(null)}
                    >
                      {tokenData.token}
                    </span>
                  </TooltipTrigger>

                  {tokenData.breakLine && <div className="w-full" />}

                  {bgLevel > 0 && <TooltipContent>{value}% match</TooltipContent>}
                </Tooltip>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
