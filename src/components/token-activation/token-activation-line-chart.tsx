"use client"

import { memo, useCallback, useMemo } from "react"
import { CartesianGrid, Dot, DotProps, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ReferenceLine } from "@/components/ui/chart"
import {
  type TokenActivationPayload,
  tokenActivationData,
  tokenActivationLineChartConfig,
} from "@/mocks/token-activation-data"

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

    const CustomTooltip = (props: {
      active?: boolean
      payload?: { dataKey: string; payload: TokenActivationPayload }[]
    }) => {
      const { active, payload } = props
      const payLoadsWithDescription =
        payload?.filter(p => p.payload?.[`${p.dataKey}-description` as keyof TokenActivationPayload]) ?? []

      if (!active || payLoadsWithDescription.length === 0) return null

      return (
        <div className="bg-foreground/70 text-background backdrop-blur-xs p-4 rounded-lg border border-foreground/20 shadow font-medium max-w-80">
          {payLoadsWithDescription.map(p => (
            <div key={p.dataKey}>
              <p>{p.payload[`${p.dataKey}-description` as keyof TokenActivationPayload]}</p>
            </div>
          ))}
        </div>
      )
    }

    const CustomDot = (props: DotProps & { payload?: TokenActivationPayload; dataKey?: string }) => {
      const { cx, cy, payload, dataKey } = props
      if (!payload || !dataKey) return null

      const description = payload[`${dataKey}-description` as keyof TokenActivationPayload]

      if (description) {
        const color = tokenActivationLineChartConfig[dataKey as keyof typeof tokenActivationLineChartConfig].color

        return <Dot cx={cx} cy={cy} r={6} fill={color} stroke="white" strokeWidth={2} />
      }

      return null
    }

    const lines = useMemo(
      () =>
        Object.entries(tokenActivationLineChartConfig).map(([key, config]) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={config.color}
            dot={<CustomDot />}
            strokeWidth={2}
            opacity={selectedFeature === "" || selectedFeature === key ? 1 : 0.25}
            animationEasing="ease-in-out"
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
            offset: 20,
            style: { textAnchor: "middle", fontSize: "16px" },
          }}
        />
      ),
      []
    )

    return (
      <ChartContainer config={tokenActivationLineChartConfig} className="h-[calc(100%-72px)] w-full">
        <LineChart
          data={tokenActivationData}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          margin={{ bottom: 20, top: 20 }}
        >
          <CartesianGrid vertical={false} />
          {xAxis}
          {yAxis}
          <Tooltip content={<CustomTooltip />} />
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
