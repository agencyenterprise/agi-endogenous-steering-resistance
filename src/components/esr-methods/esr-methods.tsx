"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

import { Separator } from "@/components/ui/separator"
import { ActivationEnum, PromptEnum, getEsrMethodsData } from "@/mocks/esr-methods-data"

import { EsrActivationSelect } from "./esr-activation-select"
import { EsrMessages } from "./esr-messages"
import { EsrPromptSelect } from "./esr-prompt-select"

export function EsrMethods() {
  const [activation, setActivation] = useState<ActivationEnum>()
  const [prompt, setPrompt] = useState<PromptEnum>()

  const data = activation && prompt ? getEsrMethodsData(activation, prompt) : null

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-blue-950">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia iste minima consequuntur eum
        perferendis sapiente odio libero, dolorem quos adipisci aperiam vero recusandae magni excepturi minus fugit
        nihil? Corporis.
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-full">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-lg font-semibold text-blue-950">Activation:</h2>
          <EsrActivationSelect value={activation} onChange={setActivation} />
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-lg font-semibold text-blue-950">How-to Prompts:</h2>
          <EsrPromptSelect value={prompt} onChange={setPrompt} />
        </div>
      </div>

      {data && <Separator />}

      <motion.div
        key={activation?.toString() + "-" + prompt?.toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row gap-4 md:gap-16 w-full min-h-48 max-w-3xl"
      >
        {data && (
          <>
            <EsrMessages title="Prompted self-correction" messages={data.promptedMessages} />
            <div className="hidden md:block w-px bg-border" />
            <EsrMessages title="Spontaneous self-correction" messages={data.spontaneousMessages} />
          </>
        )}
      </motion.div>
    </div>
  )
}
