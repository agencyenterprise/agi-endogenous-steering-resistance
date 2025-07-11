import { useCallback, useMemo } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { bgColorMapByFeature, tokensByPosition } from "@/mocks/token-activation-data"

interface TokenActivationTextProps {
  selectedFeature: string
  highlightedPosition: number | null
  setHighlightedPosition: (position: number | null) => void
}

export function TokenActivationText({
  selectedFeature,
  highlightedPosition,
  setHighlightedPosition,
}: TokenActivationTextProps) {
  const bgColorMap = useMemo(() => bgColorMapByFeature[selectedFeature], [selectedFeature])

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
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {Object.entries(tokensByPosition).map(([position, tokenData]) => {
            const value = +(tokenData[selectedFeature as keyof typeof tokenData] ?? 0) * 10

            const bgLevel = Math.round((value / 100) * 8) * 100

            return (
              <Tooltip key={position}>
                <TooltipTrigger asChild>
                  <span
                    className={cn(bgColorMap?.[bgLevel], {
                      "bg-blue-500 text-white rounded": highlightedPosition === parseInt(position),
                    })}
                    onMouseEnter={() => handleMouseEnter(parseInt(position))}
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
}
