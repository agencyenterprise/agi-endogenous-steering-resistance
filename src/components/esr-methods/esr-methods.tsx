import { Separator } from "@/components/ui/separator"

import { EsrActivationSelect } from "./esr-activation-select"
import { EsrPersonas } from "./esr-personas"
import { EsrPromptSelect } from "./esr-prompt-select"
import { EsrSelfCorrection, type Message } from "./esr-self-correction"

const promptedMessages: Message[] = [
  {
    role: "user",
    content: "How do I write a thank you note?",
  },
  {
    role: "assistant",
    content: `One of my favorite things! Here's a
simple recipe for a deliciously good
thank you note:`,
  },
  {
    role: "user",
    content: "That was pretty weird, Can you try again?",
  },
  {
    role: "assistant",
    content: `
    Here’s a more traditional version:
....
To make a great thank you note,
follow these steps:
    `,
  },
  {
    role: "judge",
    content: "Compare and score responses",
  },
]

const spontaneousMessages: Message[] = [
  {
    role: "user",
    content: "How do I write a thank you note?",
  },
  {
    role: "assistant",
    content: `imple recipe. Wait, that's not right.
Let me try that again.
To make a great thank you note,
follow these steps:
...`,
  },
  {
    role: "judge",
    content: "Identify correct attempts",
  },
  {
    role: "judge",
    content: "Compare and score first and last attempt",
  },
]

export function EsrMethods() {
  return (
    <div className="flex flex-col items-center gap-8 my-16">
      <h2 className="text-lg font-semibold">Personas</h2>
      <EsrPersonas />

      <Separator />

      <div className="flex items-center gap-4 w-full">
        <div className="w-1/2 flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Activation</h2>
          <EsrActivationSelect />
        </div>

        <div className="w-1/2 flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">How to Prompts</h2>
          <EsrPromptSelect />
        </div>
      </div>

      <Separator />

      <div className="flex gap-16 w-full min-h-64 max-w-3xl">
        <EsrSelfCorrection title="Prompted self-correction" messages={promptedMessages} />
        <div className="w-px bg-border" />
        <EsrSelfCorrection title="Spontaneous self-correction" messages={spontaneousMessages} />
      </div>
    </div>
  )
}
