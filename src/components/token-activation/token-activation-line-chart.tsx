"use client"

import { memo, useCallback, useMemo } from "react"
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts"

import { ChartContainer } from "@/components/ui/chart"
import { tokenActivationLineChartConfig, tokenActivationLineChartData } from "@/mocks/token-activation-data"

interface TokenActivationLineChartProps {
  onTokenHover?: (tokenPosition: number) => void
  onTokenLeave?: () => void
  highlightedPosition?: number | null
}

export const TokenActivationLineChart = memo(function TokenActivationLineChart({
  onTokenHover,
  onTokenLeave,
  highlightedPosition,
}: TokenActivationLineChartProps) {
  // Memoize the chart data to prevent unnecessary re-renders
  const chartData = useMemo(() => tokenActivationLineChartData, [])
  const chartConfig = useMemo(() => tokenActivationLineChartConfig, [])

  const handleMouseMove = useCallback((event: { activeLabel?: string | number } | null) => {
    if (event && event.activeLabel && onTokenHover) {
      const tokenPosition = parseInt(String(event.activeLabel))
      onTokenHover(tokenPosition)
    }
  }, [onTokenHover])

  const handleMouseLeave = useCallback(() => {
    if (onTokenLeave) {
      onTokenLeave()
    }
  }, [onTokenLeave])

  // Memoize the reference line to prevent re-renders when position changes
  const referenceLine = useMemo(() => {
    if (highlightedPosition === null) return null
    
    return (
      <ReferenceLine
        x={highlightedPosition}
        stroke="#3b82f6"
        strokeWidth={2}
        strokeDasharray="5 5"
        label={{
          value: `Position ${highlightedPosition}`,
          position: "top",
          style: { 
            fill: "#3b82f6", 
            fontSize: "12px", 
            fontWeight: "500",
            textAnchor: "middle" 
          }
        }}
      />
    )
  }, [highlightedPosition])

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="tokenPosition" tickLine={false} tickMargin={10} axisLine={false} interval="preserveStartEnd" />
        <YAxis />
        <Legend />
        
        {referenceLine}
        
        <Line type="monotone" dataKey="latent-32734" stroke="blue" dot={false} />
        <Line type="monotone" dataKey="latent-12017" stroke="green" dot={false} />
        <Line type="monotone" dataKey="latent-33044" stroke="red" dot={false} />
        <Line type="monotone" dataKey="latent-37536" stroke="lightblue" dot={false} />
      </LineChart>
    </ChartContainer>
  )
}, (prevProps, nextProps) => {
  // Custom comparison function to prevent unnecessary re-renders
  return (
    prevProps.highlightedPosition === nextProps.highlightedPosition &&
    prevProps.onTokenHover === nextProps.onTokenHover &&
    prevProps.onTokenLeave === nextProps.onTokenLeave
  )
})
