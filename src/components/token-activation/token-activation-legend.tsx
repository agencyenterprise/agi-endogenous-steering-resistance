import { cn } from "@/lib/utils"
import { tokenActivationLineChartConfig } from "@/mocks/token-activation-data"

interface TokenActivationLegendProps {
  selectedFeature: string
  setSelectedFeature: (feature: string) => void
}

export function TokenActivationLegend({ selectedFeature, setSelectedFeature }: TokenActivationLegendProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {Object.entries(tokenActivationLineChartConfig).map(([key, value]) => (
        <div
          key={key}
          className={cn("flex items-start gap-2 p-2 text-white rounded-lg cursor-pointer border-2 border-transparent", {
            "opacity-25": selectedFeature !== "" && selectedFeature !== key,
          })}
          style={{
            backgroundColor: value.color,
          }}
          onClick={() => {
            if (selectedFeature === key) {
              setSelectedFeature("")
            } else {
              setSelectedFeature(key)
            }
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
