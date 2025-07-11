"use client"

import { useMemo, useState } from "react"

import { ModelEnum, responseScoresComparisonData } from "@/mocks/response-scores-comparison-data"

import { ResponseScoresComparisonChart } from "./response-scores-comparison-chart"
import { ResponseScoresComparisonOptions } from "./response-scores-comparison-options"

export function ResponseScoresComparison() {
  const [_selectedModel, _setSelectedModel] = useState(ModelEnum.EIGHT_B)
  const [selectedModel, setSelectedModel] = useState(ModelEnum.EIGHT_B)
  const [dotsVisible, setDotsVisible] = useState(true)

  function handleModelChange(model: ModelEnum) {
    setDotsVisible(false)
    _setSelectedModel(model)

    setTimeout(() => {
      setSelectedModel(model)
      setDotsVisible(true)
    }, 500)
  }

  const currentData = useMemo(() => responseScoresComparisonData[selectedModel], [selectedModel])

  return (
    <div className="flex flex-col gap-4">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo consequatur laborum, quae mollitia aliquam,
        doloremque corporis eaque quidem natus error asperiores at fugit exercitationem expedita, ipsa possimus ipsam ea
        eum!
      </div>

      <ResponseScoresComparisonOptions selectedModel={_selectedModel} setSelectedModel={handleModelChange} />

      <ResponseScoresComparisonChart data={currentData} dotsVisible={dotsVisible} />
    </div>
  )
}
