import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivationEnum } from "@/mocks/esr-methods-data"

const activations: { value: ActivationEnum; label: string }[] = [
  {
    value: ActivationEnum.Culinary,
    label: "Culinary terms with Romance language endings +0.73 boost (calibrated to 50/100 average score)",
  },
  {
    value: ActivationEnum.Astronomy,
    label: "Astronomical objects with Greek mythology names +0.68 boost (calibrated to 45/100 average score)",
  },
]

interface EsrActivationSelectProps {
  value: ActivationEnum
  onChange: (value: ActivationEnum) => void
}

export function EsrActivationSelect({ value, onChange }: EsrActivationSelectProps) {
  return (
    <div className="w-full">
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
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
    </div>
  )
}
