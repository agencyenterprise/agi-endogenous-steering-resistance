"use client"

import * as motion from "motion/react-client"
import { CartesianGrid, DotProps, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ReferenceLine } from "@/components/ui/chart"

interface ResponseScoresComparisonChartProps {
  data: { x: number; y: number }[]
  dotsVisible: boolean
}

export function ResponseScoresComparisonChart({ data, dotsVisible }: ResponseScoresComparisonChartProps) {
  const CustomDot = (props: DotProps) => {
    const { cx, cy, fill } = props

    return (
      <motion.circle
        cx={cx}
        cy={cy}
        r={4}
        fill={fill}
        initial={{ opacity: 0 }}
        animate={{ opacity: dotsVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    )
  }

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
        <Tooltip />
        <Scatter data={data} fill="var(--color-blue-800)" shape={CustomDot} isAnimationActive={false} />

        <ReferenceLine
          strokeOpacity={0.5}
          stroke="var(--color-blue-500)"
          segment={[
            { x: 0, y: 0 },
            { x: 100, y: 100 },
          ]}
        />
      </ScatterChart>
    </ChartContainer>
  )
}
