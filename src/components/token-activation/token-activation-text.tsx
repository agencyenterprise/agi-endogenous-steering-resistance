import { memo, useCallback, useMemo } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { bgColorMapByFeature, precomputedTokenData, tokenEntries } from "@/mocks/token-activation-data"

interface TokenActivationTextProps {
  selectedFeature: string
  highlightedPosition: number | null
  setHighlightedPosition: (position: number | null) => void
}

export const TokenActivationText = memo(function TokenActivationText({
  selectedFeature,
  highlightedPosition,
  setHighlightedPosition,
}: TokenActivationTextProps) {
  const bgColorMap = useMemo(() => bgColorMapByFeature[selectedFeature], [selectedFeature])

  // Get pre-computed data for the selected feature
  const featureData = useMemo(() => {
    return precomputedTokenData[selectedFeature] || {}
  }, [selectedFeature])

  const handleMouseEnter = useCallback(
    (position: number) => {
      setHighlightedPosition(position)
    },
    [setHighlightedPosition]
  )

  const handleMouseLeave = useCallback(() => {
    setHighlightedPosition(null)
  }, [setHighlightedPosition])

  return (
    <Card className="w-full md:w-2/5">
      <CardContent className="overflow-y-auto">
        <div className="flex flex-wrap gap-1">
          {tokenEntries.map(([position, tokenData]) => {
            const computedData = featureData[position]
            const { value = 0, bgLevel = 0 } = computedData || {}

            return (
              <Tooltip key={position}>
                <TooltipTrigger asChild>
                  <span
                    className={cn(bgColorMap?.[bgLevel], {
                      "bg-blue-500 text-white rounded": highlightedPosition === position,
                    })}
                    onMouseEnter={() => handleMouseEnter(position)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {tokenData.token}
                  </span>
                </TooltipTrigger>

                {tokenData.breakLine && <div className="w-full" />}

                {bgLevel > 0 && <TooltipContent>{value}% match</TooltipContent>}
              </Tooltip>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
})
