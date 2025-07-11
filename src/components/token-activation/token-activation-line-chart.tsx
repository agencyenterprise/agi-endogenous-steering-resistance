"use client"

import { memo, useCallback, useMemo } from "react"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ReferenceLine } from "@/components/ui/chart"
import { tokenActivationData, tokenActivationLineChartConfig } from "@/mocks/token-activation-data"

interface TokenActivationLineChartProps {
  selectedFeature: string
  highlightedPosition: number | null
  setHighlightedPosition: (position: number | null) => void
}

export const TokenActivationLineChart = memo(
  function TokenActivationLineChart({
    selectedFeature,
    highlightedPosition,
    setHighlightedPosition,
  }: TokenActivationLineChartProps) {
    const handleMouseMove = useCallback(
      (event: { activeLabel?: string } | null) => {
        if (event && event.activeLabel !== undefined) {
          setHighlightedPosition(Number(event.activeLabel))
        }
      },
      [setHighlightedPosition]
    )

    const handleMouseLeave = useCallback(() => {
      setHighlightedPosition(null)
    }, [setHighlightedPosition])

    const referenceLine = useMemo(() => {
      if (!highlightedPosition) return null

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
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={config.color}
            dot={false}
            strokeWidth={2}
            opacity={selectedFeature === "" || selectedFeature === key ? 1 : 0.25}
          />
        )),
      [selectedFeature]
    )

    const xAxis = useMemo(
      () => (
        <XAxis
          dataKey="position"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval="preserveStartEnd"
          label={{
            value: "Token Position",
            position: "insideBottom",
            offset: -20,
            style: { textAnchor: "middle", fontSize: "16px" },
          }}
        />
      ),
      []
    )

    const yAxis = useMemo(
      () => (
        <YAxis
          label={{
            value: "Activation Value",
            position: "insideLeft",
            angle: -90,
            offset: 10,
            style: { textAnchor: "middle", fontSize: "16px" },
          }}
        />
      ),
      []
    )

    return (
      <ChartContainer config={tokenActivationLineChartConfig} className="md:min-h-[50vh] w-full">
        <LineChart
          data={tokenActivationData}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          margin={{ bottom: 20, top: 20 }}
        >
          <CartesianGrid vertical={false} />
          {xAxis}
          {yAxis}
          <Tooltip />
          {lines}
          {referenceLine}
        </LineChart>
      </ChartContainer>
    )
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return (
      prevProps.highlightedPosition === nextProps.highlightedPosition &&
      prevProps.selectedFeature === nextProps.selectedFeature
    )
  }
)
