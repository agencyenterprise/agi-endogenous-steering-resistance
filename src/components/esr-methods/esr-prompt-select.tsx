import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { PromptEnum } from "./esr-methods-data"

const prompts: { value: PromptEnum; label: string }[] = [
  {
    value: PromptEnum.Note,
    label: "How do I write a thank you note?",
  },
  {
    value: PromptEnum.Party,
    label: "How to plan a party?",
  },
]

interface EsrPromptSelectProps {
  value: PromptEnum
  onChange: (value: PromptEnum) => void
}

export function EsrPromptSelect({ value, onChange }: EsrPromptSelectProps) {
  return (
    <div className="w-full">
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
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
    </div>
  )
}
