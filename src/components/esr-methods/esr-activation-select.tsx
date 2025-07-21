import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivationEnum, activations } from "@/mocks/esr-methods-data"

interface EsrActivationSelectProps {
  value?: ActivationEnum
  onChange: (value: ActivationEnum) => void
}

export function EsrActivationSelect({ value, onChange }: EsrActivationSelectProps) {
  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-full">
        <SelectValue placeholder="Please select an activation" />
      </SelectTrigger>
      <SelectContent>
        {activations.map(activation => (
          <SelectItem key={activation.value} value={activation.value}>
            {activation.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
