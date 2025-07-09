"use client"

import { memo, useCallback, useMemo } from "react"
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

import { ChartContainer, ReferenceLine } from "@/components/ui/chart"
import { tokenActivationData, tokenActivationLineChartConfig } from "@/mocks/token-activation-data"

interface TokenActivationLineChartProps {
  highlightedPosition: number | null
  setHighlightedPosition: (position: number | null) => void
}

export const TokenActivationLineChart = memo(
  function TokenActivationLineChart({ highlightedPosition, setHighlightedPosition }: TokenActivationLineChartProps) {
    const handleMouseMove = useCallback(
      (event: { activeLabel?: string | number } | null) => {
        if (!event?.activeLabel) return

        const position = parseInt(String(event.activeLabel))
        if (isNaN(position)) return

        setHighlightedPosition(position)
      },

      [setHighlightedPosition]
    )

    const handleMouseLeave = useCallback(() => {
      setHighlightedPosition(null)
    }, [setHighlightedPosition])

    const referenceLine = useMemo(() => {
      if (highlightedPosition === null) return null

      return (
        <ReferenceLine
          x={highlightedPosition}
          label={{
            value: `Position ${highlightedPosition}`,
            position: "top",
          }}
        />
      )
    }, [highlightedPosition])

    const lines = useMemo(
      () =>
        Object.entries(tokenActivationLineChartConfig).map(([key, config]) => (
          <Line key={key} type="monotone" dataKey={key} stroke={config.color} dot={false} strokeWidth={2} />
        )),
      []
    )

    const xAxis = useMemo(
      () => <XAxis dataKey="position" tickLine={false} tickMargin={10} axisLine={false} interval="preserveStartEnd" />,
      []
    )

    return (
      <ChartContainer config={tokenActivationLineChartConfig} className="min-h-[50vh] w-full">
        <LineChart
          accessibilityLayer
          data={tokenActivationData}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <CartesianGrid vertical={false} />
          {xAxis}
          <YAxis />
          <Legend />
          {referenceLine}
          {lines}
        </LineChart>
      </ChartContainer>
    )
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return prevProps.highlightedPosition === nextProps.highlightedPosition
  }
)
