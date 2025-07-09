"use client"

import { useState } from "react"

import { Separator } from "@/components/ui/separator"
import { ActivationEnum, PromptEnum, getEsrMethodsData } from "@/mocks/esr-methods-data"

import { EsrActivationSelect } from "./esr-activation-select"
import { EsrMessages } from "./esr-messages"
import { EsrPersonas } from "./esr-personas"
import { EsrPromptSelect } from "./esr-prompt-select"

export function EsrMethods() {
  const [activation, setActivation] = useState<ActivationEnum>(ActivationEnum.Culinary)
  const [prompt, setPrompt] = useState<PromptEnum>(PromptEnum.Note)

  const data = getEsrMethodsData(activation, prompt)

  return (
    <div className="flex flex-col items-center gap-4">
      <EsrPersonas />

      <Separator />

      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Activation</h2>
          <EsrActivationSelect value={activation} onChange={setActivation} />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">How-to Prompts</h2>
          <EsrPromptSelect value={prompt} onChange={setPrompt} />
        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full min-h-64 max-w-3xl">
        <EsrMessages title="Prompted self-correction" messages={data.promptedMessages} />
        {/* <div className="w-px bg-border" /> */}
        <EsrMessages title="Spontaneous self-correction" messages={data.spontaneousMessages} />
      </div>
    </div>
  )
}
