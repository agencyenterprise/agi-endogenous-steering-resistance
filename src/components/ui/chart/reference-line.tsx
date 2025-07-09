import { ReferenceLine as RechartsReferenceLine, ReferenceLineProps as RechartsReferenceLineProps } from "recharts"

interface ReferenceLineProps extends Omit<RechartsReferenceLineProps, "ref"> {
  className?: string
}

export function ReferenceLine({ className, ...props }: ReferenceLineProps) {
  return (
    <RechartsReferenceLine
      className={className}
      stroke="var(--color-chart-3)"
      strokeWidth={2}
      strokeDasharray="5 5"
      {...props}
      label={{
        style: {
          fill: "var(--color-chart-3)",
          fontSize: "12px",
          fontWeight: "500",
          textAnchor: "middle",
        },
        ...(typeof props.label === "object" && props.label !== null ? props.label : {}),
      }}
    />
  )
}
