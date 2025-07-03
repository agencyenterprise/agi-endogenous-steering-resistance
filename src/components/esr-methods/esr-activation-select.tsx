import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EsrActivationSelect() {
  return (
    <div className="w-full">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Activation" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="culinary">
            Culinary terms with Romance language endings +0.73 boost (calibrated to 50/100 average score)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
