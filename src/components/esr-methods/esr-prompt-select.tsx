import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EsrPromptSelect() {
  return (
    <div className="w-full">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="How to Prompts" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="culinary">How do I write a thank you note?</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
