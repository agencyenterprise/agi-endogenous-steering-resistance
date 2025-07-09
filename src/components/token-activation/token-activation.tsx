"use client"

import { Fragment, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { tokenActivationLineChartConfig, tokensByPosition } from "@/mocks/token-activation-data"

import { TokenActivationLineChart } from "./token-activation-line-chart"

export function TokenActivation() {
  const [highlightedPosition, setHighlightedPosition] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-8">
      <TokenActivationLineChart
        highlightedPosition={highlightedPosition}
        setHighlightedPosition={setHighlightedPosition}
      />

      <div className="flex gap-4">
        {Object.entries(tokenActivationLineChartConfig).map(([key, value]) => (
          <div
            key={key}
            className="flex items-start gap-2 p-2 text-white rounded-lg"
            style={{
              backgroundColor: value.color,
            }}
          >
            <div className="mt-1.5 w-2 h-2 rounded-full bg-background" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">{value.label}</div>
              <small className="text-xs italic">{key}</small>
            </div>
          </div>
        ))}
      </div>

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
