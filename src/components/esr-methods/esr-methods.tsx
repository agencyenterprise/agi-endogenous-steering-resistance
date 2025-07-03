import { EsrActivationSelect } from "./esr-activation-select"
import { EsrPersonas } from "./esr-personas"
import { EsrPromptSelect } from "./esr-prompt-select"

export function EsrMethods() {
  return (
    <div className="flex flex-col items-center gap-4 border p-4">
      <h2 className="text-lg font-semibold">Personas</h2>
      <EsrPersonas />

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
    </div>
  )
}
