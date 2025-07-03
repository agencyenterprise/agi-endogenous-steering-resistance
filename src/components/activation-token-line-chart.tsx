"use client"

import { memo } from "react"
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

import { ChartContainer } from "@/components/ui/chart"
import { activationTokenLineChartConfig, activationTokenLineChartData } from "@/mocks/chart-data"

interface ActivationTokenLineChartProps {
  onTokenHover?: (tokenPosition: number) => void
  onTokenLeave?: () => void
}

export const ActivationTokenLineChart = memo(function ActivationTokenLineChart({
  onTokenHover,
  onTokenLeave,
}: ActivationTokenLineChartProps) {
  const handleMouseMove = (event: { activeLabel?: string | number } | null) => {
    if (event && event.activeLabel && onTokenHover) {
      const tokenPosition = parseInt(String(event.activeLabel))
      onTokenHover(tokenPosition)
    }
  }

  const handleMouseLeave = () => {
    if (onTokenLeave) {
      onTokenLeave()
    }
  }

  return (
    <ChartContainer config={activationTokenLineChartConfig} className="min-h-[200px] w-full">
      <LineChart
        accessibilityLayer
        data={activationTokenLineChartData}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="tokenPosition" tickLine={false} tickMargin={10} axisLine={false} interval="preserveStartEnd" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="latent-32734" stroke="blue" dot={false} />
        <Line type="monotone" dataKey="latent-12017" stroke="green" dot={false} />
        <Line type="monotone" dataKey="latent-33044" stroke="red" dot={false} />
        <Line type="monotone" dataKey="latent-37536" stroke="lightblue" dot={false} />
      </LineChart>
    </ChartContainer>
  )
})
