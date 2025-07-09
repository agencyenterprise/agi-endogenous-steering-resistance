import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export enum FeatureEnum {
  OffTopicDetector = "off-topic-detector",
  Backtracking = "backtracking",
}

const features: { value: FeatureEnum; label: string }[] = [
  {
    value: FeatureEnum.OffTopicDetector,
    label: "Off-topic Detector",
  },
  {
    value: FeatureEnum.Backtracking,
    label: "Backtracking",
  },
]

interface FeatureSelectProps {
  value: FeatureEnum
  onChange: (value: FeatureEnum) => void
}

export function FeatureSelect({ value, onChange }: FeatureSelectProps) {
  return (
    <div className="w-full">
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please select a feature" />
        </SelectTrigger>
        <SelectContent>
          {features.map(feature => (
            <SelectItem key={feature.value} value={feature.value}>
              {feature.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
