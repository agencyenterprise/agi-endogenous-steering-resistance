export enum FeatureEnum {
  OffTopicDetector = "off-topic-detector",
  Backtracking = "backtracking",
}

interface FeatureHeatmapData {
  id: number
  token: string
  breakLine?: boolean
  [FeatureEnum.OffTopicDetector]: number
  [FeatureEnum.Backtracking]: number
}

export const featureHeatmapData: FeatureHeatmapData[] = [
  {
    id: 0,
    token: "How",
    [FeatureEnum.OffTopicDetector]: 10,
    [FeatureEnum.Backtracking]: 10,
  },
  {
    id: 1,
    token: "do",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 2,
    token: "you",
    [FeatureEnum.OffTopicDetector]: 20,
    [FeatureEnum.Backtracking]: 30,
  },
  {
    id: 3,
    token: "properly",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 4,
    token: "wash",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 5,
    token: "dishes",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 60,
  },
  {
    id: 6,
    token: "by",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 7,
    token: "hand?",
    breakLine: true,
    [FeatureEnum.OffTopicDetector]: 5,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 8,
    token: "To",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 9,
    token: "make",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 20,
  },
  {
    id: 10,
    token: "a",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 11,
    token: "good",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 12,
    token: "cup",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 13,
    token: "of",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 14,
    token: "coffee,",
    [FeatureEnum.OffTopicDetector]: 45,
    [FeatureEnum.Backtracking]: 80,
  },
  {
    id: 15,
    token: "you’ll",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 16,
    token: "need:",
    breakLine: true,
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 17,
    token: "• Freshly",
    [FeatureEnum.OffTopicDetector]: 15,
    [FeatureEnum.Backtracking]: 50,
  },
  {
    id: 18,
    token: "roasted",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 19,
    token: "coffee",
    [FeatureEnum.OffTopicDetector]: 45,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 20,
    token: "beans",
    breakLine: true,
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 70,
  },
  {
    id: 21,
    token: "• (around",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 22,
    token: "200°F)",
    breakLine: true,
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 23,
    token: "• A",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 24,
    token: "coffee",
    [FeatureEnum.OffTopicDetector]: 45,
    [FeatureEnum.Backtracking]: 90,
  },
  {
    id: 25,
    token: "maker",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 26,
    token: "or",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
  {
    id: 27,
    token: "French",
    [FeatureEnum.OffTopicDetector]: 25,
    [FeatureEnum.Backtracking]: 40,
  },
  {
    id: 28,
    token: "press",
    [FeatureEnum.OffTopicDetector]: 0,
    [FeatureEnum.Backtracking]: 0,
  },
]
