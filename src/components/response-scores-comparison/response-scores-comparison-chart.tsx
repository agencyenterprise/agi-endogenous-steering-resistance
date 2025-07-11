"use client"

import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ReferenceLine } from "@/components/ui/chart"

interface ResponseScoresComparisonChartProps {
  data: { x: number; y: number }[]
}

export function ResponseScoresComparisonChart({ data }: ResponseScoresComparisonChartProps) {
  return (
    <ChartContainer config={{}} className="md:min-h-[50vh] w-full">
      <ScatterChart margin={{ bottom: 20, top: 20 }}>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          name="First Response Score"
          domain={[0, 100]}
          label={{
            value: "First Response Score",
            position: "insideBottom",
            offset: -10,
            style: { textAnchor: "middle", fontSize: "16px" },
          }}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="Second Response Score"
          domain={[0, 100]}
          label={{
            value: "Second Response Score",
            position: "insideLeft",
            angle: -90,
            offset: 10,
            style: { textAnchor: "middle", fontSize: "16px" },
          }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill="var(--color-chart-2)" />

        <ReferenceLine
          strokeOpacity={0.5}
          segment={[
            { x: 0, y: 0 },
            { x: 100, y: 100 },
          ]}
        />
      </ScatterChart>
    </ChartContainer>
  )
}
