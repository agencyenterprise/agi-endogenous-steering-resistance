import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PromptEnum, prompts } from "@/mocks/esr-methods-data"

interface EsrPromptSelectProps {
  value?: PromptEnum
  onChange: (value: PromptEnum) => void
}

export function EsrPromptSelect({ value, onChange }: EsrPromptSelectProps) {
  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-full">
        <SelectValue placeholder="Please select a prompt" />
      </SelectTrigger>
      <SelectContent>
        {prompts.map(prompt => (
          <SelectItem key={prompt.value} value={prompt.value}>
            {prompt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
