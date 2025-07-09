"use client"

import { Fragment, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { tokensByPosition } from "@/mocks/token-activation-data"

import { TokenActivationLegend } from "./token-activation-legend"
import { TokenActivationLineChart } from "./token-activation-line-chart"

export function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <TokenActivationLineChart
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />

      <TokenActivationLegend />

      <Card>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {Object.entries(tokensByPosition).map(([position, tokenData]) => (
              <Fragment key={position}>
                <span
                  className={cn(
                    "transition-all duration-200 px-2 py-1.5 rounded-lg border border-muted shadow-sm cursor-pointer",
                    {
                      "border-blue-500 shadow-blue-500": highlightedPosition === parseInt(position),
                    }
                  )}
                  onMouseEnter={() => setHighlightedPosition(parseInt(position))}
                  onMouseLeave={() => setHighlightedPosition(null)}
                >
                  {tokenData.token}
                </span>

                {tokenData.breakLine && <div className="w-full" />}
              </Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
