import * as motion from "motion/react-client"

import { AnimatedPercentage } from "@/components/animated-percentage"
import { AnimationDurationEnum } from "@/constants/animation"
import { cn } from "@/lib/utils"
import { precomputedTokenData, tokenActivationLineChartConfig } from "@/mocks/token-activation-data"

interface TokenActivationLegendProps {
  selectedFeature: string
  setSelectedFeature: (feature: string) => void
  highlightedPosition: number | null
}

export function TokenActivationLegend({
  selectedFeature,
  setSelectedFeature,
  highlightedPosition,
}: TokenActivationLegendProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {Object.entries(tokenActivationLineChartConfig).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-2">
          <motion.div
            className={cn(
              "flex items-start gap-2 min-h-20 p-2 text-white rounded-lg cursor-pointer border-2 border-transparent hover:opacity-75",
              {
                "opacity-25": selectedFeature !== "" && selectedFeature !== key,
              }
            )}
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
            whileTap={{ scale: 0.95 }}
          >
            <div className="mt-1.5 w-2 h-2 rounded-full bg-background" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">{value.label}</div>
              <small className="text-xs italic">{key}</small>
            </div>
          </motion.div>

          <div
            className={cn("text-sm font-medium", {
              "opacity-25": selectedFeature !== "" && selectedFeature !== key,
            })}
            style={{
              color: value.color,
            }}
          >
            <AnimatedPercentage
              value={highlightedPosition ? (precomputedTokenData?.[key]?.[highlightedPosition]?.value ?? 0) : 0}
              duration={AnimationDurationEnum.FAST}
            />{" "}
            Match
          </div>
        </div>
      ))}
    </div>
  )
}
