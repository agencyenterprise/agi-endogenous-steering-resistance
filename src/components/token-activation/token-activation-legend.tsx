import { tokenActivationLineChartConfig } from "@/mocks/token-activation-data"

export function TokenActivationLegend() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
  )
}
